var items_recipies1 = {
  "assembling-machine-6": {
    name : "Assembling machine 6",
    id : "assembling-machine-6",
    recipe : "assembling-machine-6",
    energy_required : 0.5,
    ingredients :
    [
      ["assembling-machine-5", 1],
      ["nitinol-alloy", 5],
      ["tungsten-carbide", 5],
      ["nitinol-gear-wheel", 5],
      ["nitinol-bearing", 5],
      ["advanced-processing-unit", 3],
    ],
    am_type : "am6",
    result : 1,
  },
  "assembling-machine-5": {
    name : "Assembling machine 5",
    id : "assembling-machine-5",
    recipe : "assembling-machine-5",
    energy_required : 0.5,
    ingredients :
    [
      ["assembling-machine-4", 1],
      ["titanium-plate", 9],
      ["titanium-gear-wheel", 5],
      ["titanium-bearing", 5],
      ["processing-unit", 3],
    ],
    am_type : "am6",
    result : 1,
  },
  "assembling-machine-4": {
    name : "Assembling machine 4",
    id : "assembling-machine-4",
    recipe : "assembling-machine-4",
    energy_required : 0.5,
    ingredients :
    [
      ["assembling-machine-3", 1],
      ["aluminium-plate", 9],
      ["steel-bearing", 5],
      ["brass-gear-wheel", 5],
      ["advanced-circuit", 3],
    ],
    am_type : "am6",
    result : 1,
  },
  "assembling-machine-3": {
    name : "Assembling machine 3",
    id : "assembling-machine-3",
    recipe : "assembling-machine-3",
    energy_required : 0.5,
    ingredients :
    [
      ["assembling-machine-2", 1],
      ["steel-plate", 9],
      ["advanced-circuit", 3],
      ["steel-gear-wheel", 5],
    ],
    am_type : "am6",
    result : 1,
  },
  "assembling-machine-2": {
    name : "Assembling machine 2",
    id : "assembling-machine-2",
    recipe : "assembling-machine-2",
    energy_required : 0.5,
    ingredients :
    [
      ["iron-plate", 9],
      ["electronic-circuit", 3],
      ["iron-gear-wheel", 5],
      ["assembling-machine-1", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "assembling-machine-1": {
    name : "Assembling machine 1",
    id : "assembling-machine-1",
    recipe : "assembling-machine-1",
    energy_required : 0.5,
    ingredients :
    [
      ["iron-gear-wheel", 5],
      ["iron-plate", 9],
      ["basic-circuit-board", 3],
    ],
    am_type : "am6",
    result : 1,
  },
  "nitinol-alloy": {
    name : "Nitinol plate",
    id : "nitinol-alloy",
    recipe : "nitinol-alloy",
    energy_required : 17.5,
    ingredients :
    [
      ["nickel-plate", 3],
      ["titanium-plate", 2],
    ],
    am_type : "electric_furnace",
    result : 5,
  },
  "tungsten-carbide": {
    name : "Tungsten carbide plate",
    id : "tungsten-carbide",
    recipe : "tungsten-carbide",
    energy_required : 7,
    ingredients :
    [
      ["carbon", 1],
      ["tungsten-oxide", 1],
    ],
    am_type : "electric_furnace",
    result : 2,
  },
  "tungsten-oxide": {
    name : "Tungsten oxide",
    id : "tungsten-oxide",
    recipe : "tungsten-oxide",
    energy_required : 2,
    ingredients :
    [
      ["tungstic-acid", 1],
	  ["coal", 0],
    ],
    am_type : "electric_furnace",
    result : 1,
  },
  "carbon": {
    name : "Carbon",
    id : "carbon",
    recipe : "carbon",
    energy_required : 2,
    ingredients :
    [
      ["coal", 1],
      ["water", 0.5],
    ],
    am_type : "electric_furnace",
    result : 2,
  },
  "nitinol-gear-wheel": {
    name : "Nitinol gear wheel",
    id : "nitinol-gear-wheel",
    recipe : "nitinol-gear-wheel",
    energy_required : 0.5,
    ingredients :
    [
      ["nitinol-alloy", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "nitinol-bearing": {
    name : "Nitinol bearing",
    id : "nitinol-bearing",
    recipe : "nitinol-bearing",
    energy_required : 0.5,
    ingredients :
    [
      ["nitinol-alloy", 1],
      ["nitinol-bearing-ball", 16],
      ["lubricant", 1],
    ],
    am_type : "am6",
    result : 2,
  },
  "nitinol-bearing-ball": {
    name : "Nitinol bearing ball",
    id : "nitinol-bearing-ball",
    recipe : "nitinol-bearing-ball",
    energy_required : 0.5,
    ingredients :
    [
      ["nitinol-alloy", 1],
    ],
    am_type : "am6",
    result : 12,
  },
  "advanced-processing-unit": {
    name : "Electronic processing board",
    id : "advanced-processing-unit",
    recipe : "advanced-processing-unit",
    energy_required : 15,
    ingredients :
    [
      ["multi-layer-circuit-board", 1],
      ["basic-electronic-components", 1],
      ["electronic-components", 2],
      ["intergrated-electronics", 4],
      ["processing-electronics", 1],
      ["solder", 4],
    ],
    am_type : "am6",
    result : 1,
  },
  "multi-layer-circuit-board": {
    name : "Multi-layer circuit board",
    id : "multi-layer-circuit-board",
    recipe : "multi-layer-circuit-board",
    energy_required : 15,
    ingredients :
    [
      ["fibreglass-board", 1],
      ["copper-plate", 2],
      ["gold-plate", 2],
      ["ferric-chloride-solution", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "fibreglass-board": {
    name : "Fibreglass board",
    id : "fibreglass-board",
    recipe : "fibreglass-board",
    energy_required : 0.5,
    ingredients :
    [
      ["plastic-bar", 1],
      ["glass", 1],
    ],
    am_type : "am6",
    result : 2,
  },
  "glass": {
    name : "Glass",
    id : "glass",
    recipe : "quartz-glass",
    energy_required : 3.5,
    ingredients :
    [
      ["quartz", 1],
    ],
    am_type : "electric_furnace",
    result : 1,
  },
  "plastic-bar": {
    name : "Plastic Bar",
    id : "plastic-bar",
    recipe : "plastic-bar",
    energy_required : 1,
    ingredients :
    [
      ["coal", 1],
      ["petroleum-gas", 3],
    ],
    am_type : "chemical_plant",
    result : 2,
  },
  "basic-electronic-components": {
    name : "Basic electronic components",
    id : "basic-electronic-components",
    recipe : "basic-electronic-components",
    energy_required : 2,
    ingredients :
    [
      ["tinned-copper-cable", 1],
      ["carbon", 1],
    ],
    am_type : "am6",
    result : 5,
  },
  "tinned-copper-cable": {
    name : "Tinned copper cable",
    id : "tinned-copper-cable",
    recipe : "tinned-copper-cable",
    energy_required : 0.5,
    ingredients :
    [
      ["copper-cable", 3],
      ["tin-plate", 1],
    ],
    am_type : "am6",
    result : 3,
  },
  "copper-cable": {
    name : "Copper Cable",
    id : "copper-cable",
    recipe : "copper-cable",
    energy_required : 0.5,
    ingredients :
    [
      ["copper-plate", 1],
    ],
    am_type : "am6",
    result : 2,
  },
  "electronic-components": {
    name : "Transistor",
    id : "electronic-components",
    recipe : "electronic-components",
    energy_required : 3.5,
    ingredients :
    [
      ["plastic-bar", 1],
      ["tinned-copper-cable", 1],
      ["silicon-wafer", 2],
    ],
    am_type : "am6",
    result : 5,
  },
  "silicon-wafer": {
    name : "Silicon wafer",
    id : "silicon-wafer",
    recipe : "silicon-wafer",
    energy_required : 5,
    ingredients :
    [
      ["silicon", 1],
    ],
    am_type : "am6",
    result : 8,
  },
  "intergrated-electronics": {
    name : "Integrated electronics",
    id : "intergrated-electronics",
    recipe : "intergrated-electronics",
    energy_required : 5,
    ingredients :
    [
      ["plastic-bar", 1],
      ["tinned-copper-cable", 1],
      ["silicon-wafer", 4],
      ["sulfuric-acid", 0.5],
    ],
    am_type : "am6",
    result : 5,
  },
  "processing-electronics": {
    name : "CPUs",
    id : "processing-electronics",
    recipe : "processing-electronics",
    energy_required : 7,
    ingredients :
    [
      ["silicon-wafer", 6],
      ["gilded-copper-cable", 2],
      ["silicon-nitride", 1],
      ["sulfuric-acid", 0.5],
    ],
    am_type : "am6",
    result : 5,
  },
  "gilded-copper-cable": {
    name : "Gilded copper wire",
    id : "gilded-copper-cable",
    recipe : "gilded-copper-cable",
    energy_required : 0.5,
    ingredients :
    [
      ["copper-cable", 3],
      ["gold-plate", 1],
    ],
    am_type : "am6",
    result : 3,
  },
  "silicon-nitride": {
    name : "Silicon nitrade",
    id : "silicon-nitride",
    recipe : "silicon-nitride",
    energy_required : 7.5,
    ingredients :
    [
      ["silicon-powder", 1],
      ["nitrogen", 1.25],
    ],
    am_type : "electric_furnace",
    result : 1,
  },
  "silicon-powder": {
    name : "Powdered silicon",
    id : "silicon-powder",
    recipe : "silicon-powder",
    energy_required : 5,
    ingredients :
    [
      ["silicon", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "solder": {
    name : "Solder",
    id : "solder",
    recipe : "solder",
    energy_required : 2,
    ingredients :
    [
      ["solder-alloy", 4],
      ["resin", 1],
    ],
    am_type : "am6",
    result : 8,
  },
  "solder-alloy": {
    name : "Solder plate",
    id : "solder-alloy",
    recipe : "solder-alloy-lead",
    energy_required : 7,
    ingredients :
    [
      ["tin-plate", 4],
      ["lead-plate", 7],
    ],
    am_type : "electric_furnace",
    result : 11,
  },
  "resin": {
    name : "Resin",
    id : "resin",
    recipe : "bob-resin-oil",
    energy_required : 1,
    ingredients :
    [
      ["heavy-oil", 1],
    ],
    am_type : "chemical_plant",
    result : 1,
  },
  "titanium-gear-wheel": {
    name : "Titanium gear wheel",
    id : "titanium-gear-wheel",
    recipe : "titanium-gear-wheel",
    energy_required : 0.5,
    ingredients :
    [
      ["titanium-plate", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "titanium-bearing": {
    name : "Titanium bearing",
    id : "titanium-bearing",
    recipe : "titanium-bearing",
    energy_required : 0.5,
    ingredients :
    [
      ["titanium-plate", 1],
      ["titanium-bearing-ball", 16],
      ["lubricant", 1],
    ],
    am_type : "am6",
    result : 2,
  },
  "titanium-bearing-ball": {
    name : "Titanium bearing ball",
    id : "titanium-bearing-ball",
    recipe : "titanium-bearing-ball",
    energy_required : 0.5,
    ingredients :
    [
      ["titanium-plate", 1],
    ],
    am_type : "am6",
    result : 12,
  },
  "processing-unit": {
    name : "Electronic logic board",
    id : "processing-unit",
    recipe : "processing-unit",
    energy_required : 10,
    ingredients :
    [
      ["superior-circuit-board", 1],
      ["basic-electronic-components", 2],
      ["electronic-components", 4],
      ["intergrated-electronics", 2],
      ["solder", 2],
    ],
    am_type : "am6",
    result : 1,
  },
  "superior-circuit-board": {
    name : "Superior circuit board",
    id : "superior-circuit-board",
    recipe : "superior-circuit-board",
    energy_required : 10,
    ingredients :
    [
      ["fibreglass-board", 1],
      ["copper-plate", 1],
      ["gold-plate", 1],
      ["ferric-chloride-solution", 0.5],
    ],
    am_type : "am6",
    result : 1,
  },
  "steel-bearing": {
    name : "Steel bearing",
    id : "steel-bearing",
    recipe : "steel-bearing",
    energy_required : 0.5,
    ingredients :
    [
      ["steel-plate", 1],
      ["steel-bearing-ball", 16],
    ],
    am_type : "am6",
    result : 2,
  },
  "steel-bearing-ball": {
    name : "Steel bearing ball",
    id : "steel-bearing-ball",
    recipe : "steel-bearing-ball",
    energy_required : 0.5,
    ingredients :
    [
      ["steel-plate", 1],
    ],
    am_type : "am6",
    result : 12,
  },
  "brass-gear-wheel": {
    name : "Brass gear wheel",
    id : "brass-gear-wheel",
    recipe : "brass-gear-wheel",
    energy_required : 0.5,
    ingredients :
    [
      ["brass-alloy", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "brass-alloy": {
    name : "Brass plate",
    id : "brass-alloy",
    recipe : "brass-alloy",
    energy_required : 17.5,
    ingredients :
    [
      ["copper-plate", 3],
      ["zinc-plate", 2],
    ],
    am_type : "electric_furnace",
    result : 5,
  },
  "advanced-circuit": {
    name : "Electronic circuit board",
    id : "advanced-circuit",
    recipe : "advanced-circuit",
    energy_required : 5,
    ingredients :
    [
      ["circuit-board", 1],
      ["basic-electronic-components", 4],
      ["electronic-components", 4],
      ["solder", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "circuit-board": {
    name : "Circuit board",
    id : "circuit-board",
    recipe : "circuit-board",
    energy_required : 5,
    ingredients :
    [
      ["phenolic-board", 1],
      ["copper-plate", 1],
      ["tin-plate", 1],
      ["ferric-chloride-solution", 0.5],
    ],
    am_type : "am6",
    result : 1,
  },
  "phenolic-board": {
    name : "Phenolic board",
    id : "phenolic-board",
    recipe : "phenolic-board-synthetic",
    energy_required : 0.5,
    ingredients :
    [
      ["synthetic-wood", 1],
      ["resin", 1],
    ],
    am_type : "am6",
    result : 2,
  },
  "synthetic-wood": {
    name : "Synthetic wood",
    id : "synthetic-wood",
    recipe : "synthetic-wood",
    energy_required : 1,
    ingredients :
    [
      ["heavy-oil", 1],
    ],
    am_type : "chemical_plant",
    result : 2,
  },
  "steel-gear-wheel": {
    name : "Steel gear wheel",
    id : "steel-gear-wheel",
    recipe : "steel-gear-wheel",
    energy_required : 0.5,
    ingredients :
    [
      ["steel-plate", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "iron-gear-wheel": { name : "Iron Gear Wheel", id : "iron-gear-wheel", recipe : "iron-gear-wheel", energy_required : 0.5, ingredients : [["iron-plate", 2],],am_type : "am6",result : 1,},
  "electronic-circuit": {
    name : "Basic electronic board",
    id : "electronic-circuit",
    recipe : "electronic-circuit",
    energy_required : 1,
    ingredients :
    [
      ["basic-circuit-board", 1],
      ["basic-electronic-components", 5],
      ["solder", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "basic-circuit-board": {
    name : "Basic circuit board",
    id : "basic-circuit-board",
    recipe : "basic-circuit-board",
    energy_required : 1,
    ingredients :
    [
      ["wooden-board", 1],
      ["copper-cable", 3],
    ],
    am_type : "am6",
    result : 1,
  },
  "wooden-board": {
    name : "Wooden board",
    id : "wooden-board",
    recipe : "wooden-board-synthetic",
    energy_required : 0.5,
    ingredients :
    [
      ["synthetic-wood", 1],
    ],
    am_type : "am6",
    result : 2,
  },
  "electric-chemical-mixing-furnace-2": {
    name : "Electric multi purpose furnace Mk2",
    id : "electric-chemical-mixing-furnace-2",
    recipe : "electric-chemical-mixing-furnace-2",
    energy_required : 10,
    ingredients :
    [
      ["electric-chemical-mixing-furnace", 1],
      ["copper-tungsten-alloy", 15],
      ["tungsten-plate", 10],
      ["advanced-processing-unit", 10],
      ["tungsten-gear-wheel", 10],
      ["tungsten-pipe", 5],
    ],
    am_type : "am6",
    result : 1,
  },
  "tungsten-pipe": {
    name : "Tungsten pipe",
    id : "tungsten-pipe",
    recipe : "tungsten-pipe",
    energy_required : 0.5,
    ingredients :
    [
      ["tungsten-plate", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "tungsten-gear-wheel": {
    name : "Tungsten gear wheel",
    id : "tungsten-gear-wheel",
    recipe : "tungsten-gear-wheel",
    energy_required : 0.5,
    ingredients :
    [
      ["tungsten-plate", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "copper-tungsten-alloy": {
    name : "Copper-tungsten plate",
    id : "copper-tungsten-alloy",
    recipe : "copper-tungsten-alloy",
    energy_required : 17.5,
    ingredients :
    [
      ["copper-plate", 2],
      ["powdered-tungsten", 3],
    ],
    am_type : "electric_furnace",
    result : 5,
  },
  "powdered-tungsten": {
    name : "Powdered tungsten",
    id : "powdered-tungsten",
    recipe : "powdered-tungsten",
    energy_required : 3.5,
    ingredients :
    [
      ["tungsten-oxide", 1],
      ["hydrogen", 3],
    ],
    am_type : "electric_furnace",
    result : 1,
  },
  "electric-chemical-mixing-furnace": {
    name : "Electric multi purpose furnace",
    id : "electric-chemical-mixing-furnace",
    recipe : "electric-chemical-mixing-furnace",
    energy_required : 10,
    ingredients :
    [
      ["chemical-furnace", 1],
      ["tungsten-plate", 15],
      ["invar-alloy", 10],
      ["processing-unit", 10],
      ["tungsten-gear-wheel", 10],
      ["tungsten-pipe", 5],
    ],
    am_type : "am6",
    result : 1,
  },
  "invar-alloy": {
    name : "Invar alloy",
    id : "invar-alloy",
    recipe : "invar-alloy",
    energy_required : 17.5,
    ingredients :
    [
      ["nickel-plate", 2],
      ["iron-plate", 3],
    ],
    am_type : "electric_furnace",
    result : 5,
  },
  "chemical-furnace": {
    name : "Chemical furnace",
    id : "chemical-furnace",
    recipe : "chemical-furnace",
    energy_required : 10,
    ingredients :
    [
      ["steel-plate", 15],
      ["stone-brick", 10],
      ["advanced-circuit", 5],
      ["steel-pipe", 5],
    ],
    am_type : "am6",
    result : 1,
  },
  "stone-brick": {
    name : "Stone brick",
    id : "stone-brick",
    recipe : "stone-brick",
    energy_required : 3.5,
    ingredients :
    [
      ["stone", 2],
    ],
    am_type : "electric_furnace",
    result : 1,
  },
  "steel-pipe": {
    name : "Steel pipe",
    id : "steel-pipe",
    recipe : "steel-pipe",
    energy_required : 0.5,
    ingredients :
    [
      ["steel-plate", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "chemical-plant-4": {
    name : "Chemical plant Mk4",
    id : "chemical-plant-4",
    recipe : "chemical-plant-4",
    energy_required : 10,
    ingredients :
    [
      ["chemical-plant-3", 1],
      ["nitinol-alloy", 10],
      ["nitinol-bearing", 5],
      ["nitinol-gear-wheel", 5],
      ["advanced-processing-unit", 10],
      ["tungsten-pipe", 5],
    ],
    am_type : "am6",
    result : 1,
  },
  "chemical-plant-3": {
    name : "Chemical plant Mk3",
    id : "chemical-plant-3",
    recipe : "chemical-plant-3",
    energy_required : 10,
    ingredients :
    [
      ["chemical-plant-2", 1],
      ["titanium-plate", 10],
      ["titanium-bearing", 5],
      ["titanium-gear-wheel", 5],
      ["processing-unit", 10],
      ["titanium-pipe", 5],
    ],
    am_type : "am6",
    result : 1,
  },
  "chemical-plant-2": {
    name : "Chemical plant Mk2",
    id : "chemical-plant-2",
    recipe : "chemical-plant-2",
    energy_required : 10,
    ingredients :
    [
      ["chemical-plant", 1],
      ["glass", 10],
      ["steel-bearing", 5],
      ["steel-gear-wheel", 5],
      ["advanced-circuit", 5],
      ["steel-pipe", 5],
    ],
    am_type : "am6",
    result : 1,
  },
  "chemical-plant": {
    name : "Chemical plant",
    id : "chemical-plant",
    recipe : "chemical-plant",
    energy_required : 10,
    ingredients :
    [
      ["steel-plate", 5],
      ["iron-gear-wheel", 5],
      ["electronic-circuit", 5],
      ["pipe", 5],
    ],
    am_type : "am6",
    result : 1,
  },
  "pipe": {
    name : "Iron pipe",
    id : "pipe",
    recipe : "pipe",
    energy_required : 0.5,
    ingredients :
    [
      ["iron-plate", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "titanium-pipe": {
    name : "Titanium pipe",
    id : "titanium-pipe",
    recipe : "titanium-pipe",
    energy_required : 0.5,
    ingredients :
    [
      ["titanium-plate", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "bob-logistic-zone-expander-4": {
    name : "Logistic zone expander Mk4",
    id : "bob-logistic-zone-expander-4",
    recipe : "bob-logistic-zone-expander-4",
    energy_required : 5,
    ingredients :
    [
      ["bob-logistic-zone-expander-3", 1],
      ["roboport-antenna-4", 3],
      ["roboport-chargepad-4", 1],
      ["nitinol-alloy", 5],
    ],
    am_type : "am6",
    result : 1,
  },
  "bob-logistic-zone-expander-3": {
    name : "Logistic zone expander Mk3",
    id : "bob-logistic-zone-expander-3",
    recipe : "bob-logistic-zone-expander-3",
    energy_required : 5,
    ingredients :
    [
      ["bob-logistic-zone-expander-2", 1],
      ["roboport-antenna-3", 3],
      ["roboport-chargepad-3", 1],
      ["titanium-plate", 5],
    ],
    am_type : "am6",
    result : 1,
  },
  "bob-logistic-zone-expander-2": {
    name : "Logistic zone expander Mk2",
    id : "bob-logistic-zone-expander-2",
    recipe : "bob-logistic-zone-expander-2",
    energy_required : 5,
    ingredients :
    [
      ["bob-logistic-zone-expander", 1],
      ["steel-plate", 5],
      ["roboport-antenna-2", 3],
      ["roboport-chargepad-2", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "bob-logistic-zone-expander": {
    name : "Logistic zone expander Mk1",
    id : "bob-logistic-zone-expander",
    recipe : "bob-logistic-zone-expander",
    energy_required : 5,
    ingredients :
    [
      ["steel-plate", 5],
      ["roboport-antenna-1", 3],
      ["roboport-chargepad-1", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "bob-robo-charge-port-4": {
    name : "Robot charging point Mk4",
    id : "bob-robo-charge-port-4",
    recipe : "bob-robo-charge-port-4",
    energy_required : 5,
    ingredients :
    [
      ["bob-robo-charge-port-3", 1],
      ["roboport-chargepad-4", 4],
      ["nitinol-alloy", 10],
    ],
    am_type : "am6",
    result : 1,
  },
  "bob-robo-charge-port-3": {
    name : "Robot charging point Mk3",
    id : "bob-robo-charge-port-3",
    recipe : "bob-robo-charge-port-3",
    energy_required : 5,
    ingredients :
    [
      ["bob-robo-charge-port-2", 1],
      ["roboport-chargepad-3", 4],
      ["titanium-plate", 10],
    ],
    am_type : "am6",
    result : 1,
  },
  "bob-robo-charge-port-2": {
    name : "Robot charging point Mk2",
    id : "bob-robo-charge-port-2",
    recipe : "bob-robo-charge-port-2",
    energy_required : 5,
    ingredients :
    [
      ["bob-robo-charge-port", 1],
      ["steel-plate", 10],
      ["roboport-chargepad-2", 4],
    ],
    am_type : "am6",
    result : 1,
  },
  "bob-robo-charge-port": {
    name : "Robot charging point Mk1",
    id : "bob-robo-charge-port",
    recipe : "bob-robo-charge-port",
    energy_required : 5,
    ingredients :
    [
      ["steel-plate", 10],
      ["roboport-antenna-1", 1],
      ["roboport-chargepad-1", 4],
    ],
    am_type : "am6",
    result : 1,
  },
  
  };