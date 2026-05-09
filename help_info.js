function reload_help_info() {
  help_info = {
    visible: false,

    tools: {
      posX: ui_drop_down.position().x,
      posY: ui_drop_down.position().y,
      string: "Show/hide the toolbar",
    },

    scenes: {
      posX: ui_select_scene.position().x,
      posY: ui_select_scene.position().y,
      string: "Select a scene that you can jump to",
    },

    sub_scene: {
      posX: ui_select_part.position().x,
      posY: ui_select_part.position().y,
      string: "Select a sub-scene for more precision",
    },

    timestamp: {
      posX: ui_input_time.position().x,
      posY: ui_input_time.position().y,
      string: "Enter a specific timestamp that you can jump to",
    },

    jump: {
      posX: ui_jump_scene.position().x + ui_jump_scene.size().width / 2,
      posY: 0,
      string: "Jump to the corresponding scene/subscene or timestamp",
    },
  };

  console.log(help_info);
}

function render_help_info() {
  textSize(ui_scale*7)
  for (let key in help_info) {
    if (key === "visible") continue;
    let info = help_info[key];
    text(info.string, info.posX + ui_scale * 104, info.posY - 1050);
  }
}

function show_help_info() {}
