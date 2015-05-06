var MonsterNames = ["Snail"]

var skillsInfo = [
{vars: [50,1,1], skillID: 1, name: "Punch", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{vars: [175,1,1], skillID: 2, name: "Block", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{vars: [615,1,1], skillID: 3, name: "Run", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{vars: [2450,1,1], skillID: 4, name: "Kick", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{vars: [9800,1,1], skillID: 5, name: "Block2", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{vars: [39150,1,1], skillID: 6, name: "Run2", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{vars: [176250,1,1], skillID: 7, name: "Punch3", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{vars: [793150,1,1], skillID: 8, name: "Block3", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{vars: [3500000,1,1], skillID: 9, name: "Run3", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{vars: [1.75E+07,1,1], skillID: 10, name: "Punch4", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{vars: [8.75E+07,1,1], skillID: 11, name: "Block4", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{vars: [4.35E+08,1,1], skillID: 12, name: "Run4", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{vars: [2.4E+09,1,1], skillID: 13, name: "Punch5", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{vars: [1.2E+10,1,1], skillID: 14, name: "Block5", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{vars: [6.6E+10,1,1], skillID: 15, name: "Run5", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{vars: [3.95E+11,1,1], skillID: 16, name: "Punch6", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{vars: [2.3E+12,1,1], skillID: 17, name: "Block6", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{vars: [1.3,10,13], skillID: 18, name: "Run6", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{vars: [7.8,10,13], skillID: 19, name: "Punch7", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{vars: [5,10,14], skillID: 20, name: "Block7", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{vars: [3.2,10,15], skillID: 21, name: "Run7", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{vars: [2.2,10,16], skillID: 22, name: "Punch8", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{vars: [1.5,10,17], skillID: 23, name: "Block8", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{vars: [1,10,18], skillID: 24, name: "Run8", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{vars: [8,10,18], skillID: 25, name: "Punch9", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{vars: [6,10,19], skillID: 26, name: "Block9", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{vars: [4.5,10,20], skillID: 27, name: "Run9", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{vars: [3.6,10,21], skillID: 28, name: "Punch10", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{vars: [2.9,10,22], skillID: 29, name: "Block10", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{vars: [2.3,10,23], skillID: 30, name: "Run10", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{vars: [1.9,10,24], skillID: 31, name: "Punch11", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{vars: [1.6,10,25], skillID: 32, name: "Block11", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{vars: [1.4,10,26], skillID: 33, name: "Run11", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{vars: [1.2,10,27], skillID: 34, name: "Punch12", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{vars: [1.1,10,28], skillID: 35, name: "Block12", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{vars: [1,10,29], skillID: 36, name: "Run12", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{vars: [9.9,10,29], skillID: 37, name: "Punch13", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{vars: [9.4,10,30], skillID: 38, name: "Block13", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{vars: [8.9,10,31], skillID: 39, name: "Run13", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{vars: [8,10,32], skillID: 40, name: "Punch14", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{vars: [8,10,33], skillID: 41, name: "Block14", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{vars: [9,10,34], skillID: 42, name: "Run14", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{vars: [9.3,10,35], skillID: 43, name: "Punch15", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{vars: [9.8,10,36], skillID: 44, name: "Block15", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{vars: [1,10,38], skillID: 45, name: "Run15", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{vars: [1.1,10,39], skillID: 46, name: "Punch16", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{vars: [1.2,10,40], skillID: 47, name: "Block16", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{vars: [1.3,10,41], skillID: 48, name: "Run16", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
]

var attackList = [];
var defenceList = [];
var healthList = [];
for (var k=0; k < skillsInfo.length; k++) {
	if (((k)%3) === 0) 
	{  
		attackList.push(k);
	}
	else if (((k+2)%3) === 0) 
	{  
		defenceList.push(k);
	} 
	else 
	{
		healthList.push(k);
	}
}

function skillInfoCalcs()
{
    for (var a = 0; a < skillsInfo.length; a++)
    {
        this.skillsInfo[a].tecCost = Math.floor((1.3 * Math.pow(1.8, a)));
    }
	skillsUpdate()
}

function extraUpdate()
{
	for (var a = 0; a < skillsInfo.length; a++) 
	{
		skillsInfo[a].extra = 1;
		for (var b = 0; b < skillsInfo[a].upgrades.length; b++) 
		{
			if (skillsInfo[a].upgrades[b].bought === 1)
			{
				skillsInfo[a].extra = skillsInfo[a].extra * 2;
			}
		}
	}
}

function skillDamage(tecCost, level, extra)
{
	return (tecCost * level) * extra;
}

function skillCost(vars, level)
{
	return Math.floor(((vars[0] * Math.pow(vars[1], vars[2])) * Math.pow(1.1, level)));
}

function skillsUpdate()
{
	extraUpdate();
	for (var a = 0; a < skillsInfo.length; a++)
	{
		skillsInfo[a].cost = skillCost(skillsInfo[a].vars, skillsInfo[a].level);
		skillsInfo[a].damage = skillDamage(skillsInfo[a].tecCost, skillsInfo[a].level, skillsInfo[a].extra);
		skillsInfo[a].nextDamageDiff = skillDamage(skillsInfo[a].tecCost, skillsInfo[a].level + 1, skillsInfo[a].extra) - skillsInfo[a].damage;
		skillsInfo[a].efficiency = skillsInfo[a].cost/skillsInfo[a].nextDamageDiff
		for (var b = 0; b < skillsInfo[a].upgrades.length; b++)
		{
			skillsInfo[a].upgrades[b].cost = skillsInfo[a].upgrades[b].bought === 0 ? GetUpgradeCostByMultiLevel(skillsInfo[a].level, 25*(b+1), skillsInfo[a]) + (skillCost(skillsInfo[a].vars, 25*(b+1)) * 10) : 0
			skillsInfo[a].upgrades[b].damage = skillsInfo[a].upgrades[b].bought === 0 ? skillDamage(skillsInfo[a].tecCost, 25*(b+1), skillsInfo[a].extra*2) : 0
			skillsInfo[a].upgrades[b].nextDamageDiff = skillsInfo[a].upgrades[b].bought === 0 ? skillsInfo[a].upgrades[b].damage - skillDamage(skillsInfo[a].tecCost, skillsInfo[a].level, skillsInfo[a].extra) : 0
			skillsInfo[a].upgrades[b].efficiency = skillsInfo[a].upgrades[b].nextDamageDiff > 0 ? skillsInfo[a].upgrades[b].cost/skillsInfo[a].upgrades[b].nextDamageDiff : 99999999999999999
			//if (a === 0) { alert(skillsInfo[a].upgrades[b].cost) }
		}
	}
}

function createTable()
{
	for (var i = 0; i < skillsInfo.length; i++) 
	{
		var tr = $("<tr></tr>").attr("id", skillsInfo[i].name);
		tr.append($("<td></td>").append(skillsInfo[i].name).attr("id", skillsInfo[i].name+"name"));
		used1 = $("<input></input>").attr("type", "checkbox").attr("id", skillsInfo[i].name+"skill1");
		used2 = $("<input></input>").attr("type", "checkbox").attr("id", skillsInfo[i].name+"skill2");
		used3 = $("<input></input>").attr("type", "checkbox").attr("id", skillsInfo[i].name+"skill3");
		used4 = $("<input></input>").attr("type", "checkbox").attr("id", skillsInfo[i].name+"skill4");
		used5 = $("<input></input>").attr("type", "checkbox").attr("id", skillsInfo[i].name+"skill5");
		used6 = $("<input></input>").attr("type", "checkbox").attr("id", skillsInfo[i].name+"skill6");
		tr.append($("<td></td>").append(used1).append(used2).append(used3).append(used4).append(used5).append(used6));
		tr.append($("<td></td>").append(skillsInfo[i].cost).attr("id", skillsInfo[i].name+"cost"));
		tr.append($("<td></td>").append(skillsInfo[i].damage).attr("id", skillsInfo[i].name+"damage"));
		tr.append($("<td></td>").append(skillsInfo[i].nextDamageDiff).attr("id", skillsInfo[i].name+"nextDamageDiff"));
		tr.append($("<td></td>").append("").attr("id", skillsInfo[i].name+"button"));
		tr.append($("<td></td>").append($("<input></input>").attr("type", "text").val(skillsInfo[i].level).attr("id", skillsInfo[i].name+"level")));
		tr.append("\n\n");
		if (((i)%3) === 0) 
		{  
			$("#attacktbl").append(tr);
		}
		else if (((i+2)%3) === 0) 
		{  
			$("#defencetbl").append(tr);
		} 
		else 
		{
			$("#healthtbl").append(tr);
		}
		for (var b = 0; b < skillsInfo[i].upgrades.length; b++) 
		{
			if (skillsInfo[i].upgrades[b].bought == 1)
			{
				$("#" + skillsInfo[i].name + "skill" + (b+1)).prop("checked", skillsInfo[i].upgrades[b].bought);
			}
			$("#" + skillsInfo[i].name + "skill" + (b+1)).prop("title", 
																skillsInfo[i].upgrades[b].cost + "\n" +
																skillsInfo[i].upgrades[b].damage + "\n" 
																);
		}
	}
	updateTable()
}
function CalcMonster()
{
	$("#attackoutput").html("")
	var heroAttack = parseInt($("#attack").val())
	var bestMonster = 0
	var mAttack = 0
	var mDefence = 0
	var mHp = 0
	var mKi = 0
	var mEff = 0
	while (bestMonster < 99999999999)
	{
		if (calcEff(bestMonster) >= calcEff(bestMonster+1))
		{
			var text = ""
			text += MonsterNames[0] + " " + bestMonster + "<br>"
			text += " - Attack: " + calcAtt(bestMonster) + "<br>"
			text += " - Defence: " + calcDef(bestMonster) + "<br>"
			text += " - Health: " + calcHp(bestMonster) + "<br>"
			text += " - Ki Reward: " + calcKi(bestMonster) + "<br>"
			text += " - Efficiency: " + (Math.round(calcEff(bestMonster)*100))/100 + "<br>"
			$("#attackoutput").append(text)
			return
		}
		bestMonster = bestMonster + 1;
	}
}

function calcAtt(level)
{
	return Math.floor(1*(Math.pow(1.7,level)))
}

function calcDef(level)
{
	if (level === 1)
	{
		return 0
	}
	else
	{
		return Math.floor(1*(Math.pow(1.65,level)))
	}
}

function calcHp(level)
{
	return Math.floor(100*(Math.pow(1.5,level)))
}

function calcKi(level)
{
	return Math.floor(150*(Math.pow(1.55,level)))
}

function calcEff(level)
{
	return calcKi(level)/(0.25+(calcHp(level)/(parseInt($("#attack").val())-calcDef(level))))
}

function saveData()
{
	var saveVar = 
	{
		attack:parseInt($("#attack").val()),
		skills:skillsInfo
	}
	localStorage.setItem("shonendata", JSON.stringify(saveVar));
	//alert("saved")
}

function loadData()
{
	var loadVar = {}
	try 
	{
		loadString = localStorage.getItem("shonendata")
		parsedString = JSON.parse(loadString)
		$("#attack").val(parsedString.attack)
		for (var i = 0; i < skillsInfo.length; i++) 
		{
			skillsInfo[i].level = parseInt(parsedString.skills[i].level);
			$("#" + skillsInfo[i].name + "level").val(skillsInfo[i].level);
			for (var b = 0; b < skillsInfo[i].upgrades.length; b++) 
			{
				skillsInfo[i].upgrades[b].bought = parsedString.skills[i].upgrades[b].bought
			}
		}
	}
	catch(err)
	{
		CalcMonster();
	}
	CalcMonster();
}

function updateLevels()
{
	for (var i = 0; i < skillsInfo.length; i++) 
	{
		
		if (isNaN(parseInt($("#" + skillsInfo[i].name + "level").val()))) {$("#" + skillsInfo[i].name + "level").val(0);}
		skillsInfo[i].level = parseInt($("#" + skillsInfo[i].name + "level").val());
		for (var y = 0; y < skillsInfo[i].upgrades.length; y++)
		{
			skillsInfo[i].upgrades[y].bought = ($("#" + skillsInfo[i].name+"skill"+(y+1)).is(":checked")) ? 1 : 0;
		}
	}
}

function GetUpgradeCostByMultiLevel(iLevelstart, iLevelfinish, skill)
{	
	var total = 0.0;
	for (var i = iLevelstart; i < iLevelfinish; i++)
	{
		total += skillCost(skill.vars, i);
	}
	return total;
}

function updateTable()
{
	for (var i = 0; i < skillsInfo.length; i++) 
	{
		$("#" + skillsInfo[i].name+"cost").html((skillsInfo[i].cost > 999999) ? skillsInfo[i].cost.toExponential(2) : skillsInfo[i].cost);
		$("#" + skillsInfo[i].name+"damage").html((skillsInfo[i].damage > 999999) ? skillsInfo[i].damage.toExponential(2) : skillsInfo[i].damage);
		//$("#" + skillsInfo[i].name+"nextDamageDiff").html((skillsInfo[i].nextDamageDiff > 999999) ? skillsInfo[i].nextDamageDiff.toExponential(2) : skillsInfo[i].nextDamageDiff);
		$("#" + skillsInfo[i].name+"nextDamageDiff").html("");
		$("#"+(skillsInfo[i].name)).css("backgroundColor", "");
		$("#" + skillsInfo[i].name+"button").html("");
		$("#" + skillsInfo[i].name + "name").prop("title", 
																skillsInfo[i].efficiency + "\n"
																);
		for (var b = 0; b < skillsInfo[i].upgrades.length; b++) 
		{
			$("#" + skillsInfo[i].name + "skill" + (b+1)).prop("title", 
																skillsInfo[i].upgrades[b].cost + "\n" +
																skillsInfo[i].upgrades[b].damage + "\n" +
																skillsInfo[i].upgrades[b].nextDamageDiff + "\n" +
																skillsInfo[i].upgrades[b].efficiency + "\n"
																);
		}
	}
	updateEfficiency()
}

function nextSkillButton(name, level)
{
	$("#" + name + "level").val(level);
	updateLevels()
	CalcMonster()
	skillsUpdate()
	updateTable()
	saveData()
}

function buyNextSkillButton(skill, upgrade)
{
	//alert(skill.name)
	skillsInfo[skill].upgrades[upgrade].bought = 1
	$("#" + skillsInfo[skill].name + "skill" + (upgrade+1)).prop("checked", skillsInfo[skill].upgrades[upgrade].bought);
	updateLevels()
	CalcMonster()
	skillsUpdate()
	updateTable()
	saveData()
}

var bestEfficiency = [0,1,2]
var bestEfficiencyUpgrade = [[0,0],[1,0],[2,0]]
var lists = [attackList, defenceList, healthList]
function updateEfficiency()
{
	for (var i = 0; i < attackList.length; i++) 
	{
		//alert(bestEfficiency[0])
		if ((skillsInfo[bestEfficiency[0]].efficiency > skillsInfo[attackList[i]].efficiency))
		{
			bestEfficiency[0] = attackList[i];
		}
		for (var b = 0; b < skillsInfo[i].upgrades.length; b++)
		{
			if ((skillsInfo[bestEfficiencyUpgrade[0][0]].upgrades[bestEfficiencyUpgrade[0][1]].efficiency > skillsInfo[attackList[i]].upgrades[b].efficiency))
			{
				bestEfficiencyUpgrade[0] = [attackList[i],b]
			}
		}
	}
	var bestAttack = 0;
	var con = true;
	while (con)
	{
		for (var i = 0; i < attackList.length; i++) 
		{
			if ((skillsInfo[bestAttack].efficiency > skillsInfo[attackList[i]].efficiency))
			{
				bestAttack = attackList[i];
			}
		}
		if (bestAttack == bestEfficiency[0])
		{
			skillsInfo[bestEfficiency[0]].level += 1
			skillsUpdate();
		}
		else
		{
			if (bestEfficiencyUpgrade[0][0] == bestEfficiency[0])
			{
				if ((skillsInfo[bestEfficiencyUpgrade[0][0]].upgrades[bestEfficiencyUpgrade[0][1]].efficiency < skillsInfo[bestEfficiency[0]].efficiency))
				{
					skillsInfo[bestEfficiencyUpgrade[0][0]].upgrades[bestEfficiencyUpgrade[0][1]].bought = 1;
					skillsInfo[bestEfficiencyUpgrade[0][0]].level = (25 * (bestEfficiencyUpgrade[0][1] + 1))
					skillsInfo[bestEfficiencyUpgrade[0][0]].extra = skillsInfo[bestEfficiency[0]].extra*2
					$("#"+(skillsInfo[bestEfficiencyUpgrade[0][0]].name)).css("backgroundColor", "#9acd32");
					var level = skillsInfo[bestEfficiencyUpgrade[0][0]].level
					//$("#testing").html(skillsInfo[bestEfficiency[0]].efficiency + " " + bestEfficiency[0] + "<br>")
					//$("#testing").append(skillsInfo[bestEfficiencyUpgrade[0][0]].upgrades[bestEfficiencyUpgrade[0][1]].efficiency + " " + bestEfficiencyUpgrade[0])
					if (skillsInfo[bestEfficiencyUpgrade[0][0]].level - parseInt($("#" + skillsInfo[bestEfficiencyUpgrade[0][0]].name + "level").val()) == 0)
					{
						$("#" + skillsInfo[bestEfficiencyUpgrade[0][0]].name+"nextDamageDiff").html("Upgrade");
						$("#" + skillsInfo[bestEfficiencyUpgrade[0][0]].name+"button").html("<button type=\"button\" onclick=\"buyNextSkillButton('" + bestEfficiencyUpgrade[0][0] + "'," + bestEfficiencyUpgrade[0][1] + ")\" class=\"btn btn-primary\" style=\"float: right;\">Done</button>");
					}
					else
					{
						$("#" + skillsInfo[bestEfficiencyUpgrade[0][0]].name+"nextDamageDiff").html(skillsInfo[bestEfficiencyUpgrade[0][0]].level + " (+" + (skillsInfo[bestEfficiencyUpgrade[0][0]].level - parseInt($("#" + skillsInfo[bestEfficiencyUpgrade[0][0]].name + "level").val())) + ") + Upgrade");
						$("#" + skillsInfo[bestEfficiencyUpgrade[0][0]].name+"button").html("<button type=\"button\" onclick=\"nextSkillButton('" + skillsInfo[bestEfficiencyUpgrade[0][0]].name + "'," + level + ")\" class=\"btn btn-primary\" style=\"float: right;\">Done</button>");
					}
					con = false
					//alert(skillsInfo[bestEfficiency[0]].efficiency)
				}
				else
				{
					$("#" + skillsInfo[bestEfficiency[0]].name+"nextDamageDiff").html(skillsInfo[bestEfficiency[0]].level + " (+" + (skillsInfo[bestEfficiency[0]].level - parseInt($("#" + skillsInfo[bestEfficiency[0]].name + "level").val())) + ") ");
					$("#"+(skillsInfo[bestEfficiency[0]].name)).css("backgroundColor", "#9acd32");
					var level = skillsInfo[bestEfficiency[0]].level
					$("#" + skillsInfo[bestEfficiency[0]].name+"button").html("<button type=\"button\" onclick=\"nextSkillButton('" + skillsInfo[bestEfficiency[0]].name + "'," + level + ")\" class=\"btn btn-primary\" style=\"float: right;\">Done</button>");
					con = false
				}
			}
			else
			{
				if ((25 * (bestEfficiencyUpgrade[0][1] + 1)) - parseInt($("#" + skillsInfo[bestEfficiencyUpgrade[0][0]].name + "level").val()) == 0)
				{
					skillsInfo[bestEfficiencyUpgrade[0][0]].upgrades[bestEfficiencyUpgrade[0][1]].bought = 1;
					skillsInfo[bestEfficiencyUpgrade[0][0]].level = (25 * (bestEfficiencyUpgrade[0][1] + 1))
					skillsInfo[bestEfficiencyUpgrade[0][0]].extra = skillsInfo[bestEfficiency[0]].extra*2
					$("#"+(skillsInfo[bestEfficiencyUpgrade[0][0]].name)).css("backgroundColor", "#9acd32");
					var level = skillsInfo[bestEfficiencyUpgrade[0][0]].level
					//$("#testing").html(skillsInfo[bestEfficiency[0]].efficiency + " " + bestEfficiency[0] + "<br>")
					//$("#testing").append(skillsInfo[bestEfficiencyUpgrade[0][0]].upgrades[bestEfficiencyUpgrade[0][1]].efficiency + " " + bestEfficiencyUpgrade[0])
					if (skillsInfo[bestEfficiencyUpgrade[0][0]].level - parseInt($("#" + skillsInfo[bestEfficiencyUpgrade[0][0]].name + "level").val()) == 0)
					{
						$("#" + skillsInfo[bestEfficiencyUpgrade[0][0]].name+"nextDamageDiff").html("Upgrade");
						$("#" + skillsInfo[bestEfficiencyUpgrade[0][0]].name+"button").html("<button type=\"button\" onclick=\"buyNextSkillButton('" + bestEfficiencyUpgrade[0][0] + "'," + bestEfficiencyUpgrade[0][1] + ")\" class=\"btn btn-primary\" style=\"float: right;\">Done</button>");
					}
					else
					{
						$("#" + skillsInfo[bestEfficiencyUpgrade[0][0]].name+"nextDamageDiff").html(skillsInfo[bestEfficiencyUpgrade[0][0]].level + " (+" + (skillsInfo[bestEfficiencyUpgrade[0][0]].level - parseInt($("#" + skillsInfo[bestEfficiencyUpgrade[0][0]].name + "level").val())) + ") + Upgrade");
						$("#" + skillsInfo[bestEfficiencyUpgrade[0][0]].name+"button").html("<button type=\"button\" onclick=\"nextSkillButton('" + skillsInfo[bestEfficiencyUpgrade[0][0]].name + "'," + level + ")\" class=\"btn btn-primary\" style=\"float: right;\">Done</button>");
					}
					con = false
				}
				else
				{
					$("#" + skillsInfo[bestEfficiency[0]].name+"nextDamageDiff").html(skillsInfo[bestEfficiency[0]].level + " (+" + (skillsInfo[bestEfficiency[0]].level - parseInt($("#" + skillsInfo[bestEfficiency[0]].name + "level").val())) + ") ");
					$("#"+(skillsInfo[bestEfficiency[0]].name)).css("backgroundColor", "#9acd32");
					var level = skillsInfo[bestEfficiency[0]].level
					$("#" + skillsInfo[bestEfficiency[0]].name+"button").html("<button type=\"button\" onclick=\"nextSkillButton('" + skillsInfo[bestEfficiency[0]].name + "'," + level + ")\" class=\"btn btn-primary\" style=\"float: right;\">Done</button>");
					con = false
				}
			}
		}
	}
	updateLevels();
}