var heroes = [];
var heroEvolveLevel = 1001.0;
var levelIneffiency = 0.904;
var heroInefficiency = 0.019;
var heroInefficiencySlowDown = 15.0;
var heroUpgradeBase = 1.075;
var evolveCostMultiplier = 10.0;
var dMGScaleDown = 0.1;
//var heroes = [];
var HeroInfo = [
[1,'Takeda, the Blade Assassin',0,50,4,3.5,4,526.0050314,6.18528E+21,0.98],
[2,'Contessa, the Torch Wielder',3.5,175,16,3.075,16,2104.020126,2.47411E+22,0.9216],
[3,'Hornetta, Queen of the Valrunes',3.85,673.75,55,1.475,55,7232.569182,8.50475E+22,0.830584],
[4,'Mila, the Hammer Stomper',4.235,'2,853.33',204,1.475,204,26826.2566,3.15449E+23,0.71639296],
[5,'Terra, the Land Scorcher',4.6585,1.33E+04,784,2.7,784,103096.9862,1.21231E+24,0.59049],
[6,'Inquisireaux, the Terrible',5.12435,6.81E+04,3163,3.3,3163,415938.4786,4.89101E+24,0.4644040868],
[7,'Charlotte, the Special',5.636785,3.84E+05,13358,1.8,13358,1756593.802,2.06557E+25,0.3479278222],
[8,'Jordaan, Knight of Mini',6.2004635,2.38E+06,59010,2.275,59010,7759889.226,9.12483E+25,0.2478758911],
[9,'Jukka, Master of Axes',10,2.38E+07,399040,2.7,399040,52474261.93,6.17043E+26,0.1676195504],
[10,'Milo and Clonk-Clonk',6,1.43E+08,1533712,1.425,1533712,201685057.2,2.37161E+27,0.1073741824],
[11,'Macelord, the Ruthless',6.6,9.43E+08,6.13E+06,3.225,6.13E+06,8.06E+08,9.48E+27,0.06501905148],
[12,'Gertrude, the Goat Rider',7.26,6.84E+09,2.54E+07,3.75,2.54E+07,3.34E+09,3.93E+28,0.03713326247],
[13,'Twitterella, the Tweeter',7.986,5.47E+10,1.09E+08,1.275,1.09E+08,1.43E+10,1.69E+29,0.01995319085],
[14,'Master Hawk, Lord of Luft',15,8.20E+11,8.25E+08,2.875,8.25E+08,1.08E+11,1.28E+30,0.01006131972],
[15,'Elpha, Wielder of Gems',10,8.20E+12,3.89E+09,1.875,3.89E+09,5.12E+11,6.02E+30,0.00474756151],
[16,'Poppy, Daughter of Ceremony',20,1.64E+14,5.45E+10,1.975,5.45E+10,7.17E+12,8.43E+31,0.003323293057],
[17,'Skulptor, Protector of Bridges',10,1.64E+15,3.81E+11,2.775,3.81E+11,5.02E+13,5.90E+32,0.00232630514],
[18,'Sterling, the Enchantor',30,4.92E+16,8.01E+12,3.275,8.01E+12,1.05E+15,1.24E+34,0.001628413598],
[19,'Orba, the Foreseer',50,2.46E+18,2.80E+14,3.3,2.80E+14,3.69E+16,4.34E+35,0.001139889519],
[20,'Remus, the Noble Archer',30,7.38E+19,5.89E+15,3.7,5.89E+15,7.74E+17,9.10E+36,0.000797922663],
[21,'Mikey, the Magician Apprentice',33,2.44E+21,1.36E+17,1.25,1.36E+17,1.79E+19,2.10E+38,0.0005585458641],
[22,'Peter Pricker, the Prickly Poker',100,2.44E+23,9.52E+18,2.75,9.52E+18,1.25E+21,1.47E+40,0.0003909821049],
[23,'Teeny Tom, Keeper of the Castle',200,4.87E+25,1.33E+21,2.375,1.33E+21,1.75E+23,2.06E+42,0.0002736874734],
[24,'Deznis, the Cleanser,400',1.95E+28,3.73E+23,3.675,3.73E+23,4.91E+25,5.77E+44,0.0001915812314],
[25,'Hamlette, Painter of Skulls',1.10E+03,2.14E+31,2.87E+26,3.125,2.87E+26,3.78E+28,4.44E+47,0.000134106862],
[26,'Eistor, the Banisher',1.10E+05,2.36E+36,2.21E+31,2.65,2.21E+31,2.91E+33,3.42E+52,0.00009387480338],
[27,'Flavius and Oinksbjorn',1.10E+10,2.59E+46,1.70E+41,2.075,1.70E+41,2.24E+43,2.63E+62,0.00006571236236],
[28,'Chester, the Beast Tamer',1.10E+15,2.85E+61,1.31E+56,2.3,1.31E+56,1.73E+58,2.03E+77,0.00004599865365],
[29,'Mohacas, the Wind Warrior',1.10E+20,3.14E+81,1.01E+76,1.7,1.01E+76,1.33E+78,1.56E+97,0.00003219905756],
[30,'Jaqulin, the Unknown',1.20E+30,3.76E+111,8.49E+105,3.25,8.49E+105,1.12E+108,1.31E+127,0.00002253934029]];

function hero(intID, name, costMultiplier, attackDamage, attackTime, purchaseCost, level) 
{
  this.heroID = intID;
  this.heroSpriteID = intID;
  this.name = name;
  this.costMultiplier = costMultiplier;
  this.attackDamage = attackDamage;
  this.attackTime = attackTime;
  this.purchaseCost = purchaseCost;
  this.heroLevel = level;
  
  this.getInfo = function () 
  {
    return [this.name,this.nextUpgradeCost,parseInt(this.currentDPS),parseInt(this.nextLevelDPSDiff), this.efficiency];
  }
  this.UpdateHeroStats = function()
  {
    this.currentDPS = this.GetDPSByLevel(this.heroLevel);
    this.nextLevelDPSDiff = this.GetDPSByLevel((this.heroLevel) + 1) - this.currentDPS;
    //this.currentCoolDown = this.GetCoolDown();
    this.currentDamage = this.currentDPS * this.currentCoolDown;
    this.nextUpgradeCost = this.GetUpgradeCostByLevel(this.heroLevel);
    this.efficiency = this.nextUpgradeCost/this.nextLevelDPSDiff
  }
  this.GetDPSByLevel = function(iLevel)
  {
    //double statBonus = PlayerModel.instance.GetStatBonus(BonusType.HeroAttackSpeedActive);
    var num3 = 0.0;
    if (this.IsEvolved(iLevel))
    {
      num3 = Math.pow(levelIneffiency, (iLevel - heroEvolveLevel)) * Math.pow((1.0 - (heroInefficiency * heroInefficiencySlowDown)), (this.heroID + 30));
    }
    else
    {
      num3 = Math.pow(levelIneffiency, (iLevel - 1)) * Math.pow((1.0 - (heroInefficiency * Math.min(this.heroID, heroInefficiencySlowDown))), this.heroID);
    }
    var num4 = 0.0;
    if (this.IsEvolved(iLevel))
    {
      num4 = (((this.GetUpgradeCostByLevel(iLevel - 1) * (Math.pow(heroUpgradeBase, (iLevel - (heroEvolveLevel - 1))) - 1.0)) / ((heroUpgradeBase - 1.0))) * num3) * dMGScaleDown;
    }
    else
    {
      num4 = (((this.GetUpgradeCostByLevel(iLevel - 1) * (Math.pow(heroUpgradeBase, iLevel) - 1.0)) / ((heroUpgradeBase - 1.0))) * num3) * dMGScaleDown;
    }
    //return (((num4 * ((1.0 + this.currentPassiveThisHeroDamage) + PlayerModel.instance.GetStatBonus(BonusType.AllDamage))) * (1.0 + ArtifactModel.instance.ArtifactDamageBonus)) * (1.0 + statBonus));
    return num4 * (1.0 + this.currentPassiveThisHeroDamage);
  }
  this.GetcurrentPassiveThisHeroDamage()
  {
	var num = 0.0;
	
  }
  this.IsEvolved = function(iLevel)
  {
    return (iLevel >= heroEvolveLevel);
  }
  this.GetUpgradeCostByLevel = function(iLevel)
  {
    var num = 0.0;
    num = this.GetHeroBaseCost(iLevel) * Math.pow(heroUpgradeBase, iLevel);
    var a = num;// * (1.0 + PlayerModel.instance.GetStatBonus(BonusType.AllUpgradeCost));
    return Math.ceil(a);
  }
  this.GetHeroBaseCost = function(iLevel)
  {
    var purchaseCost = this.purchaseCost;
    iLevel = -1;
    if (iLevel == -1)
    {
      iLevel = this.heroLevel;
    }
    if (iLevel >= (heroEvolveLevel - 1))
    {
      purchaseCost *= evolveCostMultiplier;
    }
    return purchaseCost;
  }
  this.GetUpgradeCostByLevel = function(iLevel)
  {
    var num = 0.0;
    num = this.GetHeroBaseCost(iLevel) * Math.pow(heroUpgradeBase, iLevel);
    var a = num;// * (1.0 + PlayerModel.instance.GetStatBonus(BonusType.AllUpgradeCost));
    return Math.ceil(a);
  }
  this.setLevel = function(iLevel)
  {
    this.heroLevel = iLevel;
    this.nextLevel = this.heroLevel + 11;
    //this.nextLevel = iLevel + 1;
  }
  this.getLevel = function()
  {
    return this.heroLevel;
  }
}

function createHeroInfo()
{
  for (i = 0; i < 30; i++) 
  { 
    heroes[i] = new hero (parseInt(HeroInfo[i][0]), String(HeroInfo[i][1]), parseFloat(HeroInfo[i][2]), 0, 0, parseFloat(HeroInfo[i][3]), 0); //parseInt(levels[i]
  }
  updateHeroes();
}

function updateHeroes()
{
  for (i = 0; i < 30; i++) 
  { 
    heroes[i].UpdateHeroStats();
  }
}
var finalstring = []
function heroInfo(hero)
{
  finalstring.push(hero.getInfo());
}

var tabletop= ["Name","Upgrade Cost","Current DpS","Next DpS Difference"];

function sayHello() {
	createHeroInfo();
	//var heroes = [];
	//hero1 = new hero (1, 'takeda', 0, 0, 0, 50, 1);
	//hero1.UpdateHeroStats();
	//if (showHeroesStats)
	//{
		finalstring.push(["Name","Upgrade Cost","Current DpS","Next DpS Difference"]);
		for (i = 0; i < 30; i++) 
		{ 
			heroInfo(heroes[i]);
		}
		finalstring.push([]);
	//}
	// get the reference for the body
	var body = document.getElementsByTagName("body")[0];
	// creates a <table> element and a <tbody> element
	var tbl     = document.createElement("table");
	var tblBody = document.createElement("tbody");
	// creating all cells
	for (var i = 0; i < 31; i++) 
	{
		// creates a table row
		var row = document.createElement("tr");
		for (var j = 0; j < 4; j++) 
		{
		// Create a <td> element and a text node, make the text
		// node the contents of the <td>, and put the <td> at
		// the end of the table row
		var cell = document.createElement("td");
		var cellText = document.createTextNode(finalstring[i][j]);
		cell.appendChild(cellText);
		row.appendChild(cell);
		}
    // add the row to the end of the table body
    tblBody.appendChild(row);
	}
	// put the <tbody> in the <table>
	tbl.appendChild(tblBody);
	// appends <table> into <body>
	body.appendChild(tbl);
	// sets the border attribute of tbl to 2;
	tbl.setAttribute("border", "2");
    //document.getElementById("result").innerHTML = finalstring;
	//document.getElementById("result").innerHTML = 'Hello2 ' + name + '!';
    otext = 'Hello2 !';
    $("#result").html(otext);
}

/*
function heroDPS(level,heroID,baseCost)
{
  this.level = level;
  this.heroID = heroID;
  this.baseCost = baseCost;
  var num1 =  Math.pow(0.904, (this.level - 1)) * Math.pow((1.0 - (0.019 * Math.min(this.heroID, 15))), this.heroID);
  var num2 = ((((this.baseCost*Math.pow(1.075, this.level-1)) * (Math.pow(1.075, this.level) - 1.0)) / ((1.075 - 1.0))) * num1) * 0.1;
  return (((num2 * ((1.0))) * (1.0)) * (1.0));
 
}
//////SKILL INFO/////

function skill(name, cost, bought)
{
  this.name = name;
  this.cost = cost;
  this.bought = bought;
  this.getInfo = function () 
  {
    return [this.name,this.cost];
  };
}

/////STUFF/////
var efficiencyTable = [];
function getBestEfficiency()
{
  t=1;
  for (j = 0; j < 6000; j++)
  {
    efficiencyTable[j] = heroes[0].heroID;
    for (i = 0; i < 30; i++) 
    { 
      if (heroes[i].efficiency/heroes[efficiencyTable[j]].efficiency < 1)
      {
        efficiencyTable[j] = heroes[i].heroID-1;
      }
    }
    heroes[efficiencyTable[j]].heroLevel += 1;
    heroes[efficiencyTable[j]].UpdateHeroStats();
    //heroInfo(heroes[efficiencyTable[j]]);
    //typeof flugle === 'undefined'
    if (j > 0)
    {
      if (efficiencyTable[j-1] == efficiencyTable[j])
      {
        
      }
      else
      {
        final.push([heroes[efficiencyTable[j-1]].name,heroes[efficiencyTable[j-1]].heroLevel]);
      }
    }
    //final.push([heroes[efficiencyTable[j]].name,heroes[efficiencyTable[j]].heroLevel]);
    if (final.length > 29)
    {
      break;
    }
  }
  return efficiencyTable;
}

var final = [];

//var Hero = new hero(0, 0, null, 0, 0, 0);

function updateHeroes()
{
  for (i = 0; i < 30; i++) 
  { 
    heroes[i].UpdateHeroStats();
  }
}

var heroes = [];

function createHeroInfo(levels,HeroInfo)
{
  for (i = 0; i < 30; i++) 
  { 
    heroes[i] = new hero (parseInt(HeroInfo[i][0]), String(HeroInfo[i][1]), parseFloat(HeroInfo[i][2]), 0, 0, parseFloat(HeroInfo[i][3]), parseInt(levels[i]));
  }
  updateHeroes();
}

var skills = [];

function createSkillsInfo(levels,SkillsInfo)
{
  for (i = 0; i < 210; i++) 
  { 
    skills[i] = new skill (String(SkillsInfo[i][2]), parseFloat(SkillsInfo[i][7]), parseInt(levels[i]));
  }
}

function skillInfo(skill)
{
  final.push(skill.getInfo());
}

function printUnits(Heroeslevels,HeroesInfo,Skillslevels,SkillsInfo,showHeroesStats,showNextUpgrades,showSkills)
{
  createHeroInfo(Heroeslevels,HeroesInfo);
  createSkillsInfo(Skillslevels,SkillsInfo)
  if (showHeroesStats)
  {
    final.push(["Name","Upgrade Cost","Current DpS","Next DpS Difference"]);
    for (i = 0; i < 30; i++) 
    { 
      heroInfo(heroes[i]);
    }
    final.push([]);
  }
  if (showNextUpgrades)
  {
    var efftable = getBestEfficiency();
  }
  if (showSkills)
  {
    final.push(["Name","Cost","DpS",]);
    for (i = 0; i < 210; i++) 
    { 
      skillInfo(skills[i]);
    }
    final.push([]);
  }
  //final.push([final.length]);
  return final;
};*/