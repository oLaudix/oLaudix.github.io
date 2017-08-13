var stepIngredients = {}
var replIngredients = {}
var blueprintStringgggg = [[],[]];
var pos_x = 0;
var pos_x2 = 0;
var pos_y2 = 0;
var pos_y = 0;
var row = 19;
var row2 = 7.5
var space = 3;
var moduleSpeed = 0;
var moduleProd = 0;
ams['electric_furnace'].productivity = 1
ams['electric_furnace'].speed = 1

var itemObjects = {}
{
	for (var a in items_recipies1)
	{
		//alert(a)
		itemObjects[a] = new _item(items_recipies1[a])
		//itemObjects[a].quantity = itemObjects[a].getProduction
		//alert(JSON.stringify(itemObjects[a]))
	}
}
z = 0
function generateBlueprint(_table)
{
	if (step == 14)
	{
		//alert(JSON.stringify(_table.assemblers))
	}
	//stepIngredients
	var stepBlueprint = new _blueprint("01. Basic Circuit Board")
	var blueprintTable = []
	var blueprintTable2 = _table
	//alert(blueprintTable2.assemblers)
	var replicatorTable = []
	var furnaceTable = []
	var item_id = testTable[testTable.length-1].id
	z++
	stepBlueprint.addIcon(item_id)
	//alert(JSON.stringify(stepIngredients))
	pos_x = 0
	pos_y = 0
	pos_x2 = 0
	pos_y2 = 0
	pos_x3 = 0
	pos_y3 = 0
	for (k in blueprintTable2.assemblers)
	{
		//alert(k)
		//alert(blueprintTable2.assemblers[k])
		blueprintTable.push(make_starter_blueprint(blueprintTable2.assemblers[k], ams[items[blueprintTable2.assemblers[k]].am_type].name, new _position(pos_x,pos_y)))
		if(pos_x == row)
		{
			pos_x = 0
			pos_y += 1
		}
		else
		{
			pos_x += 1
		}
	}
	//blueprintStringgggg
	for (b=0; b<blueprintTable.length; b++)
	{
		for (var a = 0; a < blueprintTable[b].blueprint.entities.length; a++)
		{
			blueprintTable[b].blueprint.entities[a].entity_number = blueprintTable[b].blueprint.entities[a].entity_number + (29*(b))
			stepBlueprint.blueprint.entities.push(blueprintTable[b].blueprint.entities[a])
		}
	}
	//blueprintTable
	//$("#savedata2").html("0" + gzip_deflate(stepBlueprint))
	//stepBlueprint.moveBlueprint(17,2)
	var stepBlueprint2 = new _blueprint("Replicators")
	stepBlueprint2.addIcon('replicator-5')
	
	for (k in blueprintTable2.replicators)
	{
		//for (var a = 0; a < blueprintTable2.replicators[k].diff; a++)
		//{
			//alert(k)
			if (pos_x2%2==0)
			{
				replicatorTable.push(make_starter_replicator(false, blueprintTable2.replicators[k], new _position(pos_x2,pos_y2)))
			}
			else
			{
				replicatorTable.push(make_starter_replicator(true, blueprintTable2.replicators[k], new _position(pos_x2,pos_y2)))
				replicatorTable[replicatorTable.length-1].moveBlueprint(1,0)
			}
			if(pos_x2 == (row2*2)-1)
			{
				pos_x2 = 0
				pos_y2 += 1
			}
			else
			{
				pos_x2 += 1
			}
		//}
	}
	for (b=0; b<replicatorTable.length; b++)
	{
		for (var a = 0; a < replicatorTable[b].blueprint.entities.length; a++)
		{
			replicatorTable[b].blueprint.entities[a].entity_number = replicatorTable[b].blueprint.entities[a].entity_number + (5*(b))
			stepBlueprint2.blueprint.entities.push(replicatorTable[b].blueprint.entities[a])
		}
	}
	var stepBlueprint3 = new _blueprint("Furnaces")
	stepBlueprint3.addIcon('stone-furnace')
	for (k in blueprintTable2.furnaces)
	{
		//for (var a = 0; a < blueprintTable2.replicators[k].diff; a++)
		//{
			//alert(k)
			if (pos_x3%2==0)
			{
				furnaceTable.push(make_starter_furnace(false, blueprintTable2.furnaces[k], new _position(pos_x3,pos_y3)))
			}
			else
			{
				furnaceTable.push(make_starter_furnace(true, blueprintTable2.furnaces[k], new _position(pos_x3,pos_y3)))
				furnaceTable[furnaceTable.length-1].moveBlueprint(2,0)
			}
			if(pos_x3 == 9)
			{
				pos_x3 = 0
				pos_y3 += 1
			}
			else
			{
				pos_x3 += 1
			}
		//}
	}
	for (b=0; b<furnaceTable.length; b++)
	{
		for (var a = 0; a < furnaceTable[b].blueprint.entities.length; a++)
		{
			furnaceTable[b].blueprint.entities[a].entity_number = furnaceTable[b].blueprint.entities[a].entity_number + (5*(b))
			stepBlueprint3.blueprint.entities.push(furnaceTable[b].blueprint.entities[a])
		}
	}
	//$("#savedata").html("0" + gzip_deflate(stepBlueprint2))
	//$("#savedata2").html("0" + gzip_deflate(stepBlueprint))
	$("#test2").append("<textarea id=\"" + item_id + z + "4\" style=\"width: 10px; height: 10px; display: none\"></textarea><button type=\"button\" id=\"" + item_id + z + "4blueprintButton\" onclick=\"copyBlueprint('" + item_id + z + "4')\" class=\"btn btn-primary\" style=\" padding: 0px; \">F</button>")
	$("#" + item_id + z + "4").append("0" + gzip_deflate(stepBlueprint3))
	$("#test2").append("<textarea id=\"" + item_id + z + "3\" style=\"width: 10px; height: 10px; display: none\"></textarea><button type=\"button\" id=\"" + item_id + z + "3blueprintButton\" onclick=\"copyBlueprint('" + item_id + z + "3')\" class=\"btn btn-primary\" style=\" padding: 0px; \">R</button>")
	$("#" + item_id + z + "3").append("0" + gzip_deflate(stepBlueprint2))
	$("#test2").append("<textarea id=\"" + item_id + z + "2\" style=\"width: 10px; height: 10px; display: none\"></textarea><button type=\"button\" id=\"" + item_id + z + "2blueprintButton\" onclick=\"copyBlueprint('" + item_id + z + "2')\" class=\"btn btn-primary\" style=\" padding: 0px; \">" + items[item_id].name + "</button><br>")
	$("#" + item_id + z + "2").append("0" + gzip_deflate(stepBlueprint))
}

function make_starter_replicator(rotation, item_id,_shift)
{
	//$("#test").append("<textarea id=\"" + item_id + "\" style=\"width: 10px; height: 10px; display: none\"></textarea><button type=\"button\" id=\"" + item_id + "blueprintButton\" onclick=\"copyBlueprint('" + item_id + "')\" class=\"btn btn-primary\" style=\" padding: 0px; \">c</button>")
	var inserter_type = "inserter"
	var blueprint = new _blueprint("ZZZ - " + items[item_id].name)
	for (var a = -2; a < 2; a++)
	{
		//blueprint.addExpansionBay(new _position(a,-2))
		//blueprint.addExpansionBay(new _position(a,1))
	}
	blueprint.addIcon( items_recipies1[item_id].id)
	//alert(items_recipies1[item_id].recipe)
	blueprint.addAssembler("machine-1", new _position(-0.5,-0.5),4,items_recipies1[item_id].recipe)
	if (rotation)
	{
		blueprint.addInserter(inserter_type, new _position(-2,0), 2, items_recipies1[item_id].id, 1000, "<")
		blueprint.addInserter(inserter_type, new _position(-2,-1), 2, items_recipies1[item_id].id, 1000, "<")
		blueprint.addProvider(new _position(-3,0))
		blueprint.addProvider(new _position(-3,-1))
	}
	else
	{
		blueprint.addInserter(inserter_type, new _position(1,0), 6, items_recipies1[item_id].id, 1000, "<")
		blueprint.addInserter(inserter_type, new _position(1,-1), 6, items_recipies1[item_id].id, 1000, "<")
		blueprint.addProvider(new _position(2,0))
		blueprint.addProvider(new _position(2,-1))

	}
	
	blueprint.moveBlueprint(4*_shift.x, 2*_shift.y)
	return blueprint
	//$("#" + item_id).append(gzip_deflate(blueprint) + "<br>")
}

function make_starter_furnace(rotation, item_id, _shift)
{
	//$("#test").append("<textarea id=\"" + item_id + "\" style=\"width: 10px; height: 10px; display: none\"></textarea><button type=\"button\" id=\"" + item_id + "blueprintButton\" onclick=\"copyBlueprint('" + item_id + "')\" class=\"btn btn-primary\" style=\" padding: 0px; \">c</button>")
	var inserter_type = "inserter"
	var blueprint = new _blueprint("ZZZ - " + items[item_id].name)
	for (var a = -2; a < 2; a++)
	{
		//blueprint.addExpansionBay(new _position(a,-2))
		//blueprint.addExpansionBay(new _position(a,1))
	}
	blueprint.addIcon( items_recipies1[item_id].id)
	//alert(items_recipies1[item_id].recipe)
	blueprint.addAssembler(ams['electric_furnace'].name, new _position(-0.5,-0.5),4,items_recipies1[item_id].recipe)
	if (rotation)
	{
		blueprint.addInserter(inserter_type, new _position(-2,0), 6, items_recipies1[item_id].id, 1000, "<")
		blueprint.addInserter(inserter_type, new _position(-2,-1), 2, items_recipies1[item_id].id, 1000, "<")
		requester = new _requester(new _position(-3,0))
		requester.addRequest(items_recipies1[item_id].ingredients[0][0], 10)
		requester.addRequest("coal", 10)
		blueprint.addRequester(requester)
		//blueprint.addProvider(new _position(-3,0))
		blueprint.addProvider(new _position(-3,-1))
	}
	else
	{
		blueprint.addInserter(inserter_type, new _position(1,0), 2, items_recipies1[item_id].id, 1000, "<")
		blueprint.addInserter(inserter_type, new _position(1,-1), 6, items_recipies1[item_id].id, 1000, "<")
		requester = new _requester(new _position(2,0))
		requester.addRequest(items_recipies1[item_id].ingredients[0][0], 10)
		requester.addRequest("coal", 10)
		blueprint.addRequester(requester)
		//blueprint.addProvider(new _position(2,0))
		blueprint.addProvider(new _position(2,-1))

	}
	
	blueprint.moveBlueprint(4*_shift.x, 2*_shift.y)
	return blueprint
	//$("#" + item_id).append(gzip_deflate(blueprint) + "<br>")
}
inserter_type = "inserter"
function make_starter_blueprint(item_id, assembler_type, _shift)
{
//alert(item_id)
	var output = 100;
	if (ams['am6'].speed > 5)
	{
		var input = 50;
	}
	else
	{
		var input = 5;
	}
	//inserter_type = "inserter"
	var name = items_recipies1[item_id].id
	//var assembler_type = "assembling-machine-3"
	//alert(name)
	var recipe = calculate_recipe(item_id)
	//alert(recipe)
	var blueprint = new _blueprint("ZZZ - " + items_recipies1[item_id].name);
	blueprint.addIcon(items_recipies1[item_id].id)
	//2 - lewo
	//4 - góra
	//6 - prawo
	//0 - dol
	if (ams['am6'].speed > 2)
	{
		blueprint.addExpansionBay(new _position(-2,-2))
		blueprint.addExpansionBay(new _position(2,2))
		blueprint.addExpansionBay(new _position(-2,2))
		blueprint.addExpansionBay(new _position(2,-2))
	}
	blueprint.addProvider(new _position(0,-3))
	blueprint.addInserter(inserter_type, new _position(-1,-2), 0, items_recipies1[item_id].id, output, "<")
	blueprint.addInserter(inserter_type, new _position(0,-2), 4, items_recipies1[item_id].id, output*10, "<")
	blueprint.addInserter(inserter_type, new _position(1,-2), 0, items_recipies1[item_id].id, output, "<")
	
	var multipleRequests = function(ingredients, requster, input)
	{
		for (var a = 0; a < ingredients.length; a++)
		{
			if (items_recipies1[ingredients[a][0]].category != "fluid")
			{
				requester.addRequest(ingredients[a][0], input)
			}
			
			//alert(items[item_id].ingredients[a].id)
		}
	}
	
	var requester = new _requester(new _position(-1,-3))
	multipleRequests(items_recipies1[item_id].ingredients, requester, input)
	blueprint.addRequester(requester)
	requester = new _requester(new _position(1,-3))
	multipleRequests(items_recipies1[item_id].ingredients, requester, input)
	blueprint.addRequester(requester)
	//var requester = new _requester(new _position(1,-3))
		
	blueprint.addAssembler(assembler_type, new _position(0,0),4,items_recipies1[item_id].recipe)
	if (recipe.fluid.length > 0)
	{
		if ((ams[items_recipies1[item_id].am_type].name == "chemical-plant-4") || (ams[items_recipies1[item_id].am_type].name == "chemical-plant"))
		{
			blueprint.addAssembler("machine-1", new _position(-0.5,2.5),0,items_recipies1[recipe.fluid[0]].recipe)
			blueprint.addInserter(inserter_type, new _position(1,2), 4, items_recipies1[item_id].id, output, "<")
			requester = new _requester(new _position(1,3))
			multipleRequests(items_recipies1[item_id].ingredients, requester, input)
			blueprint.addRequester(requester)
		}
		else
		{
			blueprint.addAssembler("machine-1", new _position(0.5,2.5),0,items_recipies1[recipe.fluid[0]].recipe)
			blueprint.addInserter(inserter_type, new _position(-1,2), 4, items_recipies1[item_id].id, output, "<")
			requester = new _requester(new _position(-1,3))
			multipleRequests(items_recipies1[item_id].ingredients, requester, input)
			blueprint.addRequester(requester)
		}
	}
	else
	{
		if (ams["am6"].speed > 3)
		{
			blueprint.addInserter(inserter_type, new _position(-1,2), 4, items_recipies1[item_id].id, output, "<")
			requester = new _requester(new _position(-1,3))
			multipleRequests(items_recipies1[item_id].ingredients, requester, input)
			blueprint.addRequester(requester)
			
			blueprint.addInserter(inserter_type, new _position(0,2), 4, items_recipies1[item_id].id, output, "<")
			requester = new _requester(new _position(0,3))
			multipleRequests(items_recipies1[item_id].ingredients, requester, input)
			blueprint.addRequester(requester)
			
			blueprint.addInserter(inserter_type, new _position(1,2), 4, items_recipies1[item_id].id, output, "<")
			requester = new _requester(new _position(1,3))
			multipleRequests(items_recipies1[item_id].ingredients, requester, input)
			blueprint.addRequester(requester)
		}
	}
	var z=0;
	blueprint.moveBlueprint(space*_shift.x, 7*_shift.y)
	return blueprint
}

var testTable = []
/*
testTable.push(new _item(items_recipies1["production-science-pack"], 240))
testTable.push(new _item(items_recipies1["high-tech-science-pack"], 240))
testTable.push(new _item(items_recipies1["stack-inserter"], 50))
*/
var tets
function createList()
{
	var test = {}
	test["iron-gear-wheel"] = new _item(items_recipies1["iron-gear-wheel"],180)
	test["basic-circuit-board"] = new _item(items_recipies1["basic-circuit-board"],60)
	test["wooden-chest-active-provider"] = new _item(items_recipies1["wooden-chest-active-provider"],1)
	test["wooden-chest-passive-provider"] = new _item(items_recipies1["wooden-chest-passive-provider"],1)
	test["wooden-chest-requester"] = new _item(items_recipies1["wooden-chest-requester"],1)
	test["wooden-chest-storage"] = new _item(items_recipies1["wooden-chest-storage"],1)
	for (var a in test)
	{
		alert(a)
	}
	return test
}
var step = 1;
//createList()
temp()
//generateBlueprint()
function temp()
{
	//testTable = []
	//moduleSpeed = 0.2;
	//var table = []
	//createList()
	if (step == 1)
	{
		ams['am6'].productivity = 1 * (1+(6*moduleProd))
		ams['am6'].speed = 3.5 * (1+(12*moduleSpeed))
		ams['replicator5'].productivity = 1 * (1+(3*moduleProd))
		ams['replicator5'].speed = 16 * (1+(12*moduleSpeed))// * (1+19.2)
		/*var temp2 = new _item(items_recipies1["uranium-rounds-magazine"])
		var debugTxt = temp2.name + "\n"
		debugTxt += "Max: " + temp2.getProduction() + "\n"
		debugTxt += "Asm name: " + ams['am6'].name + "\n"
		debugTxt += "Asm speed: " + ams['am6'].speed + "\n"
		debugTxt += "Asm Productivity: " + ams['am6'].productivity + "\n"
		debugTxt += "Repl speed: " + ams['replicator5'].speed + "\n"
		debugTxt += "repl Productivity: " + ams['replicator5'].productivity + "\n"*/
		//alert(debugTxt)
	}
	testTable = [];
	row = 4;
	switch(step)
	{
		case 1:
			ams['am6'].productivity = 1 * (1+(4*moduleProd))
			ams['am6'].speed = 0.5 * (1+(12*moduleSpeed))
			ams['replicator5'].productivity = 1 * (1+(3*moduleProd))
			ams['replicator5'].speed = 16 * (1+(12*moduleSpeed))// * (1+19.2)
			ams['electric_furnace'].productivity = 1
			ams['electric_furnace'].speed = 1
			ams['chemical_plant'].name = "chemical-plant"
			ams['electric_furnace'].productivity = 1
			ams['chemical_plant'].speed = 1.25 * (1+(12*moduleSpeed))
			row = 7;
			row2 = 7.5
			space = 4;
			moduleSpeed = 0;
			moduleProd = 0;
			ams['am6'].name = "assembling-machine-1"
			ams['electric_furnace'].name = "stone-furnace"
			row = 3;
			testTable.push(new _item(items_recipies1["electric-stone-furnace"],itemObjects["electric-stone-furnace"].getPureProd()*1))
			break;
		case 2:
			testTable.push(new _item(items_recipies1["science-pack-1"],itemObjects["science-pack-1"].getPureProd()*5))
			//testTable.push(new _item(items_recipies1["electronic-circuit"],itemObjects["electronic-circuit"].getPureProd()*4))
			break;
		case 3:
			//inserter_type = "fast-inserter"
			row = 6;
			testTable.push(new _item(items_recipies1["electronic-circuit"],itemObjects["electronic-circuit"].getPureProd()*4))
			//testTable.splice(0, 1);
			break;
		case 4:
			//testTable.push(new _item(items_recipies1["steel-furnace"],itemObjects["steel-furnace"].getPureProd()))
			ams['am6'].name = "assembling-machine-2"
			ams['am6'].speed = 0.75 * (1+(12*moduleSpeed))
			testTable.push(new _item(items_recipies1["repair-pack"],itemObjects["repair-pack"].getPureProd()*1))
			//testTable.push(new _item(items_recipies1["military-science-pack"],itemObjects["military-science-pack"].getPureProd()*5))
			break;
		case 5:
			row = 4
			testTable.push(new _item(items_recipies1["science-pack-2"],itemObjects["science-pack-2"].getPureProd()*6))
			//testTable.push(new _item(items_recipies1["bob-sniper-turret-1"],60))
			break;
		case 6:
			//testTable.push(new _item(items_recipies1["plastic-bar"], itemObjects["plastic-bar"].getPureProd()))
			//row = 14;
			testTable.push(new _item(items_recipies1["piercing-rounds-magazine"],itemObjects["piercing-rounds-magazine"].getPureProd()*3))
			//row = 7;
			//testTable.push(new _item(items_recipies1["assembling-machine-2"], 1))
			break;
		case 7:
			//inserter_type = "fast-inserter"
			testTable.push(new _item(items_recipies1["advanced-circuit"],itemObjects["advanced-circuit"].getPureProd()*4))
			//alert(JSON.stringify(new _item(items_recipies1["gun-turret"])))
			break;
		case 8:
			row = 13;
			testTable.push(new _item(items_recipies1["science-pack-3"],itemObjects["science-pack-3"].getPureProd()*12))
			break;		
		case 9:
			//ams['electric_furnace'].name = "chemical-furnace"
			row = 7;
			testTable.push(new _item(items_recipies1["military-science-pack"],itemObjects["military-science-pack"].getPureProd()*10))
			break;			
		case 10:
			//ams['electric_furnace'].name = "chemical-furnace"
			row = 9;
			testTable.push(new _item(items_recipies1["production-science-pack"],itemObjects["production-science-pack"].getPureProd()*7))
			break;			
		case 11:
			//ams['electric_furnace'].name = "chemical-furnace"
			testTable.push(new _item(items_recipies1["Biological-bullet-magazine"],itemObjects["Biological-bullet-magazine"].getPureProd()*1))
			break;			
		case 12:
			row = 13;
			ams['am6'].name = "assembling-machine-3"
			//testTable.push(new _item(items_recipies1["lab-module"],itemObjects["lab-module"].getPureProd()))
			testTable.push(new _item(items_recipies1["module-case"],30))
			testTable.push(new _item(items_recipies1["module-circuit-board"],30))
			testTable.push(new _item(items_recipies1["speed-processor"],30))
			testTable.push(new _item(items_recipies1["effectivity-processor"],30))
			testTable.push(new _item(items_recipies1["productivity-processor"],30))
			testTable.push(new _item(items_recipies1["pollution-clean-processor"],30))
			testTable.push(new _item(items_recipies1["pollution-create-processor"],30))
			break;
		case 13:
			row = 6;
			ams['electric_furnace'].name = "stone-furnace"
			testTable.push(new _item(items_recipies1["expansion-bay"],itemObjects["expansion-bay"].getPureProd()*4))
			break;
		case 14:
			//moduleSpeed = 0.4;
			//moduleProd = 0.2;
			//ams['am6'].productivity = 1 * (1+(4*moduleProd))
			//ams['am6'].speed = 0.5 * (1+(12*moduleSpeed))
			//ams['chemical_plant'].speed = 1.25 * (1+(12*moduleSpeed))
			row = 14;
			testTable.push(new _item(items_recipies1["raw-speed-module-2"], itemObjects["raw-speed-module-2"].getPureProd()*4))
			testTable.push(new _item(items_recipies1["raw-productivity-module-2"], itemObjects["raw-productivity-module-2"].getPureProd()*4))
			break;
		/*case 11:
			//alert(itemObjects["iron-gear-wheel"].getProduction())
			ams['am6'].name = "assembling-machine-3"
			ams['am6'].speed = 1.25 * (1+(12*moduleSpeed))
			for (var y in testTable)
			{
				testTable[y].quantity = testTable[y].quantity * (1.25/0.75)
			}
			//alert(itemObjects["lab-module"].getPureProd())
			//testTable.push(new _item(items_recipies1["lab-module"], itemObjects["lab-module"].getPureProd()))
			testTable.push(new _item(items_recipies1["speed-processor"], itemObjects["speed-processor"].getPureProd()*2))
			testTable.push(new _item(items_recipies1["effectivity-processor"], itemObjects["speed-processor"].getPureProd()*2))
			testTable.push(new _item(items_recipies1["productivity-processor"], itemObjects["speed-processor"].getPureProd()*2))
			testTable.push(new _item(items_recipies1["pollution-clean-processor"], itemObjects["speed-processor"].getPureProd()*2))
			testTable.push(new _item(items_recipies1["pollution-create-processor"], itemObjects["speed-processor"].getPureProd()*2))
			testTable.push(new _item(items_recipies1["module-case"], itemObjects["module-case"].getPureProd()*8))
			testTable.push(new _item(items_recipies1["module-circuit-board"], itemObjects["module-circuit-board"].getPureProd()*8))
			break;
		case 12:
			testTable.push(new _item(items_recipies1["speed-module-2"], itemObjects["speed-module-2"].getPureProd()*8))
			testTable.push(new _item(items_recipies1["productivity-module-2"], itemObjects["productivity-module-2"].getPureProd()*8))
			break;
		case 13:
			moduleSpeed = 0.4;
			moduleProd = 0.1;
			space = 4;
			row = 14;
			row2 = 5
			ams['am6'].productivity = 1 * (1+(4*moduleProd))
			ams['am6'].speed = 1.25 * (1+(12*moduleSpeed))
			ams['replicator5'].productivity = 1 * (1+(3*moduleProd))
			ams['replicator5'].speed = 16 * (1+(12*moduleSpeed))// * (1+19.2)
			//alert(new _item(items_recipies1["bob-sniper-turret-1"]).getProduction())
			//alert(itemObjects["iron-gear-wheel"].getProduction())
			testTable = []
			//alert(itemObjects["lab-module"].getPureProd()*3)
			//alert(itemObjects["laser-turret"].getProduction())
			testTable.push(new _item(items_recipies1["wooden-chest-active-provider"], 1))
			testTable.push(new _item(items_recipies1["wooden-chest-passive-provider"], 1))
			testTable.push(new _item(items_recipies1["wooden-chest-requester"], 1))
			testTable.push(new _item(items_recipies1["wooden-chest-storage"], 1))
			testTable.push(new _item(items_recipies1["science-pack-1"], 240))
			testTable.push(new _item(items_recipies1["inserter"], 150))
			testTable.push(new _item(items_recipies1["dark-matter-scoop"], 150))
			testTable.push(new _item(items_recipies1["dark-matter-transducer"], 150))
			testTable.push(new _item(items_recipies1["science-pack-2"], 240))
			testTable.push(new _item(items_recipies1["matter-conduit"], 150))
			testTable.push(new _item(items_recipies1["expansion-bay"], 40))
			testTable.push(new _item(items_recipies1["steel-gear-wheel"], 150))
			testTable.push(new _item(items_recipies1["piercing-rounds-magazine"], 202))
			testTable.push(new _item(items_recipies1["stone-wall"], itemObjects["stone-wall"].getPureProd()*2))
			testTable.push(new _item(items_recipies1["advanced-circuit"], 120))
			testTable.push(new _item(items_recipies1["speed-processor"], 240))
			testTable.push(new _item(items_recipies1["effectivity-processor"], 240))
			testTable.push(new _item(items_recipies1["productivity-processor"], 240))
			testTable.push(new _item(items_recipies1["pollution-clean-processor"], 240))
			testTable.push(new _item(items_recipies1["pollution-create-processor"], 240))
			testTable.push(new _item(items_recipies1["module-case"], 240))
			testTable.push(new _item(items_recipies1["module-circuit-board"], 240))
			testTable.push(new _item(items_recipies1["speed-module-2"], 90))
			testTable.push(new _item(items_recipies1["productivity-module-2"], 90))
			testTable.push(new _item(items_recipies1["military-science-pack"], 240))
			//testTable.push(new _item(items_recipies1["laser-turret"], 90))
			testTable.push(new _item(items_recipies1["science-pack-3"], 240))
			break;
		case 14:
			for (var a in test_2)
			{
				items_recipies1[a] = test_2[a]
			}
			for (var k in testTable)
			{
				//alert(testTable[k].id)
				testTable[k] = new _item(items_recipies1[testTable[k].id], testTable[k].quantity)
			}
			//alert(itemObjects["iron-gear-wheel"].getProduction())
			testTable.splice(22, 2)
			testTable.push(new _item(items_recipies1["stack-inserter"], 50))
			testTable.push(new _item(items_recipies1["Biological-bullet-magazine"], itemObjects["Biological-bullet-magazine"].getPureProd()*4))
			testTable.push(new _item(items_recipies1["production-science-pack"], 240))
			testTable.push(new _item(items_recipies1["high-tech-science-pack"], 240))
			break;
		case 15:
			for (var a in test_3)
			{
				items_recipies1[a] = test_3[a]
			}
			for (var k in testTable)
			{
				//alert(testTable[k].id)
				testTable[k] = new _item(items_recipies1[testTable[k].id], testTable[k].quantity)
			}
			moduleSpeed = 0.8;
			moduleProd = 0.2;
			space = 4;
			row = 14;
			row2 = 5
			ams['am6'].productivity = 1 * (1+(4*moduleProd))
			ams['am6'].speed = 1.25 * (1+(12*moduleSpeed))
			ams['replicator5'].productivity = 1 * (1+(3*moduleProd))
			ams['replicator5'].speed = 16 * (1+(12*moduleSpeed))
			//alert(itemObjects["iron-gear-wheel"].getProduction())
			testTable.push(new _item(items_recipies1["raw-productivity-module-4"], 240))
			testTable.push(new _item(items_recipies1["raw-speed-module-4"], 240))
			break;
		case 16:
			for (var a in test_4)
			{
				items_recipies1[a] = test_4[a]
			}
			for (var k in testTable)
			{
				//alert(testTable[k].id)
				testTable[k] = new _item(items_recipies1[testTable[k].id], testTable[k].quantity)
			}
			moduleSpeed = 0.8*2;
			moduleProd = 0.2*2;
			space = 4;
			row = 14;
			row2 = 5
			ams['am6'].productivity = 1 * (1+(6*moduleProd))
			ams['am6'].speed = 3.5 * (1+(12*moduleSpeed))
			ams['replicator5'].productivity = 1 * (1+(3*moduleProd))
			ams['replicator5'].speed = 16 * (1+(12*moduleSpeed))
			ams['electric_furnace'].name = "electric-chemical-mixing-furnace-2"
			ams['electric_furnace'].productivity = 3.4
			ams['electric_furnace'].speed = 4 * (1+19.2)
			//alert(itemObjects["iron-gear-wheel"].getProduction())
			testTable.splice(28, 2)
			testTable.push(new _item(items_recipies1["electric-chemical-mixing-furnace-2"], 60))
			testTable.push(new _item(items_recipies1["assembling-machine-6"], 60))
			testTable.push(new _item(items_recipies1["chemical-plant-4"], 60))
			testTable.push(new _item(items_recipies1["raw-productivity-module-8"], 240))
			testTable.push(new _item(items_recipies1["raw-speed-module-8"], 240))
			testTable.push(new _item(items_recipies1["bob-sniper-turret-3"], 200))
			//alert(ams[items_recipies1["glass"].am_type].name)
			break;
		case 17:
			ams['am6'].name = "assembling-machine-6"
			//testTable.push(new _item(items_recipies1["uranium-rounds-magazine"], itemObjects["uranium-rounds-magazine"].getPureProd()))
			testTable.push(new _item(items_recipies1["bob-robo-charge-port-4"], 60))
			testTable.push(new _item(items_recipies1["bob-logistic-zone-expander"], 60))
			testTable.push(new _item(items_recipies1["bob-robochest-4"], 60))
			testTable.push(new _item(items_recipies1["replicator-5"], 10))
			testTable.push(new _item(items_recipies1["small-lamp"], 10))
			testTable.push(new _item(items_recipies1["concrete-white"], 10))
			testTable.push(new _item(items_recipies1["concrete-black"], 10))
			testTable.push(new _item(items_recipies1["purple-transport-belt"], 100))
			testTable.push(new _item(items_recipies1["bob-logistic-robot-4"], 100))
			//alert(new _item(items_recipies1["bob-robo-charge-port-4"]).getProduction())
			//alert(ams[items_recipies1["glass"].am_type].name)
			break;
		case 18:
			//testTable.push(new _item(items_recipies1["uranium-cannon-shell"], 150))
			//testTable.push(new _item(items_recipies1["explosive-uranium-cannon-shell"], 150))
			testTable.push(new _item(items_recipies1["rocket-fuel"], 140))
			testTable.push(new _item(items_recipies1["bob-tank-3"], 1))
			//testTable.push(new _item(items_recipies1["uranium-235"], 30))
			//alert(new _item(items_recipies1["bob-robo-charge-port-4"]).getProduction())
			//alert(ams[items_recipies1["glass"].am_type].name)
			break;*/
		
		default:
	}
	//alert(JSON.stringify(testTable))
	if (step < 0)
	{
		generateBlueprint(calc_early_total(testTable))
		step++
		temp()
	}
	else
	{
		for (var x in testTable)
		{
			var output = x + " - " + testTable[x].name + " - " + testTable[x].quantity + "\n"
			//$("#savedata").append(output)
		}
	}
}

function calc_early_total(testTable)
{	
	//alert(testTable)
	var temp = {}
	var blueprintTable2 = {replicators:[], furnaces:[], assemblers:[]}
	for (var a in testTable)
	{
		//alert(testTable[a].quantity)
		//alert(b)
		//alert(JSON.stringify(testTable[a].returnIngredients()))
		if (typeof temp[testTable[a].id] == "undefined")
		{
			//alert(a)
			temp[testTable[a].id] = {quantity:testTable[a].quantity}
			try
			{
				var _try = testTable[a].asmNeeded()
			}
			catch(e)
			{
				alert(testTable[a-1].name)
			}
			for (var b = 0; b < testTable[a].asmNeeded(); b++)
			{
				switch (ams[items_recipies1[testTable[a].id].am_type].name)
				{
					case "electric-chemical-mixing-furnace-2":
						blueprintTable2.assemblers.push(testTable[a].id)
						//alert(testTable[a].id)
						break;
					case "electric-furnace":
						blueprintTable2.assemblers.push(testTable[a].id)
						break;
					case "steel-furnace":
						blueprintTable2.furnaces.push(testTable[a].id)
						break;
					case "stone-furnace":
						blueprintTable2.furnaces.push(testTable[a].id)
						break;
					case "replicator-5":
						if (testTable[a].category != "fluid" ) blueprintTable2.replicators.push(testTable[a].id)
						break;
					default:
						blueprintTable2.assemblers.push(testTable[a].id)
					}
			}
			//blueprintTable2.push([testTable[a].id, testTable[a].quantity])
		}
		else
		{
			temp[testTable[a].id].quantity += testTable[a].quantity
			var tempItem = new _item(testTable[a])
			var tempItem2 = new _item(testTable[a])
			tempItem.quantity = temp[testTable[a].id].quantity - testTable[a].quantity
			tempItem2.quantity = temp[testTable[a].id].quantity
			var diff = Math.ceil(tempItem2.asmNeeded()) - Math.ceil(tempItem.asmNeeded())
			for (var b = 0; b < diff; b++)
			{
				switch (ams[items_recipies1[tempItem.id].am_type].name)
				{
					case "electric-chemical-mixing-furnace-2":
						blueprintTable2.assemblers.push(tempItem.id)
						//alert(tempItem.id)
						break;
					case "electric-furnace":
						blueprintTable2.assemblers.push(tempItem.id)
						break;
					case "steel-furnace":
						blueprintTable2.furnaces.push(tempItem.id)
						break;
					case "stone-furnace":
						blueprintTable2.furnaces.push(tempItem.id)
						break;
					case "replicator-5":
						if (tempItem.category != "fluid" ) blueprintTable2.replicators.push(tempItem.id)
						break;
					default:
						blueprintTable2.assemblers.push(tempItem.id)
					}
				//blueprintTable2.push(tempItem.id)
			}
		}
		//alert()
		var temp10 = testTable[a].returnIngredients()
		//alert(JSON.stringify(b))
		for (var b in temp10)
		{
			if (typeof temp[b] == "undefined")
			{
				temp[b] = temp10[b]
				var tempItem = new _item(items_recipies1[b])
				tempItem.quantity = temp[b].quantity
				for (var c = 0; c < tempItem.asmNeeded(); c++)
				{
					//blueprintTable2.push(tempItem.id)
					try{
					switch (ams[items_recipies1[tempItem.id].am_type].name)
					{
						case "electric-chemical-mixing-furnace-2":
							blueprintTable2.assemblers.push(tempItem.id)
							//alert(tempItem.id)
							break;
						case "electric-furnace":
							blueprintTable2.assemblers.push(tempItem.id)
							break;
						case "steel-furnace":
							blueprintTable2.furnaces.push(tempItem.id)
							break;
						case "stone-furnace":
							blueprintTable2.furnaces.push(tempItem.id)
							break;
						case "replicator-5":
							if (tempItem.category != "fluid" ) blueprintTable2.replicators.push(tempItem.id)
							break;
						default:
							blueprintTable2.assemblers.push(tempItem.id)
					}}
					catch(e){ alert(tempItem.id) }
				}
			}
			else
			{
				temp[b].quantity += temp10[b].quantity
				var tempItem = new _item(items_recipies1[b])
				tempItem.quantity = temp[b].quantity - temp10[b].quantity
				var tempItem2 = new _item(items_recipies1[b])
				tempItem2.quantity = temp[b].quantity
				var diff = Math.ceil(tempItem2.asmNeeded()) - Math.ceil(tempItem.asmNeeded())
				//alert(diff)
				for (var c = 0; c < diff; c++)
				{
					switch (ams[items_recipies1[tempItem.id].am_type].name)
					{
						case "electric-chemical-mixing-furnace-2":
							blueprintTable2.assemblers.push(tempItem.id)
							//alert(tempItem.id)
							break;
						case "electric-furnace":
							blueprintTable2.assemblers.push(tempItem.id)
							break;
						case "steel-furnace":
							blueprintTable2.furnaces.push(tempItem.id)
							break;
						case "stone-furnace":
							blueprintTable2.furnaces.push(tempItem.id)
							break;
						case "replicator-5":
							if (tempItem.category != "fluid" ) blueprintTable2.replicators.push(tempItem.id)
							break;
						default:
							blueprintTable2.assemblers.push(tempItem.id)
					}
					//blueprintTable2.push(tempItem.id)
				}
			}
		}
	}
	return blueprintTable2
}


/*var temp = calc_early_total(testTable)
var output = ""
//output += test10.name + ": ilosc - " + round_num(test10.quantity) + ", mozliwosc - " + Math.floor(test10.getProduction()) + ", assemblery - " + test10.asmNeeded() + "\n"
for (var a in temp)
{
	if (a != "asslist")
	{
		var tempItem = new _item(items_recipies1[a])
		tempItem.quantity = temp[a].quantity
		output += tempItem.name + ": ilosc - " + round_num(tempItem.quantity) + ", mozliwosc - " + Math.floor(tempItem.getProduction()) + ", assemblery - " + Math.ceil(tempItem.asmNeeded()) + "\n"
		//alert(JSON.stringify(tempItem))
	}
}
output += //blueprintTable2.furnaces
$("#savedata").html(output)*/