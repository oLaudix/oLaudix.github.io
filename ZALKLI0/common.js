var heroEvolveLevel = 1001.0;
var levelIneffiency = 0.904;
var heroInefficiency = 0.019;
var heroInefficiencySlowDown = 15.0;
var heroUpgradeBase = 1.075;
var evolveCostMultiplier = 10.0;
var dMGScaleDown = 0.1;
var passiveSkillCostMultiplier = 5.0;
var currentAllHeroDPS = 0.0;
var StatBonusAllDamage = 0.0;
var StatBonusGoldAll = 0.0;
var CritDamagePassive = 10.0;
var TapDamageFromDPS = 0.0;
var CritChance = 0.02;
var TapDamagePassive = 0.0;
var artifactBonusDamage = 0.0;
//var ArtifactDamageBoost = 0.0;

function buildArtifacts()
{
	var artifact = "Knight's Shield,Artifact1,0,GoldBoss,1.00,0.6,0.7,1.5/\
Amulet of the Valrunes,Artifact2,0,GoldMinion,0.10,0.5,0.7,2/\
Dark Cloak of Life,Artifact3,25,BossLife,-0.02,0.3,0.5,2/\
Death Seeker,Artifact4,25,CritChance,0.02,0.3,0.5,2/\
Savior Shield,Artifact5,25,BossTime,0.10,0.3,0.5,1.7/\
Overseer's Lotion,Artifact6,10,SkillConstantDamageCD,-0.05,0.7,0.4,1.5/\
Sacred Scroll,Artifact7,10,SkillCriticalChanceBoostCD,-0.05,0.7,0.4,1.5/\
Hunter's Ointment,Artifact8,10,SkillHeroesAttackSpeedIncreaseCD,-0.05,0.7,0.4,1.5/\
Laborer's Pendant,Artifact9,10,SkillTapGoldCD,-0.05,0.7,0.7,1.5/\
Barbarian's Mettle,Artifact10,10,SkillTapDamageIncreaseCD,-0.05,0.7,0.4,1.5/\
Saintly Shield,Artifact11,10,SkillBurstDamageCD,-0.05,0.7,0.3,1.5/\
Ogre's Gauntlet,Artifact12,0,SkillConstantDamageDuration,0.10,0.7,0.5,1.7/\
Parchment of Importance,Artifact13,0,SkillCriticalChanceBoostDuration,0.10,0.7,0.5,1.7/\
Universal Fissure,Artifact14,0,SkillHeroesAttackSpeedIncreaseDuration,0.10,0.7,0.5,1.7/\
Ring of Opulence,Artifact15,0,SKillTapGoldDuration,0.10,0.7,0.7,1.7/\
Axe of Resolution,Artifact16,0,SkillTapDamageIncreaseDuration,0.10,0.7,0.5,1.7/\
Hero's Thrust,Artifact17,0,CritDamageArtifact,0.20,0.3,0.7,1.7/\
Crown Egg,Artifact18,0,TreasureChance,0.20,0.4,1,1.5/\
Chest of Contentment,Artifact19,0,GoldTreasureArtifact,0.20,0.4,1,1.5/\
Future's Fortune,Artifact20,0,GoldAll,0.05,0.3,0.7,2/\
Divine Chalice,Artifact21,0,Gold10xChance,0.01,0.3,0.7,1.7/\
Unread Aura,Artifact22,0,PrestigeRelic,0.05,0.3,0.7,2/\
Warrior's Revival,Artifact23,10,ReviveTime,-0.05,0.7,1,2.2/\
Ring of Wonderous Charm,Artifact24,25,AllUpgradeCost,-0.02,0.3,0.5,1.7/\
Worldly Illuminator,Artifact25,5,MonstersRequiredToAdvance,-1.00,3,0.5,3/\
Tincture of the Maker,Artifact26,0,ArtifactDamageBoost,0.05,0.1,0.6,2.5/\
Crafter's Elixir,Artifact27,0,GoldOnline,0.15,0.4,0.5,1.8/\
Outerworldly Armor,Artifact28,10,HeroDeathChance,-0.05,0.7,1,2.2/\
Drunken Hammer,Artifact29,0,TapDamageArtifact,0.05,0.3,0.5,1.7"
	var artifact_temp = artifact.split("/");
	ArtifactInfo = [];
	for (var x = 0; x < artifact_temp.length; x++) 
	{
		//alert(artifact_temp[x]);
		var temp = artifact_temp[x].split(",");
		//alert(temp[0]);
		ArtifactInfo.push({name: temp[0], maxLevel: temp[2], bonusType: temp[3], bonusPerLevel: temp[4], DamageBonus: temp[5], CostCoEff: temp[6], CostExpo: temp[7], artifactID: temp[1], level: 0});
	}
	//$("#artifacttable").append("<tr><th>Artifact</th><th>Max Level</th><th>Bonus Type</th><th>Bonus Strength</th><th>Damage Bonus</th><th>Upgrade Cost</th><th>Level</th></tr>");
	$("#artifacttable").append("<tr><th>Artifact</th><th>Bonus Type</th><th>Bonus Strength</th><th>Damage Bonus</th><th>Upgrade Cost</th><th>Level</th></tr>\n");
	for (var y = 0; y < ArtifactInfo.length; y++)
	{
		var tr2 = ArtifactInfo[y].targetBox = $("<tr></tr>");
		tr2.append($("<td></td>").append(ArtifactInfo[y].name).attr("id", ArtifactInfo[y].artifactID+"name"));
		tr2.append($("<td></td>").append(ArtifactInfo[y].bonusType).attr("id", ArtifactInfo[y].artifactID+"bonusType").attr("style", "font-size:10px"));
		tr2.append($("<td></td>").append(ArtifactInfo[y].bonusPerLevel*100+"%").attr("id", ArtifactInfo[y].artifactID+"artifactBonus"));
		tr2.append($("<td></td>").append(ArtifactInfo[y].DamageBonus*100+"%").attr("id", ArtifactInfo[y].artifactID+"DamageBonus"));
		tr2.append($("<td></td>").append(getArtifactUpgradeCost(ArtifactInfo[y])).attr("id", ArtifactInfo[y].artifactID+"upgradeCost"));
		if (ArtifactInfo[y].maxLevel > 0)
		{ tr2.append($("<td></td>").append($("<input></input>").attr("type", "text").val(0).attr("id", ArtifactInfo[y].artifactID+"level")).append("/" + ArtifactInfo[y].maxLevel)); } 
		else
		{ tr2.append($("<td></td>").append($("<input></input>").attr("type", "text").val(0).attr("id", ArtifactInfo[y].artifactID+"level"))); }
		$("#artifacttable").append(tr2);
	}
}

function buildHeroes()
{
	var heroes = "Player,0,Lightning Blade,1,2,2,1,,,,,,,,/\
Hero1,1,Takeda the Blade Assassin,0,50,4,3.5,4,526.0050314,6.18528E+21,0.98,,,,/\
Hero2,2,Contessa the Torch Wielder,3.5,175,16,3.075,16,2104.020126,2.47411E+22,0.9216,,,,/\
Hero3,3,Hornetta, Queen of the Valrunes,3.85,673.75,55,1.475,55,7232.569182,8.50475E+22,0.830584,,,,/\
Hero4,4,Mila the Hammer Stomper,4.235,2,853.33,204,1.475,204,26826.2566,3.15449E+23,0.71639296,,,,/\
Hero5,5,Terra the Land Scorcher,4.6585,1.33E+04,784,2.7,784,103096.9862,1.21231E+24,0.59049,,,,/\
Hero6,6,Inquisireaux the Terrible,5.12435,6.81E+04,3163,3.3,3163,415938.4786,4.89101E+24,0.4644040868,,,,/\
Hero7,7,Charlotte the Special,5.636785,3.84E+05,13358,1.8,13358,1756593.802,2.06557E+25,0.3479278222,,,,/\
Hero8,8,Jordaan, Knight of Mini,6.2004635,2.38E+06,59010,2.275,59010,7759889.226,9.12483E+25,0.2478758911,,,,/\
Hero9,9,Jukka, Master of Axes,10,2.38E+07,399040,2.7,399040,52474261.93,6.17043E+26,0.1676195504,,,,/\
Hero10,10,Milo and Clonk-Clonk,6,1.43E+08,1533712,1.425,1533712,201685057.2,2.37161E+27,0.1073741824,,,,/\
Hero11,11,Macelord the Ruthless,6.6,9.43E+08,6.13E+06,3.225,6.13E+06,8.06E+08,9.48E+27,0.06501905148,,,,/\
Hero12,12,Gertrude the Goat Rider,7.26,6.84E+09,2.54E+07,3.75,2.54E+07,3.34E+09,3.93E+28,0.03713326247,,,,/\
Hero13,13,Twitterella the Tweeter,7.986,5.47E+10,1.09E+08,1.275,1.09E+08,1.43E+10,1.69E+29,0.01995319085,,,,/\
Hero14,14,Master Hawk, Lord of Luft,15,8.20E+11,8.25E+08,2.875,8.25E+08,1.08E+11,1.28E+30,0.01006131972,,,,/\
Hero15,15,Elpha, Wielder of Gems,10,8.20E+12,3.89E+09,1.875,3.89E+09,5.12E+11,6.02E+30,0.00474756151,,,,/\
Hero16,16,Poppy, Daughter of Ceremony,20,1.64E+14,5.45E+10,1.975,5.45E+10,7.17E+12,8.43E+31,0.003323293057,,,,/\
Hero17,17,Skulptor, Protector of Bridges,10,1.64E+15,3.81E+11,2.775,3.81E+11,5.02E+13,5.90E+32,0.00232630514,,,,/\
Hero18,18,Sterling the Enchantor,30,4.92E+16,8.01E+12,3.275,8.01E+12,1.05E+15,1.24E+34,0.001628413598,,,,/\
Hero19,19,Orba the Foreseer,50,2.46E+18,2.80E+14,3.3,2.80E+14,3.69E+16,4.34E+35,0.001139889519,,,,/\
Hero20,20,Remus the Noble Archer,30,7.38E+19,5.89E+15,3.7,5.89E+15,7.74E+17,9.10E+36,0.000797922663,,,,/\
Hero21,21,Mikey the Magician Apprentice,33,2.44E+21,1.36E+17,1.25,1.36E+17,1.79E+19,2.10E+38,0.0005585458641,,,,/\
Hero22,22,Peter Pricker the Prickly Poker,100,2.44E+23,9.52E+18,2.75,9.52E+18,1.25E+21,1.47E+40,0.0003909821049,,,,/\
Hero23,23,Teeny Tom, Keeper of the Castle,200,4.87E+25,1.33E+21,2.375,1.33E+21,1.75E+23,2.06E+42,0.0002736874734,,,,/\
Hero24,24,Deznis the Cleanser,400,1.95E+28,3.73E+23,3.675,3.73E+23,4.91E+25,5.77E+44,0.0001915812314,,,,/\
Hero25,25,Hamlette, Painter of Skulls,1.10E+03,2.14E+31,2.87E+26,3.125,2.87E+26,3.78E+28,4.44E+47,0.000134106862,,,,/\
Hero26,26,Eistor the Banisher,1.10E+05,2.36E+36,2.21E+31,2.65,2.21E+31,2.91E+33,3.42E+52,0.00009387480338,,,,/\
Hero27,27,Flavius and Oinksbjorn,1.10E+10,2.59E+46,1.70E+41,2.075,1.70E+41,2.24E+43,2.63E+62,0.00006571236236,,,,/\
Hero28,28,Chester the Beast Tamer,1.10E+15,2.85E+61,1.31E+56,2.3,1.31E+56,1.73E+58,2.03E+77,0.00004599865365,,,,/\
Hero29,29,Mohacas the Wind Warrior,1.10E+20,3.14E+81,1.01E+76,1.7,1.01E+76,1.33E+78,1.56E+97,0.00003219905756,,,,/\
Hero30,30,Jaqulin the Unknown,1.20E+30,3.76E+111,8.49E+105,3.25,8.49E+105,1.12E+108,1.31E+127,0.00002253934029,,,,"

	var heroes_temp = artifact.split("/");
	HeroInfo = [];
	for (var x = 0; x < artifact_temp.length; x++) 
	{
		//alert(artifact_temp[x]);
		var temp = artifact_temp[x].split(",");
		//alert(temp[0]);
		ArtifactInfo.push({name: temp[0], maxLevel: temp[2], bonusType: temp[3], bonusPerLevel: temp[4], DamageBonus: temp[5], CostCoEff: temp[6], CostExpo: temp[7], artifactID: temp[1], level: 0});
	}

}

var HeroInfo = {
Hero1: {name: "Takeda, the Blade Assassin", cost: 50, heroID: 1},
Hero2: {name: "Contessa, the Torch Wielder", cost: 175, heroID: 2},
Hero3: {name: "Hornetta, Queen of the Valrunes", cost: 673.75, heroID: 3},
Hero4: {name: "Mila, the Hammer Stomper", cost: 2853.33, heroID: 4},
Hero5: {name: "Terra, the Land Scorcher", cost: 1.33E+04, heroID: 5},
Hero6: {name: "Inquisireaux the Terrible", cost: 6.81E+04, heroID: 6},
Hero7: {name: "Charlotte the Special", cost: 3.84E+05, heroID: 7},
Hero8: {name: "Jordaan, Knight of Mini", cost: 2.38E+06, heroID: 8},
Hero9: {name: "Jukka, Master of Axes", cost: 2.38E+07, heroID: 9},
Hero10: {name: "Milo and Clonk-Clonk", cost: 1.43E+08, heroID: 10},
Hero11: {name: "Macelord the Ruthless", cost: 9.43E+08, heroID: 11},
Hero12: {name: "Gertrude the Goat Rider", cost: 6.84E+09, heroID: 12},
Hero13: {name: "Twitterella the Tweeter", cost: 5.47E+10, heroID: 13},
Hero14: {name: "Master Hawk, Lord of Luft", cost: 8.20E+11, heroID: 14},
Hero15: {name: "Elpha, Wielder of Gems", cost: 8.20E+12, heroID: 15},
Hero16: {name: "Poppy, Daughter of Ceremony", cost: 1.64E+14, heroID: 16},
Hero17: {name: "Skulptor, Protector of Bridges", cost: 1.64E+15, heroID: 17},
Hero18: {name: "Sterling the Enchantor", cost: 4.92E+16, heroID: 18},
Hero19: {name: "Orba the Foreseer", cost: 2.46E+18, heroID: 19},
Hero20: {name: "Remus the Noble Archer", cost: 7.38E+19, heroID: 20},
Hero21: {name: "Mikey the Magician Apprentice", cost: 2.44E+21, heroID: 21},
Hero22: {name: "Peter Pricker the Prickly Poker", cost: 2.44E+23, heroID: 22},
Hero23: {name: "Teeny Tom, Keeper of the Castle", cost: 4.87E+25, heroID: 23},
Hero24: {name: "Deznis the Cleanser", cost: 1.95E+28, heroID: 24},
Hero25: {name: "Hamlette, Painter of Skulls", cost: 2.14E+31, heroID: 25},
Hero26: {name: "Eistor the Banisher", cost: 2.36E+36, heroID: 26},
Hero27: {name: "Flavius and Oinksbjorn", cost: 2.59E+46, heroID: 27},
Hero28: {name: "Chester the Beast Tamer", cost: 2.85E+61, heroID: 28},
Hero29: {name: "Mohacas the Wind Warrior", cost: 3.14E+81, heroID: 29},
Hero30: {name: "Jaqulin the Unknown", cost: 3.76E+111, heroID: 30},
player: {name: "Lightning Blade", cost: 2, heroID: 0}
};

var heroList = [];
for (var k in HeroInfo) {
  if (HeroInfo.hasOwnProperty(k)) {
    heroList.push(k);
	//alert(Heroes['solomon'].name);
  }
}

for (var i = 0; i < 30; i++) {
  var key = heroList[i];
  var tr = HeroInfo[key].targetBox = $("<tr></tr>");
  tr.append($("<td></td>").append(HeroInfo[key].name).attr("id", key+"name"));
  HeroInfo[key].used1 = $("<input></input>").attr("type", "checkbox").attr("id", key+"skill1").attr("title", "ha");
  HeroInfo[key].used2 = $("<input></input>").attr("type", "checkbox").attr("id", key+"skill2").attr("title", "ha");
  HeroInfo[key].used3 = $("<input></input>").attr("type", "checkbox").attr("id", key+"skill3").attr("title", "ha");
  HeroInfo[key].used4 = $("<input></input>").attr("type", "checkbox").attr("id", key+"skill4").attr("title", "ha");
  HeroInfo[key].used5 = $("<input></input>").attr("type", "checkbox").attr("id", key+"skill5").attr("title", "ha");
  HeroInfo[key].used6 = $("<input></input>").attr("type", "checkbox").attr("id", key+"skill6").attr("title", "ha");
  HeroInfo[key].used7 = $("<input></input>").attr("type", "checkbox").attr("id", key+"skill7").attr("title", "ha");
  tr.append($("<td></td>").append(HeroInfo[key].used1).append(HeroInfo[key].used2).append(HeroInfo[key].used3).append(HeroInfo[key].used4).append(HeroInfo[key].used5).append(HeroInfo[key].used6).append(HeroInfo[key].used7));
  if (HeroInfo[key].nextUpgradeCost > 1000000)
  {
	tr.append($("<td></td>").append(HeroInfo[key].nextUpgradeCost.toExponential(2)).attr("id", key+"nextUpgradeCost"));
  }
  else
  {
	tr.append($("<td></td>").append(HeroInfo[key].nextUpgradeCost).attr("id", key+"nextUpgradeCost"));
  }
  tr.append($("<td></td>").append(HeroInfo[key].currentDPS).attr("id", key+"currentDPS"));
  tr.append($("<td></td>").append(HeroInfo[key].nextLevelDPSDiff).attr("id", key+"nextLevelDPSDiff"));
  tr.append($("<td></td>").append($("<input></input>").attr("type", "text").val(0).attr("id", key+"heroLevel")));
  tr.append("\n\n");
  $("#ancienttbl").append(tr);
}

{
	var tr2 = HeroInfo[heroList[30]].targetBox = $("<tr></tr>");
	tr2.append($("<td></td>").append(HeroInfo[heroList[30]].name).attr("id", "player0name"));
	tr2.append($("<td></td>").append(HeroInfo[heroList[30]].nextUpgradeCost).attr("id", "player0nextUpgradeCost"));
	tr2.append($("<td></td>").append(HeroInfo[heroList[30]].currentDPS).attr("id", "player0currentDPS"));
	tr2.append($("<td></td>").append(HeroInfo[heroList[30]].nextLevelDPSDiff).attr("id", "player0nextLevelDPSDiff"));
	tr2.append($("<td></td>").append($("<input></input>").attr("type", "text").val(1).attr("id", "player0heroLevel")));
	tr2.append($("<td></td>").append($("<input></input>").attr("type", "text").val(5).attr("id", "player0clicks")));
	tr2.append("\n\n");
	$("#playertbl").append(tr2);
}

var skillsInfo = [
{skillID: 1, owner: "Hero1", name: "Nature's Presence", bonusType: "ThisHeroDamage", magnitude: 0.5, reqLevel: 10, cost: 6.14E+02},
{skillID: 2, owner: "Hero1", name: "Lightning Rage", bonusType: "ThisHeroDamage", magnitude: 1, reqLevel: 25, cost: 2.36E+03},
{skillID: 3, owner: "Hero1", name: "Executioner's Breath", bonusType: "AllDamage", magnitude: 0.1, reqLevel: 50, cost: 2.23E+04},
{skillID: 4, owner: "Hero1", name: "Poison Touch", bonusType: "CritDamagePassive", magnitude: 0.1, reqLevel: 100, cost: 1.99E+06},
{skillID: 5, owner: "Hero1", name: "Hidden Veil", bonusType: "ThisHeroDamage", magnitude: 10, reqLevel: 200, cost: 1.59E+10},
{skillID: 6, owner: "Hero1", name: "Paralysis", bonusType: "AllDamage", magnitude: 0.25, reqLevel: 400, cost: 1.01E+18},
{skillID: 7, owner: "Hero1", name: "Dynamic Force", bonusType: "ThisHeroDamage", magnitude: 100, reqLevel: 800, cost: 4.09E+33},
{skillID: 8, owner: "Hero2", name: "Superstition", bonusType: "TapDamagePassive", magnitude: 0.05, reqLevel: 10, cost: 2.15E+03},
{skillID: 9, owner: "Hero2", name: "Ghost Breath", bonusType: "ThisHeroDamage", magnitude: 1, reqLevel: 25, cost: 8.27E+03},
{skillID: 10, owner: "Hero2", name: "Spectral Nova", bonusType: "ThisHeroDamage", magnitude: 10, reqLevel: 50, cost: 7.81E+04},
{skillID: 11, owner: "Hero2", name: "Brooding Thrill", bonusType: "TapDamageFromDPS", magnitude: 0.004, reqLevel: 100, cost: 6.98E+06},
{skillID: 12, owner: "Hero2", name: "Guardian's Chant", bonusType: "AllDamage", magnitude: 0.1, reqLevel: 200, cost: 5.57E+10},
{skillID: 13, owner: "Hero2", name: "Soul Initiative", bonusType: "GoldAll", magnitude: 0.1, reqLevel: 400, cost: 3.54E+18},
{skillID: 14, owner: "Hero2", name: "Medusa's Strife", bonusType: "ThisHeroDamage", magnitude: 100, reqLevel: 800, cost: 1.43E+34},
{skillID: 15, owner: "Hero3", name: "Essence of Horn", bonusType: "ThisHeroDamage", magnitude: 1.5, reqLevel: 10, cost: 100},
{skillID: 16, owner: "Hero3", name: "Command Ritual", bonusType: "GoldAll", magnitude: 0.1, reqLevel: 25, cost: 3.20E+04},
{skillID: 17, owner: "Hero3", name: "Tribal Vision", bonusType: "AllDamage", magnitude: 0.1, reqLevel: 50, cost: 3.20E+07},
{skillID: 18, owner: "Hero3", name: "Battle Thirst", bonusType: "TapDamageFromDPS", magnitude: 0.004, reqLevel: 100, cost: 3.20E+10},
{skillID: 19, owner: "Hero3", name: "Royal Presence", bonusType: "GoldTreasurePassive", magnitude: 0.2, reqLevel: 200, cost: 3.20E+14},
{skillID: 20, owner: "Hero3", name: "Relentless Force", bonusType: "CritChance", magnitude: 0.01, reqLevel: 400, cost: 3.20E+20},
{skillID: 21, owner: "Hero3", name: "Unforgiving", bonusType: "AllDamage", magnitude: 0.3, reqLevel: 800, cost: 3.20E+28},
{skillID: 22, owner: "Hero4", name: "Stomping Presence", bonusType: "ThisHeroDamage", magnitude: 1, reqLevel: 10, cost: 100},
{skillID: 23, owner: "Hero4", name: "Hammer Pulse", bonusType: "ThisHeroDamage", magnitude: 8, reqLevel: 25, cost: 3.20E+04},
{skillID: 24, owner: "Hero4", name: "Psychosis", bonusType: "TapDamageFromDPS", magnitude: 0.004, reqLevel: 50, cost: 3.20E+07},
{skillID: 25, owner: "Hero4", name: "War Beacon", bonusType: "ThisHeroDamage", magnitude: 5, reqLevel: 100, cost: 3.20E+10},
{skillID: 26, owner: "Hero4", name: "Hammer Circle", bonusType: "CritDamagePassive", magnitude: 0.05, reqLevel: 200, cost: 3.20E+14},
{skillID: 27, owner: "Hero4", name: "Battle Fortitude", bonusType: "AllDamage", magnitude: 0.2, reqLevel: 400, cost: 3.20E+20},
{skillID: 28, owner: "Hero4", name: "Steel Nerves", bonusType: "GoldTreasurePassive", magnitude: 0.2, reqLevel: 800, cost: 3.20E+28},
{skillID: 29, owner: "Hero5", name: "Land Warrior", bonusType: "ThisHeroDamage", magnitude: 3, reqLevel: 10, cost: 100},
{skillID: 30, owner: "Hero5", name: "Scythe Master", bonusType: "GoldAll", magnitude: 0.1, reqLevel: 25, cost: 3.20E+04},
{skillID: 31, owner: "Hero5", name: "Scorched Essence", bonusType: "TapDamageFromDPS", magnitude: 0.004, reqLevel: 50, cost: 3.20E+07},
{skillID: 32, owner: "Hero5", name: "Winds of Clarity", bonusType: "GoldAll", magnitude: 0.15, reqLevel: 100, cost: 3.20E+10},
{skillID: 33, owner: "Hero5", name: "Death March", bonusType: "GoldTreasurePassive", magnitude: 0.2, reqLevel: 200, cost: 3.20E+14},
{skillID: 34, owner: "Hero5", name: "Battle Brawler", bonusType: "TapDamagePassive", magnitude: 0.05, reqLevel: 400, cost: 3.20E+20},
{skillID: 35, owner: "Hero5", name: "Winds of Calm", bonusType: "ThisHeroDamage", magnitude: 100, reqLevel: 800, cost: 3.20E+28},
{skillID: 36, owner: "Hero6", name: "Ruthless Pursuit", bonusType: "ThisHeroDamage", magnitude: 2, reqLevel: 10, cost: 100},
{skillID: 37, owner: "Hero6", name: "Cloud of Justice", bonusType: "ThisHeroDamage", magnitude: 7, reqLevel: 25, cost: 3.20E+04},
{skillID: 38, owner: "Hero6", name: "Merciless", bonusType: "AllDamage", magnitude: 0.1, reqLevel: 50, cost: 3.20E+07},
{skillID: 39, owner: "Hero6", name: "Devilish Charmer", bonusType: "AllDamage", magnitude: 0.2, reqLevel: 100, cost: 3.20E+10},
{skillID: 40, owner: "Hero6", name: "Dungeon Trapper", bonusType: "CritDamagePassive", magnitude: 0.05, reqLevel: 200, cost: 3.20E+14},
{skillID: 41, owner: "Hero6", name: "Custom Machinery", bonusType: "CritChance", magnitude: 0.02, reqLevel: 400, cost: 3.20E+20},
{skillID: 42, owner: "Hero6", name: "Methodically Manic", bonusType: "ThisHeroDamage", magnitude: 100, reqLevel: 800, cost: 3.20E+28},
{skillID: 43, owner: "Hero7", name: "Sphinx Presence", bonusType: "ThisHeroDamage", magnitude: 2, reqLevel: 10, cost: 100},
{skillID: 44, owner: "Hero7", name: "Panther's Touch", bonusType: "AllBossDamage", magnitude: 0.05, reqLevel: 25, cost: 3.20E+04},
{skillID: 45, owner: "Hero7", name: "Copper Skin", bonusType: "AllBossDamage", magnitude: 0.07, reqLevel: 50, cost: 3.20E+07},
{skillID: 46, owner: "Hero7", name: "Special Fighter", bonusType: "ThisHeroDamage", magnitude: 6, reqLevel: 100, cost: 3.20E+10},
{skillID: 47, owner: "Hero7", name: "Skull Cap", bonusType: "TapDamagePassive", magnitude: 0.05, reqLevel: 200, cost: 3.20E+14},
{skillID: 48, owner: "Hero7", name: "Master Manipulator", bonusType: "GoldTreasurePassive", magnitude: 0.2, reqLevel: 400, cost: 3.20E+20},
{skillID: 49, owner: "Hero7", name: "Perpetual Impulsivity", bonusType: "AllDamage", magnitude: 0.3, reqLevel: 800, cost: 3.20E+28},
{skillID: 50, owner: "Hero8", name: "Arthur's Revenge", bonusType: "ThisHeroDamage", magnitude: 2, reqLevel: 10, cost: 100},
{skillID: 51, owner: "Hero8", name: "Call of the Relic", bonusType: "AllDamage", magnitude: 0.1, reqLevel: 25, cost: 3.20E+04},
{skillID: 52, owner: "Hero8", name: "Circle of Atonement", bonusType: "TapDamageFromDPS", magnitude: 0.004, reqLevel: 50, cost: 3.20E+07},
{skillID: 53, owner: "Hero8", name: "Enchanted Veil", bonusType: "GoldAll", magnitude: 0.15, reqLevel: 100, cost: 3.20E+10},
{skillID: 54, owner: "Hero8", name: "Traveller", bonusType: "GoldTreasurePassive", magnitude: 0.2, reqLevel: 200, cost: 3.20E+14},
{skillID: 55, owner: "Hero8", name: "Relentless", bonusType: "ThisHeroDamage", magnitude: 19, reqLevel: 400, cost: 3.20E+20},
{skillID: 56, owner: "Hero8", name: "The Sword's Path", bonusType: "AllDamage", magnitude: 0.2, reqLevel: 800, cost: 3.20E+28},
{skillID: 57, owner: "Hero9", name: "Blunt Strength", bonusType: "ThisHeroDamage", magnitude: 1.5, reqLevel: 10, cost: 100},
{skillID: 58, owner: "Hero9", name: "Viking Slash Force", bonusType: "AllBossDamage", magnitude: 0.05, reqLevel: 25, cost: 3.20E+04},
{skillID: 59, owner: "Hero9", name: "Rune Enabler", bonusType: "AllDamage", magnitude: 0.3, reqLevel: 50, cost: 3.20E+07},
{skillID: 60, owner: "Hero9", name: "Bearded Fortitude", bonusType: "CritDamagePassive", magnitude: 0.05, reqLevel: 100, cost: 3.20E+10},
{skillID: 61, owner: "Hero9", name: "Spirit Vessel", bonusType: "ThisHeroDamage", magnitude: 50, reqLevel: 200, cost: 3.20E+14},
{skillID: 62, owner: "Hero9", name: "Essence of Valhalla", bonusType: "AllDamage", magnitude: 0.25, reqLevel: 400, cost: 3.20E+20},
{skillID: 63, owner: "Hero9", name: "Warrior Loyalty", bonusType: "ThisHeroDamage", magnitude: 100, reqLevel: 800, cost: 3.20E+28},
{skillID: 64, owner: "Hero10", name: "Bolt Block Brigade", bonusType: "ThisHeroDamage", magnitude: 1.5, reqLevel: 10, cost: 100},
{skillID: 65, owner: "Hero10", name: "Analog Cloud", bonusType: "CritChance", magnitude: 0.01, reqLevel: 25, cost: 3.20E+04},
{skillID: 66, owner: "Hero10", name: "Strength in Numbers", bonusType: "AllBossDamage", magnitude: 0.05, reqLevel: 50, cost: 3.20E+07},
{skillID: 67, owner: "Hero10", name: "Tough as Bolts", bonusType: "GoldAll", magnitude: 0.15, reqLevel: 100, cost: 3.20E+10},
{skillID: 68, owner: "Hero10", name: "Steel Heart", bonusType: "GoldTreasurePassive", magnitude: 0.2, reqLevel: 200, cost: 3.20E+14},
{skillID: 69, owner: "Hero10", name: "Battle Spirit", bonusType: "GoldTreasurePassive", magnitude: 0.25, reqLevel: 400, cost: 3.20E+20},
{skillID: 70, owner: "Hero10", name: "Thrill of the Fight", bonusType: "AllDamage", magnitude: 0.15, reqLevel: 800, cost: 3.20E+28},
{skillID: 71, owner: "Hero11", name: "Blunt Brutality", bonusType: "ThisHeroDamage", magnitude: 2, reqLevel: 10, cost: 100},
{skillID: 72, owner: "Hero11", name: "Dungeon Loyalty", bonusType: "ThisHeroDamage", magnitude: 7.5, reqLevel: 25, cost: 3.20E+04},
{skillID: 73, owner: "Hero11", name: "Meteor Wave", bonusType: "TapDamagePassive", magnitude: 0.05, reqLevel: 50, cost: 3.20E+07},
{skillID: 74, owner: "Hero11", name: "Dreadful Disintegration", bonusType: "TapDamageFromDPS", magnitude: 0.004, reqLevel: 100, cost: 3.20E+10},
{skillID: 75, owner: "Hero11", name: "Gruesome Ritual", bonusType: "GoldAll", magnitude: 0.15, reqLevel: 200, cost: 3.20E+14},
{skillID: 76, owner: "Hero11", name: "Sacrifice", bonusType: "CritChance", magnitude: 0.01, reqLevel: 400, cost: 3.20E+20},
{skillID: 77, owner: "Hero11", name: "Circle of Death", bonusType: "ThisHeroDamage", magnitude: 38, reqLevel: 800, cost: 3.20E+28},
{skillID: 78, owner: "Hero12", name: "Nature's Revenge", bonusType: "ThisHeroDamage", magnitude: 2.5, reqLevel: 10, cost: 100},
{skillID: 79, owner: "Hero12", name: "Hydra Force", bonusType: "AllDamage", magnitude: 0.1, reqLevel: 25, cost: 3.20E+04},
{skillID: 80, owner: "Hero12", name: "Death Flight", bonusType: "AllBossDamage", magnitude: 0.05, reqLevel: 50, cost: 3.20E+07},
{skillID: 81, owner: "Hero12", name: "Animal Advantage", bonusType: "CritDamagePassive", magnitude: 0.05, reqLevel: 100, cost: 3.20E+10},
{skillID: 82, owner: "Hero12", name: "Vitality", bonusType: "TapDamageFromDPS", magnitude: 0.004, reqLevel: 200, cost: 3.20E+14},
{skillID: 83, owner: "Hero12", name: "Charcoal Screen", bonusType: "TapDamagePassive", magnitude: 0.05, reqLevel: 400, cost: 3.20E+20},
{skillID: 84, owner: "Hero12", name: "Dark Veil", bonusType: "GoldAll", magnitude: 0.2, reqLevel: 800, cost: 3.20E+28},
{skillID: 85, owner: "Hero13", name: "Silver Rider", bonusType: "ThisHeroDamage", magnitude: 1.5, reqLevel: 10, cost: 100},
{skillID: 86, owner: "Hero13", name: "Guiding Chant", bonusType: "ThisHeroDamage", magnitude: 8.5, reqLevel: 25, cost: 3.20E+04},
{skillID: 87, owner: "Hero13", name: "Cloacked Rebel", bonusType: "TapDamagePassive", magnitude: 0.05, reqLevel: 50, cost: 3.20E+07},
{skillID: 88, owner: "Hero13", name: "Activism", bonusType: "AllDamage", magnitude: 0.2, reqLevel: 100, cost: 3.20E+10},
{skillID: 89, owner: "Hero13", name: "Beacon of Hope", bonusType: "AllDamage", magnitude: 0.3, reqLevel: 200, cost: 3.20E+14},
{skillID: 90, owner: "Hero13", name: "Haunting Barrage", bonusType: "CritDamagePassive", magnitude: 0.05, reqLevel: 400, cost: 3.20E+20},
{skillID: 91, owner: "Hero13", name: "Spirit Harvest", bonusType: "ThisHeroDamage", magnitude: 15, reqLevel: 800, cost: 3.20E+28},
{skillID: 92, owner: "Hero14", name: "Hawk Clutch", bonusType: "ThisHeroDamage", magnitude: 2, reqLevel: 10, cost: 100},
{skillID: 93, owner: "Hero14", name: "Wind Speed", bonusType: "ThisHeroDamage", magnitude: 8, reqLevel: 25, cost: 3.20E+04},
{skillID: 94, owner: "Hero14", name: "Ancient Flight", bonusType: "TapDamageFromDPS", magnitude: 0.004, reqLevel: 50, cost: 3.20E+07},
{skillID: 95, owner: "Hero14", name: "Aerial Advantage", bonusType: "ThisHeroDamage", magnitude: 4, reqLevel: 100, cost: 3.20E+10},
{skillID: 96, owner: "Hero14", name: "Winged Commander", bonusType: "GoldAll", magnitude: 0.1, reqLevel: 200, cost: 3.20E+14},
{skillID: 97, owner: "Hero14", name: "Vision Walk", bonusType: "CritDamagePassive", magnitude: 0.1, reqLevel: 400, cost: 3.20E+20},
{skillID: 98, owner: "Hero14", name: "Wrath of the Relics", bonusType: "GoldAll", magnitude: 0.2, reqLevel: 800, cost: 3.20E+28},
{skillID: 99, owner: "Hero15", name: "Emerald Deception", bonusType: "ThisHeroDamage", magnitude: 3, reqLevel: 10, cost: 100},
{skillID: 100, owner: "Hero15", name: "Demon's Heart", bonusType: "AllDamage", magnitude: 0.4, reqLevel: 25, cost: 3.20E+04},
{skillID: 101, owner: "Hero15", name: "Helga's Vessel", bonusType: "AllBossDamage", magnitude: 0.05, reqLevel: 50, cost: 3.20E+07},
{skillID: 102, owner: "Hero15", name: "Jeweler's Eye", bonusType: "CritChance", magnitude: 0.02, reqLevel: 100, cost: 3.20E+10},
{skillID: 103, owner: "Hero15", name: "Soul Pursuit", bonusType: "CritDamagePassive", magnitude: 0.15, reqLevel: 200, cost: 3.20E+14},
{skillID: 104, owner: "Hero15", name: "Cloth of the Rock", bonusType: "GoldTreasurePassive", magnitude: 0.2, reqLevel: 400, cost: 3.20E+20},
{skillID: 105, owner: "Hero15", name: "Brood Handler", bonusType: "ThisHeroDamage", magnitude: 100, reqLevel: 800, cost: 3.20E+28},
{skillID: 106, owner: "Hero16", name: "Hidden Flag", bonusType: "ThisHeroDamage", magnitude: 3.5, reqLevel: 10, cost: 100},
{skillID: 107, owner: "Hero16", name: "Numbing Vengeance", bonusType: "GoldTreasurePassive", magnitude: 0.25, reqLevel: 25, cost: 3.20E+04},
{skillID: 108, owner: "Hero16", name: "Privileged Advantage", bonusType: "GoldAll", magnitude: 0.2, reqLevel: 50, cost: 3.20E+07},
{skillID: 109, owner: "Hero16", name: "Chameleon", bonusType: "AllBossDamage", magnitude: 0.05, reqLevel: 100, cost: 3.20E+10},
{skillID: 110, owner: "Hero16", name: "Ubiquitous", bonusType: "AllBossDamage", magnitude: 0.07, reqLevel: 200, cost: 3.20E+14},
{skillID: 111, owner: "Hero16", name: "Essence of Medicine", bonusType: "AllDamage", magnitude: 0.15, reqLevel: 400, cost: 3.20E+20},
{skillID: 112, owner: "Hero16", name: "Horrific Eye", bonusType: "AllDamage", magnitude: 0.2, reqLevel: 800, cost: 3.20E+28},
{skillID: 113, owner: "Hero17", name: "Gem Storm", bonusType: "ThisHeroDamage", magnitude: 1.5, reqLevel: 10, cost: 100},
{skillID: 114, owner: "Hero17", name: "Rage of the Ancients", bonusType: "ThisHeroDamage", magnitude: 9, reqLevel: 25, cost: 3.20E+04},
{skillID: 115, owner: "Hero17", name: "Pierced Evasion", bonusType: "GoldAll", magnitude: 0.1, reqLevel: 50, cost: 3.20E+07},
{skillID: 116, owner: "Hero17", name: "Exalted Chief", bonusType: "GoldAll", magnitude: 0.1, reqLevel: 100, cost: 3.20E+10},
{skillID: 117, owner: "Hero17", name: "Guardian's Initiative", bonusType: "TapDamagePassive", magnitude: 0.1, reqLevel: 200, cost: 3.20E+14},
{skillID: 118, owner: "Hero17", name: "Death Unity", bonusType: "CritDamagePassive", magnitude: 0.1, reqLevel: 400, cost: 3.20E+20},
{skillID: 119, owner: "Hero17", name: "Herleif's Pursuit", bonusType: "GoldAll", magnitude: 0.25, reqLevel: 800, cost: 3.20E+28},
{skillID: 120, owner: "Hero18", name: "Night Crawler", bonusType: "ThisHeroDamage", magnitude: 4, reqLevel: 10, cost: 100},
{skillID: 121, owner: "Hero18", name: "Ballistics", bonusType: "ThisHeroDamage", magnitude: 5, reqLevel: 25, cost: 3.20E+04},
{skillID: 122, owner: "Hero18", name: "Bow Hunt", bonusType: "AllBossDamage", magnitude: 0.05, reqLevel: 50, cost: 3.20E+07},
{skillID: 123, owner: "Hero18", name: "Decoy Warrior", bonusType: "ThisHeroDamage", magnitude: 4.5, reqLevel: 100, cost: 3.20E+10},
{skillID: 124, owner: "Hero18", name: "Shadow Presence", bonusType: "TapDamagePassive", magnitude: 0.05, reqLevel: 200, cost: 3.20E+14},
{skillID: 125, owner: "Hero18", name: "Ancient Rhythm", bonusType: "GoldTreasurePassive", magnitude: 0.2, reqLevel: 400, cost: 3.20E+20},
{skillID: 126, owner: "Hero18", name: "Gate of Asger", bonusType: "AllDamage", magnitude: 0.15, reqLevel: 800, cost: 3.20E+28},
{skillID: 127, owner: "Hero19", name: "Future's Eye", bonusType: "ThisHeroDamage", magnitude: 2, reqLevel: 10, cost: 100},
{skillID: 128, owner: "Hero19", name: "Monkey's Curse", bonusType: "ThisHeroDamage", magnitude: 10, reqLevel: 25, cost: 3.20E+04},
{skillID: 129, owner: "Hero19", name: "Astral Prodigy", bonusType: "TapDamageFromDPS", magnitude: 0.005, reqLevel: 50, cost: 3.20E+07},
{skillID: 130, owner: "Hero19", name: "Glass Illusionist", bonusType: "TapDamagePassive", magnitude: 0.05, reqLevel: 100, cost: 3.20E+10},
{skillID: 131, owner: "Hero19", name: "Time Blur", bonusType: "AllDamage", magnitude: 0.1, reqLevel: 200, cost: 3.20E+14},
{skillID: 132, owner: "Hero19", name: "Sub Mind Presence", bonusType: "GoldAll", magnitude: 0.1, reqLevel: 400, cost: 3.20E+20},
{skillID: 133, owner: "Hero19", name: "Critical Flux", bonusType: "AllDamage", magnitude: 0.1, reqLevel: 800, cost: 3.20E+28},
{skillID: 134, owner: "Hero20", name: "Arrowed Flight", bonusType: "ThisHeroDamage", magnitude: 2.5, reqLevel: 10, cost: 100},
{skillID: 135, owner: "Hero20", name: "Bamboo Fire", bonusType: "ThisHeroDamage", magnitude: 6, reqLevel: 25, cost: 3.20E+04},
{skillID: 136, owner: "Hero20", name: "Acid Brood", bonusType: "CritDamagePassive", magnitude: 0.2, reqLevel: 50, cost: 3.20E+07},
{skillID: 137, owner: "Hero20", name: "Sharpshooter", bonusType: "ThisHeroDamage", magnitude: 4.5, reqLevel: 100, cost: 3.20E+10},
{skillID: 138, owner: "Hero20", name: "Temporal Stun", bonusType: "TapDamageFromDPS", magnitude: 0.004, reqLevel: 200, cost: 3.20E+14},
{skillID: 139, owner: "Hero20", name: "Family Honor", bonusType: "TapDamagePassive", magnitude: 0.1, reqLevel: 400, cost: 3.20E+20},
{skillID: 140, owner: "Hero20", name: "Island of Solidarity", bonusType: "GoldAll", magnitude: 0.1, reqLevel: 800, cost: 3.20E+28},
{skillID: 141, owner: "Hero21", name: "Plant Blindness", bonusType: "ThisHeroDamage", magnitude: 2, reqLevel: 10, cost: 100},
{skillID: 142, owner: "Hero21", name: "Pegasus Clash", bonusType: "TapDamagePassive", magnitude: 0.05, reqLevel: 25, cost: 3.20E+04},
{skillID: 143, owner: "Hero21", name: "Youthful Force", bonusType: "AllDamage", magnitude: 0.3, reqLevel: 50, cost: 3.20E+07},
{skillID: 144, owner: "Hero21", name: "Divine Spell", bonusType: "CritChance", magnitude: 0.02, reqLevel: 100, cost: 3.20E+10},
{skillID: 145, owner: "Hero21", name: "Evasion", bonusType: "AllDamage", magnitude: 0.1, reqLevel: 200, cost: 3.20E+14},
{skillID: 146, owner: "Hero21", name: "Soul Momentum", bonusType: "GoldTreasurePassive", magnitude: 0.2, reqLevel: 400, cost: 3.20E+20},
{skillID: 147, owner: "Hero21", name: "Magical Light", bonusType: "ThisHeroDamage", magnitude: 100, reqLevel: 800, cost: 3.20E+28},
{skillID: 148, owner: "Hero22", name: "Hot Poker Path", bonusType: "ThisHeroDamage", magnitude: 2.5, reqLevel: 10, cost: 100},
{skillID: 149, owner: "Hero22", name: "Crimson Strike Ritual", bonusType: "ThisHeroDamage", magnitude: 7.5, reqLevel: 25, cost: 3.20E+04},
{skillID: 150, owner: "Hero22", name: "Brawling Animosity", bonusType: "AllDamage", magnitude: 0.1, reqLevel: 50, cost: 3.20E+07},
{skillID: 151, owner: "Hero22", name: "Methodical Madness", bonusType: "ThisHeroDamage", magnitude: 5, reqLevel: 100, cost: 3.20E+10},
{skillID: 152, owner: "Hero22", name: "Crucible Heel", bonusType: "AllDamage", magnitude: 0.2, reqLevel: 200, cost: 3.20E+14},
{skillID: 153, owner: "Hero22", name: "Seventh Sense", bonusType: "CritDamagePassive", magnitude: 0.3, reqLevel: 400, cost: 3.20E+20},
{skillID: 154, owner: "Hero22", name: "Galvanizing Audacity", bonusType: "AllDamage", magnitude: 0.2, reqLevel: 800, cost: 3.20E+28},
{skillID: 155, owner: "Hero23", name: "Winged Blindness", bonusType: "ThisHeroDamage", magnitude: 2, reqLevel: 10, cost: 100},
{skillID: 156, owner: "Hero23", name: "Barbed Wrath", bonusType: "ThisHeroDamage", magnitude: 8, reqLevel: 25, cost: 3.20E+04},
{skillID: 157, owner: "Hero23", name: "Ancient Resolve", bonusType: "TapDamageFromDPS", magnitude: 0.004, reqLevel: 50, cost: 3.20E+07},
{skillID: 158, owner: "Hero23", name: "Rhythm of the Chant", bonusType: "CritDamagePassive", magnitude: 0.2, reqLevel: 100, cost: 3.20E+10},
{skillID: 159, owner: "Hero23", name: "Arcane Dominance", bonusType: "TapDamagePassive", magnitude: 0.1, reqLevel: 200, cost: 3.20E+14},
{skillID: 160, owner: "Hero23", name: "Temporal Anomaly", bonusType: "CritChance", magnitude: 0.02, reqLevel: 400, cost: 3.20E+20},
{skillID: 161, owner: "Hero23", name: "Unwavering Illusion", bonusType: "ThisHeroDamage", magnitude: 100, reqLevel: 800, cost: 3.20E+28},
{skillID: 162, owner: "Hero24", name: "Perfectionist", bonusType: "ThisHeroDamage", magnitude: 2, reqLevel: 10, cost: 100},
{skillID: 163, owner: "Hero24", name: "Guillotine Force", bonusType: "ThisHeroDamage", magnitude: 5, reqLevel: 25, cost: 3.20E+04},
{skillID: 164, owner: "Hero24", name: "Predator", bonusType: "ThisHeroDamage", magnitude: 12, reqLevel: 50, cost: 3.20E+07},
{skillID: 165, owner: "Hero24", name: "Iron Collector", bonusType: "GoldAll", magnitude: 0.15, reqLevel: 100, cost: 3.20E+10},
{skillID: 166, owner: "Hero24", name: "Plunge of Doom", bonusType: "GoldTreasurePassive", magnitude: 0.2, reqLevel: 200, cost: 3.20E+14},
{skillID: 167, owner: "Hero24", name: "Exalted Specimen", bonusType: "ThisHeroDamage", magnitude: 90, reqLevel: 400, cost: 3.20E+20},
{skillID: 168, owner: "Hero24", name: "Stunned Phoenix", bonusType: "AllDamage", magnitude: 0.15, reqLevel: 800, cost: 3.20E+28},
{skillID: 169, owner: "Hero25", name: "Skulls of the Citadel", bonusType: "TapDamagePassive", magnitude: 2.2, reqLevel: 10, cost: 100},
{skillID: 170, owner: "Hero25", name: "Painter's Whim", bonusType: "TapDamagePassive", magnitude: 0.05, reqLevel: 25, cost: 3.20E+04},
{skillID: 171, owner: "Hero25", name: "Tortured Soul", bonusType: "TapDamageFromDPS", magnitude: 0.004, reqLevel: 50, cost: 3.20E+07},
{skillID: 172, owner: "Hero25", name: "Divine Endurance", bonusType: "AllDamage", magnitude: 0.1, reqLevel: 100, cost: 3.20E+10},
{skillID: 173, owner: "Hero25", name: "Defender of Halvar", bonusType: "GoldAll", magnitude: 0.15, reqLevel: 200, cost: 3.20E+14},
{skillID: 174, owner: "Hero25", name: "Ambush Strike Force", bonusType: "CritChance", magnitude: 0.02, reqLevel: 400, cost: 3.20E+20},
{skillID: 175, owner: "Hero25", name: "Astral Exposure", bonusType: "ThisHeroDamage", magnitude: 150, reqLevel: 800, cost: 3.20E+28},
{skillID: 176, owner: "Hero26", name: "Ice Grasp", bonusType: "ThisHeroDamage", magnitude: 3.5, reqLevel: 10, cost: 100},
{skillID: 177, owner: "Hero26", name: "Glacier Breath", bonusType: "ThisHeroDamage", magnitude: 6.5, reqLevel: 25, cost: 3.20E+04},
{skillID: 178, owner: "Hero26", name: "Towering Wrath", bonusType: "TapDamageFromDPS", magnitude: 0.004, reqLevel: 25, cost: 3.20E+07},
{skillID: 179, owner: "Hero26", name: "Cold Blooded", bonusType: "AllBossDamage", magnitude: 0.05, reqLevel: 50, cost: 3.20E+10},
{skillID: 180, owner: "Hero26", name: "Fallen Divinity", bonusType: "AllDamage", magnitude: 0.1, reqLevel: 200, cost: 3.20E+14},
{skillID: 181, owner: "Hero26", name: "Arctic Fortitude", bonusType: "AllBossDamage", magnitude: 0.05, reqLevel: 400, cost: 3.20E+20},
{skillID: 182, owner: "Hero26", name: "Power Blur", bonusType: "GoldAll", magnitude: 0.12, reqLevel: 800, cost: 3.20E+28},
{skillID: 183, owner: "Hero27", name: "Traveller's Charm", bonusType: "ThisHeroDamage", magnitude: 3, reqLevel: 10, cost: 100},
{skillID: 184, owner: "Hero27", name: "The Farm's Path", bonusType: "ThisHeroDamage", magnitude: 7, reqLevel: 25, cost: 3.20E+04},
{skillID: 185, owner: "Hero27", name: "Animal Sense", bonusType: "AllDamage", magnitude: 0.1, reqLevel: 50, cost: 3.20E+07},
{skillID: 186, owner: "Hero27", name: "Loyal Collaboration", bonusType: "AllBossDamage", magnitude: 0.1, reqLevel: 100, cost: 3.20E+10},
{skillID: 187, owner: "Hero27", name: "Peaceful Resonance", bonusType: "CritChance", magnitude: 0.02, reqLevel: 200, cost: 3.20E+14},
{skillID: 188, owner: "Hero27", name: "Evasive Intelligence", bonusType: "CritDamagePassive", magnitude: 0.3, reqLevel: 400, cost: 3.20E+20},
{skillID: 189, owner: "Hero27", name: "Earthen Light", bonusType: "GoldTreasurePassive", magnitude: 0.2, reqLevel: 800, cost: 3.20E+28},
{skillID: 190, owner: "Hero28", name: "Lion's Claw", bonusType: "ThisHeroDamage", magnitude: 3.5, reqLevel: 10, cost: 100},
{skillID: 191, owner: "Hero28", name: "Eagle Wing Storm", bonusType: "AllDamage", magnitude: 0.01, reqLevel: 25, cost: 3.20E+04},
{skillID: 192, owner: "Hero28", name: "Bone Cross", bonusType: "ThisHeroDamage", magnitude: 4, reqLevel: 50, cost: 3.20E+07},
{skillID: 193, owner: "Hero28", name: "Cracked Thunder", bonusType: "ThisHeroDamage", magnitude: 6, reqLevel: 100, cost: 3.20E+10},
{skillID: 194, owner: "Hero28", name: "Outer Sight", bonusType: "CritDamagePassive", magnitude: 0.2, reqLevel: 200, cost: 3.20E+14},
{skillID: 195, owner: "Hero28", name: "Awareness", bonusType: "CritChance", magnitude: 0.03, reqLevel: 400, cost: 3.20E+20},
{skillID: 196, owner: "Hero28", name: "Inspiring Rage", bonusType: "AllDamage", magnitude: 0.15, reqLevel: 800, cost: 3.20E+28},
{skillID: 197, owner: "Hero29", name: "Spirit Summoner", bonusType: "ThisHeroDamage", magnitude: 3.3, reqLevel: 10, cost: 100},
{skillID: 198, owner: "Hero29", name: "Flight Seizer", bonusType: "ThisHeroDamage", magnitude: 5.5, reqLevel: 25, cost: 3.20E+04},
{skillID: 199, owner: "Hero29", name: "Wind Beacon", bonusType: "GoldAll", magnitude: 0.1, reqLevel: 50, cost: 3.20E+07},
{skillID: 200, owner: "Hero29", name: "Resonance Chant", bonusType: "TapDamagePassive", magnitude: 0.1, reqLevel: 100, cost: 3.20E+10},
{skillID: 201, owner: "Hero29", name: "Heart Resolve", bonusType: "GoldAll", magnitude: 0.2, reqLevel: 200, cost: 3.20E+14},
{skillID: 202, owner: "Hero29", name: "Omen of Animosity", bonusType: "AllDamage", magnitude: 0.1, reqLevel: 400, cost: 3.20E+20},
{skillID: 203, owner: "Hero29", name: "Beast Flight Mastery", bonusType: "GoldAll", magnitude: 0.3, reqLevel: 800, cost: 3.20E+28},
{skillID: 204, owner: "Hero30", name: "Witch's Brew Broth", bonusType: "CritDamagePassive", magnitude: 0.4, reqLevel: 10, cost: 100},
{skillID: 205, owner: "Hero30", name: "Winged Flight Sense", bonusType: "TapDamagePassive", magnitude: 0.2, reqLevel: 25, cost: 3.20E+04},
{skillID: 206, owner: "Hero30", name: "Medusa's Illusion", bonusType: "TapDamageFromDPS", magnitude: 0.01, reqLevel: 50, cost: 3.20E+07},
{skillID: 207, owner: "Hero30", name: "Universal Flux", bonusType: "GoldAll", magnitude: 0.6, reqLevel: 100, cost: 3.20E+10},
{skillID: 208, owner: "Hero30", name: "Arcane Path", bonusType: "AllDamage", magnitude: 0.2, reqLevel: 200, cost: 3.20E+14},
{skillID: 209, owner: "Hero30", name: "Prodigal Blur", bonusType: "AllDamage", magnitude: 0.3, reqLevel: 400, cost: 3.20E+20},
{skillID: 210, owner: "Hero30", name: "Enchanted Soul", bonusType: "AllDamage", magnitude: 0.4, reqLevel: 800, cost: 3.20E+28}
];


function GetHeroBaseCost(iLevel, purchaseCost, heroLevel)
{
    var purchaseCost = purchaseCost;
    iLevel = -1;
    if (iLevel == -1)
    {
      iLevel = heroLevel;
    }
    if (iLevel >= (heroEvolveLevel - 1))
    {
      purchaseCost *= evolveCostMultiplier;
    }
    return purchaseCost;
}

function currentPassiveThisHeroDamage(hero)
{
	var num = 0.0;
	for (var x = 0; x < 7; x++)
	{	
		if (hero.skills[x].isActive && hero.skills[x].bonusType=="ThisHeroDamage") 
		{ 	
			num = num + hero.skills[x].magnitude;
		}
	}
	return num;
}

function GetStatBonusAllDamage()
{
	StatBonusAllDamage = 0.0;
	for (var y = 0; y < 30; y++)
	{
		var hero = HeroInfo[heroList[y]];
		for (var x = 0; x < 7; x++)
		{	
			if (hero.skills[x].isActive && hero.skills[x].bonusType=="AllDamage") 
			{
				StatBonusAllDamage = StatBonusAllDamage + hero.skills[x].magnitude;
			}
		}
	}
}

function GetStatBonusAllGold()
{
	StatBonusGoldAll = 0.0 + ArtifactInfo[19].currentBonus;
	for (var y = 0; y < 30; y++)
	{
		var hero = HeroInfo[heroList[y]];
		for (var x = 0; x < 7; x++)
		{	
			if (hero.skills[x].isActive && hero.skills[x].bonusType=="GoldAll") 
			{
				StatBonusGoldAll = StatBonusGoldAll + hero.skills[x].magnitude;
			}
		}
	}
}

function GetStatBonusTapDamageFromDPS()
{
	TapDamageFromDPS = 0.0;
	for (var y = 0; y < 30; y++)
	{
		var hero = HeroInfo[heroList[y]];
		for (var x = 0; x < 7; x++)
		{	
			if (hero.skills[x].isActive && hero.skills[x].bonusType=="TapDamageFromDPS") 
			{
				TapDamageFromDPS = TapDamageFromDPS + hero.skills[x].magnitude;
			}
		}
	}
}

function GetStatBonusCritChance()
{
	CritChance = 0.02 + ArtifactInfo[3].currentBonus;
	for (var y = 0; y < 30; y++)
	{
		var hero = HeroInfo[heroList[y]];
		for (var x = 0; x < 7; x++)
		{	
			if (hero.skills[x].isActive && hero.skills[x].bonusType=="CritChance") 
			{
				CritChance = CritChance + hero.skills[x].magnitude;
			}
		}
	}
}

function GetStatBonusCritDamagePassive()
{
	CritDamagePassive = 10.0;
	for (var y = 0; y < 30; y++)
	{
		var hero = HeroInfo[heroList[y]];
		for (var x = 0; x < 7; x++)
		{	
			if (hero.skills[x].isActive && hero.skills[x].bonusType=="CritDamagePassive") 
			{
				CritDamagePassive = CritDamagePassive + (hero.skills[x].magnitude*10);
			}
		}
	}
	CritDamagePassive = CritDamagePassive * (1+ArtifactInfo[16].currentBonus)
}

function GetStatBonusTapDamagePassive()
{
	TapDamagePassive = 0.0;
	for (var y = 0; y < 30; y++)
	{
		var hero = HeroInfo[heroList[y]];
		for (var x = 0; x < 7; x++)
		{	
			if (hero.skills[x].isActive && hero.skills[x].bonusType=="TapDamagePassive") 
			{
				TapDamagePassive = TapDamagePassive + hero.skills[x].magnitude;
			}
		}
	}
}

function GetEfficiency()
{	
	var output = [];
    var levels = [];
	var text = "";
	var best = 0;
	//var bestskill = [0,0]
	var bestskill = HeroInfo[heroList[0]].skills[0];
	var test = 0;
	for (var x = 0; x < 10000; x++)
	{
		//best = 30;
		for (i = 0; i < 30; i++) 
		{	
			if (HeroInfo[heroList[i]].isActive) 
			{   
				var eff = HeroInfo[heroList[i]].efficiency;
				var beff = HeroInfo[heroList[best]].efficiency;
				if (eff < beff)
				{
					//oldbest = best;
					best = i;
				}
				for (var h = 0; h < 7; h++)
				{
					if (!(HeroInfo[heroList[i]].skills[h].isActive))
					{
						var eff = HeroInfo[heroList[i]].skills[h].efficiency;
						var beff = bestskill.efficiency;
						if (eff < beff)
						{
							bestskill = HeroInfo[heroList[i]].skills[h];
						}
					}
				}
			}
			var eff = HeroInfo[heroList[30]].efficiency;
			var beff = HeroInfo[heroList[best]].efficiency;
			if (eff < beff)
			{
				//oldbest = best;
				best = 30;
			}
		}
		//alert(bestskill.name);
		if (bestskill.efficiency < HeroInfo[heroList[best]].efficiency)
		{
			if (HeroInfo[bestskill.owner].heroLevel == bestskill.reqLevel)
			{
			bestskill.isActive = true;
			//HeroInfo[bestskill.owner].heroLevel = bestskill.reqLevel;
			if (x==0)
			{
				output.push({name: HeroInfo[bestskill.owner].name, level: HeroInfo[bestskill.owner].heroLevel});
				output.push({name: bestskill.name + " - " + bestskill.reqLevel, level: HeroInfo[bestskill.owner].name});
			}
			else
			{
				if (output[output.length-1].name == HeroInfo[bestskill.owner].name)
				{
					output[output.length-1].level = HeroInfo[bestskill.owner].heroLevel;
					output.push({name: bestskill.name + " - " + bestskill.reqLevel, level: HeroInfo[bestskill.owner].name});
				}
				else
				{
					output.push({name: HeroInfo[bestskill.owner].name, level: HeroInfo[bestskill.owner].heroLevel});
					output.push({name: bestskill.name + " - " + bestskill.reqLevel, level: HeroInfo[bestskill.owner].name});
				}
			}
			bestskill.efficiency = 1000000;
			}
			else
			{
				HeroInfo[bestskill.owner].heroLevel += 1;
				if (x==0)
				{
					output.push({name: HeroInfo[bestskill.owner].name, level: HeroInfo[bestskill.owner].heroLevel});
				}
				else
				{
					if (output[output.length-1].name == HeroInfo[bestskill.owner].name)
					{
						output[output.length-1].level = HeroInfo[bestskill.owner].heroLevel;
					}
					else
					{
						output.push({name: HeroInfo[bestskill.owner].name, level: HeroInfo[bestskill.owner].heroLevel});
					}
				}
			}
		}
		else
		{
			HeroInfo[heroList[best]].heroLevel += 1;
			if (x==0)
			{
				output.push({name: HeroInfo[heroList[best]].name, level: HeroInfo[heroList[best]].heroLevel});
			}
			else
			{
				if (output[output.length-1].name == HeroInfo[heroList[best]].name)
				{
					output[output.length-1].level = HeroInfo[heroList[best]].heroLevel;
				}
				else
				{
					output.push({name: HeroInfo[heroList[best]].name, level: HeroInfo[heroList[best]].heroLevel});
				}
			}
		}
		GetStatBonusAllDamage();
		GetStatBonusAllGold();
		GetStatBonusCritDamagePassive();
		GetStatBonusTapDamageFromDPS();
		GetStatBonusCritChance();
		GetStatBonusTapDamagePassive();
		UpdateAllHeroesStats();
		if (output.length > parseInt($("#numberofpredictions").val()))
		{
			$("#output").html("");
			text = "";
			//text += "<table id=\"resulttbl\" class=\"table table-striped\"><tbody>";
			//text += "<tr><th>Name</th><th>Level</th></tr>"
			for (var i = 0; i < output.length; i++) 
			{
				//if (output[i+1].name == output[i].name) { continue; }
				//text += "<tr><td>" + output[i].name + "</td><td>" + output[i].level + "</td></tr>"; 
				text += output[i].name + " - " + output[i].level + "<br>"; 
			}
			//text += "</tbody></table>";
			$("#output").html(text);
			//alert(test);
			break;
		}
	}
}

function GetUpgradeCostByMultiLevel(iLevelstart, iLevelfinish, purchaseCost)
{	
	var total = 0.0;
	for (var i = iLevelstart; i < iLevelfinish; i++)
	{
		total += GetUpgradeCostByLevel(i, purchaseCost);
	}
	return total;
}

function printAll()
{
	for (var i = 0; i < 30; i++)
	{
		printHeroInfo(HeroInfo[heroList[i]]);
	}
	for (var j = 0; j < ArtifactInfo.length; j++)
	{
		printArtifactInfo(ArtifactInfo[j]);
	}
	$("#player0nextUpgradeCost").html(numberFormat(HeroInfo[heroList[30]].nextUpgradeCost));
	//$("#player0currentDPS").html(numberFormat(HeroInfo[heroList[30]].currentDamage));
	//$("#player0nextLevelDPSDiff").html("+ "+numberFormat(HeroInfo[heroList[30]].nextLevelDMGDiff));
	if (HeroInfo[heroList[30]].currentDamage > 1000000) { $("#player0currentDPS").html(HeroInfo[heroList[30]].currentDamage.toExponential(3)); } else { $("#player0currentDPS").html(Math.floor(HeroInfo[heroList[30]].currentDamage)); }
	if (HeroInfo[heroList[30]].nextLevelDMGDiff > 1000000) { $("#player0nextLevelDPSDiff").html("+ "+HeroInfo[heroList[30]].nextLevelDMGDiff.toExponential(3)); } else { $("#player0nextLevelDPSDiff").html("+ "+Math.floor(HeroInfo[heroList[30]].nextLevelDMGDiff)); }
	$("#playerdata").html(
						"Total Damage: " + numberFormat(HeroInfo[heroList[30]].trueDamage) + "<br>" +
						"Next Level Total Damage: " + numberFormat(HeroInfo[heroList[30]].nextLeveltrueDamageDiff) + "<br>" +
						"Min crit dmg: " + numberFormat(HeroInfo[heroList[30]].MinCritDamage) + "<br>" +
						"Max crit dmg: " + numberFormat(HeroInfo[heroList[30]].MaxCritDamage) + "<br>" +
						"Avg crit dmg: " + numberFormat(HeroInfo[heroList[30]].AvgCritDamage) + "<br>" +
						"Crit dmg: " + numberFormat(HeroInfo[heroList[30]].CritDamage) + "<br>" +
						"<br>" +
						"All Damage Bonus: " + StatBonusAllDamage + "<br>" +
						"All Gold Bonus: " + StatBonusGoldAll + "<br>" +
						"Crit Damage Bonus: " + CritDamagePassive + "<br>" +
						"Tap Dmg from DPS Bonus: " + TapDamageFromDPS + "<br>" +
						"Crit Chance Bonus: " + CritChance + "<br>" +
						"Tap Damage Bonus: " + TapDamagePassive + "<br>" +
						"<br>" + 
						"Total DPS: " + numberFormat(currentAllHeroDPS) + "<br>"
						);
}

function GetSkills()
{	
	for (var x = 1; x < 31; x++)
	{
		for (var y = 1; y < 8; y++)
		{
			HeroInfo[heroList[x-1]].skills[y-1].isActive = $("#Hero"+x+"skill"+y).is(":checked");
		}
	}
}

function SetSkillsForTable()
{	
	for (var x = 1; x < 31; x++)
	{
		for (var y = 1; y < 8; y++)
		{
			$("#Hero"+x+"skill"+y).prop("checked", HeroInfo[heroList[x-1]].skills[y-1].isActive);
		}
	}
}

function BuildSkillBase()
{
	var index = 0;
	for (var x = 1; x < 31; x++)
	{
		for (var y = 1; y < 8; y++)
		{
			if (typeof HeroInfo[skillsInfo[index].owner].skills == "undefined") { HeroInfo[skillsInfo[index].owner].skills = []; }
			HeroInfo[skillsInfo[index].owner].skills.push(skillsInfo[index]);
			HeroInfo[heroList[x-1]].isActive = false;
			index++;
		}
	}
}

function GetLevels()
{	
	HeroInfo[heroList[30]].heroLevel = parseInt($("#player0heroLevel").val());
	HeroInfo[heroList[30]].clicks = parseInt($("#player0clicks").val());
	for (var j = 0; j < ArtifactInfo.length; j++)
	{
		ArtifactInfo[j].level = parseInt($("#"+ArtifactInfo[j].artifactID+"level").val());
		if (ArtifactInfo[j].level > parseInt(ArtifactInfo[j].maxLevel) && parseInt(ArtifactInfo[j].maxLevel) > 0)
		{
			ArtifactInfo[j].level = parseInt(ArtifactInfo[j].maxLevel);
			$("#"+ArtifactInfo[j].artifactID+"level").val(ArtifactInfo[j].maxLevel);
		}
	}
}

function numberFormat(number)
{
	var temp = number;
  //var tabUnits = [" million", " billion", " trillion", " quadrillion", " quintillion", " sextillion", " septillion", " octillion", " nonillion", " decillion", " undecillion", " duodecillion", " tredecillion", " quattuordecillion", " quindecillion", " sexdecillion", " septendecillion", " octodecillion", " novemdecillion", " vigintillion", " unvigintillion", " duovigintillion", " tresvigintillion", " quattuorvigintillion", " quinquavigintillion", " sesvigintillion", " septemvigintillion", " octovigintillion", " novemvigintillion", " trigintillion", " untrigintillion", " duotrigintillion", " duotrigintillion", " trestrigintillion", " quattuortrigintillion", " quinquatrigintillion", " sestrigintillion", " septentrigintillion", " octotrigintillion", " noventrigintillion", " quadragintillion"];
  var tabUnits = ["K","M","B","T","aa","bb","cc","dd","ee","ff","gg","hh","ii","jj","kk","ll","mm","nn","oo","pp","qq","rr","ss","tt","uu","vv","ww","xx","yy","zz"];
  var highnumber = false; 
  var bignumber = 1000; 
  var tabposition = -1;
  var p_atomepersecond = true;
    var unit;
    if (number >= bignumber) {
        highnumber = true;
        while (number >= bignumber) { bignumber *= 1000; tabposition++; }
        //while (number >= bignumber && tabposition < 4 ) { bignumber *= 1000; tabposition++; }
        number /= (bignumber / 1000);
        unit = tabUnits[tabposition];
    } else unit = "";
    if (unit == undefined) return temp.toExponential(3);
    var toround = (highnumber == true) ? (p_atomepersecond == true) ? 1000 : 100 : 10;
    var res = Math.round(number * toround) / toround;
    return [res.toLocaleString().replace(",", ".") + '' + unit];
}


$( "input[type=text]" ).focusout(function() {
	//alert("test");
	for (var a = 0; a < 30; a++)
	{
		printHeroInfo(HeroInfo[heroList[a]]);
	}
});

function printHeroInfo(hero)
{	
	if (hero.heroLevel != parseInt($( "#Hero"+(hero.heroID)+"heroLevel" ).val()))
	{
		if (isNaN(parseInt($( "#Hero"+(hero.heroID)+"heroLevel" ).val()))) {$( "#Hero"+(hero.heroID)+"heroLevel" ).val(0);}
		hero.heroLevel = parseInt($( "#Hero"+(hero.heroID)+"heroLevel" ).val());
		hero.currentDPS = GetDPSByLevel(hero, hero.heroLevel);
		hero.nextLevelDPSDiff = GetDPSByLevel(hero, hero.heroLevel + 1) - hero.currentDPS;
		$("#Hero"+(hero.heroID)+"currentDPS").html((hero.currentDPS > 1000) ? numberFormat(hero.currentDPS) : Math.floor(hero.currentDPS));
		$("#Hero"+(hero.heroID)+"nextLevelDPSDiff").html("+ " + ((hero.nextLevelDPSDiff > 1000) ? numberFormat(hero.nextLevelDPSDiff) : Math.floor(hero.nextLevelDPSDiff)));
		$("#Hero"+(hero.heroID)+"nextUpgradeCost").html(numberFormat(hero.nextUpgradeCost));
		//$("#Hero"+hero.heroID+"name").prop("title", hero.efficiency)
		for (var x = 0; x < 7; x++)
		{
			//$("#Hero"+hero.heroID+"skill"+(x+1)).prop("checked", hero.skills[x].isActive);
			$("#Hero"+(hero.heroID)+"skill"+(x+1)).prop("title", 
																hero.skills[x].name + "\n" + 
																hero.skills[x].bonusType + "\n" + 
																hero.skills[x].magnitude + "\n" +
																hero.skills[x].nextUpgradeCost
																// + hero.skills[x].efficiency
																);
		}
	}
}

function updateCommonStuff()
{
	for (var b = 0; b < 30; b++)
	{
		var hero = HeroInfo[heroList[b]];
		for (var a = 0; a < 7; a++)
		{
			hero.skills[a].isActive = (hero.skills[a].reqLevel <= hero.heroLevel) ? true : false;
		}
	}
	updateBonuses();
}

function UpdateAllHeroesStats()
{
	currentAllHeroDPS = 0.0;
	for (var b = 0; b < 30; b++)
	{
		var hero = HeroInfo[heroList[b]];
		for (var a = 0; a < 7; a++)
		{
			hero.skills[a].isActive = (hero.skills[a].reqLevel < hero.heroLevel) ? true : false;
		}
	}
	for (var i = 0; i < 30; i++)
	{
		var hero = HeroInfo[heroList[i]];
		hero.currentDPS = GetDPSByLevel(hero, hero.heroLevel);
		hero.nextLevelDPSDiff = GetDPSByLevel(hero, hero.heroLevel + 1) - hero.currentDPS;
		hero.nextUpgradeCost = GetUpgradeCostByLevel(hero.heroLevel, hero.cost);
		if (hero.heroID >= 2) 
		{	
			hero.isActive = false;
			if (HeroInfo[heroList[hero.heroID-2]].heroLevel > 0){ hero.isActive = true; }
		} 
		else if (hero.heroID <= 1)
		{ 	
			hero.isActive = true; 
		}	
		currentAllHeroDPS += HeroInfo[heroList[i]].currentDPS;
		//hero.nextSkill = hero.skills[0];
		//$("#Hero1skill1").prop("checked", HeroInfo[heroList[0]].skills[0].isActive);
	}
	//if (currentAllHeroDPS == 0) { currentAllHeroDPS = 1e-100; }
	UpdatePlayerStats();
	currentAllHeroDPS += getPlayerTrueDamage(HeroInfo[heroList[30]].clicks, HeroInfo[heroList[30]].heroLevel);
	if (currentAllHeroDPS == 0) { currentAllHeroDPS = 1e-100; }
	var player = HeroInfo[heroList[30]];
		player.currentSalary = currentAllHeroDPS  * (1 + StatBonusGoldAll);
		player.nextLevelSalaryDiff = (currentAllHeroDPS + player.nextLeveltrueDamageDiff) * (1 + StatBonusGoldAll);
		player.efficiency = player.nextUpgradeCost/(player.nextLevelSalaryDiff - player.currentSalary);
	for (var i = 0; i < 30; i++)
	{	
		var hero = HeroInfo[heroList[i]];
		hero.currentSalary = currentAllHeroDPS  * (1 + StatBonusGoldAll);
		hero.nextLevelSalaryDiff = (currentAllHeroDPS + hero.nextLevelDPSDiff) * (1 + StatBonusGoldAll);
		hero.efficiency = hero.nextUpgradeCost/(hero.nextLevelSalaryDiff - hero.currentSalary);
		for (var x = 0; x < hero.skills.length; x++)
		{	
			var skill = hero.skills[x];
			updateSkill("AllDamage", skill, hero);
			updateSkill("GoldAll", skill, hero);
			updateSkill("ThisHeroDamage", skill, hero);
			updateSkill("CritDamagePassive", skill, hero);
			updateSkill("TapDamageFromDPS", skill, hero);
			updateSkill("CritChance", skill, hero);
			updateSkill("TapDamagePassive", skill, hero);
			updateSkill("GoldTreasurePassive", skill, hero);
		}	
	}
}

function printArtifactInfo(artifact)
{
	if (artifact.level >= parseInt(artifact.maxLevel) && parseInt(artifact.maxLevel) > 0)
	{
		$("#"+(artifact.artifactID)+"upgradeCost").html("MAX LEVEL");
		$("#"+(artifact.artifactID)+"upgradeCost").prop("title", getArtifactRelicsSpent(artifact));
		$("#"+(artifact.artifactID)+"DamageBonus").html(Math.round(artifact.currentDamageBonus*10000)/100+"%");
		$("#"+(artifact.artifactID)+"artifactBonus").html(Math.round(artifact.currentBonus*10000)/100+"%"); 
	}
	else
	{
		$("#"+(artifact.artifactID)+"upgradeCost").html(artifact.upgradeCost);
		$("#"+(artifact.artifactID)+"upgradeCost").prop("title", getArtifactRelicsSpent(artifact));
		$("#"+(artifact.artifactID)+"DamageBonus").html(Math.round(artifact.currentDamageBonus*10000)/100+"%" + " (+" + Math.round(artifact.nextLevelDamageBonusDiff*10000)/100 + "%)");
		if (artifact.bonusPerLevel > 0)
		{ 
			$("#"+(artifact.artifactID)+"artifactBonus").html(Math.round(artifact.currentBonus*10000)/100+"%" + " (+" + Math.round(artifact.bonusPerLevel*10000)/100 + "%)"); 
		}
		else
		{ 
			$("#"+(artifact.artifactID)+"artifactBonus").html(Math.round(artifact.currentBonus*10000)/100+"%" + " (" + Math.round(artifact.bonusPerLevel*10000)/100 + "%)"); 
		}
	}
}

function UpdateArtifactsStats()
{
	for (var i = 0; i < ArtifactInfo.length; i++)
	{
		ArtifactInfo[i].currentBonus = totalArtifactBonus(ArtifactInfo[i].bonusPerLevel, ArtifactInfo[i].level);
		ArtifactInfo[i].nextLevelBonusDiff = totalArtifactBonus(ArtifactInfo[i].bonusPerLevel, ArtifactInfo[i].level);
		ArtifactInfo[i].upgradeCost = getArtifactUpgradeCost(ArtifactInfo[i]);
	}
	artifactBonusDamage = 0.0; 
	for (var x = 0; x < ArtifactInfo.length; x++)
	{
		ArtifactInfo[x].currentDamageBonus = totalDamageArtifactBonus(ArtifactInfo[x], ArtifactInfo[x].level);
		//alert(ArtifactInfo[x].currentDamageBonus + " - " + ArtifactInfo[x].artifactID + " - " + ArtifactInfo[x].level);
		ArtifactInfo[x].nextLevelDamageBonusDiff = totalDamageArtifactBonus(ArtifactInfo[x], ArtifactInfo[x].level + 1) - ArtifactInfo[x].currentDamageBonus;
		artifactBonusDamage += ArtifactInfo[x].currentDamageBonus;
	}
	//$("#artifactbonus").val(artifactBonusDamage*100);
}

function totalArtifactBonus(bonusPerLevel, level)
{
	return bonusPerLevel * level;
}

function getArtifactUpgradeCost(artifact)
{	
	if (artifact.level == 0) { return NextArtifactCost(); }
	var num1 = artifact.CostCoEff * Math.pow(artifact.level + 1, artifact.CostExpo);
	var num2 = Math.round(num1);
	return num2;
}

function getArtifactRelicsSpent(artifact)
{
	var num = 0.0;
	for (var x = 1; x < artifact.level; x++)
	{
		var num1 = artifact.CostCoEff * Math.pow(x + 1, artifact.CostExpo);
		var num2 = Math.round(num1);
		num += num2;
	}
	return num;
}

function NextArtifactCost()
{
	var num = 1;
	for (var i = 0; i < ArtifactInfo.length; i++)
	{
		if (ArtifactInfo[i].level > 0) { num += 1; }
	}
	return Math.floor((num * Math.pow(1.35, num)));
}
 
function totalDamageArtifactBonus(artifact, level)
{
	if (level > 0)
	{
		return (artifact.DamageBonus * (1.0 + (0.5 * (level - 1)))) * (1 + ArtifactInfo[25].currentBonus);
	}
	return 0;
}

function GetDPSByLevel(hero, level)
{
    var num3 = 0.0;
	if (hero.heroLevel != level)
	{
		for (var a = 0; a < 7; a++)
		{
			hero.skills[a].isActive = (hero.skills[a].reqLevel < level) ? true : false;
		}
		updateBonuses();
	}
	hero.currentPassiveThisHeroDamage = currentPassiveThisHeroDamage(hero);
    if (IsEvolved(level))
    {
      num3 = Math.pow(levelIneffiency, (level - heroEvolveLevel)) * Math.pow((1.0 - (heroInefficiency * heroInefficiencySlowDown)), (hero.heroID + 30));
    }
    else
    {
      num3 = Math.pow(levelIneffiency, (level - 1)) * Math.pow((1.0 - (heroInefficiency * Math.min(hero.heroID, heroInefficiencySlowDown))), hero.heroID);
    }
    var num4 = 0.0;
    if (IsEvolved(level))
    {
      num4 = (((GetUpgradeCostByLevel(level - 1, hero.cost) * (Math.pow(heroUpgradeBase, (level - (heroEvolveLevel - 1))) - 1.0)) / ((heroUpgradeBase - 1.0))) * num3) * dMGScaleDown;
    }
    else
    {
      num4 = (((GetUpgradeCostByLevel(level - 1, hero.cost) * (Math.pow(heroUpgradeBase, level) - 1.0)) / ((heroUpgradeBase - 1.0))) * num3) * dMGScaleDown;
    }
	if (hero.heroLevel != level)
	{
		for (var b = 0; b < 7; b++)
		{
			hero.skills[b].isActive = (hero.skills[b].reqLevel < hero.heroLevel) ? true : false;
		}
		updateBonuses();
	}
    return (num4 * (1.0 + hero.currentPassiveThisHeroDamage + StatBonusAllDamage)) * (1.0 + artifactBonusDamage);
}

function IsEvolved(iLevel)
{
	return (iLevel >= heroEvolveLevel);
}

function GetUpgradeCostByLevel(iLevel, purchaseCost)
{
    var num = 0.0;
    num = GetHeroBaseCost(iLevel, purchaseCost, iLevel) * Math.pow(heroUpgradeBase, iLevel);
    var a = num * (1.0 + ArtifactInfo[23].currentBonus);
    return Math.ceil(a);
}

function GetBaseUpgradeCostByLevel(iLevel, purchaseCost)
{
    var num = 0.0;
    num = GetHeroBaseCost(iLevel, purchaseCost, iLevel) * Math.pow(heroUpgradeBase, iLevel);
    return Math.ceil(num);
}
function UpdatePlayerStats()
{
	HeroInfo[heroList[30]].currentDamage = GetAttackDamageByLevel(HeroInfo[heroList[30]].heroLevel);
	HeroInfo[heroList[30]].nextLevelDMGDiff = GetAttackDamageByLevel(HeroInfo[heroList[30]].heroLevel + 1) - HeroInfo[heroList[30]].currentDamage;
	HeroInfo[heroList[30]].nextUpgradeCost = GetPlayerUpgradeCostByLevel(HeroInfo[heroList[30]].heroLevel);
	HeroInfo[heroList[30]].MinCritDamage = HeroInfo[heroList[30]].currentDamage * CritDamagePassive * 0.3;
	HeroInfo[heroList[30]].MaxCritDamage = HeroInfo[heroList[30]].currentDamage * CritDamagePassive;
	HeroInfo[heroList[30]].AvgCritDamage = HeroInfo[heroList[30]].currentDamage * CritDamagePassive * 0.65;
	HeroInfo[heroList[30]].CritDamage = ((CritChance*100*HeroInfo[heroList[30]].AvgCritDamage) + ((1-CritChance)*100*HeroInfo[heroList[30]].currentDamage))/100;
	HeroInfo[heroList[30]].trueDamage = getPlayerTrueDamage(HeroInfo[heroList[30]].clicks, HeroInfo[heroList[30]].heroLevel);
	HeroInfo[heroList[30]].nextLeveltrueDamageDiff = getPlayerTrueDamage(HeroInfo[heroList[30]].clicks, HeroInfo[heroList[30]].heroLevel + 1) - HeroInfo[heroList[30]].trueDamage;
}

function getPlayerTrueDamage(clicks, iLevel)
{
	var num1 = GetAttackDamageByLevel(iLevel);
	var num2 = num1 * CritDamagePassive * 0.65;
	var num3 = ((CritChance*100*num2) + ((1-CritChance)*100*num1))/100;
	var num4 = num3 * clicks;
	return num4;
}

function GetAttackDamageByLevel(iLevel)
{
    var num = iLevel * Math.pow(1.05, iLevel);
    var num3 = TapDamagePassive;
    var num4 = TapDamageFromDPS * currentAllHeroDPS;
    //var num5 = PlayerModel.instance.GetStatBonus(BonusType.TapDamageActive);
	var num5 = 0;
    var num7 = ArtifactInfo[28].currentBonus;
    //var num8 = (((((num * (1.0 + statBonus)) + num4) * (1.0 + num3)) * (1.0 + num5)) * (1.0 + artifactDamageBonus)) * (1.0 + num7);
	var num8 = (((((num * (1.0 + StatBonusAllDamage)) + num4) * (1.0 + num3)) * (1.0 + num5)) * (1.0 + artifactBonusDamage)) * (1.0 + num7);
	//alert(num8);
    if (num8 <= 1.0)
    {
        num8 = 1.0;
    }
    return num8;
}

function GetPlayerUpgradeCostByLevel(iLevel)
{
    var num = Math.min(25, 3 + iLevel) * Math.pow(1.074, iLevel);
    var a = num * (1.0 + ArtifactInfo[23].currentBonus);
    return Math.ceil(a);
}

function updateSkill(bonusType, skill, hero)
{
if (!(skill.isActive) && skill.bonusType == bonusType)
	{
		skill.isActive = true;
		updateBonuses();
		skill.dps = getPlayerTrueDamage(HeroInfo[heroList[30]].clicks, HeroInfo[heroList[30]].heroLevel);;
		for (var y = 0; y < 30; y++)
		{
			var hero2 = HeroInfo[heroList[y]];
			if (!(hero2.name == HeroInfo[skill.owner].name))
			{
				skill.dps+=GetDPSByLevel(hero2, hero2.heroLevel);
			}
			else
			{
				if (skill.reqLevel >= hero2.heroLevel)
				{
					skill.dps+=GetDPSByLevel(hero2, skill.reqLevel);
				}
				else
				{
					skill.dps+=GetDPSByLevel(hero2, hero2.heroLevel);
				}
			}
		}
		skill.isActive = false;
		updateBonuses();
		skill.currentSalary = currentAllHeroDPS  * (1 + StatBonusGoldAll);
		skill.nextLevelSalaryDiff = skill.dps * (1 + StatBonusGoldAll);
		//skill.nextUpgradeCost = GetUpgradeCostByMultiLevel(hero.heroLevel, skill.reqLevel, hero.cost) + (GetUpgradeCostByLevel(skill.reqLevel, hero.cost)*5);
		skill.nextUpgradeCost = GetSkillCost(skill, hero);
		skill.efficiency = skill.nextUpgradeCost/(skill.nextLevelSalaryDiff - skill.currentSalary);
		if(hero.heroLevel == skill.reqLevel) { skill.efficiency = 0; }
	}
}

function GetSkillCost(skill, hero)
{
	//alert(GetUpgradeCostByLevel(hero.skills[x].reqLevel, hero.cost)*5);
	var num = GetUpgradeCostByMultiLevel(hero.heroLevel, skill.reqLevel, hero.cost);
	var num2 = 0.0;
	for (var x = 0; x < 7; x++)
	{
		if (!(hero.skills[x].isActive))
		{
			num2 += GetUpgradeCostByLevel(hero.skills[x].reqLevel, hero.cost)*5;
		}
		if (hero.skills[x].name == skill.name) { break; }
	}
	return num + num2;
}

function Save()
{	
	//SetSkillsForTable();
	//GetLevels();
	UpdateTables();
	var text = [];
	for (var x = 0; x < 30; x++)
	{	
		var temp = [];
		for (var y = 0; y < 7; y++)
		{
			temp.push(HeroInfo[heroList[x]].skills[y].isActive);
		}
		text.push({level: HeroInfo[heroList[x]].heroLevel, skills: temp})
	}
	text.push({level: HeroInfo[heroList[30]].heroLevel, clicks: HeroInfo[heroList[30]].clicks})
	for (var y = 0; y < ArtifactInfo.length; y++)
	{	
		text.push({level: ArtifactInfo[y].level})
	}
	var save = JSON.stringify(text);
	$("#savedata").val(save);
	text = [];
	temp = [];
}

function Load()
{	
	var txt = $("#savedata").val();
	var txt2 = jQuery.parseJSON(txt);
	for (var x = 0; x < 30; x++)
	{	
		for (var y = 0; y < 7; y++)
		{
			HeroInfo[heroList[x]].skills[y].isActive = txt2[x].skills[y];
			HeroInfo[heroList[x]].heroLevel = txt2[x].level;
			$("#Hero"+(x+1)+"skill"+(y+1)).prop("checked", HeroInfo[heroList[x]].skills[y].isActive);
			$("#Hero"+(x+1)+"heroLevel").val(HeroInfo[heroList[x]].heroLevel);
		}
	}
	HeroInfo[heroList[30]].clicks = txt2[30].clicks;
	HeroInfo[heroList[30]].heroLevel = txt2[30].level;
	$("#player0clicks").val(HeroInfo[heroList[30]].clicks);
	$("#player0heroLevel").val(HeroInfo[heroList[30]].heroLevel);
	for (var y = 0; y < ArtifactInfo.length; y++)
	{	
		ArtifactInfo[y].level = txt2[(y+31)].level; 
		$("#Artifact"+(y+1)+"level").val(ArtifactInfo[y].level);
	}
	UpdateTables();
}

function updateBonuses()
{
	GetStatBonusAllDamage();
	GetStatBonusAllGold();
	GetStatBonusCritDamagePassive();
	GetStatBonusTapDamageFromDPS();
	GetStatBonusCritChance();
	GetStatBonusTapDamagePassive();
}

buildArtifacts();
BuildSkillBase();
UpdateTables();
function UpdateTables() {
	GetLevels();
	UpdateArtifactsStats();
	updateBonuses();
	UpdateAllHeroesStats();
	printAll();
}

function EfficiencyCalculations()
{	
	$("#output").html("");
	UpdateTables();
	GetEfficiency();
}