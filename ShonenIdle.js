var MonsterNames = ["Snail"]

var skillsInfo = [
{skillID: 1, name: "Punch", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{skillID: 2, name: "Block", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{skillID: 3, name: "Run", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{skillID: 4, name: "Kick", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{skillID: 5, name: "Block2", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{skillID: 6, name: "Run2", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{skillID: 7, name: "Punch3", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{skillID: 8, name: "Block3", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{skillID: 9, name: "Run3", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{skillID: 10, name: "Punch4", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{skillID: 11, name: "Block4", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{skillID: 12, name: "Run4", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{skillID: 13, name: "Punch5", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{skillID: 14, name: "Block5", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{skillID: 15, name: "Run5", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{skillID: 16, name: "Punch6", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{skillID: 17, name: "Block6", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{skillID: 18, name: "Run6", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{skillID: 19, name: "Punch7", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{skillID: 20, name: "Block7", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{skillID: 21, name: "Run7", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{skillID: 22, name: "Punch8", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{skillID: 23, name: "Block8", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{skillID: 24, name: "Run8", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{skillID: 25, name: "Punch9", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{skillID: 26, name: "Block9", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{skillID: 27, name: "Run9", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{skillID: 28, name: "Punch10", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{skillID: 29, name: "Block10", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{skillID: 30, name: "Run10", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{skillID: 31, name: "Punch11", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{skillID: 32, name: "Block11", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{skillID: 33, name: "Run11", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{skillID: 34, name: "Punch12", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{skillID: 35, name: "Block12", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{skillID: 36, name: "Run12", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{skillID: 37, name: "Punch13", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{skillID: 38, name: "Block13", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{skillID: 39, name: "Run13", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{skillID: 40, name: "Punch14", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{skillID: 41, name: "Block14", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{skillID: 42, name: "Run14", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{skillID: 43, name: "Punch15", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{skillID: 44, name: "Block15", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{skillID: 45, name: "Run15", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{skillID: 46, name: "Punch16", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{skillID: 47, name: "Block16", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
{skillID: 48, name: "Run16", tecCost: 0, level: 0, extra: 1, cost: 0, damage: 0, nextDamageDiff: 0, upgrades: [{cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}, {cost: 0, bought: 0}]},
]

function skillInfoCalcs()
{
    for (var a = 0; a < skillsInfo.length; a++)
    {
        this.skillsInfo[a].tecCost = Math.floor((1 * Math.pow(1.8, a)));
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

function skillsUpdate()
{
	extraUpdate();
    skillsInfo[0].damage = (skillsInfo[0].tecCost * skillsInfo[0].level) * skillsInfo[0].extra;
    skillsInfo[0].cost = Math.floor((50 * Math.pow(1.1, skillsInfo[0].level)));
    skillsInfo[1].damage = (skillsInfo[1].tecCost * skillsInfo[1].level) * skillsInfo[1].extra;
    skillsInfo[1].cost = Math.floor((175 * Math.pow(1.1, skillsInfo[1].level)));
    skillsInfo[2].damage = (skillsInfo[2].tecCost * skillsInfo[2].level) * skillsInfo[2].extra;
    skillsInfo[2].cost = Math.floor((615 * Math.pow(1.1, skillsInfo[2].level)));
    skillsInfo[3].damage = (skillsInfo[3].tecCost * skillsInfo[3].level) * skillsInfo[3].extra;
    skillsInfo[3].cost = Math.floor((2450 * Math.pow(1.1, skillsInfo[3].level)));
    skillsInfo[4].damage = (skillsInfo[4].tecCost * skillsInfo[4].level) * skillsInfo[4].extra;
    skillsInfo[4].cost = Math.floor((9800 * Math.pow(1.1, skillsInfo[4].level)));
    skillsInfo[5].damage = (skillsInfo[5].tecCost * skillsInfo[5].level) * skillsInfo[5].extra;
    skillsInfo[5].cost = Math.floor((39150 * Math.pow(1.1, skillsInfo[5].level)));
    skillsInfo[6].damage = (skillsInfo[6].tecCost * skillsInfo[6].level) * skillsInfo[6].extra;
    skillsInfo[6].cost = Math.floor((176250 * Math.pow(1.1, skillsInfo[6].level)));
    skillsInfo[7].damage = (skillsInfo[7].tecCost * skillsInfo[7].level) * skillsInfo[7].extra;
    skillsInfo[7].cost = Math.floor((793150 * Math.pow(1.1, skillsInfo[7].level)));
    skillsInfo[8].damage = (skillsInfo[8].tecCost * skillsInfo[8].level) * skillsInfo[8].extra;
    skillsInfo[8].cost = Math.floor((3500000 * Math.pow(1.1, skillsInfo[8].level)));
    skillsInfo[9].damage = (skillsInfo[9].tecCost * skillsInfo[9].level) * skillsInfo[9].extra;
    skillsInfo[9].cost = Math.floor((1.75E+07 * Math.pow(1.1, skillsInfo[9].level)));
    skillsInfo[10].damage = (skillsInfo[10].tecCost * skillsInfo[10].level) * skillsInfo[10].extra;
    skillsInfo[10].cost = Math.floor((8.75E+07 * Math.pow(1.1, skillsInfo[10].level)));
    skillsInfo[11].damage = (skillsInfo[11].tecCost * skillsInfo[11].level) * skillsInfo[11].extra;
    skillsInfo[11].cost = Math.floor((4.35E+08 * Math.pow(1.1, skillsInfo[11].level)));
    skillsInfo[12].damage = (skillsInfo[12].tecCost * skillsInfo[12].level) * skillsInfo[12].extra;
    skillsInfo[12].cost = Math.floor((2.4E+09 * Math.pow(1.1, skillsInfo[12].level)));
    skillsInfo[13].damage = (skillsInfo[13].tecCost * skillsInfo[13].level) * skillsInfo[13].extra;
    skillsInfo[13].cost = Math.floor((1.2E+10 * Math.pow(1.1, skillsInfo[13].level)));
    skillsInfo[14].damage = (skillsInfo[14].tecCost * skillsInfo[14].level) * skillsInfo[14].extra;
    skillsInfo[14].cost = Math.floor((6.6E+10 * Math.pow(1.1, skillsInfo[14].level)));
    skillsInfo[15].damage = (skillsInfo[15].tecCost * skillsInfo[15].level) * skillsInfo[15].extra;
    skillsInfo[15].cost = Math.floor((3.95E+11 * Math.pow(1.1, skillsInfo[15].level)));
    skillsInfo[16].damage = (skillsInfo[16].tecCost * skillsInfo[16].level) * skillsInfo[16].extra;
    skillsInfo[16].cost = Math.floor((2.3E+12 * Math.pow(1.1, skillsInfo[16].level)));
    skillsInfo[17].damage = (skillsInfo[17].tecCost * skillsInfo[17].level) * skillsInfo[17].extra;
    skillsInfo[17].cost = Math.floor(((1.3 * Math.pow(10, 13)) * Math.pow(1.1, skillsInfo[17].level)));
    skillsInfo[18].damage = (skillsInfo[18].tecCost * skillsInfo[18].level) * skillsInfo[18].extra;
    skillsInfo[18].cost = Math.floor(((7.8 * Math.pow(10, 13)) * Math.pow(1.1, skillsInfo[18].level)));
    skillsInfo[19].damage = (skillsInfo[19].tecCost * skillsInfo[19].level) * skillsInfo[19].extra;
    skillsInfo[19].cost = Math.floor(((5 * Math.pow(10, 14)) * Math.pow(1.1, skillsInfo[19].level)));
    skillsInfo[20].damage = (skillsInfo[20].tecCost * skillsInfo[20].level) * skillsInfo[20].extra;
    skillsInfo[20].cost = Math.floor(((3.2 * Math.pow(10, 15)) * Math.pow(1.1, skillsInfo[20].level)));
    skillsInfo[21].damage = (skillsInfo[21].tecCost * skillsInfo[21].level) * skillsInfo[21].extra;
    skillsInfo[21].cost = Math.floor(((2.2 * Math.pow(10, 16)) * Math.pow(1.1, skillsInfo[21].level)));
    skillsInfo[22].damage = (skillsInfo[22].tecCost * skillsInfo[22].level) * skillsInfo[22].extra;
    skillsInfo[22].cost = Math.floor(((1.5 * Math.pow(10, 17)) * Math.pow(1.1, skillsInfo[22].level)));
    skillsInfo[23].damage = (skillsInfo[23].tecCost * skillsInfo[23].level) * skillsInfo[23].extra;
    skillsInfo[23].cost = Math.floor(((1 * Math.pow(10, 18)) * Math.pow(1.1, skillsInfo[23].level)));
    skillsInfo[24].damage = (skillsInfo[24].tecCost * skillsInfo[24].level) * skillsInfo[24].extra;
    skillsInfo[24].cost = Math.floor(((8 * Math.pow(10, 18)) * Math.pow(1.1, skillsInfo[24].level)));
    skillsInfo[25].damage = (skillsInfo[25].tecCost * skillsInfo[25].level) * skillsInfo[25].extra;
    skillsInfo[25].cost = Math.floor(((6 * Math.pow(10, 19)) * Math.pow(1.1, skillsInfo[25].level)));
    skillsInfo[26].damage = (skillsInfo[26].tecCost * skillsInfo[26].level) * skillsInfo[26].extra;
    skillsInfo[26].cost = Math.floor(((4.5 * Math.pow(10, 20)) * Math.pow(1.1, skillsInfo[26].level)));
    skillsInfo[27].damage = (skillsInfo[27].tecCost * skillsInfo[27].level) * skillsInfo[27].extra;
    skillsInfo[27].cost = Math.floor(((3.6 * Math.pow(10, 21)) * Math.pow(1.1, skillsInfo[27].level)));
    skillsInfo[28].damage = (skillsInfo[28].tecCost * skillsInfo[28].level) * skillsInfo[28].extra;
    skillsInfo[28].cost = Math.floor(((2.9 * Math.pow(10, 22)) * Math.pow(1.1, skillsInfo[28].level)));
    skillsInfo[29].damage = (skillsInfo[29].tecCost * skillsInfo[29].level) * skillsInfo[29].extra;
    skillsInfo[29].cost = Math.floor(((2.3 * Math.pow(10, 23)) * Math.pow(1.1, skillsInfo[29].level)));
    skillsInfo[30].damage = (skillsInfo[30].tecCost * skillsInfo[30].level) * skillsInfo[30].extra;
    skillsInfo[30].cost = Math.floor(((1.9 * Math.pow(10, 24)) * Math.pow(1.1, skillsInfo[30].level)));
    skillsInfo[31].damage = (skillsInfo[31].tecCost * skillsInfo[31].level) * skillsInfo[31].extra;
    skillsInfo[31].cost = Math.floor(((1.6 * Math.pow(10, 25)) * Math.pow(1.1, skillsInfo[31].level)));
    skillsInfo[32].damage = (skillsInfo[32].tecCost * skillsInfo[32].level) * skillsInfo[32].extra;
    skillsInfo[32].cost = Math.floor(((1.4 * Math.pow(10, 26)) * Math.pow(1.1, skillsInfo[32].level)));
    skillsInfo[33].damage = (skillsInfo[33].tecCost * skillsInfo[33].level) * skillsInfo[33].extra;
    skillsInfo[33].cost = Math.floor(((1.2 * Math.pow(10, 27)) * Math.pow(1.1, skillsInfo[33].level)));
    skillsInfo[34].damage = (skillsInfo[34].tecCost * skillsInfo[34].level) * skillsInfo[34].extra;
    skillsInfo[34].cost = Math.floor(((1.1 * Math.pow(10, 28)) * Math.pow(1.1, skillsInfo[34].level)));
    skillsInfo[35].damage = (skillsInfo[35].tecCost * skillsInfo[35].level) * skillsInfo[35].extra;
    skillsInfo[35].cost = Math.floor(((1 * Math.pow(10, 29)) * Math.pow(1.1, skillsInfo[35].level)));
    skillsInfo[36].damage = (skillsInfo[36].tecCost * skillsInfo[36].level) * skillsInfo[36].extra;
    skillsInfo[36].cost = Math.floor(((9.9 * Math.pow(10, 29)) * Math.pow(1.1, skillsInfo[36].level)));
    skillsInfo[37].damage = (skillsInfo[37].tecCost * skillsInfo[37].level) * skillsInfo[37].extra;
    skillsInfo[37].cost = Math.floor(((9.4 * Math.pow(10, 30)) * Math.pow(1.1, skillsInfo[37].level)));
    skillsInfo[38].damage = (skillsInfo[38].tecCost * skillsInfo[38].level) * skillsInfo[38].extra;
    skillsInfo[38].cost = Math.floor(((8.9 * Math.pow(10, 31)) * Math.pow(1.1, skillsInfo[38].level)));
    skillsInfo[39].damage = (skillsInfo[39].tecCost * skillsInfo[39].level) * skillsInfo[39].extra;
    skillsInfo[39].cost = Math.floor(((8 * Math.pow(10, 32)) * Math.pow(1.1, skillsInfo[39].level)));
    skillsInfo[40].damage = (skillsInfo[40].tecCost * skillsInfo[40].level) * skillsInfo[40].extra;
    skillsInfo[40].cost = Math.floor(((8 * Math.pow(10, 33)) * Math.pow(1.1, skillsInfo[40].level)));
    skillsInfo[41].damage = (skillsInfo[41].tecCost * skillsInfo[41].level) * skillsInfo[41].extra;
    skillsInfo[41].cost = Math.floor(((9 * Math.pow(10, 34)) * Math.pow(1.1, skillsInfo[41].level)));
    skillsInfo[42].damage = (skillsInfo[42].tecCost * skillsInfo[42].level) * skillsInfo[42].extra;
    skillsInfo[42].cost = Math.floor(((9.3 * Math.pow(10, 35)) * Math.pow(1.1, skillsInfo[42].level)));
    skillsInfo[43].damage = (skillsInfo[43].tecCost * skillsInfo[43].level) * skillsInfo[43].extra;
    skillsInfo[43].cost = Math.floor(((9.8 * Math.pow(10, 36)) * Math.pow(1.1, skillsInfo[43].level)));
    skillsInfo[44].damage = (skillsInfo[44].tecCost * skillsInfo[44].level) * skillsInfo[44].extra;
    skillsInfo[44].cost = Math.floor(((1 * Math.pow(10, 38)) * Math.pow(1.1, skillsInfo[44].level)));
    skillsInfo[45].damage = (skillsInfo[45].tecCost * skillsInfo[45].level) * skillsInfo[45].extra;
    skillsInfo[45].cost = Math.floor(((1.1 * Math.pow(10, 39)) * Math.pow(1.1, skillsInfo[45].level)));
    skillsInfo[46].damage = (skillsInfo[46].tecCost * skillsInfo[46].level) * skillsInfo[46].extra;
    skillsInfo[46].cost = Math.floor(((1.2 * Math.pow(10, 40)) * Math.pow(1.1, skillsInfo[46].level)));
    skillsInfo[47].damage = (skillsInfo[47].tecCost * skillsInfo[47].level) * skillsInfo[47].extra;
    skillsInfo[47].cost = Math.floor(((1.3 * Math.pow(10, 41)) * Math.pow(1.1, skillsInfo[47].level)));
	for (var a = 0; a < skillsInfo.length; a++)
	{
		skillsInfo[a].nextDamageDiff = (skillsInfo[a].tecCost * (skillsInfo[a].level+1)) * skillsInfo[a].extra - skillsInfo[a].damage;
	}
}

function createTable()
{
	for (var i = 0; i < skillsInfo.length; i++) 
	{
		var tr = $("<tr></tr>");
		tr.append($("<td></td>").append(skillsInfo[i].name).attr("id", skillsInfo[i].name+"name"));
		used1 = $("<input></input>").attr("type", "checkbox").attr("id", skillsInfo[i].name+"skill1").attr("title", "ha");
		used2 = $("<input></input>").attr("type", "checkbox").attr("id", skillsInfo[i].name+"skill2").attr("title", "ha");
		used3 = $("<input></input>").attr("type", "checkbox").attr("id", skillsInfo[i].name+"skill3").attr("title", "ha");
		used4 = $("<input></input>").attr("type", "checkbox").attr("id", skillsInfo[i].name+"skill4").attr("title", "ha");
		used5 = $("<input></input>").attr("type", "checkbox").attr("id", skillsInfo[i].name+"skill5").attr("title", "ha");
		used6 = $("<input></input>").attr("type", "checkbox").attr("id", skillsInfo[i].name+"skill6").attr("title", "ha");
		tr.append($("<td></td>").append(used1).append(used2).append(used3).append(used4).append(used5).append(used6));
		tr.append($("<td></td>").append(skillsInfo[i].cost).attr("id", skillsInfo[i].name+"cost"));
		tr.append($("<td></td>").append(skillsInfo[i].damage).attr("id", skillsInfo[i].name+"damage"));
		tr.append($("<td></td>").append(skillsInfo[i].nextDamageDiff).attr("id", skillsInfo[i].name+"nextDamageDiff"));
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
		}
	  //$("#"+(skillsInfo[i].name)+"skill1").prop("title", skillsInfo[i].name);
	  //$("#"+(skillsInfo[2].name)+"").css("backgroundColor", "red");
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
			//text += " - Efficiency: " + (Math.round(calcEff(bestMonster)*100))/100 + "<br>"
			$("#attackoutput").append(text)
			return
		}
		bestMonster = bestMonster + 1;
	}
}

function calcAtt(level)
{
	return Math.floor(1*(Math.pow(1.8,level)))
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
		//alert(parsedString.skills[0].level)
		//$("#testing").html(parsedString.skills[0].level)
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
	//$("#testing").html("")
	for (var i = 0; i < skillsInfo.length; i++) 
	{
		if (isNaN(parseInt($("#" + skillsInfo[i].name + "level").val()))) {$("#" + skillsInfo[i].name + "level").val(0);}
		skillsInfo[i].level = parseInt($("#" + skillsInfo[i].name + "level").val());
		for (var y = 0; y < skillsInfo[i].upgrades.length; y++)
		{
			//alert("test")
			skillsInfo[i].upgrades[y].bought = ($("#" + skillsInfo[i].name+"skill"+(y+1)).is(":checked")) ? 1 : 0;
			//alert($("#" + skillsInfo[i].name+"skill"+(y+1)).is(":checked"))
			//$("#Hero"+(x+1)+"skill"+(y+1)).prop("checked", HeroInfo[heroList[x]].skills[y].isActive);
			//$("#Hero"+(x+1)+"heroLevel").val(HeroInfo[heroList[x]].heroLevel);
		}
		//alert($("#" + skillsInfo[i].name + "level").val())
		//"<td><input type=\"text\" id=\"" + skillsInfo[i].name + "level\" value=" + skillsInfo[i].level +"></td>"
	}
}

function updateTable()
{
	for (var i = 0; i < skillsInfo.length; i++) 
	{
		$("#" + skillsInfo[i].name+"cost").html((skillsInfo[i].cost > 999999) ? skillsInfo[i].cost.toExponential(2) : skillsInfo[i].cost);
		$("#" + skillsInfo[i].name+"damage").html((skillsInfo[i].damage > 999999) ? skillsInfo[i].damage.toExponential(2) : skillsInfo[i].damage);
		$("#" + skillsInfo[i].name+"nextDamageDiff").html((skillsInfo[i].nextDamageDiff > 999999) ? skillsInfo[i].nextDamageDiff.toExponential(2) : skillsInfo[i].nextDamageDiff);
	}
}