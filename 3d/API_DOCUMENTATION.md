# Documentação da API de Integração JavaScript (Visualizador 3D)

Esta documentação descreve como incorporar o visualizador 3D do **OneDollarBoard** e controlá-lo dinamicamente através de JavaScript a partir de uma aplicação externa.

Ambos os visualizadores (`viewer.html` e `viewer_obj.html`) expõem a mesma API global sob o namespace `window.viewerAPI` e despacham eventos de ciclo de vida.

---

## 1. Incorporação (Embedding)

A maneira recomendada de embutir o visualizador é utilizando uma tag `<iframe>` HTML padrão:

```html
<!-- Exemplo de Incorporação em outro site -->
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

## 2. Eventos de Ciclo de Vida (Lifecycle Events)

O visualizador despacha o evento customizado `viewerLoaded` no objeto global `window` assim que o modelo 3D é completamente baixado, processado e renderizado na cena.

### Escutando o evento de dentro do visualizador:
```javascript
window.addEventListener('viewerLoaded', () => {
  console.log("O modelo 3D foi carregado e está visível na tela!");
});
```

### Escutando o evento a partir da página mãe (hospedeira):
```javascript
const iframe = document.getElementById('boardViewer');

iframe.addEventListener('load', () => {
  // O iframe carregou o HTML básico, agora escutamos a inicialização do 3D
  iframe.contentWindow.addEventListener('viewerLoaded', () => {
    console.log("O 3D dentro do iframe foi inicializado!");
  });
});
```

---

## 3. Métodos da API (`window.viewerAPI`)

Uma vez que o visualizador esteja carregado, você pode controlar seu estado acessando o objeto `viewerAPI` no escopo global (`window.viewerAPI` ou `iframe.contentWindow.viewerAPI`).

### `onLoad(callback)`
Garante a execução segura de um callback após o visualizador estar pronto. Se o visualizador já estiver carregado, roda o callback imediatamente.

- **Parâmetro**: `callback` (Função)
- **Exemplo**:
```javascript
viewerAPI.onLoad(() => {
  console.log("A API está pronta para uso!");
  viewerAPI.toggleSpin(true); // Inicia rotação automática
});
```

---

### `applyTexture(kind)`
Altera o modo de exibição de texturas no visualizador e sincroniza os botões do painel de controle.

- **Parâmetro**: `kind` (String)
  - `'both'`: Exibe as fotos de Topo e Base (Padrão).
  - `'top'`: Exibe apenas a foto de Topo.
  - `'button'`: Exibe apenas a foto de Base.
  - `'none'`: Exibe apenas cores sólidas de PCB (Cor original).
- **Exemplo**:
```javascript
// Remove as fotos e mostra a cor original da placa
viewerAPI.applyTexture('none');
```

---

### `setCalibration(layer, params)`
Ajusta programaticamente os parâmetros de projeção e alinhamento de textura das fotos.

- **Parâmetros**:
  - `layer` (String): `'top'` ou `'button'` (Base).
  - `params` (Objeto):
    - `scale` (Number): Escala da textura (ex: `1.0`).
    - `offsetX` (Number): Deslocamento horizontal (ex: `0.0`).
    - `offsetY` (Number): Deslocamento vertical (ex: `0.0`).
    - `rotation` (Number): Rotação em graus (de `-180` a `180`).
    - `flipV` (Boolean): Inverte verticalmente a textura (`true`/`false`).
- **Exemplo**:
```javascript
// Aplica pequenos ajustes de offset e escala no topo da placa
viewerAPI.setCalibration('top', {
  scale: 1.05,
  offsetX: 0.012,
  offsetY: -0.005,
  rotation: 1.5
});
```

---

### `getCalibration()`
Retorna uma cópia dos parâmetros de calibração vigentes de ambas as camadas em formato JSON.

- **Retorno**: Objeto de calibração.
- **Exemplo**:
```javascript
const cal = viewerAPI.getCalibration();
console.log("Calibração de topo atual:", cal.top);
// Saída: { scale: 1.0, offsetX: 0.0, offsetY: 0.0, rotation: 0.0, flipV: false }
```

---

### `toggleGrid(visible)`
Liga ou desliga a grade de chão (GridHelper) no visualizador.

- **Parâmetro**: `visible` (Boolean)
- **Exemplo**:
```javascript
viewerAPI.toggleGrid(true); // Exibe a grade cinza no chão
```

---

### `toggleAxes(visible)`
Exibe ou oculta as guias coloridas de eixos coordenados 3D (X: Vermelho, Y: Verde, Z: Azul).

- **Parâmetro**: `visible` (Boolean)
- **Exemplo**:
```javascript
viewerAPI.toggleAxes(true); // Exibe as guias de eixo
```

---

### `toggleSpin(active)`
Ativa ou desativa a rotação orbital automática lenta da câmera ao redor da placa.

- **Parâmetro**: `active` (Boolean)
- **Exemplo**:
```javascript
viewerAPI.toggleSpin(true); // Faz a placa girar sozinha
```

---

### `applyBg(theme)`
Altera o esquema de cores e iluminação de fundo da cena 3D.

- **Parâmetro**: `theme` (String)
  - `'dark'`: Fundo cinza-escuro (Padrão).
  - `'light'`: Fundo cinza-claro.
  - `'studio'`: Iluminação realista de estúdio com neblina.
- **Exemplo**:
```javascript
viewerAPI.applyBg('studio'); // Aplica o fundo de estúdio
```

---

## 4. Exemplo Completo de Integração

Abaixo está um exemplo de código completo de um painel de controle externo operando o visualizador de dentro de um iframe:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Painel de Controle 3D Externo</title>
</head>
<body>

  <button onclick="changeTexture('none')">Sem Fotos (Cor Sólida)</button>
  <button onclick="changeTexture('both')">Mostrar Fotos</button>
  <button onclick="spinModel()">Girar Board</button>
  <button onclick="zoomTop()">Ajustar Escala Topo (+5%)</button>

  <br><br>

  <iframe 
    id="viewerFrame" 
    src="viewer.html" 
    width="800" 
    height="500">
  </iframe>

  <script>
    const iframe = document.getElementById('viewerFrame');

    // Executa funções na API assim que o visualizador estiver carregado
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
