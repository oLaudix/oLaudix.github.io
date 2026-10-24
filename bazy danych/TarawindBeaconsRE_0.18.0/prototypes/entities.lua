data:extend({
  -- Thanks to Defi for the graphics fix
  { -- twBeacon1
    type = "beacon",
    name = "twBeacon1",
    icon = "__TarawindBeaconsRE__/graphics/icons/beacon.png",
	icon_size = 32,
    flags = {"placeable-player", "player-creation"},
    minable = {mining_time = 1, result = "twBeacon1"},
    max_health = 300,
    corpse = "big-remnants",
    dying_explosion = "medium-explosion",
    collision_box = {{-0.2, -0.2}, {0.2, 0.2}},
    selection_box = {{-0.5, -0.5}, {0.5, 0.5}},
    allowed_effects = {"consumption", "speed", "pollution", "productivity"},
    base_picture =
    {
      filename = "__TarawindBeaconsRE__/graphics/entity/beacon/beacon-base.png",
      width = 116,
      height = 93,
      shift = { 0.34375/3, 0.046875/3},
	  scale = 0.33
    },
    animation =
    {
      filename = "__TarawindBeaconsRE__/graphics/entity/beacon/beacon-antenna1.png",
      width = 54,
      height = 50,
      line_length = 8,
      frame_count = 32,
      shift = { -0.03125/3, -1.71875/3},
      animation_speed = 0.5,
	  scale = 0.33
    },
    animation_shadow =
    {
      filename = "__TarawindBeaconsRE__/graphics/entity/beacon/beacon-antenna-shadow.png",
      width = 63,
      height = 49,
      line_length = 8,
      frame_count = 32,
      shift = { 3.140625/3, 0.484375/3},
      animation_speed = 0.5,
	  scale = 0.33
    },
    radius_visualisation_picture =
    {
      filename = "__TarawindBeaconsRE__/graphics/entity/beacon/beacon-radius-visualization.png",
      width = 12,
      height = 12
    },
    supply_area_distance = 4,
    energy_source =
    {
      type = "electric",
      usage_priority = "secondary-input"
    },
    vehicle_impact_sound =  { filename = "__base__/sound/car-metal-impact.ogg", volume = 0.65 },
    energy_usage = "600kW",
    distribution_effectivity = 0.6,
    module_specification =
    {
      module_slots = 3,
      module_info_icon_shift = {0, 0.5},
      module_info_multi_row_initial_height_modifier = -0.3
    }
  },
  { -- twBeacon2
    type = "beacon",
    name = "twBeacon2",
    icon = "__TarawindBeaconsRE__/graphics/icons/beacon.png",
	icon_size = 32,
    flags = {"placeable-player", "player-creation"},
    minable = {mining_time = 1, result = "twBeacon2"},
    max_health = 400,
    corpse = "big-remnants",
    dying_explosion = "medium-explosion",
    collision_box = {{-0.2, -0.2}, {0.2, 0.2}},
    selection_box = {{-0.5, -0.5}, {0.5, 0.5}},
    allowed_effects = {"consumption", "speed", "pollution", "productivity"},
    base_picture =
    {
      filename = "__TarawindBeaconsRE__/graphics/entity/beacon/beacon-base.png",
      width = 116,
      height = 93,
      shift = { 0.34375/3, 0.046875/3},
	  scale = 0.33
    },
    animation =
    {
      filename = "__TarawindBeaconsRE__/graphics/entity/beacon/beacon-antenna2.png",
      width = 54,
      height = 50,
      line_length = 8,
      frame_count = 32,
      shift = { -0.03125/3, -1.71875/3},
      animation_speed = 0.5,
	  scale = 0.33
    },
    animation_shadow =
    {
      filename = "__TarawindBeaconsRE__/graphics/entity/beacon/beacon-antenna-shadow.png",
      width = 63,
      height = 49,
      line_length = 8,
      frame_count = 32,
      shift = { 3.140625/3, 0.484375/3},
      animation_speed = 0.5,
	  scale = 0.33
    },
    radius_visualisation_picture =
    {
      filename = "__TarawindBeaconsRE__/graphics/entity/beacon/beacon-radius-visualization.png",
      width = 12,
      height = 12
    },
    supply_area_distance = 5,
    energy_source =
    {
      type = "electric",
      usage_priority = "secondary-input"
    },
    vehicle_impact_sound =  { filename = "__base__/sound/car-metal-impact.ogg", volume = 0.65 },
    energy_usage = "800kW",
    distribution_effectivity = 0.8,
    module_specification =
    {
      module_slots = 4,
      module_info_icon_shift = {0, 0.5},
      module_info_multi_row_initial_height_modifier = -0.3
    }
  },
  { -- twBeacon3
    type = "beacon",
    name = "twBeacon3",
    icon = "__TarawindBeaconsRE__/graphics/icons/beacon.png",
	icon_size = 32,
    flags = {"placeable-player", "player-creation"},
    minable = {mining_time = 1, result = "twBeacon3"},
    max_health = 500,
    corpse = "big-remnants",
    dying_explosion = "medium-explosion",
    collision_box = {{-0.2, -0.2}, {0.2, 0.2}},
    selection_box = {{-0.5, -0.5}, {0.5, 0.5}},
    allowed_effects = {"consumption", "speed", "pollution", "productivity"},
    base_picture =
    {
      filename = "__TarawindBeaconsRE__/graphics/entity/beacon/beacon-base.png",
      width = 116,
      height = 93,
      shift = { 0.34375/3, 0.046875/3},
	  scale = 0.33
    },
    animation =
    {
      filename = "__TarawindBeaconsRE__/graphics/entity/beacon/beacon-antenna3.png",
      width = 54,
      height = 50,
      line_length = 8,
      frame_count = 32,
      shift = { -0.03125/3, -1.71875/3},
      animation_speed = 0.5,
	  scale = 0.33
    },
    animation_shadow =
    {
      filename = "__TarawindBeaconsRE__/graphics/entity/beacon/beacon-antenna-shadow.png",
      width = 63,
      height = 49,
      line_length = 8,
      frame_count = 32,
      shift = { 3.140625/3, 0.484375/3},
      animation_speed = 0.5,
	  scale = 0.33
    },
    radius_visualisation_picture =
    {
      filename = "__TarawindBeaconsRE__/graphics/entity/beacon/beacon-radius-visualization.png",
      width = 12,
      height = 12
    },
    supply_area_distance = 6,
    energy_source =
    {
      type = "electric",
      usage_priority = "secondary-input"
    },
    vehicle_impact_sound =  { filename = "__base__/sound/car-metal-impact.ogg", volume = 0.65 },
    energy_usage = "1MW",
    distribution_effectivity = 1,
    module_specification =
    {
      module_slots = 5,
      module_info_icon_shift = {0, 0.5},
      module_info_multi_row_initial_height_modifier = -0.3
    }
  },
  { -- twBeacon4
    type = "beacon",
    name = "twBeacon4",
    icon = "__TarawindBeaconsRE__/graphics/icons/beacon.png",
	icon_size = 32,
    flags = {"placeable-player", "player-creation"},
    minable = {mining_time = 1, result = "twBeacon4"},
    max_health = 600,
    corpse = "big-remnants",
    dying_explosion = "medium-explosion",
    collision_box = {{-0.2, -0.2}, {0.2, 0.2}},
    selection_box = {{-0.5, -0.5}, {0.5, 0.5}},
    allowed_effects = {"consumption", "speed", "pollution", "productivity"},
    base_picture =
    {
      filename = "__TarawindBeaconsRE__/graphics/entity/beacon/beacon-base.png",
      width = 116,
      height = 93,
      shift = { 0.34375/3, 0.046875/3},
	  scale = 0.33
    },
    animation =
    {
      filename = "__TarawindBeaconsRE__/graphics/entity/beacon/beacon-antenna4.png",
      width = 54,
      height = 50,
      line_length = 8,
      frame_count = 32,
      shift = { -0.03125/3, -1.71875/3},
      animation_speed = 0.5,
	  scale = 0.33
    },
    animation_shadow =
    {
      filename = "__TarawindBeaconsRE__/graphics/entity/beacon/beacon-antenna-shadow.png",
      width = 63,
      height = 49,
      line_length = 8,
      frame_count = 32,
      shift = { 3.140625/3, 0.484375/3},
      animation_speed = 0.5,
	  scale = 0.33
    },
    radius_visualisation_picture =
    {
      filename = "__TarawindBeaconsRE__/graphics/entity/beacon/beacon-radius-visualization.png",
      width = 12,
      height = 12
    },
    supply_area_distance = 7,
    energy_source =
    {
      type = "electric",
      usage_priority = "secondary-input"
    },
    vehicle_impact_sound =  { filename = "__base__/sound/car-metal-impact.ogg", volume = 0.65 },
    energy_usage = "1.2MW",
    distribution_effectivity = 1.2,
    module_specification =
    {
      module_slots = 6,
      module_info_icon_shift = {0, 0.5},
      module_info_multi_row_initial_height_modifier = -0.3
    }
  },
  { -- twBeacon5
    type = "beacon",
    name = "twBeacon5",
    icon = "__TarawindBeaconsRE__/graphics/icons/beacon.png",
	icon_size = 32,
    flags = {"placeable-player", "player-creation"},
    minable = {mining_time = 1, result = "twBeacon5"},
    max_health = 700,
    corpse = "big-remnants",
    dying_explosion = "medium-explosion",
    collision_box = {{-0.2, -0.2}, {0.2, 0.2}},
    selection_box = {{-0.5, -0.5}, {0.5, 0.5}},
    allowed_effects = {"consumption", "speed", "pollution", "productivity"},
    base_picture =
    {
      filename = "__TarawindBeaconsRE__/graphics/entity/beacon/beacon-base.png",
      width = 116,
      height = 93,
      shift = { 0.34375/3, 0.046875/3},
	  scale = 0.33
    },
    animation =
    {
      filename = "__TarawindBeaconsRE__/graphics/entity/beacon/beacon-antenna5.png",
      width = 54,
      height = 50,
      line_length = 8,
      frame_count = 32,
      shift = { -0.03125/3, -1.71875/3},
      animation_speed = 0.5,
	  scale = 0.33
    },
    animation_shadow =
    {
      filename = "__TarawindBeaconsRE__/graphics/entity/beacon/beacon-antenna-shadow.png",
      width = 63,
      height = 49,
      line_length = 8,
      frame_count = 32,
      shift = { 3.140625/3, 0.484375/3},
      animation_speed = 0.5,
	  scale = 0.33
    },
    radius_visualisation_picture =
    {
      filename = "__TarawindBeaconsRE__/graphics/entity/beacon/beacon-radius-visualization.png",
      width = 12,
      height = 12
    },
    supply_area_distance = 8,
    energy_source =
    {
      type = "electric",
      usage_priority = "secondary-input"
    },
    vehicle_impact_sound =  { filename = "__base__/sound/car-metal-impact.ogg", volume = 0.65 },
    energy_usage = "1.4MW",
    distribution_effectivity = 1.4,
    module_specification =
    {
      module_slots = 7,
      module_info_icon_shift = {0, 0.5},
      module_info_multi_row_initial_height_modifier = -0.3
    }
  },
  { -- twBeacon6
    type = "beacon",
    name = "twBeacon6",
    icon = "__TarawindBeaconsRE__/graphics/icons/beacon.png",
	icon_size = 32,
    flags = {"placeable-player", "player-creation"},
    minable = {mining_time = 1, result = "twBeacon6"},
    max_health = 800,
    corpse = "big-remnants",
    dying_explosion = "medium-explosion",
    collision_box = {{-0.2, -0.2}, {0.2, 0.2}},
    selection_box = {{-0.5, -0.5}, {0.5, 0.5}},
    allowed_effects = {"consumption", "speed", "pollution", "productivity"},
    base_picture =
    {
      filename = "__TarawindBeaconsRE__/graphics/entity/beacon/beacon-base.png",
      width = 116,
      height = 93,
      shift = { 0.34375/3, 0.046875/3},
	  scale = 0.33
    },
    animation =
    {
      filename = "__TarawindBeaconsRE__/graphics/entity/beacon/beacon-antenna6.png",
      width = 54,
      height = 50,
      line_length = 8,
      frame_count = 32,
      shift = { -0.03125/3, -1.71875/3},
      animation_speed = 0.5,
	  scale = 0.33
    },
    animation_shadow =
    {
      filename = "__TarawindBeaconsRE__/graphics/entity/beacon/beacon-antenna-shadow.png",
      width = 63,
      height = 49,
      line_length = 8,
      frame_count = 32,
      shift = { 3.140625/3, 0.484375/3},
      animation_speed = 0.5,
	  scale = 0.33
    },
    radius_visualisation_picture =
    {
      filename = "__TarawindBeaconsRE__/graphics/entity/beacon/beacon-radius-visualization.png",
      width = 12,
      height = 12
    },
    supply_area_distance = 9,
    energy_source =
    {
      type = "electric",
      usage_priority = "secondary-input"
    },
    vehicle_impact_sound =  { filename = "__base__/sound/car-metal-impact.ogg", volume = 0.65 },
    energy_usage = "1.6MW",
    distribution_effectivity = 1.6,
    module_specification =
    {
      module_slots = 8,
      module_info_icon_shift = {0, 0.5},
      module_info_multi_row_initial_height_modifier = -0.3
    }
  },
  { -- twBeacon7
    type = "beacon",
    name = "twBeacon7",
    icon = "__TarawindBeaconsRE__/graphics/icons/beacon.png",
	icon_size = 32,
    flags = {"placeable-player", "player-creation"},
    minable = {mining_time = 1, result = "twBeacon7"},
    max_health = 1000,
    corpse = "big-remnants",
    dying_explosion = "medium-explosion",
    collision_box = {{-0.2, -0.2}, {0.2, 0.2}},
    selection_box = {{-0.5, -0.5}, {0.5, 0.5}},
    allowed_effects = {"consumption", "speed", "pollution", "productivity"},
    base_picture =
    {
      filename = "__TarawindBeaconsRE__/graphics/entity/beacon/beacon-base.png",
      width = 116,
      height = 93,
      shift = { 0.34375/3, 0.046875/3},
	  scale = 0.33
    },
    animation =
    {
      filename = "__TarawindBeaconsRE__/graphics/entity/beacon/beacon-antenna7.png",
      width = 54,
      height = 50,
      line_length = 8,
      frame_count = 32,
      shift = { -0.03125/3, -1.71875/3},
      animation_speed = 0.5,
	  scale = 0.33
    },
    animation_shadow =
    {
      filename = "__TarawindBeaconsRE__/graphics/entity/beacon/beacon-antenna-shadow.png",
      width = 63,
      height = 49,
      line_length = 8,
      frame_count = 32,
      shift = { 3.140625/3, 0.484375/3},
      animation_speed = 0.5,
	  scale = 0.33
    },
    radius_visualisation_picture =
    {
      filename = "__TarawindBeaconsRE__/graphics/entity/beacon/beacon-radius-visualization.png",
      width = 12,
      height = 12
    },
    supply_area_distance = 20,
    energy_source =
    {
      type = "electric",
      usage_priority = "secondary-input"
    },
    vehicle_impact_sound =  { filename = "__base__/sound/car-metal-impact.ogg", volume = 0.65 },
    energy_usage = "4MW",
    distribution_effectivity = 2.0,
    module_specification =
    {
      module_slots = 10,
      module_info_icon_shift = {0, 0.5},
      module_info_multi_row_initial_height_modifier = -0.3
    }
  }
})