

const translations = {
  en: {
    new: "New",
    save: "💾 Save",
    load: "📂 Load",
    svg: "⬇ SVG",
    json: "⬇ JSON",
    tools: "Tools",
    tool_select: "Select",
    tool_trace: "Trace",
    tool_via: "Via",
    tool_pad: "SMD Pad",
    tool_hole: "Hole",
    tool_rect: "Rectangle",
    tool_text: "Text",
    tool_measure: "Measure",
    components: "Components",
    comp_resistor: "Resistor",
    comp_capacitor: "Capacitor",
    comp_led: "LED",
    comp_ic: "IC (DIP)",
    comp_connector: "Connector",
    grid_label: "Grid",
    welcome_title: "🎉 Welcome to Electronics Editor!",
    welcome_subtitle: "Free online electronics design tool, easy to use.",
    welcome_step1: "<b>Click</b> on the tools on the left to draw",
    welcome_step2: "<b>Mouse scroll</b> to zoom in/out",
    welcome_step3: "<b>Middle button / Space + drag</b> to pan",
    welcome_step4: "<b>Delete/Backspace</b> to delete selected",
    welcome_step5: "<b>Ctrl+S</b> auto-saves in browser",
    welcome_start: "Start Designing!",
    layers: "Layers",
    layer_fcu: "Top Copper",
    layer_bcu: "Bottom Copper",
    layer_silk: "Silkscreen",
    layer_edge: "Edge Cuts",
    layer_mask: "Solder Mask",
    visibility: "Visibility:",
    grid: "Grid",
    show_grid: "Show grid",
    properties: "Properties",
    select_element: "Select an element to see properties",
    project_info: "Project Info",
    elements: "Elements:",
    traces: "Traces:",
    comp_count: "Components:",
    via_count: "Vias:",
    drc: "Verification (DRC)",
    run_drc: "🔍 Run DRC",
    saved_projects: "Saved Projects",
    ready: "Ready. Select a tool and start drawing!",
    tool_status: "Tool: {v}",
    ctx_delete: "🗑️ Delete",
    ctx_duplicate: "📋 Duplicate",
    ctx_props: "⚙️ Properties",
    ctx_select_all: "✅ Select All",
    
    prop_type: "Type",
    prop_layer: "Layer",
    prop_x: "X (mm)",
    prop_y: "Y (mm)",
    prop_width: "Width",
    prop_drill: "Drill",
    prop_height: "Height",
    prop_size: "Size",
    prop_ref: "Ref",
    prop_text: "Text",
    prop_delete: "🗑️ Delete",
    prop_selected: "{v} elements selected",
    
    type_trace: "Trace",
    type_via: "Via",
    type_pad: "SMD Pad",
    type_hole: "Hole",
    type_rect: "Rectangle",
    type_text: "Text",
    type_group: "Component",
    
    modal_no_undo: "This action cannot be undone.",
    modal_new_title: "New Project",
    modal_new_msg: "Creating a new project will discard unsaved changes.",
    modal_delete_proj: 'Delete "{v}"?',
    modal_add_text_title: "Add Text",
    modal_text_label: "Text",
    modal_size_label: "Size (mm)",
    modal_invalid_file: "Invalid file!",
    default_text: "Text",
    
    drc_ok: "✅ No issues found!",
    drc_thin_trace: "⚠️ Trace too thin: {v}mm (min 0.1mm)",
    drc_small_drill: "⚠️ Via: drill too small {v}mm",
    
    status_saved: '💾 Project "{v}" saved!',
    status_loaded: '📂 Project "{v}" loaded.',
    status_autoroute_warning: "This may take some time depending on project complexity.",
    manual_route_msg: "🔌 Manual Route: Net {v}",
    no_projects: "No projects saved"
  }
};

let currentLang = 'en';

function t(key, val = "") {
  if (!translations[currentLang]) currentLang = 'en';
  let text = translations[currentLang][key] || translations['en'][key] || key;
  return text.replace("{v}", val);
}

function updateUILanguage() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (t(key) !== key) {
      if (t(key).includes("<")) {
        el.innerHTML = t(key);
      } else {
        el.textContent = t(key);
      }
    }
  });

  
  const gridInfo = document.getElementById('grid-info');
  if (gridInfo) gridInfo.textContent = `${t('grid_label')}: ${state.gridMm}mm`;
  
  const statusTool = document.getElementById('status-tool');
  if (statusTool) {
    let toolKey = 'tool_' + state.tool;
    if (state.tool.startsWith('comp-')) {
      const cType = state.tool.split('-')[1];
      toolKey = 'comp_' + (cType === 'r' ? 'resistor' : cType === 'c' ? 'capacitor' : cType === 'conn' ? 'connector' : cType);
    }
    statusTool.textContent = t('tool_status', t(toolKey));
  }

  if (typeof updatePropsPanel === 'function') updatePropsPanel();
  if (typeof renderSavedProjects === 'function') renderSavedProjects();
}

window.translations = translations;
window.t = t;
window.updateUILanguage = updateUILanguage;
window.setLanguage = function(lang) {
  currentLang = translations[lang] ? lang : 'en';
  updateUILanguage();
};
