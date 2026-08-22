# JavaScript Integration API (3D Viewer)

This document describes how to embed the **One Dollar Computer** 3D viewer and control it from an external application with JavaScript.

Both viewers (`viewer.html` and `viewer_obj.html`) expose the same global API under `window.viewerAPI` and dispatch lifecycle events.

---

## 1. Embedding

The recommended way to embed the viewer is a standard HTML `<iframe>`:

```html
<!-- Example: embed on another site -->
<iframe 
  id="boardViewer"
  src="http://localhost:8081/viewer.html" 
  width="100%" 
  height="600px" 
  style="border: none; border-radius: 12px;"
  allow="autoplay; fullscreen">
</iframe>
```

---

## 2. Lifecycle Events

The viewer dispatches a custom `viewerLoaded` event on the global `window` once the 3D model is fully downloaded, processed, and rendered.

### Listening from inside the viewer:
```javascript
window.addEventListener('viewerLoaded', () => {
  console.log("The 3D model is loaded and visible!");
});
```

### Listening from the host page:
```javascript
const iframe = document.getElementById('boardViewer');

iframe.addEventListener('load', () => {
  // The iframe loaded the HTML; now wait for the 3D scene to initialize
  iframe.contentWindow.addEventListener('viewerLoaded', () => {
    console.log("The 3D scene inside the iframe is ready!");
  });
});
```

---

## 3. API methods (`window.viewerAPI`)

Once the viewer is loaded, control it through `viewerAPI` on the global scope (`window.viewerAPI` or `iframe.contentWindow.viewerAPI`).

### `onLoad(callback)`
Runs a callback safely after the viewer is ready. If the viewer is already loaded, the callback runs immediately.

- **Parameter**: `callback` (Function)
- **Example**:
```javascript
viewerAPI.onLoad(() => {
  console.log("The API is ready!");
  viewerAPI.toggleSpin(true); // Start auto-rotation
});
```

---

### `applyTexture(kind)`
Changes how textures are shown and syncs the control-panel buttons.

- **Parameter**: `kind` (String)
  - `'both'`: Show top and bottom photos (default).
  - `'top'`: Show only the top photo.
  - `'button'`: Show only the bottom photo.
  - `'none'`: Show solid PCB colors only (original color).
- **Example**:
```javascript
// Remove photos and show the board's original color
viewerAPI.applyTexture('none');
```

---

### `setCalibration(layer, params)`
Programmatically adjust photo projection and alignment.

- **Parameters**:
  - `layer` (String): `'top'` or `'button'` (bottom).
  - `params` (Object):
    - `scale` (Number): Texture scale (e.g. `1.0`).
    - `offsetX` (Number): Horizontal offset (e.g. `0.0`).
    - `offsetY` (Number): Vertical offset (e.g. `0.0`).
    - `rotation` (Number): Rotation in degrees (`-180` to `180`).
    - `flipV` (Boolean): Flip the texture vertically (`true`/`false`).
- **Example**:
```javascript
// Small offset and scale tweaks on the top of the board
viewerAPI.setCalibration('top', {
  scale: 1.05,
  offsetX: 0.012,
  offsetY: -0.005,
  rotation: 1.5
});
```

---

### `getCalibration()`
Returns a copy of the current calibration for both layers as JSON.

- **Returns**: Calibration object.
- **Example**:
```javascript
const cal = viewerAPI.getCalibration();
console.log("Current top calibration:", cal.top);
// Output: { scale: 1.0, offsetX: 0.0, offsetY: 0.0, rotation: 0.0, flipV: false }
```

---

### `toggleGrid(visible)`
Show or hide the floor grid (`GridHelper`) in the viewer.

- **Parameter**: `visible` (Boolean)
- **Example**:
```javascript
viewerAPI.toggleGrid(true); // Show the gray floor grid
```

---

### `toggleAxes(visible)`
Show or hide the 3D axis guides (X: red, Y: green, Z: blue).

- **Parameter**: `visible` (Boolean)
- **Example**:
```javascript
viewerAPI.toggleAxes(true); // Show axis guides
```

---

### `toggleSpin(active)`
Enable or disable slow automatic orbit around the board.

- **Parameter**: `active` (Boolean)
- **Example**:
```javascript
viewerAPI.toggleSpin(true); // Rotate the board automatically
```

---

### `applyBg(theme)`
Change the scene background color and lighting.

- **Parameter**: `theme` (String)
  - `'dark'`: Dark gray background (default).
  - `'light'`: Light gray background.
  - `'studio'`: Studio lighting with fog.
- **Example**:
```javascript
viewerAPI.applyBg('studio'); // Apply the studio background
```

---

## 4. Full integration example

A complete external control panel driving the viewer from an iframe:

```html
<!DOCTYPE html>
<html>
<head>
  <title>External 3D Control Panel</title>
</head>
<body>

  <button onclick="changeTexture('none')">No photos (solid color)</button>
  <button onclick="changeTexture('both')">Show photos</button>
  <button onclick="spinModel()">Spin board</button>
  <button onclick="zoomTop()">Scale top +5%</button>

  <br><br>

  <iframe 
    id="viewerFrame" 
    src="viewer.html" 
    width="800" 
    height="500">
  </iframe>

  <script>
    const iframe = document.getElementById('viewerFrame');

    // Call API methods once the viewer is loaded
    function getAPI() {
      if (iframe.contentWindow && iframe.contentWindow.viewerAPI) {
        return iframe.contentWindow.viewerAPI;
      }
      return null;
    }

    function changeTexture(kind) {
      const api = getAPI();
      if (api) api.applyTexture(kind);
    }

    function spinModel() {
      const api = getAPI();
      if (api) {
        const currentCal = api.getCalibration();
        api.toggleSpin(true);
      }
    }

    function zoomTop() {
      const api = getAPI();
      if (api) {
        const cal = api.getCalibration();
        api.setCalibration('top', {
          scale: cal.top.scale + 0.05
        });
      }
    }
  </script>
</body>
</html>
```
