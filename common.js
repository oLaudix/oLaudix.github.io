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
	var bestskill = HeroInfo[heroList[0]];
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
				if (!(HeroInfo[heroList[i]].nextSkill.isActive)){
					var eff = HeroInfo[heroList[i]].nextSkill.efficiency;
					var beff = bestskill.nextSkill.efficiency;
					if (eff < beff)
					{
						bestskill = HeroInfo[heroList[i]];
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
		if (bestskill.nextSkill.efficiency < HeroInfo[heroList[best]].efficiency)
		{
			bestskill.nextSkill.isActive = true;
			bestskill.heroLevel = bestskill.nextSkill.reqLevel;
			if (x==0)
			{
				output.push({name: bestskill.name, level: bestskill.heroLevel});
				output.push({name: bestskill.nextSkill.name + " - " + bestskill.nextSkill.reqLevel, level: bestskill.name});
			}
			else
			{
				if (output[output.length-1].name == bestskill.name)
				{
					output[output.length-1].level = bestskill.heroLevel;
					output.push({name: bestskill.nextSkill.name + " - " + bestskill.nextSkill.reqLevel, level: bestskill.name});
				}
				else
				{
					output.push({name: bestskill.name, level: bestskill.heroLevel});
					output.push({name: bestskill.nextSkill.name + " - " + bestskill.nextSkill.reqLevel, level: bestskill.name});
				}
			}
			bestskill.nextSkill.efficiency = 1000000;
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

function SetSkills()
{	
	for (var x = 1; x < 31; x++)
	{
		for (var y = 1; y < 8; y++)
		{
			$("#Hero"+x+"skill"+y).prop("checked", HeroInfo[heroList[x-1]].skills[y-1].isActive);
			//$("#Hero1skill1").prop("checked", HeroInfo[heroList[0]].skills[0].isActive);
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
	for (var i = 0; i < 30; i++)
	{
		HeroInfo[heroList[i]].heroLevel = parseInt($("#Hero"+(i+1)+"heroLevel").val());
	}
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