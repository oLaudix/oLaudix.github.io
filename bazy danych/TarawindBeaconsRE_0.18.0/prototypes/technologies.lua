data:extend({
  {
    type = "technology",
    name = "tweffect-transmission1",
    icon = "__base__/graphics/technology/effect-transmission.png",
	icon_size = 128,
    effects =
    {
      {
        type = "unlock-recipe",
        recipe = "twBeacon1"
      }
    },
    prerequisites = {"effect-transmission"},
    unit =
    {
      count = 200,
      ingredients =
      {
        {"automation-science-pack", 1},
        {"logistic-science-pack", 1},
        {"chemical-science-pack", 1},
      },
      time = 30
    },
    order = "i-j"
  },
  {
    type = "technology",
    name = "tweffect-transmission2",
    icon = "__base__/graphics/technology/effect-transmission.png",
	icon_size = 128,
    effects =
    {
      {
        type = "unlock-recipe",
        recipe = "twBeacon2"
      }
    },
    prerequisites = {"tweffect-transmission1"},
    unit =
    {
      count = 400,
      ingredients =
      {
        {"automation-science-pack", 1},
        {"logistic-science-pack", 1},
        {"chemical-science-pack", 1},
      },
      time = 30
    },
    order = "i-k"
  },
  {
    type = "technology",
    name = "tweffect-transmission3",
    icon = "__base__/graphics/technology/effect-transmission.png",
	icon_size = 128,
    effects =
    {
      {
        type = "unlock-recipe",
        recipe = "twBeacon3"
      }
    },
    prerequisites = {"tweffect-transmission2"},
    unit =
    {
      count = 600,
      ingredients =
      {
        {"automation-science-pack", 1},
        {"logistic-science-pack", 1},
        {"chemical-science-pack", 1},
        {"production-science-pack", 1}	
      },
      time = 30
    },
    order = "i-l"
  },
  {
    type = "technology",
    name = "tweffect-transmission4",
    icon = "__base__/graphics/technology/effect-transmission.png",
	icon_size = 128,
    effects =
    {
      {
        type = "unlock-recipe",
        recipe = "twBeacon4"
      }
    },
    prerequisites = {"tweffect-transmission3"},
    unit =
    {
      count = 800,
      ingredients =
      {
        {"automation-science-pack", 1},
        {"logistic-science-pack", 1},
        {"chemical-science-pack", 1},
        {"production-science-pack", 1}	
      },
      time = 30
    },
    order = "i-m"
  },
  {
    type = "technology",
    name = "tweffect-transmission5",
    icon = "__base__/graphics/technology/effect-transmission.png",
	icon_size = 128,
    effects =
    {
      {
        type = "unlock-recipe",
        recipe = "twBeacon5"
      }
    },
    prerequisites = {"tweffect-transmission4"},
    unit =
    {
      count = 1000,
      ingredients =
      {
        {"automation-science-pack", 1},
        {"logistic-science-pack", 1},
        {"chemical-science-pack", 1},
        {"production-science-pack", 1},
        {"utility-science-pack", 1},  
      },
      time = 30
    },
    order = "i-n"
  },
  {
    type = "technology",
    name = "tweffect-transmission6",
    icon = "__base__/graphics/technology/effect-transmission.png",
	icon_size = 128,
    effects =
    {
      {
        type = "unlock-recipe",
        recipe = "twBeacon6"
      }
    },
    prerequisites = {"tweffect-transmission5"},
    unit =
    {
      count = 1200,
      ingredients =
      {
        {"automation-science-pack", 1},
        {"logistic-science-pack", 1},
        {"chemical-science-pack", 1},
        {"production-science-pack", 1},
        {"utility-science-pack", 1},  		
      },
      time = 30
    },
    order = "i-o"
  },
  {
    type = "technology",
    name = "tweffect-transmission7",
    icon = "__base__/graphics/technology/effect-transmission.png",
	icon_size = 128,
    effects =
    {
      {
        type = "unlock-recipe",
        recipe = "twBeacon7"
      }
    },
    prerequisites = {"tweffect-transmission6"},
    unit =
    {
      count = 4000,
      ingredients =
      {
        {"automation-science-pack", 1},
        {"logistic-science-pack", 1},
        {"chemical-science-pack", 1},
        {"production-science-pack", 1},
        {"utility-science-pack", 1},
		    {"space-science-pack", 1}
      },
      time = 30
    },
    order = "i-p"
  }
})