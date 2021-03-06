var MonsterNames = ["Snail"]

var skillsInfo = [
{vars: [50,1,1], skillID: 1, name: "Punch", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{vars: [175,1,1], skillID: 2, name: "Block", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{vars: [615,1,1], skillID: 3, name: "Run", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{vars: [2450,1,1], skillID: 4, name: "Kick", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{vars: [9800,1,1], skillID: 5, name: "Dodge", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{vars: [39150,1,1], skillID: 6, name: "Climb", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{vars: [176250,1,1], skillID: 7, name: "Throw", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{vars: [793150,1,1], skillID: 8, name: "Counterattack", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{vars: [3500000,1,1], skillID: 9, name: "Weighted Suit", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{vars: [1.75E+07,1,1], skillID: 10, name: "Power Punch", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{vars: [8.75E+07,1,1], skillID: 11, name: "Kawarimi", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{vars: [4.35E+08,1,1], skillID: 12, name: "Chakra Flow", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{vars: [2.4E+09,1,1], skillID: 13, name: "Flying Kick", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{vars: [1.2E+10,1,1], skillID: 14, name: "Energy Shield", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{vars: [6.6E+10,1,1], skillID: 15, name: "Mahatala Chakra", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{vars: [3.95E+11,1,1], skillID: 16, name: "Gumgun Punch", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{vars: [2.3E+12,1,1], skillID: 17, name: "Fire Wall", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{vars: [1.3,10,13], skillID: 18, name: "Atala Chakra", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{vars: [7.8,10,13], skillID: 19, name: "Electric Blast", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{vars: [5,10,14], skillID: 20, name: "Levitation", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{vars: [3.2,10,15], skillID: 21, name: "Muladhara Chakra", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{vars: [2.2,10,16], skillID: 22, name: "Beam Shockwave", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{vars: [1.5,10,17], skillID: 23, name: "Supersonic Flight", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{vars: [1,10,18], skillID: 24, name: "Svadhish Chakra", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{vars: [8,10,18], skillID: 25, name: "Meteoric Kick", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{vars: [6,10,19], skillID: 26, name: "Teleport", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{vars: [4.5,10,20], skillID: 27, name: "Manipura Chakra", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{vars: [3.6,10,21], skillID: 28, name: "Fireball", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{vars: [2.9,10,22], skillID: 29, name: "Taiyo Flash", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{vars: [2.3,10,23], skillID: 30, name: "Anahata Chakra", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{vars: [1.9,10,24], skillID: 31, name: "Psionic Burst", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{vars: [1.6,10,25], skillID: 32, name: "Kinetic Control", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{vars: [1.4,10,26], skillID: 33, name: "Vishuddha Chakra", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{vars: [1.2,10,27], skillID: 34, name: "Excalibur Slash", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{vars: [1.1,10,28], skillID: 35, name: "Stone Skin", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{vars: [1,10,29], skillID: 36, name: "Ajna Chakra", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{vars: [9.9,10,29], skillID: 37, name: "Final Blast", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{vars: [9.4,10,30], skillID: 38, name: "Metal Skin", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{vars: [8.9,10,31], skillID: 39, name: "Sahasrara Chakra", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{vars: [8,10,32], skillID: 40, name: "Galactic Shot", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{vars: [8,10,33], skillID: 41, name: "Diamond Skin", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{vars: [9,10,34], skillID: 42, name: "Life Communion", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{vars: [9.3,10,35], skillID: 43, name: "Big Bang Attack", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{vars: [9.8,10,36], skillID: 44, name: "Dimensional Warp", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{vars: [1,10,38], skillID: 45, name: "Earth Communion", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{vars: [1.1,10,39], skillID: 46, name: "Mokushi-Roku", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{vars: [1.2,10,40], skillID: 47, name: "Kami Yoroi", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{vars: [1.3,10,41], skillID: 48, name: "Universe Communion", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
]

var tab = 0;

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
        this.skillsInfo[a].tecCost = (Math.floor((1.9 * Math.pow(1.84,a))) + Math.floor((1.9 * Math.pow(1.84,a)))) - 1;

		
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
	//alert(skillsInfo[0].upgrades[0].cost)
}

function createTable()
{
	for (var i = 0; i < skillsInfo.length; i++) 
	{
		var tr = $("<tr></tr>").attr("id", skillsInfo[i].skillID);
		tr.append($("<td></td>").append(skillsInfo[i].name).attr("id", skillsInfo[i].skillID+"name"));
		used1 = $("<input></input>").attr("type", "checkbox").attr("id", skillsInfo[i].skillID+"skill1");
		used2 = $("<input></input>").attr("type", "checkbox").attr("id", skillsInfo[i].skillID+"skill2");
		used3 = $("<input></input>").attr("type", "checkbox").attr("id", skillsInfo[i].skillID+"skill3");
		used4 = $("<input></input>").attr("type", "checkbox").attr("id", skillsInfo[i].skillID+"skill4");
		used5 = $("<input></input>").attr("type", "checkbox").attr("id", skillsInfo[i].skillID+"skill5");
		used6 = $("<input></input>").attr("type", "checkbox").attr("id", skillsInfo[i].skillID+"skill6");
		tr.append($("<td></td>").append(used1).append(used2).append(used3).append(used4).append(used5).append(used6));
		tr.append($("<td></td>").append(skillsInfo[i].cost).attr("id", skillsInfo[i].skillID+"cost"));
		//tr.append($("<td></td>").append(skillsInfo[i].damage).attr("id", skillsInfo[i].skillID+"damage"));
		tr.append($("<td></td>").append(skillsInfo[i].nextDamageDiff).attr("id", skillsInfo[i].skillID+"nextDamageDiff"));
		tr.append($("<td></td>").append("").attr("id", skillsInfo[i].skillID+"button"));
		tr.append($("<td></td>").append($("<input></input>").attr("type", "text").val(skillsInfo[i].level).attr("id", skillsInfo[i].skillID+"level")));
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
				$("#" + skillsInfo[i].skillID + "skill" + (b+1)).prop("checked", skillsInfo[i].upgrades[b].bought);
			}
			/*$("#" + skillsInfo[i].skillID + "skill" + (b+1)).prop("title", 
																skillsInfo[i].upgrades[b].cost + "\n" +
																skillsInfo[i].upgrades[b].damage + "\n" 
																);*/
		}
	}
	updateTable()
}

function saveData()
{
	var saveVar = 
	{
		attack:$("#attack").val(),
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
			$("#" + skillsInfo[i].skillID + "level").val(skillsInfo[i].level);
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
		if (isNaN(parseInt($("#" + skillsInfo[i].skillID + "level").val()))) {$("#" + skillsInfo[i].skillID + "level").val(0);}
		skillsInfo[i].level = parseInt($("#" + skillsInfo[i].skillID + "level").val());
		for (var y = 0; y < skillsInfo[i].upgrades.length; y++)
		{
			skillsInfo[i].upgrades[y].bought = ($("#" + skillsInfo[i].skillID+"skill"+(y+1)).is(":checked")) ? 1 : 0;
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
		$("#" + skillsInfo[i].skillID+"cost").html(formatNumber(skillsInfo[i].cost));
		//$("#" + skillsInfo[i].skillID+"damage").html((skillsInfo[i].damage > 999999) ? skillsInfo[i].damage.toExponential(2) : skillsInfo[i].damage);
		//$("#" + skillsInfo[i].skillID+"nextDamageDiff").html((skillsInfo[i].nextDamageDiff > 999999) ? skillsInfo[i].nextDamageDiff.toExponential(2) : skillsInfo[i].nextDamageDiff);
		$("#" + skillsInfo[i].skillID+"nextDamageDiff").html("");
		$("#"+(skillsInfo[i].skillID)).css("backgroundColor", "");
		$("#" + skillsInfo[i].skillID+"button").html("");
		$("#" + skillsInfo[i].skillID + "cost").prop("title", 	"x1: " + formatNumber(GetUpgradeCostByMultiLevel(skillsInfo[i].level, skillsInfo[i].level + 1, skillsInfo[i])) + "\n" +
																"x10: " + formatNumber(GetUpgradeCostByMultiLevel(skillsInfo[i].level, skillsInfo[i].level + 10, skillsInfo[i])) + "\n" +
																"x100: " + formatNumber(GetUpgradeCostByMultiLevel(skillsInfo[i].level, skillsInfo[i].level + 100, skillsInfo[i])) + "\n"
																//+ skillsInfo[i].damage
																);
		/*for (var b = 0; b < skillsInfo[i].upgrades.length; b++) 
		{
			$("#" + skillsInfo[i].skillID + "skill" + (b+1)).prop("title", 
																//skillsInfo[i].upgrades[b].cost + "\n" +
																skillsInfo[i].damage + "\n" +
																skillsInfo[i].nextDamageDiff + "\n"// +
																//skillsInfo[i].upgrades[b].efficiency + "\n"
																);
		}*/
	}
	updateEfficiency()
}

function nextSkillButton(skill, level)
{
	//lists = [attackList]
	/*if (((skill)%3) === 0) 
	{  
		lists = [attackList];
	}
	else if (((skill+2)%3) === 0) 
	{  
		lists = [defenceList]
	} 
	else 
	{
		lists = [healthList]
	}*/
	$("#" + skillsInfo[skill].skillID + "level").val(level);
	updateLevels()
	CalcMonster()
	skillsUpdate()
	updateTable()
	saveData()
}

function buyNextSkillButton(skill, upgrade)
{
	/*if (((skill)%3) === 0) 
	{  
		lists = [attackList];
	}
	else if (((skill+2)%3) === 0) 
	{  
		lists = [defenceList]
	} 
	else 
	{
		lists = [healthList]
	}*/
	skillsInfo[skill].upgrades[upgrade].bought = 1
	$("#" + skillsInfo[skill].skillID + "skill" + (upgrade+1)).prop("checked", skillsInfo[skill].upgrades[upgrade].bought);
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
	//alert(lists)
	var tick_start = Date.now()
	var z = tab
	var secondBest = -1;
	var secondBestEff = 999999999
	for (var i = 0; i < lists[z].length; i++) 
	{
		if ((skillsInfo[bestEfficiency[z]].efficiency > skillsInfo[lists[z][i]].efficiency))
		{
			bestEfficiency[z] = lists[z][i];
		}
		for (var b = 0; b < skillsInfo[i].upgrades.length; b++)
		{
			if ((skillsInfo[bestEfficiencyUpgrade[z][0]].upgrades[bestEfficiencyUpgrade[z][1]].efficiency > skillsInfo[lists[z][i]].upgrades[b].efficiency))
			{
				bestEfficiencyUpgrade[z] = [lists[z][i],b]
			}
		}
	}
	for (var i = 0; i < lists[z].length; i++) 
	{
		//alert(bestEfficiency[z])
		if ((secondBestEff > skillsInfo[lists[z][i]].efficiency) && (bestEfficiency[z] != lists[z][i]))
		{
			secondBest = lists[z][i];
			secondBestEff = skillsInfo[lists[z][i]].efficiency
		}
	}
	var bestEffLevel = Math.ceil(Math.log((secondBestEff*skillsInfo[bestEfficiency[z]].nextDamageDiff)/(skillsInfo[bestEfficiency[z]].vars[0] * Math.pow(skillsInfo[bestEfficiency[z]].vars[1], skillsInfo[bestEfficiency[z]].vars[2])))/Math.log(1.1))
	var bestUpgradeLevel = (25 * (bestEfficiencyUpgrade[z][1] + 1))
	if (bestEfficiencyUpgrade[z][0] == bestEfficiency[z])
	{
		if ((skillsInfo[bestEfficiencyUpgrade[z][0]].upgrades[bestEfficiencyUpgrade[z][1]].efficiency < skillsInfo[bestEfficiency[z]].efficiency))
		{
			$("#"+(skillsInfo[bestEfficiencyUpgrade[z][0]].skillID)).css("backgroundColor", "#9acd32");
			var level = bestUpgradeLevel
			//$("#testing").html(skillsInfo[bestEfficiency[z]].efficiency + " " + bestEfficiency[z] + "<br>")
			//$("#testing").append(skillsInfo[bestEfficiencyUpgrade[z][0]].upgrades[bestEfficiencyUpgrade[z][1]].efficiency + " " + bestEfficiencyUpgrade[z])
			if (bestUpgradeLevel - parseInt($("#" + skillsInfo[bestEfficiencyUpgrade[z][0]].skillID + "level").val()) == 0)
			{
				$("#" + skillsInfo[bestEfficiencyUpgrade[z][0]].skillID+"nextDamageDiff").html("Upgrade");
				$("#" + skillsInfo[bestEfficiencyUpgrade[z][0]].skillID+"button").html("<button type=\"button\" onclick=\"buyNextSkillButton('" + bestEfficiencyUpgrade[z][0] + "'," + bestEfficiencyUpgrade[z][1] + ")\" class=\"btn btn-primary\" style=\"float: middle;\">Done</button>");
			}
			else
			{
				$("#" + skillsInfo[bestEfficiencyUpgrade[z][0]].skillID+"nextDamageDiff").html(skillsInfo[bestEfficiencyUpgrade[z][0]].level + " (+" + (bestUpgradeLevel - parseInt($("#" + skillsInfo[bestEfficiencyUpgrade[z][0]].skillID + "level").val())) + ") + Upgrade");
				$("#" + skillsInfo[bestEfficiencyUpgrade[z][0]].skillID+"button").html("<button type=\"button\" onclick=\"nextSkillButton('" + bestEfficiencyUpgrade[z][0] + "'," + level + ")\" class=\"btn btn-primary\" style=\"float: middle;\">Done</button>");
			}
			$("#" + skillsInfo[bestEfficiencyUpgrade[z][0]].skillID+"cost").html(formatNumber((GetUpgradeCostByMultiLevel(parseInt($("#" + skillsInfo[bestEfficiencyUpgrade[z][0]].skillID + "level").val()), 25*(bestEfficiencyUpgrade[z][1]+1), skillsInfo[bestEfficiencyUpgrade[z][0]]) + (skillCost(skillsInfo[bestEfficiencyUpgrade[z][0]].vars, 25*(bestEfficiencyUpgrade[z][1]+1)) * 10))));
		}
		else
		{
			$("#" + skillsInfo[bestEfficiency[z]].skillID+"nextDamageDiff").html(bestEffLevel + " (+" + (bestEffLevel - parseInt($("#" + skillsInfo[bestEfficiency[z]].skillID + "level").val())) + ") ");
			$("#"+(skillsInfo[bestEfficiency[z]].skillID)).css("backgroundColor", "#9acd32");
			var level = bestEffLevel
			$("#" + skillsInfo[bestEfficiency[z]].skillID+"button").html("<button type=\"button\" onclick=\"nextSkillButton('" + bestEfficiency[z] + "'," + level + ")\" class=\"btn btn-primary\" style=\"float: middle;\">Done</button>");
			$("#" + skillsInfo[bestEfficiency[z]].skillID+"cost").html(formatNumber(GetUpgradeCostByMultiLevel(parseInt($("#" + skillsInfo[bestEfficiency[z]].skillID + "level").val()), bestEffLevel, skillsInfo[bestEfficiency[z]])));
			con = false
		}
	}
	else
	{
		if ((25 * (bestEfficiencyUpgrade[z][1] + 1)) - parseInt($("#" + skillsInfo[bestEfficiencyUpgrade[z][0]].skillID + "level").val()) == 0)
		{
			$("#"+(skillsInfo[bestEfficiencyUpgrade[z][0]].skillID)).css("backgroundColor", "#9acd32");
			var level = bestUpgradeLevel
			//$("#testing").html(skillsInfo[bestEfficiency[z]].efficiency + " " + bestEfficiency[z] + "<br>")
			//$("#testing").append(skillsInfo[bestEfficiencyUpgrade[z][0]].upgrades[bestEfficiencyUpgrade[z][1]].efficiency + " " + bestEfficiencyUpgrade[z])
			if (bestUpgradeLevel - parseInt($("#" + skillsInfo[bestEfficiencyUpgrade[z][0]].skillID + "level").val()) == 0)
			{
				$("#" + skillsInfo[bestEfficiencyUpgrade[z][0]].skillID+"nextDamageDiff").html("Upgrade");
				$("#" + skillsInfo[bestEfficiencyUpgrade[z][0]].skillID+"button").html("<button type=\"button\" onclick=\"buyNextSkillButton('" + bestEfficiencyUpgrade[z][0] + "'," + bestEfficiencyUpgrade[z][1] + ")\" class=\"btn btn-primary\" style=\"float: middle;\">Done</button>");
			}
			else
			{
				$("#" + skillsInfo[bestEfficiencyUpgrade[z][0]].skillID+"nextDamageDiff").html(skillsInfo[bestEfficiencyUpgrade[z][0]].level + " (+" + (bestUpgradeLevel - parseInt($("#" + skillsInfo[bestEfficiencyUpgrade[z][0]].skillID + "level").val())) + ") + Upgrade");
				$("#" + skillsInfo[bestEfficiencyUpgrade[z][0]].skillID+"button").html("<button type=\"button\" onclick=\"nextSkillButton('" + bestEfficiencyUpgrade[z][0] + "'," + level + ")\" class=\"btn btn-primary\" style=\"float: middle;\">Done</button>");
			}
			$("#" + skillsInfo[bestEfficiencyUpgrade[z][0]].skillID+"cost").html(formatNumber((GetUpgradeCostByMultiLevel(parseInt($("#" + skillsInfo[bestEfficiencyUpgrade[z][0]].skillID + "level").val()), 25*(bestEfficiencyUpgrade[z][1]+1), skillsInfo[bestEfficiencyUpgrade[z][0]]) + (skillCost(skillsInfo[bestEfficiencyUpgrade[z][0]].vars, 25*(bestEfficiencyUpgrade[z][1]+1)) * 10))));
			con = false
		}
		else
		{
			$("#" + skillsInfo[bestEfficiency[z]].skillID+"nextDamageDiff").html(bestEffLevel + " (+" + (bestEffLevel - parseInt($("#" + skillsInfo[bestEfficiency[z]].skillID + "level").val())) + ") ");
			$("#"+(skillsInfo[bestEfficiency[z]].skillID)).css("backgroundColor", "#9acd32");
			var level = bestEffLevel
			$("#" + skillsInfo[bestEfficiency[z]].skillID+"button").html("<button type=\"button\" onclick=\"nextSkillButton('" + bestEfficiency[z] + "'," + level + ")\" class=\"btn btn-primary\" style=\"float: middle;\">Done</button>");
			$("#" + skillsInfo[bestEfficiency[z]].skillID+"cost").html(formatNumber(GetUpgradeCostByMultiLevel(parseInt($("#" + skillsInfo[bestEfficiency[z]].skillID + "level").val()), bestEffLevel, skillsInfo[bestEfficiency[z]])));
			con = false
		}
	}
	var tick_end = Date.now()
	$("#testing").html(tick_end - tick_start)
	updateLevels();
}

var monsterCount = 0
var monsterArray = []
var mapchange = 0
while (monsterCount < 410)
{
	if (monsterCount == 100) { mapchange += 100 }
	if (monsterCount == 200) { mapchange += 100 }
	if (monsterCount == 300) { mapchange += 100 }
	if (monsterCount == 400) { mapchange += 100 }
	monsterArray.push({attack: calcAtt(monsterCount + mapchange), defence: calcDef(monsterCount + mapchange), health: calcHp(monsterCount + mapchange), ki: calcKi(monsterCount + mapchange)})
	monsterCount += 1;
}
function CalcMonster()
{
	$("#attackoutput").html("")
	//var heroAttack = parseFloat($("#attack").val())
	var bestMonster = 0
	var mEff = 0
	var map = 1
	var city = 1
	var monster = 0
	while (bestMonster < 401)
	{
		if (monster == 11)
		{
			monster = 1;
			city += 1;
		}
		if (city == 11)
		{
			city = 1;
			map += 1;
		}

		if ((calcEff(bestMonster) - calcEff(bestMonster + 1) > 0) || (bestMonster == 400))
		{
			//alert(bestMonster)
			//alert(calcEff(101 + 100 + 1) - calcEff(101 + 100))
			var text = ""
			text += "Map: " + map + "<br>"
			text += "City: " + city + "<br>"
			text += "Monster: " + monster + "<br>"
			//text += MonsterNames[0] + " " + bestMonster + "<br>"
			//text += " - Attack: " + formatNumber(monsterArray[bestMonster].attack) + "<br>"
			//text += " - Defence: " + formatNumber(monsterArray[bestMonster].defence) + "<br>"
			//text += " - Health: " + formatNumber(monsterArray[bestMonster].health) + "<br>"
			//text += " - Ki Reward: " + formatNumber(monsterArray[bestMonster].ki) + "<br>"
			//text += " - Efficiency: " + (Math.round(calcEff(bestMonster)*100))/100 + "<br>"
			//text += " - Hero Attack: " + parseAttack() + "<br><br>"
			$("#attackoutput").append(text)
			return
		}
		bestMonster = bestMonster + 1;
		monster += 1
	}
}

function calcAtt(level)
{
	return Math.floor(1*(Math.pow(1.65,level)))
}

function calcDef(level)
{
	if (level === 1)
	{
		return 0
	}
	else
	{
		return Math.floor(1*(Math.pow(1.6,level)))
	}
}

function calcHp(level)
{
	return Math.floor(100*(Math.pow(1.5,level)))
}

function calcKi(level)
{
	return Math.floor(150*(Math.pow(1.63,level)))
}

function calcEff(level)
{
	//alert(parseFloat($("#attack").val()))
	if (parseAttack() <= monsterArray[level].defence)
	{
		return -1
	}
	else
	{
		return monsterArray[level].ki/(monsterArray[level].health/(parseAttack()-monsterArray[level].defence))
	}
}

var labels = ["", "M", "B", "T", "Qa", "Qi", "Sx", "Sp", "Oc", "No", "Dc", "UD", "DD", "TD", "QaD", "QiD", 
        "SxD", "SpD", "OcD", "NoD", "Vg", "UV", "DV", "TV", "QaV", "QiV", "SxV", "SpV", "OcV", "NoV", "Tg", "UT", 
        "DT", "TT", "QaT", "QiT", "SxT", "SpT", "OcT", "NoT", "Qg", "UQ", "DQ", "TQ", "QaQ", "QiQ", "SxQ", "SpQ", 
        "OcQ", "NoQ", "Ig", "UI", "DI", "TI", "QaI", "QiI", "SxI", "SpI", "OcI", "NoI", "Xg", "UX", "DX", "TX", 
        "QaX", "QiX", "SxX", "SpX", "OcX", "NoX", "Sg"]

function formatNumber(number)
{
    var index = 0;
    if (number >= 1000000)
    {
        number /= 1000;
        while (Math.round(number) >= 1000)
        {
            number /= 1000;
            index++;
        }
        //num2 = (number * 1000) / (1000);
		number = (Math.round(number * 100))/100
		return number + " " + labels[index]
    }
    else
    {
		return number
    }
}

function parseAttack()
{
	var attack = $("#attack").val()
	var index = 0;
	for (var a=0; a < labels.length; a++)
	{
		if ((attack.toLowerCase().match(labels[a].toLowerCase()) != null) && (attack.match(labels[a]) != ""))
		{
			//alert(attack.match(labels[a]))
			index = a;
		}
	}
	attack = parseFloat(attack)
	if (index > 0)
	{
		attack = attack * Math.pow(1000, index + 1)
	}
	//alert(attack + " \"" + formatNumber(attack) + "\"")
	return attack
}
