var items = {
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
  "iron-gear-wheel": {
    name : "Iron gear wheel",
    id : "iron-gear-wheel",
    recipe : "iron-gear-wheel",
    energy_required : 0.5,
    ingredients :
    [
      ["iron-plate", 2],
    ],
    am_type : "am6",
    result : 1,
  },
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
  "bob-robochest-4": {
    name : "Robochest Mk4",
    id : "bob-robochest-4",
    recipe : "bob-robochest-4",
    energy_required : 5,
    ingredients :
    [
      ["bob-robochest-3", 1],
      ["roboport-chargepad-4", 1],
      ["roboport-door-4", 1],
      ["nitinol-alloy", 8],
    ],
    am_type : "am6",
    result : 1,
  },
  "bob-robochest-3": {
    name : "Robochest Mk3",
    id : "bob-robochest-3",
    recipe : "bob-robochest-3",
    energy_required : 5,
    ingredients :
    [
      ["bob-robochest-2", 1],
      ["roboport-chargepad-3", 1],
      ["roboport-door-3", 1],
      ["titanium-plate", 8],
    ],
    am_type : "am6",
    result : 1,
  },
  "bob-robochest-2": {
    name : "Robochest Mk2",
    id : "bob-robochest-2",
    recipe : "bob-robochest-2",
    energy_required : 5,
    ingredients :
    [
      ["bob-robochest", 1],
      ["steel-plate", 8],
      ["roboport-chargepad-2", 1],
      ["roboport-door-2", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "bob-robochest": {
    name : "Robochest Mk1",
    id : "bob-robochest",
    recipe : "bob-robochest",
    energy_required : 5,
    ingredients :
    [
      ["smart-chest", 1],
      ["roboport-antenna-1", 1],
      ["roboport-chargepad-1", 1],
      ["roboport-door-1", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "roboport-door-4": {
    name : "Roboport hatch door Mk4",
    id : "roboport-door-4",
    recipe : "roboport-door-4",
    energy_required : 1,
    ingredients :
    [
      ["nitinol-alloy", 15],
      ["nitinol-bearing", 20],
      ["nitinol-gear-wheel", 20],
    ],
    am_type : "am6",
    result : 1,
  },
  "roboport-door-3": {
    name : "Roboport hatch door Mk3",
    id : "roboport-door-3",
    recipe : "roboport-door-3",
    energy_required : 1,
    ingredients :
    [
      ["titanium-plate", 15],
      ["titanium-bearing", 20],
      ["titanium-gear-wheel", 20],
    ],
    am_type : "am6",
    result : 1,
  },
  "roboport-door-2": {
    name : "Roboport hatch door Mk2",
    id : "roboport-door-2",
    recipe : "roboport-door-2",
    energy_required : 1,
    ingredients :
    [
      ["steel-plate", 15],
      ["steel-bearing", 20],
      ["steel-gear-wheel", 20],
    ],
    am_type : "am6",
    result : 1,
  },
  "roboport-door-1": {
    name : "Roboport hatch door Mk1",
    id : "roboport-door-1",
    recipe : "roboport-door-1",
    energy_required : 1,
    ingredients :
    [
      ["steel-plate", 15],
      ["iron-gear-wheel", 20],
    ],
    am_type : "am6",
    result : 1,
  },
  "roboport-chargepad-4": {
    name : "Robot charging pad Mk4",
    id : "roboport-chargepad-4",
    recipe : "roboport-chargepad-4",
    energy_required : 1,
    ingredients :
    [
      ["advanced-processing-unit", 5],
      ["silver-zinc-battery", 2],
      ["nitinol-alloy", 2],
    ],
    am_type : "am6",
    result : 1,
  },
  "roboport-chargepad-3": {
    name : "Robot charging pad Mk3",
    id : "roboport-chargepad-3",
    recipe : "roboport-chargepad-3",
    energy_required : 1,
    ingredients :
    [
      ["processing-unit", 5],
      ["lithium-ion-battery", 2],
      ["titanium-plate", 2],
    ],
    am_type : "am6",
    result : 1,
  },
  "roboport-chargepad-2": {
    name : "Robot charging pad Mk2",
    id : "roboport-chargepad-2",
    recipe : "roboport-chargepad-2",
    energy_required : 1,
    ingredients :
    [
      ["steel-plate", 2],
      ["advanced-circuit", 5],
      ["battery", 2],
    ],
    am_type : "am6",
    result : 1,
  },
  "roboport-chargepad-1": {
    name : "Robot charging pad Mk1",
    id : "roboport-chargepad-1",
    recipe : "roboport-chargepad-1",
    energy_required : 1,
    ingredients :
    [
      ["steel-plate", 2],
      ["advanced-circuit", 5],
    ],
    am_type : "am6",
    result : 1,
  },
  "roboport-antenna-4": {
    name : "Roboport antenna array Mk4",
    id : "roboport-antenna-4",
    recipe : "roboport-antenna-4",
    energy_required : 0.2,
    ingredients :
    [
      ["nickel-plate", 1],
      ["gold-plate", 1],
      ["gilded-copper-cable", 2],
      ["advanced-processing-unit", 5],
    ],
    am_type : "am6",
    result : 1,
  },
  "roboport-antenna-3": {
    name : "Roboport antenna array Mk3",
    id : "roboport-antenna-3",
    recipe : "roboport-antenna-3",
    energy_required : 0.2,
    ingredients :
    [
      ["processing-unit", 5],
      ["nickel-plate", 1],
      ["insulated-cable", 2],
    ],
    am_type : "am6",
    result : 1,
  },
  "roboport-antenna-2": {
    name : "Roboport antenna array Mk2",
    id : "roboport-antenna-2",
    recipe : "roboport-antenna-2",
    energy_required : 0.2,
    ingredients :
    [
      ["advanced-circuit", 5],
      ["aluminium-plate", 1],
      ["tinned-copper-cable", 2],
    ],
    am_type : "am6",
    result : 1,
  },
  "roboport-antenna-1": {
    name : "Roboport antenna array Mk1",
    id : "roboport-antenna-1",
    recipe : "roboport-antenna-1",
    energy_required : 0.2,
    ingredients :
    [
      ["steel-plate", 1],
      ["copper-cable", 2],
      ["advanced-circuit", 5],
    ],
    am_type : "am6",
    result : 1,
  },
  "battery": {
    name : "Battery",
    id : "battery",
    recipe : "y-battery-rip1-recipe",
    energy_required : 1,
    ingredients :
    [
      ["y-battery-single-use1", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "y-battery-single-use1": {
    name : "Empty battery cell",
    id : "y-battery-single-use1",
    recipe : "y-battery-singleuse1-recipe",
    energy_required : 2,
    ingredients :
    [
      ["y-crush-yres2", 3],
      ["coal", 1],
      ["iron-plate", 1],
    ],
    am_type : "am6",
    result : 3,
  },
  "insulated-cable": {
    name : "Insulated cable",
    id : "insulated-cable",
    recipe : "insulated-cable",
    energy_required : 0.5,
    ingredients :
    [
      ["rubber", 1],
      ["tinned-copper-cable", 2],
    ],
    am_type : "am6",
    result : 2,
  },
  "rubber": {
    name : "Rubber",
    id : "rubber",
    recipe : "bob-rubber",
    energy_required : 3.5,
    ingredients :
    [
      ["resin", 1],
    ],
    am_type : "electric_furnace",
    result : 1,
  },
  "lithium-ion-battery": {
    name : "Lithium-ion battery",
    id : "lithium-ion-battery",
    recipe : "lithium-ion-battery",
    energy_required : 0.5,
    ingredients :
    [
      ["lithium-perchlorate", 2],
      ["lithium-cobalt-oxide", 1],
      ["carbon", 1],
      ["plastic-bar", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "lithium-cobalt-oxide": {
    name : "Lithium cobalt oxide",
    id : "lithium-cobalt-oxide",
    recipe : "lithium-cobalt-oxide",
    energy_required : 7,
    ingredients :
    [
      ["lithium", 1],
      ["cobalt-oxide", 1],
    ],
    am_type : "electric_furnace",
    result : 2,
  },
  "cobalt-oxide": {
    name : "Cobalt oxide",
    id : "cobalt-oxide",
    recipe : "cobalt-oxide",
    energy_required : 7,
    ingredients :
    [
      ["cobalt-ore", 2],
      ["stone", 1],
    ],
    am_type : "electric_furnace",
    result : 2,
  },
  "lithium": {
    name : "Lithium",
    id : "lithium",
    recipe : "lithium",
    energy_required : 3.5,
    ingredients :
    [
      ["lithium-chloride", 1],
    ],
    am_type : "chemical_plant",
    result : 1,
  },
  "lithium-chloride": {
    name : "Lithium chloride",
    id : "lithium-chloride",
    recipe : "lithium-chloride",
    energy_required : 0.5,
    ingredients :
    [
      ["lithia-water", 2.5],
    ],
    am_type : "electric_furnace",
    result : 1,
  },
  "lithium-perchlorate": {
    name : "Lithium perchlorate",
    id : "lithium-perchlorate",
    recipe : "lithium-water-electrolysis",
    energy_required : 1,
    ingredients :
    [
      ["lithium-chloride", 1],
      ["water", 2],
    ],
    am_type : "chemical_plant",
    result : 1,
  },
  "silver-zinc-battery": {
    name : "Silver-zinc battery",
    id : "silver-zinc-battery",
    recipe : "silver-zinc-battery",
    energy_required : 0.5,
    ingredients :
    [
      ["sodium-hydroxide", 2],
      ["silver-oxide", 1],
      ["zinc-plate", 1],
      ["plastic-bar", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "silver-oxide": {
    name : "Silver oxide",
    id : "silver-oxide",
    recipe : "silver-oxide",
    energy_required : 5,
    ingredients :
    [
      ["silver-nitrate", 1],
      ["sodium-hydroxide", 1],
    ],
    am_type : "chemical_plant",
    result : 1,
  },
  "silver-nitrate": {
    name : "Silver nitrade",
    id : "silver-nitrate",
    recipe : "silver-nitrate",
    energy_required : 5,
    ingredients :
    [
      ["silver-plate", 1],
      ["nitrogen-dioxide", 1],
    ],
    am_type : "chemical_plant",
    result : 1,
  },
  "sodium-hydroxide": {
    name : "Sodium hydroxide",
    id : "sodium-hydroxide",
    recipe : "salt-water-electrolysis",
    energy_required : 1,
    ingredients :
    [
      ["salt", 2],
      ["water", 2],
    ],
    am_type : "chemical_plant",
    result : 1,
  },
  "salt": {
    name : "Salt",
    id : "salt",
    recipe : "salt",
    energy_required : 0.5,
    ingredients :
    [
      ["water", 2.5],
    ],
    am_type : "electric_furnace",
    result : 1,
  },
  "smart-chest": {
    name : "Smart chest",
    id : "smart-chest",
    recipe : "smart-chest",
    energy_required : 0.5,
    ingredients :
    [
      ["steel-chest", 1],
      ["electronic-circuit", 3],
    ],
    am_type : "am6",
    result : 1,
  },
  "steel-chest": {
    name : "Steel chest",
    id : "steel-chest",
    recipe : "steel-chest",
    energy_required : 0.5,
    ingredients :
    [
      ["steel-plate", 8],
    ],
    am_type : "am6",
    result : 1,
  },
  "small-lamp": {
    name : "Lamp",
    id : "small-lamp",
    recipe : "small-lamp",
    energy_required : 0.5,
    ingredients :
    [
      ["electronic-circuit", 1],
      ["iron-stick", 3],
      ["iron-plate", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "iron-stick": {
    name : "Iron stick",
    id : "iron-stick",
    recipe : "iron-stick",
    energy_required : 0.5,
    ingredients :
    [
      ["iron-plate", 1],
    ],
    am_type : "am6",
    result : 2,
  },
  "substation": {
    name : "Substation",
    id : "substation",
    recipe : "substation",
    energy_required : 0.5,
    ingredients :
    [
      ["steel-plate", 10],
      ["advanced-circuit", 5],
      ["copper-plate", 5],
    ],
    am_type : "am6",
    result : 1,
  },
  "expansion-bay": {
    name : "Expansion Bay",
    id : "expansion-bay",
    recipe : "expansion-bay",
    energy_required : 15,
    ingredients :
    [
      ["electronic-circuit", 10],
      ["steel-plate", 10],
      ["copper-cable", 10],
      ["matter-conduit", 5],
    ],
    am_type : "am6",
    result : 1,
  },
  "matter-conduit": {
    name : "Matter conduit",
    id : "matter-conduit",
    recipe : "matter-conduit",
    energy_required : 0.5,
    ingredients :
    [
      ["dark-matter-transducer", 4],
      ["dark-matter-scoop", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "dark-matter-transducer": {
    name : "Dark matter transducer",
    id : "dark-matter-transducer",
    recipe : "dark-matter-transducer",
    energy_required : 0.5,
    ingredients :
    [
      ["dark-matter-scoop", 4],
      ["steel-plate", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "dark-matter-scoop": {
    name : "Dark matter scoop",
    id : "dark-matter-scoop",
    recipe : "dark-matter-scoop",
    energy_required : 0.5,
    ingredients :
    [
      ["tenemut", 4],
      ["iron-plate", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "science-pack-1": {
    name : "Science pack 1",
    id : "science-pack-1",
    recipe : "science-pack-1",
    energy_required : 5,
    ingredients :
    [
      ["copper-plate", 1],
      ["iron-gear-wheel", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "science-pack-2": {
    name : "Science pack 2",
    id : "science-pack-2",
    recipe : "science-pack-2",
    energy_required : 6,
    ingredients :
    [
      ["basic-inserter", 1],
      ["basic-transport-belt", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "science-pack-3": {
    name : "Science pack 3",
    id : "science-pack-3",
    recipe : "science-pack-3",
    energy_required : 12,
    ingredients :
    [
      ["battery", 1],
      ["advanced-circuit", 1],
      ["smart-inserter", 1],
      ["steel-plate", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "alien-science-pack": {
    name : "Science pack 4",
    id : "alien-science-pack",
    recipe : "alien-science-pack",
    energy_required : 12,
    ingredients :
    [
      ["alien-artifact", 1],
    ],
    am_type : "am6",
    result : 10,
  },
  "replicator-5": {
    name : "Replicator Mk5",
    id : "replicator-5",
    recipe : "replicator-5",
    energy_required : 0.5,
    ingredients :
    [
      ["processing-unit", 1],
      ["matter-conduit", 4],
      ["replicator-4", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "replicator-4": {
    name : "Replicator Mk4",
    id : "replicator-4",
    recipe : "replicator-4",
    energy_required : 0.5,
    ingredients :
    [
      ["advanced-circuit", 2],
      ["matter-conduit", 2],
      ["replicator-3", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "replicator-3": {
    name : "Replicator Mk3",
    id : "replicator-3",
    recipe : "replicator-3",
    energy_required : 0.5,
    ingredients :
    [
      ["advanced-circuit", 1],
      ["dark-matter-transducer", 4],
      ["replicator-2", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "replicator-2": {
    name : "Replicator Mk2",
    id : "replicator-2",
    recipe : "replicator-2",
    energy_required : 0.5,
    ingredients :
    [
      ["electronic-circuit", 2],
      ["dark-matter-transducer", 2],
      ["replicator-1", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "replicator-1": {
    name : "Replicator Mk1",
    id : "replicator-1",
    recipe : "replicator-1",
    energy_required : 0.5,
    ingredients :
    [
      ["iron-plate", 4],
      ["electronic-circuit", 1],
      ["dark-matter-scoop", 4],
    ],
    am_type : "am6",
    result : 1,
  },
  "replication-lab": {
    name : "Replication lab",
    id : "replication-lab",
    recipe : "replication-lab",
    energy_required : 0.5,
    ingredients :
    [
      ["dark-matter-scoop", 5],
      ["electronic-circuit", 10],
      ["copper-plate", 10],
    ],
    am_type : "am6",
    result : 1,
  },
  "lab": {
    name : "Lab",
    id : "lab",
    recipe : "lab",
    energy_required : 5,
    ingredients :
    [
      ["iron-gear-wheel", 10],
      ["basic-transport-belt", 4],
      ["basic-circuit-board", 10],
    ],
    am_type : "am6",
    result : 1,
  },
  "lab-module": {
    name : "Module lab",
    id : "lab-module",
    recipe : "lab-module",
    energy_required : 15,
    ingredients :
    [
      ["lab", 1],
      ["speed-processor", 5],
      ["effectivity-processor", 5],
      ["productivity-processor", 5],
    ],
    am_type : "am6",
    result : 1,
  },
  "purple-transport-belt": {
    name : "Transport belt Mk5",
    id : "purple-transport-belt",
    recipe : "purple-transport-belt",
    energy_required : 0.5,
    ingredients :
    [
      ["green-transport-belt", 1],
      ["nitinol-bearing", 5],
      ["nitinol-gear-wheel", 5],
    ],
    am_type : "am6",
    result : 1,
  },
  "green-transport-belt": {
    name : "Transport belt Mk4",
    id : "green-transport-belt",
    recipe : "green-transport-belt",
    energy_required : 0.5,
    ingredients :
    [
      ["express-transport-belt", 1],
      ["titanium-bearing", 5],
      ["titanium-gear-wheel", 5],
    ],
    am_type : "am6",
    result : 1,
  },
  "express-transport-belt": {
    name : "Transport belt Mk3",
    id : "express-transport-belt",
    recipe : "express-transport-belt",
    energy_required : 0.5,
    ingredients :
    [
      ["iron-gear-wheel", 5],
      ["fast-transport-belt", 1],
      ["lubricant", 2],
    ],
    am_type : "am6",
    result : 1,
  },
  "fast-transport-belt": {
    name : "Transport belt Mk2",
    id : "fast-transport-belt",
    recipe : "fast-transport-belt",
    energy_required : 0.5,
    ingredients :
    [
      ["iron-gear-wheel", 5],
      ["basic-transport-belt", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "basic-transport-belt": {
    name : "Transport belt Mk1",
    id : "basic-transport-belt",
    recipe : "basic-transport-belt",
    energy_required : 0.5,
    ingredients :
    [
      ["iron-plate", 1],
      ["iron-gear-wheel", 1],
    ],
    am_type : "am6",
    result : 2,
  },
  "raw-productivity-module-8-alt": {
    name : "Raw productivity module 8 combine",
    id : "raw-productivity-module-8",
    recipe : "raw-productivity-module-8-combine",
    energy_required : 120,
    ingredients :
    [
      ["productivity-module-8", 1],
      ["effectivity-module-8", 1],
      ["pollution-clean-module-8", 1],
      ["solder", 10],
    ],
    am_type : "am6",
    result : 1,
  },
  "raw-speed-module-8-alt": {
    name : "Raw speed module 8 combine",
    id : "raw-speed-module-8",
    recipe : "raw-speed-module-8-combine",
    energy_required : 120,
    ingredients :
    [
      ["speed-module-8", 1],
      ["effectivity-module-8", 1],
      ["solder", 10],
    ],
    am_type : "am6",
    result : 1,
  },
  "green-module-8-alt": {
    name : "Green module 8 combine",
    id : "green-module-8",
    recipe : "green-module-8-combine",
    energy_required : 120,
    ingredients :
    [
      ["effectivity-module-8", 1],
      ["pollution-clean-module-8", 1],
      ["solder", 10],
    ],
    am_type : "am6",
    result : 1,
  },
  "productivity-module-8": {
    name : "Productivity module 8",
    id : "productivity-module-8",
    recipe : "productivity-module-8",
    energy_required : 80,
    ingredients :
    [
      ["productivity-module-7", 1],
      ["productivity-processor-3", 10],
      ["solder", 8],
      ["module-contact", 5],
      ["electronic-components", 5],
      ["intergrated-electronics", 5],
      ["processing-electronics", 5],
      ["diamond-5", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "productivity-module-7": {
    name : "Productivity module 7",
    id : "productivity-module-7",
    recipe : "productivity-module-7",
    energy_required : 70,
    ingredients :
    [
      ["productivity-module-6", 1],
      ["productivity-processor-3", 8],
      ["solder", 7],
      ["module-contact", 5],
      ["intergrated-electronics", 5],
      ["processing-electronics", 3],
      ["topaz-5", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "productivity-module-6": {
    name : "Productivity module 6",
    id : "productivity-module-6",
    recipe : "productivity-module-6",
    energy_required : 60,
    ingredients :
    [
      ["productivity-module-5", 1],
      ["productivity-processor-3", 6],
      ["solder", 5],
      ["module-contact", 5],
      ["intergrated-electronics", 5],
      ["emerald-5", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "productivity-module-5": {
    name : "Productivity module 5",
    id : "productivity-module-5",
    recipe : "productivity-module-5",
    energy_required : 50,
    ingredients :
    [
      ["productivity-module-4", 1],
      ["productivity-processor-2", 5],
      ["solder", 4],
      ["module-contact", 5],
      ["intergrated-electronics", 5],
      ["ruby-5", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "productivity-module-4": {
    name : "Productivity module 4",
    id : "productivity-module-4",
    recipe : "productivity-module-4",
    energy_required : 40,
    ingredients :
    [
      ["productivity-module-3", 1],
      ["productivity-processor-2", 4],
      ["solder", 3],
	  ["module-contact", 5],
      ["intergrated-electronics", 5],
    ],
    am_type : "am6",
    result : 1,
  },
  "productivity-module-3": {
    name : "Productivity module 3",
    id : "productivity-module-3",
    recipe : "productivity-module-3",
    energy_required : 30,
    ingredients :
    [
      ["productivity-module-2", 1],
      ["productivity-processor-2", 3],
      ["solder", 2],
      ["electronic-components", 5],
    ],
    am_type : "am6",
    result : 1,
  },
  "productivity-module-2": {
    name : "Productivity module 2",
    id : "productivity-module-2",
    recipe : "productivity-module-2",
    energy_required : 20,
    ingredients :
    [
      ["productivity-module", 1],
      ["productivity-processor", 2],
      ["module-contact", 5],
      ["solder", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "productivity-module": {
    name : "Productivity module 1",
    id : "productivity-module",
    recipe : "productivity-module",
    energy_required : 10,
    ingredients :
    [
      ["productivity-processor", 1],
      ["module-case", 1],
      ["module-circuit-board", 1],
      ["module-contact", 4],
    ],
    am_type : "am6",
    result : 1,
  },
  "speed-module-8": {
    name : "Speed module 8",
    id : "speed-module-8",
    recipe : "speed-module-8",
    energy_required : 80,
    ingredients :
    [
      ["speed-module-7", 1],
      ["speed-processor-3", 10],
      ["solder", 8],
      ["module-contact", 5],
      ["electronic-components", 5],
      ["intergrated-electronics", 5],
      ["processing-electronics", 5],
      ["diamond-5", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "speed-module-7": {
    name : "Speed module 7",
    id : "speed-module-7",
    recipe : "speed-module-7",
    energy_required : 70,
    ingredients :
    [
      ["speed-module-6", 1],
      ["speed-processor-3", 8],
      ["solder", 7],
      ["module-contact", 5],
      ["intergrated-electronics", 5],
      ["processing-electronics", 3],
      ["topaz-5", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "speed-module-6": {
    name : "Speed module 6",
    id : "speed-module-6",
    recipe : "speed-module-6",
    energy_required : 60,
    ingredients :
    [
      ["speed-module-5", 1],
      ["speed-processor-3", 6],
      ["solder", 5],
      ["module-contact", 5],
      ["intergrated-electronics", 5],
      ["emerald-5", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "speed-module-5": {
    name : "Speed module 5",
    id : "speed-module-5",
    recipe : "speed-module-5",
    energy_required : 50,
    ingredients :
    [
      ["speed-module-4", 1],
      ["speed-processor-2", 5],
      ["solder", 4],
      ["module-contact", 5],
      ["intergrated-electronics", 5],
      ["ruby-5", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "speed-module-4": {
    name : "Speed module 4",
    id : "speed-module-4",
    recipe : "speed-module-4",
    energy_required : 40,
    ingredients :
    [
      ["speed-module-3", 1],
      ["speed-processor-2", 4],
      ["module-contact", 5],
      ["solder", 3],
      ["intergrated-electronics", 5],
    ],
    am_type : "am6",
    result : 1,
  },
  "speed-module-3": {
    name : "Speed module 3",
    id : "speed-module-3",
    recipe : "speed-module-3",
    energy_required : 30,
    ingredients :
    [
      ["speed-module-2", 1],
      ["speed-processor-2", 3],
      ["solder", 2],
      ["electronic-components", 5],
    ],
    am_type : "am6",
    result : 1,
  },
  "speed-module-2": {
    name : "Speed module 2",
    id : "speed-module-2",
    recipe : "speed-module-2",
    energy_required : 20,
    ingredients :
    [
      ["speed-module", 1],
      ["speed-processor", 2],
      ["module-contact", 5],
      ["solder", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "speed-module": {
    name : "Speed module 1",
    id : "speed-module",
    recipe : "speed-module",
    energy_required : 10,
    ingredients :
    [
      ["speed-processor", 1],
      ["module-case", 1],
      ["module-circuit-board", 1],
      ["module-contact", 4],
    ],
    am_type : "am6",
    result : 1,
  },
  "effectivity-module-8": {
    name : "Effectivity module 8",
    id : "effectivity-module-8",
    recipe : "effectivity-module-8",
    energy_required : 80,
    ingredients :
    [
      ["effectivity-module-7", 1],
      ["effectivity-processor-3", 10],
      ["solder", 8],
      ["module-contact", 5],
      ["electronic-components", 5],
      ["intergrated-electronics", 5],
      ["processing-electronics", 5],
      ["diamond-5", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "effectivity-module-7": {
    name : "Effectivity module 7",
    id : "effectivity-module-7",
    recipe : "effectivity-module-7",
    energy_required : 70,
    ingredients :
    [
      ["effectivity-module-6", 1],
      ["effectivity-processor-3", 8],
      ["solder", 7],
      ["module-contact", 5],
      ["intergrated-electronics", 5],
      ["processing-electronics", 3],
      ["topaz-5", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "effectivity-module-6": {
    name : "Effectivity module 6",
    id : "effectivity-module-6",
    recipe : "effectivity-module-6",
    energy_required : 60,
    ingredients :
    [
      ["effectivity-module-5", 1],
      ["effectivity-processor-3", 6],
      ["solder", 5],
      ["module-contact", 5],
      ["intergrated-electronics", 5],
      ["emerald-5", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "effectivity-module-5": {
    name : "Effectivity module 5",
    id : "effectivity-module-5",
    recipe : "effectivity-module-5",
    energy_required : 50,
    ingredients :
    [
      ["effectivity-module-4", 1],
      ["effectivity-processor-2", 5],
      ["solder", 4],
      ["module-contact", 5],
      ["intergrated-electronics", 5],
      ["ruby-5", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "effectivity-module-4": {
    name : "Effectivity module 4",
    id : "effectivity-module-4",
    recipe : "effectivity-module-4",
    energy_required : 40,
    ingredients :
    [
      ["effectivity-module-3", 1],
      ["effectivity-processor-2", 4],
      ["solder", 3],
	  ["module-contact", 5],
      ["intergrated-electronics", 5],
    ],
    am_type : "am6",
    result : 1,
  },
  "effectivity-module-3": {
    name : "Effectivity module 3",
    id : "effectivity-module-3",
    recipe : "effectivity-module-3",
    energy_required : 30,
    ingredients :
    [
      ["effectivity-module-2", 1],
      ["effectivity-processor-2", 3],
      ["solder", 2],
      ["electronic-components", 5],
    ],
    am_type : "am6",
    result : 1,
  },
  "effectivity-module-2": {
    name : "Effectivity module 2",
    id : "effectivity-module-2",
    recipe : "effectivity-module-2",
    energy_required : 20,
    ingredients :
    [
      ["effectivity-module", 1],
      ["effectivity-processor", 2],
      ["module-contact", 5],
      ["solder", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "effectivity-module": {
    name : "Effectivity module 1",
    id : "effectivity-module",
    recipe : "effectivity-module",
    energy_required : 10,
    ingredients :
    [
      ["effectivity-processor", 1],
      ["module-case", 1],
      ["module-circuit-board", 1],
      ["module-contact", 4],
    ],
    am_type : "am6",
    result : 1,
  },
  "pollution-clean-module-8": {
    name : "Pollution cleaning module 8",
    id : "pollution-clean-module-8",
    recipe : "pollution-clean-module-8",
    energy_required : 80,
    ingredients :
    [
      ["pollution-clean-module-7", 1],
      ["pollution-clean-processor-3", 10],
      ["solder", 8],
      ["module-contact", 5],
      ["electronic-components", 5],
      ["intergrated-electronics", 5],
      ["processing-electronics", 5],
      ["diamond-5", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "pollution-clean-module-7": {
    name : "Pollution cleaning module 7",
    id : "pollution-clean-module-7",
    recipe : "pollution-clean-module-7",
    energy_required : 70,
    ingredients :
    [
      ["pollution-clean-module-6", 1],
      ["pollution-clean-processor-3", 8],
      ["solder", 7],
      ["module-contact", 5],
      ["intergrated-electronics", 5],
      ["processing-electronics", 3],
      ["topaz-5", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "pollution-clean-module-6": {
    name : "Pollution cleaning module 6",
    id : "pollution-clean-module-6",
    recipe : "pollution-clean-module-6",
    energy_required : 60,
    ingredients :
    [
      ["pollution-clean-module-5", 1],
      ["pollution-clean-processor-3", 6],
      ["solder", 5],
      ["module-contact", 5],
      ["intergrated-electronics", 5],
      ["emerald-5", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "pollution-clean-module-5": {
    name : "Pollution cleaning module 5",
    id : "pollution-clean-module-5",
    recipe : "pollution-clean-module-5",
    energy_required : 50,
    ingredients :
    [
      ["pollution-clean-module-4", 1],
      ["pollution-clean-processor-2", 5],
      ["solder", 4],
      ["module-contact", 5],
      ["intergrated-electronics", 5],
      ["ruby-5", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "pollution-clean-module-4": {
    name : "Pollution cleaning module 4",
    id : "pollution-clean-module-4",
    recipe : "pollution-clean-module-4",
    energy_required : 40,
    ingredients :
    [
      ["pollution-clean-module-3", 1],
      ["pollution-clean-processor-2", 4],
      ["solder", 3],
	  ["module-contact", 5],
      ["intergrated-electronics", 5],
    ],
    am_type : "am6",
    result : 1,
  },
  "pollution-clean-module-3": {
    name : "Pollution cleaning module 3",
    id : "pollution-clean-module-3",
    recipe : "pollution-clean-module-3",
    energy_required : 30,
    ingredients :
    [
      ["pollution-clean-module-2", 1],
      ["pollution-clean-processor-2", 3],
      ["solder", 2],
      ["electronic-components", 5],
    ],
    am_type : "am6",
    result : 1,
  },
  "pollution-clean-module-2": {
    name : "Pollution cleaning module 2",
    id : "pollution-clean-module-2",
    recipe : "pollution-clean-module-2",
    energy_required : 20,
    ingredients :
    [
      ["pollution-clean-module-1", 1],
      ["pollution-clean-processor", 2],
      ["module-contact", 5],
      ["solder", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "pollution-clean-module-1": {
    name : "Pollution cleaning module 1",
    id : "pollution-clean-module-1",
    recipe : "pollution-clean-module-1",
    energy_required : 10,
    ingredients :
    [
      ["pollution-clean-processor", 1],
      ["module-case", 1],
      ["module-circuit-board", 1],
      ["module-contact", 4],
    ],
    am_type : "am6",
    result : 1,
  },
  "productivity-processor-3": {
    name : "Productivity processor board",
    id : "productivity-processor-3",
    recipe : "productivity-processor-3",
    energy_required : 7.5,
    ingredients :
    [
      ["module-processor-board-3", 1],
      ["intergrated-electronics", 2],
      ["processing-electronics", 1],
      ["solder", 3],
    ],
    am_type : "am6",
    result : 1,
  },
  "speed-processor-3": {
    name : "Speed processor board",
    id : "speed-processor-3",
    recipe : "speed-processor-3",
    energy_required : 7.5,
    ingredients :
    [
      ["module-processor-board-3", 1],
      ["intergrated-electronics", 2],
      ["processing-electronics", 1],
      ["solder", 3],
    ],
    am_type : "am6",
    result : 1,
  },
  "effectivity-processor-3": {
    name : "Effectvity processor board",
    id : "effectivity-processor-3",
    recipe : "effectivity-processor-3",
    energy_required : 7.5,
    ingredients :
    [
      ["module-processor-board-3", 1],
      ["intergrated-electronics", 2],
      ["processing-electronics", 1],
      ["solder", 3],
    ],
    am_type : "am6",
    result : 1,
  },
  "pollution-clean-processor-3": {
    name : "Pollution cleaning processor board",
    id : "pollution-clean-processor-3",
    recipe : "pollution-clean-processor-3",
    energy_required : 7.5,
    ingredients :
    [
      ["module-processor-board-3", 1],
      ["intergrated-electronics", 2],
      ["processing-electronics", 1],
      ["solder", 3],
    ],
    am_type : "am6",
    result : 1,
  },
  "productivity-processor-2": {
    name : "Productivity logic board",
    id : "productivity-processor-2",
    recipe : "productivity-processor-2",
    energy_required : 5,
    ingredients :
    [
      ["module-processor-board-2", 1],
      ["electronic-components", 2],
      ["intergrated-electronics", 2],
      ["solder", 2],
    ],
    am_type : "am6",
    result : 1,
  },
  "speed-processor-2": {
    name : "Speed logic board",
    id : "speed-processor-2",
    recipe : "speed-processor-2",
    energy_required : 5,
    ingredients :
    [
      ["module-processor-board-2", 1],
      ["electronic-components", 2],
      ["intergrated-electronics", 2],
      ["solder", 2],
    ],
    am_type : "am6",
    result : 1,
  },
  "effectivity-processor-2": {
    name : "Effectivity logic board",
    id : "effectivity-processor-2",
    recipe : "effectivity-processor-2",
    energy_required : 5,
    ingredients :
    [
      ["module-processor-board-2", 1],
      ["electronic-components", 2],
      ["intergrated-electronics", 2],
      ["solder", 2],
    ],
    am_type : "am6",
    result : 1,
  },
  "pollution-clean-processor-2": {
    name : "Pollution cleaning logic board",
    id : "pollution-clean-processor-2",
    recipe : "pollution-clean-processor-2",
    energy_required : 5,
    ingredients :
    [
      ["module-processor-board-2", 1],
      ["electronic-components", 2],
      ["intergrated-electronics", 2],
      ["solder", 2],
    ],
    am_type : "am6",
    result : 1,
  },
  "productivity-processor": {
    name : "Productivity circuit board",
    id : "productivity-processor",
    recipe : "productivity-processor",
    energy_required : 2.5,
    ingredients :
    [
      ["module-processor-board", 1],
      ["basic-electronic-components", 2],
      ["electronic-components", 2],
      ["solder", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "speed-processor": {
    name : "Speed circuit board",
    id : "speed-processor",
    recipe : "speed-processor",
    energy_required : 2.5,
    ingredients :
    [
      ["module-processor-board", 1],
      ["basic-electronic-components", 2],
      ["electronic-components", 2],
      ["solder", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "effectivity-processor": {
    name : "Effectivity circuit board",
    id : "effectivity-processor",
    recipe : "effectivity-processor",
    energy_required : 2.5,
    ingredients :
    [
      ["module-processor-board", 1],
      ["basic-electronic-components", 2],
      ["electronic-components", 2],
      ["solder", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "pollution-clean-processor": {
    name : "Pollution cleaning circuit board",
    id : "pollution-clean-processor",
    recipe : "pollution-clean-processor",
    energy_required : 2.5,
    ingredients :
    [
      ["module-processor-board", 1],
      ["basic-electronic-components", 2],
      ["electronic-components", 2],
      ["solder", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "pollution-create-processor": {
    name : "Pollution create circuit board",
    id : "pollution-create-processor",
    recipe : "pollution-create-processor",
    energy_required : 2.5,
    ingredients :
    [
      ["module-processor-board", 1],
      ["basic-electronic-components", 2],
      ["electronic-components", 2],
      ["solder", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "module-processor-board-3": {
    name : "Module processor board",
    id : "module-processor-board-3",
    recipe : "module-processor-board-3",
    energy_required : 30,
    ingredients :
    [
      ["copper-plate", 2],
      ["gold-plate", 2],
      ["fibreglass-board", 1],
      ["ferric-chloride-solution", 1],
    ],
    am_type : "am6",
    result : 4,
  },
  "module-processor-board-2": {
    name : "Module logic board",
    id : "module-processor-board-2",
    recipe : "module-processor-board-2",
    energy_required : 20,
    ingredients :
    [
      ["copper-plate", 1],
      ["gold-plate", 1],
      ["fibreglass-board", 1],
      ["ferric-chloride-solution", 0.5],
    ],
    am_type : "am6",
    result : 4,
  },
  "module-processor-board": {
    name : "Basic module board",
    id : "module-processor-board",
    recipe : "module-processor-board",
    energy_required : 10,
    ingredients :
    [
      ["copper-plate", 1],
      ["tin-plate", 1],
      ["phenolic-board", 1],
      ["ferric-chloride-solution", 0.5],
    ],
    am_type : "am6",
    result : 4,
  },
  "module-contact": {
    name : "Module contact",
    id : "module-contact",
    recipe : "module-contact",
    energy_required : 5,
    ingredients :
    [
      ["copper-plate", 1],
      ["gold-plate", 1],
    ],
    am_type : "am6",
    result : 5,
  },
  "module-case": {
    name : "Module case",
    id : "module-case",
    recipe : "module-case",
    energy_required : 10,
    ingredients :
    [
      ["plastic-bar", 2],
      ["aluminium-plate", 5],
    ],
    am_type : "am6",
    result : 1,
  },
  "module-circuit-board": {
    name : "Module main board",
    id : "module-circuit-board",
    recipe : "module-circuit-board",
    energy_required : 10,
    ingredients :
    [
      ["copper-plate", 1],
      ["tin-plate", 1],
      ["phenolic-board", 1],
      ["ferric-chloride-solution", 0.5],
    ],
    am_type : "am6",
    result : 1,
  },
  "smart-inserter": {
    name : "Smart inserter",
    id : "smart-inserter",
    recipe : "smart-inserter",
    energy_required : 0.5,
    ingredients :
    [
      ["fast-inserter", 1],
      ["electronic-circuit", 4],
    ],
    am_type : "am6",
    result : 1,
  },
  "fast-inserter": {
    name : "Fast inserter",
    id : "fast-inserter",
    recipe : "fast-inserter",
    energy_required : 0.5,
    ingredients :
    [
      ["electronic-circuit", 2],
      ["iron-plate", 2],
      ["basic-inserter", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "long-handed-inserter": {
    name : "Long handed inserter",
    id : "long-handed-inserter",
    recipe : "long-handed-inserter",
    energy_required : 0.5,
    ingredients :
    [
      ["iron-gear-wheel", 1],
      ["iron-plate", 1],
      ["basic-inserter", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "basic-inserter": {
    name : "Inserter",
    id : "basic-inserter",
    recipe : "basic-inserter",
    energy_required : 0.5,
    ingredients :
    [
      ["iron-gear-wheel", 1],
      ["iron-plate", 1],
      ["basic-circuit-board", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "bob-logistic-robot-4": {
    name : "Logistic robot Mk4",
    id : "bob-logistic-robot-4",
    recipe : "bob-logistic-robot-4",
    energy_required : 0.5,
    ingredients :
    [
      ["bob-logistic-robot-3", 1],
      ["flying-robot-frame-4", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "bob-logistic-robot-3": {
    name : "Logistic robot Mk3",
    id : "bob-logistic-robot-3",
    recipe : "bob-logistic-robot-3",
    energy_required : 0.5,
    ingredients :
    [
      ["bob-logistic-robot-2", 1],
      ["flying-robot-frame-3", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "bob-logistic-robot-2": {
    name : "Logistic robot Mk2",
    id : "bob-logistic-robot-2",
    recipe : "bob-logistic-robot-2",
    energy_required : 0.5,
    ingredients :
    [
      ["logistic-robot", 1],
      ["flying-robot-frame-2", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "logistic-robot": {
    name : "Logistic robot",
    id : "logistic-robot",
    recipe : "logistic-robot",
    energy_required : 0.5,
    ingredients :
    [
      ["flying-robot-frame", 1],
      ["advanced-circuit", 2],
    ],
    am_type : "am6",
    result : 1,
  },
  "flying-robot-frame-4": {
    name : "Flying robot frame Mk4",
    id : "flying-robot-frame-4",
    recipe : "flying-robot-frame-4",
    energy_required : 20,
    ingredients :
    [
      ["electric-engine-unit", 1],
      ["advanced-processing-unit", 3],
      ["silver-zinc-battery", 2],
      ["silicon-nitride", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "flying-robot-frame-3": {
    name : "Flying robot frame Mk3",
    id : "flying-robot-frame-3",
    recipe : "flying-robot-frame-3",
    energy_required : 20,
    ingredients :
    [
      ["electric-engine-unit", 1],
      ["processing-unit", 3],
      ["lithium-ion-battery", 2],
      ["titanium-plate", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "flying-robot-frame-2": {
    name : "Flying robot frame Mk2",
    id : "flying-robot-frame-2",
    recipe : "flying-robot-frame-2",
    energy_required : 20,
    ingredients :
    [
      ["electric-engine-unit", 1],
      ["battery", 2],
      ["advanced-circuit", 3],
      ["aluminium-plate", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "flying-robot-frame": {
    name : "Flying robot frame Mk1",
    id : "flying-robot-frame",
    recipe : "flying-robot-frame",
    energy_required : 20,
    ingredients :
    [
      ["electric-engine-unit", 1],
      ["battery", 2],
      ["steel-plate", 1],
      ["electronic-circuit", 3],
    ],
    am_type : "am6",
    result : 1,
  },
  "electric-engine-unit": {
    name : "Electric engine unit",
    id : "electric-engine-unit",
    recipe : "electric-engine-unit",
    energy_required : 20,
    ingredients :
    [
      ["engine-unit", 1],
      ["electronic-circuit", 2],
      ["lubricant", 2],
    ],
    am_type : "am6",
    result : 1,
  },
  "engine-unit": {
    name : "Engine unit",
    id : "engine-unit",
    recipe : "engine-unit",
    energy_required : 20,
    ingredients :
    [
      ["steel-plate", 1],
      ["iron-gear-wheel", 1],
      ["pipe", 2],
    ],
    am_type : "am6",
    result : 1,
  },
  "wooden-chest-passive": {
    name : "Passive wooden chest",
    id : "wooden-chest-passive",
    recipe : "wooden-chest-passive",
    energy_required : 0.01,
    ingredients :
    [
      ["raw-wood", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "wooden-chest-requester": {
    name : "Requester wooden chest",
    id : "wooden-chest-requester",
    recipe : "wooden-chest-requester",
    energy_required : 0.01,
    ingredients :
    [
      ["raw-wood", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "wooden-chest-storage": {
    name : "Storage wooden chest",
    id : "wooden-chest-storage",
    recipe : "wooden-chest-storage",
    energy_required : 0.01,
    ingredients :
    [
      ["raw-wood", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "diamond-5": {
    name : "Polished diamond",
    id : "diamond-5",
    recipe : "bob-diamond-5",
    energy_required : 17.5,
    ingredients :
    [
      ["diamond-4", 1],
      ["polishing-wheel", 1],
      ["polishing-compound", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "topaz-5": {
    name : "Polished topaz",
    id : "topaz-5",
    recipe : "bob-topaz-5",
    energy_required : 17.5,
    ingredients :
    [
      ["topaz-4", 1],
      ["polishing-wheel", 1],
      ["polishing-compound", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "emerald-5": {
    name : "Polished emerald",
    id : "emerald-5",
    recipe : "bob-emerald-5",
    energy_required : 17.5,
    ingredients :
    [
      ["emerald-4", 1],
      ["polishing-wheel", 1],
      ["polishing-compound", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "ruby-5": {
    name : "Polished ruby",
    id : "ruby-5",
    recipe : "bob-ruby-5",
    energy_required : 17.5,
    ingredients :
    [
      ["ruby-4", 1],
      ["polishing-wheel", 1],
      ["polishing-compound", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "sapphire-5": {
    name : "Polished sapphire",
    id : "sapphire-5",
    recipe : "bob-sapphire-5",
    energy_required : 17.5,
    ingredients :
    [
      ["sapphire-4", 1],
      ["polishing-wheel", 1],
      ["polishing-compound", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "amethyst-5": {
    name : "Polished amethyst",
    id : "amethyst-5",
    recipe : "bob-amethyst-5",
    energy_required : 17.5,
    ingredients :
    [
      ["amethyst-4", 1],
      ["polishing-wheel", 1],
      ["polishing-compound", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "diamond-4": {
    name : "Cut diamond",
    id : "diamond-4",
    recipe : "bob-diamond-4",
    energy_required : 3.5,
    ingredients :
    [
      ["diamond-3", 1],
      ["grinding-wheel", 1],
      ["water", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "topaz-4": {
    name : "Cut topaz",
    id : "topaz-4",
    recipe : "bob-topaz-4",
    energy_required : 3.5,
    ingredients :
    [
      ["topaz-3", 1],
      ["grinding-wheel", 1],
      ["water", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "emerald-4": {
    name : "Cut emerald",
    id : "emerald-4",
    recipe : "bob-emerald-4",
    energy_required : 3.5,
    ingredients :
    [
      ["emerald-3", 1],
      ["grinding-wheel", 1],
      ["water", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "ruby-4": {
    name : "Cut ruby",
    id : "ruby-4",
    recipe : "bob-ruby-4",
    energy_required : 3.5,
    ingredients :
    [
      ["ruby-3", 1],
      ["grinding-wheel", 1],
      ["water", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "sapphire-4": {
    name : "Cut sapphire",
    id : "sapphire-4",
    recipe : "bob-sapphire-4",
    energy_required : 3.5,
    ingredients :
    [
      ["sapphire-3", 1],
      ["grinding-wheel", 1],
      ["water", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "amethyst-4": {
    name : "Cut amethyst",
    id : "amethyst-4",
    recipe : "bob-amethyst-4",
    energy_required : 3.5,
    ingredients :
    [
      ["amethyst-3", 1],
      ["grinding-wheel", 1],
      ["water", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "diamond-3": {
    name : "Raw diamond",
    id : "diamond-3",
    recipe : "bob-diamond-3",
    energy_required : 1,
    ingredients :
    [
      ["diamond-ore", 1],
    ],
    am_type : "am6",
    result : 4,
  },
  "emerald-3": {
    name : "Raw emerald",
    id : "emerald-3",
    recipe : "bob-emerald-3",
    energy_required : 1,
    ingredients :
    [
      ["emerald-ore", 1],
    ],
    am_type : "am6",
    result : 4,
  },
  "topaz-3": {
    name : "Raw topaz",
    id : "topaz-3",
    recipe : "bob-topaz-3",
    energy_required : 1,
    ingredients :
    [
      ["topaz-ore", 1],
    ],
    am_type : "am6",
    result : 4,
  },
  "ruby-3": {
    name : "Raw ruby",
    id : "ruby-3",
    recipe : "bob-ruby-3",
    energy_required : 1,
    ingredients :
    [
      ["ruby-ore", 1],
    ],
    am_type : "am6",
    result : 4,
  },
  "amethyst-3": {
    name : "Raw amethyst",
    id : "amethyst-3",
    recipe : "bob-amethyst-3",
    energy_required : 1,
    ingredients :
    [
      ["amethyst-ore", 1],
    ],
    am_type : "am6",
    result : 4,
  },
  "sapphire-3": {
    name : "Raw sapphire",
    id : "sapphire-3",
    recipe : "bob-sapphire-3",
    energy_required : 1,
    ingredients :
    [
      ["sapphire-ore", 1],
    ],
    am_type : "am6",
    result : 4,
  },
  "grinding-wheel": {
    name : "Grinding wheel",
    id : "grinding-wheel",
    recipe : "grinding-wheel",
    energy_required : 2,
    ingredients :
    [
      ["steel-plate", 1],
      ["silicon-carbide", 5],
    ],
    am_type : "am6",
    result : 2,
  },
  "polishing-wheel": {
    name : "Polishing wheel",
    id : "polishing-wheel",
    recipe : "polishing-wheel-synthetic",
    energy_required : 0.5,
    ingredients :
    [
      ["steel-plate", 1],
      ["synthetic-wood", 5],
    ],
    am_type : "am6",
    result : 2,
  },
  "polishing-compound": {
    name : "Polishing compound",
    id : "polishing-compound",
    recipe : "polishing-compound",
    energy_required : 2,
    ingredients :
    [
      ["alumina", 1],
      ["light-oil", 1.5],
    ],
    am_type : "chemical_plant",
    result : 2,
  },
  "alumina": {
    name : "Alumina",
    id : "alumina",
    recipe : "alumina",
    energy_required : 2,
    ingredients :
    [
      ["sodium-hydroxide", 1],
      ["bauxite-ore", 1],
    ],
    am_type : "electric_furnace",
    result : 1,
  },
  "silicon-carbide": {
    name : "Silicon carbide",
    id : "silicon-carbide",
    recipe : "silicon-carbide",
    energy_required : 7,
    ingredients :
    [
      ["silicon-powder", 1],
      ["carbon", 1],
    ],
    am_type : "electric_furnace",
    result : 2,
  },
  "concrete": {
    name : "Concrete",
    id : "concrete",
    recipe : "concrete",
    energy_required : 10,
    ingredients :
    [
      ["stone-brick", 5],
      ["iron-ore", 1],
      ["water", 10],
    ],
    am_type : "am6",
    result : 10,
  },
  "concrete-white": {
    name : "White concrete",
    id : "concrete-white",
    recipe : "concrete-white",
    energy_required : 0.01,
    ingredients :
    [
      ["concrete", 10],
    ],
    am_type : "am6",
    result : 10,
  },
  "concrete-black": {
    name : "Black concrete",
    id : "concrete-black",
    recipe : "concrete-black",
    energy_required : 0.01,
    ingredients :
    [
      ["concrete", 10],
    ],
    am_type : "am6",
    result : 10,
  },
  "stone-wall": {
    name : "Stone wall",
    id : "stone-wall",
    recipe : "stone-wall",
    energy_required : 0.5,
    ingredients :
    [
      ["stone-brick", 5],
    ],
    am_type : "am6",
    result : 1,
  },
  "reinforced-wall": {
    name : "Reinforced concrete wall",
    id : "reinforced-wall",
    recipe : "reinforced-wall",
    energy_required : 0.5,
    ingredients :
    [
      ["stone-brick", 3],
      ["steel-plate", 3],
    ],
    am_type : "am6",
    result : 1,
  },
  "gate": {
    name : "Gate",
    id : "gate",
    recipe : "gate",
    energy_required : 0.5,
    ingredients :
    [
      ["stone-wall", 1],
      ["steel-plate", 2],
      ["electronic-circuit", 2],
    ],
    am_type : "am6",
    result : 1,
  },
  "reinforced-gate": {
    name : "Reinforced concrete gate",
    id : "reinforced-gate",
    recipe : "reinforced-gate",
    energy_required : 0.5,
    ingredients :
    [
      ["reinforced-wall", 1],
      ["steel-plate", 2],
      ["electronic-circuit", 2],
    ],
    am_type : "am6",
    result : 1,
  },
  "bob-sniper-turret-3": {
    name : "Sniper turret Mk3",
    id : "bob-sniper-turret-3",
    recipe : "bob-sniper-turret-3",
    energy_required : 20,
    ingredients :
    [
      ["bob-sniper-turret-2", 1],
      ["titanium-gear-wheel", 20],
      ["nitinol-bearing", 20],
      ["titanium-plate", 20],
      ["nitinol-alloy", 20],
    ],
    am_type : "am6",
    result : 1,
  },
  "bob-sniper-turret-2": {
    name : "Sniper turret Mk2",
    id : "bob-sniper-turret-2",
    recipe : "bob-sniper-turret-2",
    energy_required : 20,
    ingredients :
    [
      ["bob-sniper-turret-1", 1],
      ["steel-gear-wheel", 20],
      ["steel-bearing", 20],
      ["steel-plate", 20],
      ["invar-alloy", 20],
    ],
    am_type : "am6",
    result : 1,
  },
  "bob-sniper-turret-1": {
    name : "Sniper turret Mk1",
    id : "bob-sniper-turret-1",
    recipe : "bob-sniper-turret-1",
    energy_required : 20,
    ingredients :
    [
      ["iron-gear-wheel", 20],
      ["copper-plate", 20],
      ["iron-plate", 20],
    ],
    am_type : "am6",
    result : 1,
  },
  "Biological-bullet-magazine": {
    name : "Biological bullet magazine",
    id : "Biological-bullet-magazine",
    recipe : "Biological-bullet-magazine",
    energy_required : 5,
    ingredients :
    [
      ["alien-artifact", 1],
      ["plastic-bar", 5],
      ["piercing-bullet-magazine", 5],
    ],
    am_type : "am6",
    result : 5,
  },
  "ap-bullet-magazine": {
    name : "AP bullet magazine",
    id : "ap-bullet-magazine",
    recipe : "ap-bullet-magazine",
    energy_required : 3,
    ingredients :
    [
      ["ap-bullet", 5],
      ["magazine", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "acid-bullet-magazine": {
    name : "Acid bullet magazine",
    id : "acid-bullet-magazine",
    recipe : "acid-bullet-magazine",
    energy_required : 3,
    ingredients :
    [
      ["acid-bullet", 5],
      ["magazine", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "flame-bullet-magazine": {
    name : "Flame bullet magazine",
    id : "flame-bullet-magazine",
    recipe : "flame-bullet-magazine",
    energy_required : 3,
    ingredients :
    [
      ["flame-bullet", 5],
      ["magazine", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "he-bullet-magazine": {
    name : "HE bullet magazine",
    id : "he-bullet-magazine",
    recipe : "he-bullet-magazine",
    energy_required : 3,
    ingredients :
    [
      ["he-bullet", 5],
      ["magazine", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "impact-bullet-magazine": {
    name : "Impact bullet magazine",
    id : "impact-bullet-magazine",
    recipe : "impact-bullet-magazine",
    energy_required : 3,
    ingredients :
    [
      ["impact-bullet", 5],
      ["magazine", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "poison-bullet-magazine": {
    name : "Poison bullet magazine",
    id : "poison-bullet-magazine",
    recipe : "poison-bullet-magazine",
    energy_required : 3,
    ingredients :
    [
      ["poison-bullet", 5],
      ["magazine", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "acid-bullet": {
    name : "Acid bullet",
    id : "acid-bullet",
    recipe : "acid-bullet",
    energy_required : 0.1,
    ingredients :
    [
      ["bullet-casing", 1],
      ["acid-bullet-projectile", 1],
      ["cordite", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "ap-bullet": {
    name : "AP bullet",
    id : "ap-bullet",
    recipe : "ap-bullet",
    energy_required : 0.1,
    ingredients :
    [
      ["bullet-casing", 1],
      ["ap-bullet-projectile", 1],
      ["cordite", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "flame-bullet": {
    name : "Flame bullet",
    id : "flame-bullet",
    recipe : "flame-bullet",
    energy_required : 0.1,
    ingredients :
    [
      ["bullet-casing", 1],
      ["flame-bullet-projectile", 1],
      ["cordite", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "he-bullet": {
    name : "HE bullet",
    id : "he-bullet",
    recipe : "he-bullet",
    energy_required : 0.1,
    ingredients :
    [
      ["bullet-casing", 1],
      ["he-bullet-projectile", 1],
      ["cordite", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "impact-bullet": {
    name : "Impact bullet",
    id : "impact-bullet",
    recipe : "impact-bullet",
    energy_required : 0.1,
    ingredients :
    [
      ["bullet-casing", 1],
      ["impact-bullet-projectile", 1],
      ["cordite", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "poison-bullet": {
    name : "Poison bullet",
    id : "poison-bullet",
    recipe : "poison-bullet",
    energy_required : 0.1,
    ingredients :
    [
      ["bullet-casing", 1],
      ["poison-bullet-projectile", 1],
      ["cordite", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "bullet": {
    name : "Bullet",
    id : "bullet",
    recipe : "bullet",
    energy_required : 0.1,
    ingredients :
    [
      ["bullet-casing", 1],
      ["bullet-projectile", 1],
      ["cordite", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "acid-bullet-projectile": {
    name : "Acid bullet projectile",
    id : "acid-bullet-projectile",
    recipe : "acid-bullet-projectile",
    energy_required : 1,
    ingredients :
    [
      ["copper-plate", 1],
      ["nitric-acid", 1],
    ],
    am_type : "am6",
    result : 2,
  },
  "ap-bullet-projectile": {
    name : "AP bullet projectile",
    id : "ap-bullet-projectile",
    recipe : "ap-bullet-projectile",
    energy_required : 1,
    ingredients :
    [
      ["copper-plate", 1],
      ["tungsten-plate", 1],
    ],
    am_type : "am6",
    result : 2,
  },
  "flame-bullet-projectile": {
    name : "Flame bullet projectile",
    id : "flame-bullet-projectile",
    recipe : "flame-bullet-projectile",
    energy_required : 1,
    ingredients :
    [
      ["copper-plate", 1],
      ["light-oil", 0.5],
      ["heavy-oil", 0.5],
    ],
    am_type : "chemical_plant",
    result : 2,
  },
  "he-bullet-projectile": {
    name : "HE bullet projectile",
    id : "he-bullet-projectile",
    recipe : "he-bullet-projectile",
    energy_required : 1,
    ingredients :
    [
      ["copper-plate", 1],
      ["explosives", 1],
    ],
    am_type : "am6",
    result : 2,
  },
  "impact-bullet-projectile": {
    name : "Impact bullet projectile",
    id : "impact-bullet-projectile",
    recipe : "impact-bullet-projectile",
    energy_required : 1,
    ingredients :
    [
      ["copper-plate", 1],
      ["steel-plate", 1],
    ],
    am_type : "am6",
    result : 2,
  },
  "poison-bullet-projectile": {
    name : "Poison bullet projectile",
    id : "poison-bullet-projectile",
    recipe : "poison-bullet-projectile",
    energy_required : 1,
    ingredients :
    [
      ["copper-plate", 1],
      ["sulfuric-acid", 1],
    ],
    am_type : "am6",
    result : 2,
  },
  "bullet-projectile": {
    name : "Bullet projectile",
    id : "bullet-projectile",
    recipe : "bullet-projectile",
    energy_required : 1,
    ingredients :
    [
      ["copper-plate", 1],
      ["lead-plate", 1],
    ],
    am_type : "am6",
    result : 2,
  },
  "bullet-casing": {
    name : "Bullet casing",
    id : "bullet-casing",
    recipe : "bullet-casing",
    energy_required : 0.5,
    ingredients :
    [
      ["gunmetal-alloy", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "cordite": {
    name : "Cordite",
    id : "cordite",
    recipe : "cordite",
    energy_required : 10,
    ingredients :
    [
      ["gun-cotton", 13],
      ["petroleum-jelly", 1],
      ["nitroglycerin", 6],
    ],
    am_type : "am6",
    result : 5,
  },
  "magazine": {
    name : "Magazine",
    id : "magazine",
    recipe : "magazine",
    energy_required : 1,
    ingredients :
    [
      ["steel-plate", 1],
    ],
    am_type : "am6",
    result : 2,
  },
  "gun-cotton": {
    name : "Gun-cotton",
    id : "gun-cotton",
    recipe : "gun-cotton-synthetic",
    energy_required : 1,
    ingredients :
    [
      ["synthetic-wood", 1],
      ["nitric-acid", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "petroleum-jelly": {
    name : "Petroleum jelly",
    id : "petroleum-jelly",
    recipe : "petroleum-jelly",
    energy_required : 1,
    ingredients :
    [
      ["heavy-oil", 1],
    ],
    am_type : "chemical_plant",
    result : 1,
  },
  "gunmetal-alloy": {
    name : "Gunmetal",
    id : "gunmetal-alloy",
    recipe : "gunmetal-alloy",
    energy_required : 35,
    ingredients :
    [
      ["copper-plate", 8],
      ["tin-plate", 1],
      ["zinc-plate", 1],
    ],
    am_type : "electric_furnace",
    result : 10,
  },
  "repair-pack": {
    name : "Repair pack",
    id : "repair-pack",
    recipe : "repair-pack",
    energy_required : 0.5,
    ingredients :
    [
      ["iron-gear-wheel", 1],
      ["basic-circuit-board", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "basic-bullet-magazine": {
    name : "Regular magazine",
    id : "basic-bullet-magazine",
    recipe : "basic-bullet-magazine",
    energy_required : 2,
    ingredients :
    [
      ["iron-plate", 2],
    ],
    am_type : "am6",
    result : 1,
  },
  "piercing-bullet-magazine": {
    name : "Piercing bullet magazine",
    id : "piercing-bullet-magazine",
    recipe : "piercing-bullet-magazine",
    energy_required : 3,
    ingredients :
    [
      ["copper-plate", 5],
      ["steel-plate", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "concrete-wall": {
    name : "Concrete wall",
    id : "concrete-wall",
    recipe : "concrete-wall",
    energy_required : 5,
    ingredients :
    [
      ["stone-wall", 2],
      ["steel-plate", 1],
      ["concrete", 2],
    ],
    am_type : "am6",
    result : 1,
  },
  "burner-inserter": {
    name : "Burner inserter",
    id : "burner-inserter",
    recipe : "burner-inserter",
    energy_required : 0.5,
    ingredients :
    [
      ["iron-plate", 1],
      ["iron-gear-wheel", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "explosives": {
    name : "Explosives",
    id : "explosives",
    recipe : "explosives",
    energy_required : 5,
    ingredients :
    [
      ["sulfur", 1],
      ["coal", 1],
      ["water", 1],
    ],
    am_type : "chemical_plant",
    result : 1,
  },
  "sulfur": {
    name : "Sulfur",
    id : "sulfur",
    recipe : "sulfur",
    energy_required : 1,
    ingredients :
    [
      ["water", 3],
      ["petroleum-gas", 3],
    ],
    am_type : "chemical_plant",
    result : 2,
  },

  
  
  
  
  //equipment
  
  "energy-shield-mk6-equipment": {
    name : "Energy shield Mk6",
    id : "energy-shield-mk6-equipment",
    recipe : "energy-shield-mk6-equipment",
    energy_required : 10,
    ingredients :
    [
      ["energy-shield-mk5-equipment", 2],
      ["advanced-processing-unit", 5],
      ["effectivity-module-8", 1],
      ["productivity-module-8", 1],
      ["alien-artifact", 30],
    ],
    am_type : "am6",
    result : 1,
  },
  "energy-shield-mk5-equipment": {
    name : "Energy shield Mk5",
    id : "energy-shield-mk5-equipment",
    recipe : "energy-shield-mk5-equipment",
    energy_required : 10,
    ingredients :
    [
      ["energy-shield-mk4-equipment", 2],
      ["advanced-processing-unit", 5],
      ["effectivity-module-6", 1],
      ["productivity-module-6", 1],
      ["alien-artifact", 20],
    ],
    am_type : "am6",
    result : 1,
  },
  "energy-shield-mk4-equipment": {
    name : "Energy shield Mk4",
    id : "energy-shield-mk4-equipment",
    recipe : "energy-shield-mk4-equipment",
    energy_required : 10,
    ingredients :
    [
      ["energy-shield-mk3-equipment", 2],
      ["advanced-processing-unit", 5],
      ["effectivity-module-4", 1],
      ["productivity-module-4", 1],
      ["alien-artifact", 15],
    ],
    am_type : "am6",
    result : 1,
  },
  "energy-shield-mk3-equipment": {
    name : "Energy shield Mk3",
    id : "energy-shield-mk3-equipment",
    recipe : "energy-shield-mk3-equipment",
    energy_required : 10,
    ingredients :
    [
      ["energy-shield-mk2-equipment", 2],
      ["advanced-processing-unit", 5],
      ["alien-artifact", 10],
      ["productivity-module-2", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "energy-shield-mk2-equipment": {
    name : "Energy shield Mk2",
    id : "energy-shield-mk2-equipment",
    recipe : "energy-shield-mk2-equipment",
    energy_required : 10,
    ingredients :
    [
      ["energy-shield-equipment", 2],
      ["processing-unit", 5],
    ],
    am_type : "am6",
    result : 1,
  },
  "energy-shield-equipment": {
    name : "Energy shield Mk1",
    id : "energy-shield-equipment",
    recipe : "energy-shield-equipment",
    energy_required : 10,
    ingredients :
    [
      ["advanced-circuit", 5],
      ["steel-plate", 10],
    ],
    am_type : "am6",
    result : 1,
  },
  "bob-power-armor-mk5": {
    name : "Power armor Mk5",
    id : "bob-power-armor-mk5",
    recipe : "bob-power-armor-mk5",
    energy_required : 30,
    ingredients :
    [
      ["bob-power-armor-mk4", 1],
      ["processing-unit", 50],
      ["advanced-processing-unit", 50],
      ["copper-tungsten-alloy", 25],
      ["nitinol-alloy", 25],
      ["effectivity-module-8", 5],
      ["speed-module-8", 5],
      ["alien-artifact", 120],
    ],
    am_type : "am6",
    result : 1,
  },
  "bob-power-armor-mk4": {
    name : "Power armor Mk4",
    id : "bob-power-armor-mk4",
    recipe : "bob-power-armor-mk4",
    energy_required : 30,
    ingredients :
    [
      ["bob-power-armor-mk3", 1],
      ["processing-unit", 40],
      ["advanced-processing-unit", 20],
      ["titanium-plate", 25],
      ["silicon-nitride", 25],
      ["effectivity-module-6", 5],
      ["speed-module-6", 5],
      ["alien-artifact", 90],
    ],
    am_type : "am6",
    result : 1,
  },
  "bob-power-armor-mk3": {
    name : "Power armor Mk3",
    id : "bob-power-armor-mk3",
    recipe : "bob-power-armor-mk3",
    energy_required : 30,
    ingredients :
    [
      ["power-armor-mk2", 1],
      ["processing-unit", 50],
      ["aluminium-plate", 25],
      ["invar-alloy", 25],
      ["effectivity-module-4", 5],
      ["speed-module-4", 5],
      ["alien-artifact", 70],
    ],
    am_type : "am6",
    result : 1,
  },
  "power-armor-mk2": {
    name : "Power armor Mk2",
    id : "power-armor-mk2",
    recipe : "power-armor-mk2",
    energy_required : 25,
    ingredients :
    [
      ["effectivity-module-3", 5],
      ["speed-module-3", 5],
      ["processing-unit", 40],
      ["steel-plate", 40],
      ["alien-artifact", 50],
    ],
    am_type : "am6",
    result : 1,
  },



  //Yaoki stuff
  "y-alien-infuser": {
    name : "Yuoki - Alien infuser",
    id : "y-alien-infuser",
    recipe : "y-alien-infuser-recipe",
    energy_required : 0.5,
    ingredients :
    [
      ["y-atomic-quantum-composer", 1],
      ["y-atomic-constructor", 1],
      ["y-heat-form-press", 1],
      ["y-fuel-reactor", 2],
    ],
    am_type : "am6",
    result : 1,
  },
  "y-atomic-quantum-composer": {
    name : "Yuoki - Atomic quantum composer",
    id : "y-atomic-quantum-composer",
    recipe : "y-atomic-quantum-composer-recipe",
    energy_required : 0.5,
    ingredients :
    [
      ["y_compensator_25", 2],
      ["y-basic-t2-mf", 3],
      ["alien-artifact", 8],
      ["y_structure_element", 8],
    ],
    am_type : "am6",
    result : 1,
  },
  "y-atomic-constructor": {
    name : "Yuoki - Cimota restructor",
    id : "y-atomic-constructor",
    recipe : "y-atomic-constructor-recipe",
    energy_required : 0.5,
    ingredients :
    [
      ["assembling-machine-2", 1],
      ["y-crusher", 1],
      ["y-heat-form-press", 1],
      ["y-fuel-reactor", 3],
    ],
    am_type : "am6",
    result : 1,
  },
  "y-crusher": {
    name : "Yuoki - Crasher",
    id : "y-crusher",
    recipe : "y-crusher-recipe",
    energy_required : 0.5,
    ingredients :
    [
      ["assembling-machine-1", 2],
      ["copper-plate", 2],
      ["iron-gear-wheel", 6],
    ],
    am_type : "am6",
    result : 1,
  },
  "y-heat-form-press": {
    name : "Yuoki - Form press",
    id : "y-heat-form-press",
    recipe : "y-heat-form-press-recipe",
    energy_required : 0.5,
    ingredients :
    [
      ["assembling-machine-1", 1],
      ["steel-plate", 6],
      ["copper-plate", 2],
      ["iron-gear-wheel", 3],
    ],
    am_type : "am6",
    result : 1,
  },
  "y-fuel-reactor": {
    name : "Yuoki - Alien fuel cell",
    id : "y-fuel-reactor",
    recipe : "y-fuel-reactor-recipe",
    energy_required : 10,
    ingredients :
    [
      ["y-raw-fuelnium", 1],
      ["y-unicomp-raw", 1],
      ["iron-plate", 3],
    ],
    am_type : "am6",
    result : 1,
  },
  "y-basic-t2-mf": {
    name : "Yuoki - Advanced machine frame",
    id : "y-basic-t2-mf",
    recipe : "y-basic-st2-mf-recipe",
    energy_required : 0.5,
    ingredients :
    [
      ["y-conductive-coil-1", 2],
      ["y-conductive-wire-1", 8],
      ["electric-engine-unit", 2],
      ["y_structure_element", 3],
      ["y-bluegear", 3],
    ],
    am_type : "am6",
    result : 1,
  },
  "y-conductive-coil-1": {
    name : "Yuoki - Supra conductive coil",
    id : "y-conductive-coil-1",
    recipe : "y-conductive-coil-1-recipe",
    energy_required : 3,
    ingredients :
    [
      ["y-orange-stuff", 3],
      ["y-refined-yres2", 1],
    ],
    am_type : "am6",
    result : 3,
  },
  "y-conductive-wire-1": {
    name : "Yuoki - Conductive wire",
    id : "y-conductive-wire-1",
    recipe : "y-conductive-wire-1-recipe",
    energy_required : 2,
    ingredients :
    [
      ["y-orange-stuff", 1],
      ["copper-plate", 1],
    ],
    am_type : "am6",
    result : 4,
  },
  "y-bluegear": {
    name : "Yuoki - Reinforced gear",
    id : "y-bluegear",
    recipe : "y-bluegear-recipe",
    energy_required : 0.5,
    ingredients :
    [
      ["steel-plate", 1],
      ["y-refined-yres1", 1],
    ],
    am_type : "am6",
    result : 3,
  },
  "y_structure_element": {
    name : "Yuoki - Durotal structure element",
    id : "y_structure_element",
    recipe : "y_structure_element_recipe",
    energy_required : 0.5,
    ingredients :
    [
      ["iron-plate", 4],
      ["y-unicomp-raw", 2],
    ],
    am_type : "am6",
    result : 3,
  },
  "y_compensator_25": {
    name : "Yuoki - Flux compensator mk4",
    id : "y_compensator_25",
    recipe : "y_compensator_25_recipe",
    energy_required : 5,
    ingredients :
    [
      ["y-substation-m", 1],
      ["y-conductive-wire-1", 4],
      ["y-chip-2", 2],
      ["y_blocked_capa", 2],
    ],
    am_type : "am6",
    result : 1,
  },
  "y-chip-2": {
    name : "Yuoki - I286-chip",
    id : "y-chip-2",
    recipe : "y-chip2-recipe",
    energy_required : 1.5,
    ingredients :
    [
      ["y_chip_plate", 1],
      ["y_dotzetron", 1],
      ["y-conductive-wire-1", 2],
    ],
    am_type : "am6",
    result : 1,
  },
  "y_chip_plate": {
    name : "Yuoki - MFCB",
    id : "y_chip_plate",
    recipe : "y_chip_plate_recipe",
    energy_required : 4,
    ingredients :
    [
      ["y-refined-yres2", 1],
      ["y-richdust", 3],
    ],
    am_type : "am6",
    result : 1,
  },
  "y_dotzetron": {
    name : "Yuoki - D-Z Wafer",
    id : "y_dotzetron",
    recipe : "y_dotzetron_recipe",
    energy_required : 4,
    ingredients :
    [
      ["y-refined-yres2", 1],
      ["y-crush-yres1", 3],
    ],
    am_type : "am6",
    result : 3,
  },
  "y-substation-m": {
    name : "Yuoki - Modified substation St-A",
    id : "y-substation-m",
    recipe : "y-substation-m-recipe",
    energy_required : 3,
    ingredients :
    [
      ["substation", 1],
      ["y-conductive-wire-1", 6],
      ["y-chip-1", 1],
      ["y-unicomp-a2", 2],
    ],
    am_type : "am6",
    result : 1,
  },
  "y_blocked_capa": {
    name : "Yuoki - Wired capacitor component",
    id : "y_blocked_capa",
    recipe : "y_blocked_capa_recipe",
    energy_required : 3,
    ingredients :
    [
      ["y-battery-single-use3", 4],
      ["y-conductive-wire-1", 2],
      ["y-chip-1", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "y-chip-1": {
    name : "Yuoki - M68K-chip",
    id : "y-chip-1",
    recipe : "y-chip1-recipe",
    energy_required : 1,
    ingredients :
    [
      ["y_chip_plate", 1],
      ["y-orange-stuff", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "y-battery-single-use3": {
    name : "Yuoki - Bolcked battery cells",
    id : "y-battery-single-use3",
    recipe : "y-battery-single-use3-recipe",
    energy_required : 4,
    ingredients :
    [
      ["y-battery-single-use2", 2],
      ["y-conductive-wire-1", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "y-battery-single-use2": {
    name : "Yuoki - Full battery cell",
    id : "y-battery-single-use2",
    recipe : "y-battery-singleuse2-recipe",
    energy_required : 4,
    ingredients :
    [
      ["y-battery-single-use1", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "y-substation-h": {
    name : "Yuoki - AEET station",
    id : "y-substation-h",
    recipe : "y-substation-h-recipe",
    energy_required : 3,
    ingredients :
    [
      ["y-substation-m", 1],
      ["y-conductive-wire-1", 8],
      ["y-chip-2", 4],
      ["y_quantrinum_infused", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "y_quantrinum_infused": {
    name : "Quantrinum infusion",
    id : "y_quantrinum_infused",
    recipe : "y_quantrinum_infusion_recipe",
    energy_required : 60,
    ingredients :
    [
      ["y-quantrinum", 1],
      ["y-crystal-cnd", 1],
      ["y-unicomp-a2", 5],
    ],
    am_type : "alien_infuser",
    result : 1,
  },
  "y-unicomp-a2": {
    name : "Yuoki - UniComp A2",
    id : "y-unicomp-a2",
    recipe : "y-ac-uc42uc-recipe",
    energy_required : 2,
    ingredients :
    [
      ["y-res1", 10],
    ],
    am_type : "cimota_restructor",
    result : 1,
  },
  "y-crystal-cnd": {
    name : "Yuoki - Lachnan crystal",
    id : "y-crystal-cnd",
    recipe : "y-crystal-cnd-recipe",
    energy_required : 30,
    ingredients :
    [
      ["y-pure-iron", 10],
      ["y-slag", 40],
      ["y-unicomp-a2", 8],
      ["y-crystal2", 10],
    ],
    am_type : "quantum_composer",
    result : 1,
  },
  "y-quantrinum": {
    name : "Yuoki - Quantrinium",
    id : "y-quantrinum",
    recipe : "y-quantrinum-recipe",
    energy_required : 20,
    ingredients :
    [
      ["y-unicomp-a2", 15],
      ["y-raw-fuelnium", 12],
      ["y-unicomp-raw", 12],
      ["y-crystal2", 8],
    ],
    am_type : "quantum_composer",
    result : 1,
  },


  
  //Replicator Stuff
  "tungstic-acid": {
    name : "Tungstic acid",
    id : "tungstic-acid",
    recipe : "repl-tungstic-acid",
	category : "fluid",
    energy_required : 5.5,
    ingredients :
    [
    ],
    am_type : "replicator5",
    result : 5,
  },
  "nickel-plate": {
    name : "Nickel plate",
    id : "nickel-plate",
    recipe : "repl-nickel-plate",
    energy_required : 6.5,
    ingredients :
    [
    ],
    am_type : "replicator5",
    result : 1,
  },
  "titanium-plate": {
    name : "Titanium plate",
    id : "titanium-plate",
    recipe : "repl-titanium-plate",
    energy_required : 5,
    ingredients :
    [
    ],
    am_type : "replicator5",
    result : 1,
  },
  "coal": {
    name : "Coal",
    id : "coal",
    recipe : "repl-coal",
    energy_required : 2.5,
    ingredients :
    [
    ],
    am_type : "replicator5",
    result : 1,
  },
  "water": {
    name : "Water",
    id : "water",
    recipe : "repl-water",
	category : "fluid",
    energy_required : 5.5,
    ingredients :
    [
    ],
    am_type : "replicator5",
    result : 5,
  },
  "lubricant": {
    name : "Lubricant",
    id : "lubricant",
    recipe : "repl-lubricant",
	category : "fluid",
    energy_required : 10.5,
    ingredients :
    [
    ],
    am_type : "replicator5",
    result : 5,
  },
  "quartz": {
    name : "Quartz",
    id : "quartz",
    recipe : "repl-quartz",
    energy_required : 3.3,
    ingredients :
    [
    ],
    am_type : "replicator5",
    result : 1,
  },
  "coal": {
    name : "Coal",
    id : "coal",
    recipe : "repl-coal",
    energy_required : 2.5,
    ingredients :
    [
    ],
    am_type : "replicator5",
    result : 1,
  },
  "petroleum-gas": {
    name : "Petroleum gas",
    id : "petroleum-gas",
    recipe : "repl-petroleum-gas",
	category : "fluid",
    energy_required : 10.5,
    ingredients :
    [
    ],
    am_type : "replicator5",
    result : 5,
  },
  "copper-plate": {
    name : "Copper plate",
    id : "copper-plate",
    recipe : "repl-copper-plate",
    energy_required : 3.5,
    ingredients :
    [
    ],
    am_type : "replicator5",
    result : 1,
  },
  "gold-plate": {
    name : "Gold plate",
    id : "gold-plate",
    recipe : "repl-gold-plate",
    energy_required : 5.25,
    ingredients :
    [
    ],
    am_type : "replicator5",
    result : 1,
  },
  "ferric-chloride-solution": {
    name : "Ferric chloride solution",
    id : "ferric-chloride-solution",
    recipe : "repl-ferric-chloride-solution",
	category : "fluid",
    energy_required : 5.5,
    ingredients :
    [
    ],
    am_type : "replicator5",
    result : 5,
  },
  "tin-plate": {
    name : "Tin plate",
    id : "tin-plate",
    recipe : "repl-tin-plate",
    energy_required : 3.36,
    ingredients :
    [
    ],
    am_type : "replicator5",
    result : 1,
  },
  "silicon": {
    name : "Silicon plate",
    id : "silicon",
    recipe : "repl-silicon-plate",
    energy_required : 4.8,
    ingredients :
    [
    ],
    am_type : "replicator5",
    result : 1,
  },
  "sulfuric-acid": {
    name : "Sulfuric acid",
    id : "sulfuric-acid",
    recipe : "repl-sulfuric-acid",
	category : "fluid",
    energy_required : 58.5,
    ingredients :
    [
    ],
    am_type : "replicator5",
    result : 5,
  },
  "nitrogen": {
    name : "Nitrogen",
    id : "nitrogen",
    recipe : "repl-nitrogen",
	category : "fluid",
    energy_required : 0.64,
    ingredients :
    [
    ],
    am_type : "replicator5",
    result : 5,
  },
  "lead-plate": {
    name : "Lead plate",
    id : "lead-plate",
    recipe : "repl-lead-plate",
    energy_required : 4.4,
    ingredients :
    [
    ],
    am_type : "replicator5",
    result : 1,
  },
  "heavy-oil": {
    name : "Heavy oil",
    id : "heavy-oil",
    recipe : "repl-heavy-oil",
	category : "fluid",
    energy_required : 10.5,
    ingredients :
    [
    ],
    am_type : "replicator5",
    result : 5,
  },
  "titanium-plate": {
    name : "Titanium plate",
    id : "titanium-plate",
    recipe : "repl-titanium-plate",
    energy_required : 5,
    ingredients :
    [
    ],
    am_type : "replicator5",
    result : 1,
  },
  "aluminium-plate": {
    name : "Aluminium plate",
    id : "aluminium-plate",
    recipe : "repl-aluminium-plate",
    energy_required : 6,
    ingredients :
    [
    ],
    am_type : "replicator5",
    result : 1,
  },
  "steel-plate": {
    name : "Steel plate",
    id : "steel-plate",
    recipe : "repl-steel-plate",
    energy_required : 20.5,
    ingredients :
    [
    ],
    am_type : "replicator5",
    result : 1,
  },
  "zinc-plate": {
    name : "Zinc plate",
    id : "zinc-plate",
    recipe : "repl-zinc-plate",
    energy_required : 4.5,
    ingredients :
    [
    ],
    am_type : "replicator5",
    result : 1,
  },
  "iron-plate": {
    name : "Iron plate",
    id : "iron-plate",
    recipe : "repl-iron-plate",
    energy_required : 3.5,
    ingredients :
    [
    ],
    am_type : "replicator5",
    result : 1,
  },
  "tungsten-plate": {
    name : "Tungsten plate",
    id : "tungsten-plate",
    recipe : "repl-tungsten-plate",
    energy_required : 12.633333333333,
    ingredients :
    [
    ],
    am_type : "replicator5",
    result : 1,
  },
  "hydrogen": {
    name : "Hydrogen",
    id : "hydrogen",
    recipe : "repl-hydrogen",
	category : "fluid",
    energy_required : 2.1666666666667,
    ingredients :
    [
    ],
    am_type : "replicator5",
    result : 5,
  },
  "stone": {
    name : "Stone",
    id : "stone",
    recipe : "repl-stone",
    energy_required : 2.5,
    ingredients :
    [
    ],
    am_type : "replicator5",
    result : 1,
  },
  "y-crush-yres2": {
    name : "Crushed F7",
    id : "y-crush-yres2",
    recipe : "repl-y-crush-yres2",
    energy_required : 5.7,
    ingredients :
    [
    ],
    am_type : "replicator5",
    result : 1,
  },
  "cobalt-ore": {
    name : "Cobaltite",
    id : "cobalt-ore",
    recipe : "repl-cobalt-ore",
    energy_required : 9.6,
    ingredients :
    [
    ],
    am_type : "replicator5",
    result : 1,
  },
  "lithia-water": {
    name : "Lithia water",
    id : "lithia-water",
    recipe : "repl-lithia-water",
	category : "fluid",
    energy_required : 5.5,
    ingredients :
    [
    ],
    am_type : "replicator5",
    result : 5,
  },
  "nitrogen-dioxide": {
    name : "Nitrogen dioxide",
    id : "nitrogen-dioxide",
    recipe : "repl-nitrogen-dioxide",
	category : "fluid",
    energy_required : 4.5333333333333,
    ingredients :
    [
    ],
    am_type : "replicator5",
    result : 5,
  },
  "silver-plate": {
    name : "Silver plate",
    id : "silver-plate",
    recipe : "repl-silver-plate",
    energy_required : 3.06,
    ingredients :
    [
    ],
    am_type : "replicator5",
    result : 1,
  },
  "tenemut": {
    name : "Tenemut",
    name : "Tenemut",
    id : "tenemut",
    recipe : "repl-tenemut",
    energy_required : 3.5,
    ingredients :
    [
    ],
    am_type : "replicator5",
    result : 1,
  },
  "alien-artifact": {
    name : "Alien artifact",
    id : "alien-artifact",
    recipe : "repl-alien-artifact",
    energy_required : 100,
    ingredients :
    [
    ],
    am_type : "replicator5",
    result : 1,
  },
  "light-oil": {
    name : "Light oil",
    id : "light-oil",
    recipe : "repl-light-oil",
	category : "fluid",
    energy_required : 10.5,
    ingredients :
    [
    ],
    am_type : "replicator5",
    result : 5,
  },
  "bauxite-ore": {
    name : "Aluminium ore",
    id : "bauxite-ore",
    recipe : "repl-bauxite-ore",
    energy_required : 3.5,
    ingredients :
    [
    ],
    am_type : "replicator5",
    result : 1,
  },
  "amethyst-ore": {
    name : "Amethyst ore",
    id : "amethyst-ore",
    recipe : "repl-amethyst-ore",
    energy_required : 40.5,
    ingredients :
    [
    ],
    am_type : "replicator5",
    result : 1,
  },
  "diamond-ore": {
    name : "Diamond ore",
    id : "diamond-ore",
    recipe : "repl-diamond-ore",
    energy_required : 100.5,
    ingredients :
    [
    ],
    am_type : "replicator5",
    result : 1,
  },
  "emerald-ore": {
    name : "Emerald ore",
    id : "emerald-ore",
    recipe : "repl-emerald-ore",
    energy_required : 33.833333333333,
    ingredients :
    [
    ],
    am_type : "replicator5",
    result : 1,
  },
  "ruby-ore": {
    name : "Ruby ore",
    id : "ruby-ore",
    recipe : "repl-ruby-ore",
    energy_required : 20.5,
    ingredients :
    [
    ],
    am_type : "replicator5",
    result : 1,
  },
  "sapphire-ore": {
    name : "Spphire ore",
    id : "sapphire-ore",
    recipe : "repl-sapphire-ore",
    energy_required : 25.5,
    ingredients :
    [
    ],
    am_type : "replicator5",
    result : 1,
  },
  "topaz-ore": {
    name : "Topaz ore",
    id : "topaz-ore",
    recipe : "repl-topaz-ore",
    energy_required : 50.5,
    ingredients :
    [
    ],
    am_type : "replicator5",
    result : 1,
  },
  "nitric-acid": {
    name : "nitric-acid",
    id : "nitric-acid",
    recipe : "repl-nitric-acid",
	category : "fluid",
    energy_required : 5.5,
    ingredients :
    [
    ],
    am_type : "replicator5",
    result : 5,
  },
  "nitroglycerin": {
    name : "Nitroglycerin",
    id : "nitroglycerin",
    recipe : "repl-nitroglycerin",
	category : "fluid",
    energy_required : 5.5,
    ingredients :
    [
    ],
    am_type : "replicator5",
    result : 5,
  },
  "iron-ore": {
    name : "Iron ore",
    id : "iron-ore",
    recipe : "repl-iron-ore",
    energy_required : 2.5,
    ingredients :
    [
    ],
    am_type : "replicator5",
    result : 1,
  },
  "raw-wood": {
    name : "Raw wood",
    id : "raw-wood",
    recipe : "repl-raw-wood",
    energy_required : 2.5,
    ingredients :
    [
    ],
    am_type : "replicator5",
    result : 1,
  },
  
  //Yaoki stuff
  "y-richdust": {
    name : "Rich dust",
    id : "y-richdust",
    recipe : "repl-y-richdust",
    energy_required : 5.7,
    ingredients :
    [
    ],
    am_type : "replicator5",
    result : 1,
  },
  "y-crush-yres1": {
    name : "Crushed Dutotal",
    id : "y-crush-yres1",
    recipe : "repl-y-crush-yres1",
    energy_required : 5.7,
    ingredients :
    [
    ],
    am_type : "replicator5",
    result : 1,
  },
  "y-refined-yres2": {
    name : "Refined N7",
    id : "y-refined-yres2",
    recipe : "repl-y-refined-yres2",
    energy_required : 11.5,
    ingredients :
    [
    ],
    am_type : "replicator5",
    result : 1,
  },
  "y-refined-yres1": {
    name : "Refined N4",
    id : "y-refined-yres1",
    recipe : "repl-y-refined-yres1",
    energy_required : 12.4,
    ingredients :
    [
    ],
    am_type : "replicator5",
    result : 1,
  },
  "y-unicomp-raw": {
    name : "Durotal",
    id : "y-unicomp-raw",
    recipe : "repl-y-unicomp-raw",
    energy_required : 38.5,
    ingredients :
    [
    ],
    am_type : "replicator5",
    result : 1,
  },
  "y-orange-stuff": {
    name : "Orange Stuff",
    id : "y-orange-stuff",
    recipe : "repl-y-orange-stuff",
    energy_required : 8.8,
    ingredients :
    [
    ],
    am_type : "replicator5",
    result : 1,
  },
  "y-raw-fuelnium": {
    name : "charged F-C",
    id : "y-raw-fuelnium",
    recipe : "repl-y-raw-fuelnium",
    energy_required : 11.5,
    ingredients :
    [
    ],
    am_type : "replicator5",
    result : 1,
  },
  "y-res1": {
    name : "N4 material chunk",
    id : "y-res1",
    recipe : "repl-y-res1",
    energy_required : 3.5,
    ingredients :
    [
    ],
    am_type : "replicator5",
    result : 1,
  },
  "y-crystal2": {
    name : "Ancient data fragment",
    id : "y-crystal2",
    recipe : "repl-y-crystal2",
    energy_required : 16.5,
    ingredients :
    [
    ],
    am_type : "replicator5",
    result : 1,
  },
  "y-slag": {
    name : "Slag",
    id : "y-slag",
    recipe : "repl-y-slag",
    energy_required : 2.5,
    ingredients :
    [
    ],
    am_type : "replicator5",
    result : 1,
  },
  "y-pure-iron": {
    name : "Pure iron",
    id : "y-pure-iron",
    recipe : "repl-y-pure-iron",
    energy_required : 5.5,
    ingredients :
    [
    ],
    am_type : "replicator5",
    result : 1,
  },
  
  };