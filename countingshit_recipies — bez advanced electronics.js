var items = {
  "electronic-circuit": {
    name : "Electronic Circuit",
    id : "electronic-circuit",
    recipe : "electronic-circuit",
    energy_required : 0.5,
    ingredients :
    [
      ["iron-plate", 1],
      ["copper-cable", 3],
    ],
    am_type : "am6",
    result : 1,
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

  "science-pack-1": {
    name : "Science Pack 1",
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
  "productivity-module-2": {
    name : "Productivity Module 2",
    id : "productivity-module-2",
    recipe : "productivity-module-2",
    energy_required : 20,
    ingredients :
    [
      ["productivity-module", 1],
      ["productivity-processor", 2],
      ["module-contact", 5],
    ],
    am_type : "am6",
    result : 1,
  },
  "productivity-module": {
    name : "Productivity Module 1",
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
  "module-contact": {
    name : "Module Contact",
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
    name : "Module Case",
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
    name : "Module Main Board",
    id : "module-circuit-board",
    recipe : "module-circuit-board",
    energy_required : 10,
    ingredients :
    [
      ["copper-plate", 1],
      ["plastic-bar", 1],
      ["tin-plate", 1],
      ["ferric-chloride-solution", 0.5],
    ],
    am_type : "am6",
    result : 1,
  },
  "module-processor-board": {
    name : "Basic Module Board",
    id : "module-processor-board",
    recipe : "module-processor-board",
    energy_required : 10,
    ingredients :
    [
      ["copper-plate", 1],
      ["plastic-bar", 1],
      ["tin-plate", 1],
      ["ferric-chloride-solution", 0.5],
    ],
    am_type : "am6",
    result : 4,
  },
  "speed-processor": {
    name : "Speed circuit board",
    id : "speed-processor",
    recipe : "speed-processor",
    energy_required : 2.5,
    ingredients :
    [
      ["module-processor-board", 1],
      ["electronic-circuit", 2],
      ["advanced-circuit", 2],
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
      ["advanced-circuit", 2],
      ["processing-unit", 2],
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
      ["electronic-circuit", 2],
      ["advanced-circuit", 2],
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
      ["electronic-circuit", 2],
      ["advanced-circuit", 2],
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
      ["electronic-circuit", 2],
      ["advanced-circuit", 2],
    ],
    am_type : "am6",
    result : 1,
  },
  "pollution-create-processor": {
    name : "Pollution producing circuit board",
    id : "pollution-create-processor",
    recipe : "pollution-create-processor",
    energy_required : 2.5,
    ingredients :
    [
      ["module-processor-board", 1],
      ["electronic-circuit", 2],
      ["advanced-circuit", 2],
    ],
    am_type : "am6",
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
  "advanced-circuit": {
    name : "Advanced circuit",
    id : "advanced-circuit",
    recipe : "advanced-circuit",
    energy_required : 8,
    ingredients :
    [
      ["electronic-circuit", 2],
      ["plastic-bar", 2],
      ["copper-cable", 4],
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
      ["advanced-circuit", 5],
      ["module-contact", 5],
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
  "module-processor-board-2": {
    name : "Module logic board",
    id : "module-processor-board-2",
    recipe : "module-processor-board-2",
    energy_required : 20,
    ingredients :
    [
      ["copper-plate", 1],
      ["plastic-bar", 1],
      ["gold-plate", 1],
      ["ferric-chloride-solution", 0.5],
    ],
    am_type : "am6",
    result : 4,
  },
  "processing-unit": {
    name : "Processing unit",
    id : "processing-unit",
    recipe : "processing-unit",
    energy_required : 15,
    ingredients :
    [
      ["electronic-circuit", 20],
      ["advanced-circuit", 2],
      ["sulfuric-acid", 0.5],
    ],
    am_type : "am6",
    result : 1,
  },
  "productivity-module-3": {
    name : "Productivity Module 3",
    id : "productivity-module-3",
    recipe : "productivity-module-3",
    energy_required : 30,
    ingredients :
    [
      ["productivity-module-2", 1],
      ["productivity-processor-2", 3],
      ["advanced-circuit", 5],
      ["module-contact", 5],
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
      ["advanced-circuit", 2],
      ["processing-unit", 2],
    ],
    am_type : "am6",
    result : 1,
  },
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
      ["nitinol-bearing", 5],
      ["nitinol-gear-wheel", 5],
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
      ["processing-unit", 3],
      ["titanium-plate", 9],
      ["titanium-bearing", 5],
      ["titanium-gear-wheel", 5],
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
      ["advanced-circuit", 3],
      ["aluminium-plate", 9],
      ["steel-bearing", 5],
      ["brass-gear-wheel", 5],
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
      ["electronic-circuit", 3],
      ["iron-gear-wheel", 5],
      ["iron-plate", 9],
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
  "advanced-processing-unit": {
    name : "Advanced processing unit",
    id : "advanced-processing-unit",
    recipe : "advanced-processing-unit",
    energy_required : 15,
    ingredients :
    [
      ["advanced-circuit", 20],
      ["processing-unit", 2],
      ["sulfuric-acid", 2],
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
  "ceramic-bearing": {
    name : "Ceramic bearing",
    id : "ceramic-bearing",
    recipe : "ceramic-bearing",
    energy_required : 0.5,
    ingredients :
    [
      ["silicon-nitride", 1],
      ["ceramic-bearing-ball", 16],
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
  "ceramic-bearing-ball": {
    name : "Ceramic bearing ball",
    id : "ceramic-bearing-ball",
    recipe : "ceramic-bearing-ball",
    energy_required : 0.5,
    ingredients :
    [
      ["silicon-nitride", 1],
    ],
    am_type : "am6",
    result : 12,
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
  "electric-chemical-mixing-furnace-2": {
    name : "Electric chemical furnace Mk2",
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
  "electric-chemical-mixing-furnace": {
    name : "Electric chemical furnace",
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
  "chemical-plant-4": {
    name : "Chemical plant mk4",
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
    name : "Chemical plant mk3",
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
    name : "Chemical plant mk2",
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
  "pipe": {
    name : "Pipe",
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
  "expansion-bay": {
    name : "Expansion bay",
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
  "basic-inserter": {
    name : "Basic inserter",
    id : "basic-inserter",
    recipe : "basic-inserter",
    energy_required : 0.5,
    ingredients :
    [
      ["electronic-circuit", 1],
      ["iron-gear-wheel", 1],
      ["iron-plate", 1],
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
  "lab": {
    name : "Lab",
    id : "lab",
    recipe : "lab",
    energy_required : 5,
    ingredients :
    [
      ["electronic-circuit", 10],
      ["iron-gear-wheel", 10],
      ["basic-transport-belt", 4],
    ],
    am_type : "am6",
    result : 1,
  },
  "basic-transport-belt": {
    name : "Transport belt",
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
  "replicator-5": {
    name : "Replicator 5",
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
  "replicator-3": {
    name : "Replicator 3",
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
  "replicator-4": {
    name : "replicator 4",
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
  "replicator-2": {
    name : "replicator 2",
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
    name : "replicator 1",
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
    name : "replication lab",
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
  "lab-module": {
    name : "Modules lab",
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
  
  


  
  //yaoki
  "y-speed-module-1": {
    name : "Yaoki Speed Module",
    id : "y-speed-module-1",
    recipe : "y_modul_blue1-recipe",
    energy_required : 2,
    ingredients :
    [
      ["y-chip-1", 2],
      ["y_structure_element", 1],
      ["y-heat-pipe", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "y-pink-module-2": {
    name : "Yaoki Productivity Module 2",
    id : "y-pink-module-2",
    recipe : "y-pink-module-2-recipe",
    energy_required : 3,
    ingredients :
    [
      ["y-chip-2", 2],
      ["y-pink-module-1", 2],
      ["y_crystal2_combined", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "y-chip-2": {
    name : "Yaoki Mk2 Chip",
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
  "y_dotzetron": {
    name : "D-Z-Wafer",
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
  "y-conductive-wire-1": {
    name : "Conductive Wire",
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

  "y-pink-module-1": {
    name : "Yaoki Productivity Module",
    id : "y-pink-module-1",
    recipe : "y-pink-module-1-recipe",
    energy_required : 3,
    ingredients :
    [
      ["y-chip-1", 2],
      ["y_structure_element", 1],
      ["y-heat-pipe", 1],
    ],
    am_type : "am6",
    result : 1,
  },
  "y-chip-1": {
    name : "M68K Chip",
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
  "y_chip_plate": {
    name : "Chip plate",
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
  "y_structure_element": {
    name : "Durotal Structure Element",
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
  "y-heat-pipe": {
    name : "Heat Exchanger",
    id : "y-heat-pipe",
    recipe : "y-heat-pipe-recipe",
    energy_required : 0.5,
    ingredients :
    [
      ["copper-plate", 2],
      ["iron-plate", 1],
    ],
    am_type : "am6",
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
  
};