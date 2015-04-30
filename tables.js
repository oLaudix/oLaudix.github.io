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

function getArtifactUpgradeCost(artifact)
{	
	if (artifact.level == 0) { return NextArtifactCost(); }
	var num1 = artifact.CostCoEff * Math.pow(artifact.level + 1, artifact.CostExpo);
	var num2 = Math.round(num1);
	return num2;
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

function buildHeroes()
{
	var heroes = "Player,0,Lightning Blade,1,2,2,1,,,,,,,,/\
Hero1,1,Takeda the Blade Assassin,0,50,4,3.5,4,526.0050314,6.18528E+21,0.98,,,,/\
Hero2,2,Contessa the Torch Wielder,3.5,175,16,3.075,16,2104.020126,2.47411E+22,0.9216,,,,/\
Hero3,3,Hornetta Queen of the Valrunes,3.85,673.75,55,1.475,55,7232.569182,8.50475E+22,0.830584,,,,/\
Hero4,4,Mila the Hammer Stomper,4.235,2853.33,204,1.475,204,26826.2566,3.15449E+23,0.71639296,,,,/\
Hero5,5,Terra the Land Scorcher,4.6585,1.33E+04,784,2.7,784,103096.9862,1.21231E+24,0.59049,,,,/\
Hero6,6,Inquisireaux the Terrible,5.12435,6.81E+04,3163,3.3,3163,415938.4786,4.89101E+24,0.4644040868,,,,/\
Hero7,7,Charlotte the Special,5.636785,3.84E+05,13358,1.8,13358,1756593.802,2.06557E+25,0.3479278222,,,,/\
Hero8,8,Jordaan Knight of Mini,6.2004635,2.38E+06,59010,2.275,59010,7759889.226,9.12483E+25,0.2478758911,,,,/\
Hero9,9,Jukka Master of Axes,10,2.38E+07,399040,2.7,399040,52474261.93,6.17043E+26,0.1676195504,,,,/\
Hero10,10,Milo and Clonk-Clonk,6,1.43E+08,1533712,1.425,1533712,201685057.2,2.37161E+27,0.1073741824,,,,/\
Hero11,11,Macelord the Ruthless,6.6,9.43E+08,6.13E+06,3.225,6.13E+06,8.06E+08,9.48E+27,0.06501905148,,,,/\
Hero12,12,Gertrude the Goat Rider,7.26,6.84E+09,2.54E+07,3.75,2.54E+07,3.34E+09,3.93E+28,0.03713326247,,,,/\
Hero13,13,Twitterella the Tweeter,7.986,5.47E+10,1.09E+08,1.275,1.09E+08,1.43E+10,1.69E+29,0.01995319085,,,,/\
Hero14,14,Master Hawk Lord of Luft,15,8.20E+11,8.25E+08,2.875,8.25E+08,1.08E+11,1.28E+30,0.01006131972,,,,/\
Hero15,15,Elpha Wielder of Gems,10,8.20E+12,3.89E+09,1.875,3.89E+09,5.12E+11,6.02E+30,0.00474756151,,,,/\
Hero16,16,Poppy Daughter of Ceremony,20,1.64E+14,5.45E+10,1.975,5.45E+10,7.17E+12,8.43E+31,0.003323293057,,,,/\
Hero17,17,Skulptor Protector of Bridges,10,1.64E+15,3.81E+11,2.775,3.81E+11,5.02E+13,5.90E+32,0.00232630514,,,,/\
Hero18,18,Sterling the Enchantor,30,4.92E+16,8.01E+12,3.275,8.01E+12,1.05E+15,1.24E+34,0.001628413598,,,,/\
Hero19,19,Orba the Foreseer,50,2.46E+18,2.80E+14,3.3,2.80E+14,3.69E+16,4.34E+35,0.001139889519,,,,/\
Hero20,20,Remus the Noble Archer,30,7.38E+19,5.89E+15,3.7,5.89E+15,7.74E+17,9.10E+36,0.000797922663,,,,/\
Hero21,21,Mikey the Magician Apprentice,33,2.44E+21,1.36E+17,1.25,1.36E+17,1.79E+19,2.10E+38,0.0005585458641,,,,/\
Hero22,22,Peter Pricker the Prickly Poker,100,2.44E+23,9.52E+18,2.75,9.52E+18,1.25E+21,1.47E+40,0.0003909821049,,,,/\
Hero23,23,Teeny Tom Keeper of the Castle,200,4.87E+25,1.33E+21,2.375,1.33E+21,1.75E+23,2.06E+42,0.0002736874734,,,,/\
Hero24,24,Deznis the Cleanser,400,1.95E+28,3.73E+23,3.675,3.73E+23,4.91E+25,5.77E+44,0.0001915812314,,,,/\
Hero25,25,Hamlette Painter of Skulls,1.10E+03,2.14E+31,2.87E+26,3.125,2.87E+26,3.78E+28,4.44E+47,0.000134106862,,,,/\
Hero26,26,Eistor the Banisher,1.10E+05,2.36E+36,2.21E+31,2.65,2.21E+31,2.91E+33,3.42E+52,0.00009387480338,,,,/\
Hero27,27,Flavius and Oinksbjorn,1.10E+10,2.59E+46,1.70E+41,2.075,1.70E+41,2.24E+43,2.63E+62,0.00006571236236,,,,/\
Hero28,28,Chester the Beast Tamer,1.10E+15,2.85E+61,1.31E+56,2.3,1.31E+56,1.73E+58,2.03E+77,0.00004599865365,,,,/\
Hero29,29,Mohacas the Wind Warrior,1.10E+20,3.14E+81,1.01E+76,1.7,1.01E+76,1.33E+78,1.56E+97,0.00003219905756,,,,/\
Hero30,30,Jaqulin the Unknown,1.20E+30,3.76E+111,8.49E+105,3.25,8.49E+105,1.12E+108,1.31E+127,0.00002253934029,,,,"

	var heroes_temp = heroes.split("/");
	HeroInfo = [];
	for (var x = 0; x < heroes_temp.length; x++) 
	{
		//alert(artifact_temp[x]);
		var temp = heroes_temp[x].split(",");
		//alert(temp[0]);
		var space = temp[2].indexOf(" ");
		var start = temp[2].slice(0, space);
		var end = temp[2].slice(space);
		temp[2] = start + ", " + end;
		HeroInfo.push({name: temp[2], cost: parseFloat(temp[4]), heroID: parseInt(temp[1]), key: temp[0], level: 0, needUpdate: true});
	}
	
	for (var i = 1; i < HeroInfo.length; i++) 
	{
		var tr = HeroInfo[i].targetBox = $("<tr></tr>");
		tr.append($("<td></td>").append(HeroInfo[i].name).attr("id", HeroInfo[i].key+"name"));
		HeroInfo[i].used1 = $("<input></input>").attr("type", "checkbox").attr("id", HeroInfo[i].key+"skill1").attr("title", "ha");
		HeroInfo[i].used2 = $("<input></input>").attr("type", "checkbox").attr("id", HeroInfo[i].key+"skill2").attr("title", "ha");
		HeroInfo[i].used3 = $("<input></input>").attr("type", "checkbox").attr("id", HeroInfo[i].key+"skill3").attr("title", "ha");
		HeroInfo[i].used4 = $("<input></input>").attr("type", "checkbox").attr("id", HeroInfo[i].key+"skill4").attr("title", "ha");
		HeroInfo[i].used5 = $("<input></input>").attr("type", "checkbox").attr("id", HeroInfo[i].key+"skill5").attr("title", "ha");
		HeroInfo[i].used6 = $("<input></input>").attr("type", "checkbox").attr("id", HeroInfo[i].key+"skill6").attr("title", "ha");
		HeroInfo[i].used7 = $("<input></input>").attr("type", "checkbox").attr("id", HeroInfo[i].key+"skill7").attr("title", "ha");
		tr.append($("<td></td>").append(HeroInfo[i].used1).append(HeroInfo[i].used2).append(HeroInfo[i].used3).append(HeroInfo[i].used4).append(HeroInfo[i].used5).append(HeroInfo[i].used6).append(HeroInfo[i].used7));
		if (HeroInfo[i].nextUpgradeCost > 1000000)
		{
			tr.append($("<td></td>").append(HeroInfo[i].nextUpgradeCost.toExponential(2)).attr("id", HeroInfo[i].key+"nextUpgradeCost"));
		}
		else
		{
			tr.append($("<td></td>").append(HeroInfo[i].nextUpgradeCost).attr("id", HeroInfo[i].key+"nextUpgradeCost"));
		}
		tr.append($("<td></td>").append(HeroInfo[i].currentDPS).attr("id", HeroInfo[i].key+"currentDPS"));
		tr.append($("<td></td>").append(HeroInfo[i].nextLevelDPSDiff).attr("id", HeroInfo[i].key+"nextLevelDPSDiff"));
		tr.append($("<td></td>").append($("<input></input>").attr("type", "text").val(0).attr("id", HeroInfo[i].key+"heroLevel")));
		tr.append("\n\n");
		$("#ancienttbl").append(tr);
	}

	 {
		var tr2 = HeroInfo[0].targetBox = $("<tr></tr>");
		tr2.append($("<td></td>").append(HeroInfo[0].name).attr("id", "player0name"));
		tr2.append($("<td></td>").append(HeroInfo[0].nextUpgradeCost).attr("id", "player0nextUpgradeCost"));
		tr2.append($("<td></td>").append(HeroInfo[0].currentDPS).attr("id", "player0currentDPS"));
		tr2.append($("<td></td>").append(HeroInfo[0].nextLevelDPSDiff).attr("id", "player0nextLevelDPSDiff"));
		tr2.append($("<td></td>").append($("<input></input>").attr("type", "text").val(1).attr("id", "player0heroLevel")));
		tr2.append($("<td></td>").append($("<input></input>").attr("type", "text").val(5).attr("id", "player0clicks")));
		tr2.append("\n\n");
		$("#playertbl").append(tr2);
	}
}

function buildSkillBase()
{
	var skills = "1,Hero1,Nature's Presence,1,ThisHeroDamage,0.5,10,6.14E+02,,,,/\
2,Hero1,Lightning Rage,2,ThisHeroDamage,1,25,2.36E+03,,ThisHeroDamage,69,159/\
3,Hero1,Executioner's Breath,3,AllDamage,0.1,50,2.23E+04,,TapDamagePassive,16,/\
4,Hero1,Poison Touch,4,CritDamagePassive,0.1,100,1.99E+06,,TapDamageFromDPS,14,/\
5,Hero1,Hidden Veil,5,ThisHeroDamage,10,200,1.59E+10,,CritDamagePassive,15,/\
6,Hero1,Paralysis,6,AllDamage,0.25,400,1.01E+18,,CritChance,10,/\
7,Hero1,Dynamic Force,7,ThisHeroDamage,100,800,4.09E+33,,AllBossDamage,12,/\
8,Hero2,Superstition,1,TapDamagePassive,0.05,10,2.15E+03,,GoldAll,23,/\
9,Hero2,Ghost Breath,2,ThisHeroDamage,1,25,8.27E+03,,GoldTreasurePassive,13,/\
10,Hero2,Spectral Nova,3,ThisHeroDamage,10,50,7.81E+04,,AllDamage,38,/\
11,Hero2,Brooding Thrill,4,TapDamageFromDPS,0.004,100,6.98E+06,,,,/\
12,Hero2,Guardian's Chant,5,AllDamage,0.1,200,5.57E+10,,,,/\
13,Hero2,Soul Initiative,6,GoldAll,0.1,400,3.54E+18,,,,/\
14,Hero2,Medusa's Strife,7,ThisHeroDamage,100,800,1.43E+34,,,,/\
15,Hero3,Essence of Horn,1,ThisHeroDamage,1.5,10,100,,,,/\
16,Hero3,Command Ritual,2,GoldAll,0.1,25,3.20E+04,,,,/\
17,Hero3,Tribal Vision,3,AllDamage,0.1,50,3.20E+07,,,,/\
18,Hero3,Battle Thirst,4,TapDamageFromDPS,0.004,100,3.20E+10,,,,/\
19,Hero3,Royal Presence,5,GoldTreasurePassive,0.2,200,3.20E+14,,,,/\
20,Hero3,Relentless Force,6,CritChance,0.01,400,3.20E+20,,30,,/\
21,Hero3,Unforgiving,7,AllDamage,0.3,800,3.20E+28,,,,/\
22,Hero4,Stomping Presence,1,ThisHeroDamage,1,10,100,,,,/\
23,Hero4,Hammer Pulse,2,ThisHeroDamage,8,25,3.20E+04,,,,/\
24,Hero4,Psychosis,3,TapDamageFromDPS,0.004,50,3.20E+07,,,,/\
25,Hero4,War Beacon,4,ThisHeroDamage,5,100,3.20E+10,,,,/\
26,Hero4,Hammer Circle,5,CritDamagePassive,0.05,200,3.20E+14,,,,/\
27,Hero4,Battle Fortitude,6,AllDamage,0.2,400,3.20E+20,,,,/\
28,Hero4,Steel Nerves,7,GoldTreasurePassive,0.2,800,3.20E+28,,,,/\
29,Hero5,Land Warrior,1,ThisHeroDamage,3,10,100,,,,/\
30,Hero5,Scythe Master,2,GoldAll,0.1,25,3.20E+04,,,,/\
31,Hero5,Scorched Essence,3,TapDamageFromDPS,0.004,50,3.20E+07,,,,/\
32,Hero5,Winds of Clarity,4,GoldAll,0.15,100,3.20E+10,,,,/\
33,Hero5,Death March,5,GoldTreasurePassive,0.2,200,3.20E+14,,,,/\
34,Hero5,Battle Brawler,6,TapDamagePassive,0.05,400,3.20E+20,,,,/\
35,Hero5,Winds of Calm,7,ThisHeroDamage,100,800,3.20E+28,,,,/\
36,Hero6,Ruthless Pursuit,1,ThisHeroDamage,2,10,100,,,,/\
37,Hero6,Cloud of Justice,2,ThisHeroDamage,7,25,3.20E+04,,,,/\
38,Hero6,Merciless,3,AllDamage,0.1,50,3.20E+07,,,,/\
39,Hero6,Devilish Charmer,4,AllDamage,0.2,100,3.20E+10,,,,/\
40,Hero6,Dungeon Trapper,5,CritDamagePassive,0.05,200,3.20E+14,,,,/\
41,Hero6,Custom Machinery,6,CritChance,0.02,400,3.20E+20,,,,/\
42,Hero6,Methodically Manic,7,ThisHeroDamage,100,800,3.20E+28,,,,/\
43,Hero7,Sphinx Presence,1,ThisHeroDamage,2,10,100,,,,/\
44,Hero7,Panther's Touch,2,AllBossDamage,0.05,25,3.20E+04,,,,/\
45,Hero7,Copper Skin,3,AllBossDamage,0.07,50,3.20E+07,,,,/\
46,Hero7,Special Fighter,4,ThisHeroDamage,6,100,3.20E+10,,,,/\
47,Hero7,Skull Cap,5,TapDamagePassive,0.05,200,3.20E+14,,,,/\
48,Hero7,Master Manipulator,6,GoldTreasurePassive,0.2,400,3.20E+20,,,,/\
49,Hero7,Perpetual Impulsivity,7,AllDamage,0.3,800,3.20E+28,,,,/\
50,Hero8,Arthur's Revenge,1,ThisHeroDamage,2,10,100,,,,/\
51,Hero8,Call of the Relic,2,AllDamage,0.1,25,3.20E+04,,,,/\
52,Hero8,Circle of Atonement,3,TapDamageFromDPS,0.004,50,3.20E+07,,,,/\
53,Hero8,Enchanted Veil,4,GoldAll,0.15,100,3.20E+10,,,,/\
54,Hero8,Traveller,5,GoldTreasurePassive,0.2,200,3.20E+14,,,,/\
55,Hero8,Relentless,6,ThisHeroDamage,19,400,3.20E+20,,,,/\
56,Hero8,The Sword's Path,7,AllDamage,0.2,800,3.20E+28,,,,/\
57,Hero9,Blunt Strength,1,ThisHeroDamage,1.5,10,100,,,,/\
58,Hero9,Viking Slash Force,2,AllBossDamage,0.05,25,3.20E+04,,,,/\
59,Hero9,Rune Enabler,3,AllDamage,0.3,50,3.20E+07,,,,/\
60,Hero9,Bearded Fortitude,4,CritDamagePassive,0.05,100,3.20E+10,,,,/\
61,Hero9,Spirit Vessel,5,ThisHeroDamage,50,200,3.20E+14,,,,/\
62,Hero9,Essence of Valhalla,6,AllDamage,0.25,400,3.20E+20,,,,/\
63,Hero9,Warrior Loyalty,7,ThisHeroDamage,100,800,3.20E+28,,,,/\
64,Hero10,Bolt Block Brigade,1,ThisHeroDamage,1.5,10,100,,,,/\
65,Hero10,Analog Cloud,2,CritChance,0.01,25,3.20E+04,,,,/\
66,Hero10,Strength in Numbers,3,AllBossDamage,0.05,50,3.20E+07,,,,/\
67,Hero10,Tough as Bolts,4,GoldAll,0.15,100,3.20E+10,,,,/\
68,Hero10,Steel Heart,5,GoldTreasurePassive,0.2,200,3.20E+14,,,,/\
69,Hero10,Battle Spirit,6,GoldTreasurePassive,0.25,400,3.20E+20,,,,/\
70,Hero10,Thrill of the Fight,7,AllDamage,0.15,800,3.20E+28,,,,/\
71,Hero11,Blunt Brutality,1,ThisHeroDamage,2,10,100,,,,/\
72,Hero11,Dungeon Loyalty,2,ThisHeroDamage,7.5,25,3.20E+04,,,,/\
73,Hero11,Meteor Wave,3,TapDamagePassive,0.05,50,3.20E+07,,,,/\
74,Hero11,Dreadful Disintegration,4,TapDamageFromDPS,0.004,100,3.20E+10,,,,/\
75,Hero11,Gruesome Ritual,5,GoldAll,0.15,200,3.20E+14,,,,/\
76,Hero11,Sacrifice,6,CritChance,0.01,400,3.20E+20,,,,/\
77,Hero11,Circle of Death,7,ThisHeroDamage,38,800,3.20E+28,,,,/\
78,Hero12,Nature's Revenge,1,ThisHeroDamage,2.5,10,100,,,,/\
79,Hero12,Hydra Force,2,AllDamage,0.1,25,3.20E+04,,,,/\
80,Hero12,Death Flight,3,AllBossDamage,0.05,50,3.20E+07,,,,/\
81,Hero12,Animal Advantage,4,CritDamagePassive,0.05,100,3.20E+10,,,,/\
82,Hero12,Vitality,5,TapDamageFromDPS,0.004,200,3.20E+14,,,,/\
83,Hero12,Charcoal Screen,6,TapDamagePassive,0.05,400,3.20E+20,,,,/\
84,Hero12,Dark Veil,7,GoldAll,0.2,800,3.20E+28,,,,/\
85,Hero13,Silver Rider,1,ThisHeroDamage,1.5,10,100,,,,/\
86,Hero13,Guiding Chant,2,ThisHeroDamage,8.5,25,3.20E+04,,,,/\
87,Hero13,Cloacked Rebel,3,TapDamagePassive,0.05,50,3.20E+07,,,,/\
88,Hero13,Activism,4,AllDamage,0.2,100,3.20E+10,,,,/\
89,Hero13,Beacon of Hope,5,AllDamage,0.3,200,3.20E+14,,,,/\
90,Hero13,Haunting Barrage,6,CritDamagePassive,0.05,400,3.20E+20,,,,/\
91,Hero13,Spirit Harvest,7,ThisHeroDamage,15,800,3.20E+28,,,,/\
92,Hero14,Hawk Clutch,1,ThisHeroDamage,2,10,100,,,,/\
93,Hero14,Wind Speed,2,ThisHeroDamage,8,25,3.20E+04,,,,/\
94,Hero14,Ancient Flight,3,TapDamageFromDPS,0.004,50,3.20E+07,,,,/\
95,Hero14,Aerial Advantage,4,ThisHeroDamage,4,100,3.20E+10,,,,/\
96,Hero14,Winged Commander,5,GoldAll,0.1,200,3.20E+14,,,,/\
97,Hero14,Vision Walk,6,CritDamagePassive,0.1,400,3.20E+20,,,,/\
98,Hero14,Wrath of the Relics,7,GoldAll,0.2,800,3.20E+28,,,,/\
99,Hero15,Emerald Deception,1,ThisHeroDamage,3,10,100,,,,/\
100,Hero15,Demon's Heart,2,AllDamage,0.4,25,3.20E+04,,,,/\
101,Hero15,Helga's Vessel,3,AllBossDamage,0.05,50,3.20E+07,,,,/\
102,Hero15,Jeweler's Eye,4,CritChance,0.02,100,3.20E+10,,,,/\
103,Hero15,Soul Pursuit,5,CritDamagePassive,0.15,200,3.20E+14,,,,/\
104,Hero15,Cloth of the Rock,6,GoldTreasurePassive,0.2,400,3.20E+20,,,,/\
105,Hero15,Brood Handler,7,ThisHeroDamage,100,800,3.20E+28,,,,/\
106,Hero16,Hidden Flag,1,ThisHeroDamage,3.5,10,100,,,,/\
107,Hero16,Numbing Vengeance,2,GoldTreasurePassive,0.25,25,3.20E+04,,,,/\
108,Hero16,Privileged Advantage,3,GoldAll,0.2,50,3.20E+07,,,,/\
109,Hero16,Chameleon,4,AllBossDamage,0.05,100,3.20E+10,,,,/\
110,Hero16,Ubiquitous,5,AllBossDamage,0.07,200,3.20E+14,,,,/\
111,Hero16,Essence of Medicine,6,AllDamage,0.15,400,3.20E+20,,,,/\
112,Hero16,Horrific Eye,7,AllDamage,0.2,800,3.20E+28,,,,/\
113,Hero17,Gem Storm,1,ThisHeroDamage,1.5,10,100,,,,/\
114,Hero17,Rage of the Ancients,2,ThisHeroDamage,9,25,3.20E+04,,,,/\
115,Hero17,Pierced Evasion,3,GoldAll,0.1,50,3.20E+07,,,,/\
116,Hero17,Exalted Chief,4,GoldAll,0.1,100,3.20E+10,,,,/\
117,Hero17,Guardian's Initiative,5,TapDamagePassive,0.1,200,3.20E+14,,,,/\
118,Hero17,Death Unity,6,CritDamagePassive,0.1,400,3.20E+20,,,,/\
119,Hero17,Herleif's Pursuit,7,GoldAll,0.25,800,3.20E+28,,,,/\
120,Hero18,Night Crawler,1,ThisHeroDamage,4,10,100,,,,/\
121,Hero18,Ballistics,2,ThisHeroDamage,5,25,3.20E+04,,,,/\
122,Hero18,Bow Hunt,3,AllBossDamage,0.05,50,3.20E+07,,,,/\
123,Hero18,Decoy Warrior,4,ThisHeroDamage,4.5,100,3.20E+10,,,,/\
124,Hero18,Shadow Presence,5,TapDamagePassive,0.05,200,3.20E+14,,,,/\
125,Hero18,Ancient Rhythm,6,GoldTreasurePassive,0.2,400,3.20E+20,,,,/\
126,Hero18,Gate of Asger,7,AllDamage,0.15,800,3.20E+28,,,,/\
127,Hero19,Future's Eye,1,ThisHeroDamage,2,10,100,,,,/\
128,Hero19,Monkey's Curse,2,ThisHeroDamage,10,25,3.20E+04,,ThisHeroDamage,1,/\
129,Hero19,Astral Prodigy,3,TapDamageFromDPS,0.005,50,3.20E+07,,,,/\
130,Hero19,Glass Illusionist,4,TapDamagePassive,0.05,100,3.20E+10,,,,/\
131,Hero19,Time Blur,5,AllDamage,0.1,200,3.20E+14,,,,/\
132,Hero19,Sub Mind Presence,6,GoldAll,0.1,400,3.20E+20,,,,/\
133,Hero19,Critical Flux,7,AllDamage,0.1,800,3.20E+28,,,,/\
134,Hero20,Arrowed Flight,1,ThisHeroDamage,2.5,10,100,,,,/\
135,Hero20,Bamboo Fire,2,ThisHeroDamage,6,25,3.20E+04,,,,/\
136,Hero20,Acid Brood,3,CritDamagePassive,0.2,50,3.20E+07,,,,/\
137,Hero20,Sharpshooter,4,ThisHeroDamage,4.5,100,3.20E+10,,,,/\
138,Hero20,Temporal Stun,5,TapDamageFromDPS,0.004,200,3.20E+14,,,,/\
139,Hero20,Family Honor,6,TapDamagePassive,0.1,400,3.20E+20,,,,/\
140,Hero20,Island of Solidarity,7,GoldAll,0.1,800,3.20E+28,,,,/\
141,Hero21,Plant Blindness,1,ThisHeroDamage,2,10,100,,,,/\
142,Hero21,Pegasus Clash,2,TapDamagePassive,0.05,25,3.20E+04,,,,/\
143,Hero21,Youthful Force,3,AllDamage,0.3,50,3.20E+07,,,,/\
144,Hero21,Divine Spell,4,CritChance,0.02,100,3.20E+10,,,,/\
145,Hero21,Evasion,5,AllDamage,0.1,200,3.20E+14,,,,/\
146,Hero21,Soul Momentum,6,GoldTreasurePassive,0.2,400,3.20E+20,,,,/\
147,Hero21,Magical Light,7,ThisHeroDamage,100,800,3.20E+28,,,,/\
148,Hero22,Hot Poker Path,1,ThisHeroDamage,2.5,10,100,,,,/\
149,Hero22,Crimson Strike Ritual,2,ThisHeroDamage,7.5,25,3.20E+04,,,,/\
150,Hero22,Brawling Animosity,3,AllDamage,0.1,50,3.20E+07,,,,/\
151,Hero22,Methodical Madness,4,ThisHeroDamage,5,100,3.20E+10,,,,/\
152,Hero22,Crucible Heel,5,AllDamage,0.2,200,3.20E+14,,,,/\
153,Hero22,Seventh Sense,6,CritDamagePassive,0.3,400,3.20E+20,,,,/\
154,Hero22,Galvanizing Audacity,7,AllDamage,0.2,800,3.20E+28,,,,/\
155,Hero23,Winged Blindness,1,ThisHeroDamage,2,10,100,,,,/\
156,Hero23,Barbed Wrath,2,ThisHeroDamage,8,25,3.20E+04,,,,/\
157,Hero23,Ancient Resolve,3,TapDamageFromDPS,0.004,50,3.20E+07,,,,/\
158,Hero23,Rhythm of the Chant,4,CritDamagePassive,0.2,100,3.20E+10,,,,/\
159,Hero23,Arcane Dominance,5,TapDamagePassive,0.1,200,3.20E+14,,,,/\
160,Hero23,Temporal Anomaly,6,CritChance,0.02,400,3.20E+20,,,,/\
161,Hero23,Unwavering Illusion,7,ThisHeroDamage,100,800,3.20E+28,,,,/\
162,Hero24,Perfectionist,1,ThisHeroDamage,2,10,100,,,,/\
163,Hero24,Guillotine Force,2,ThisHeroDamage,5,25,3.20E+04,,,,/\
164,Hero24,Predator,3,ThisHeroDamage,12,50,3.20E+07,,,,/\
165,Hero24,Iron Collector,4,GoldAll,0.15,100,3.20E+10,,,,/\
166,Hero24,Plunge of Doom,5,GoldTreasurePassive,0.2,200,3.20E+14,,,,/\
167,Hero24,Exalted Specimen,6,ThisHeroDamage,90,400,3.20E+20,,,,/\
168,Hero24,Stunned Phoenix,7,AllDamage,0.15,800,3.20E+28,,,,/\
169,Hero25,Skulls of the Citadel,1,TapDamagePassive,2.2,10,100,,,,/\
170,Hero25,Painter's Whim,2,TapDamagePassive,0.05,25,3.20E+04,,,,/\
171,Hero25,Tortured Soul,3,TapDamageFromDPS,0.004,50,3.20E+07,,,,/\
172,Hero25,Divine Endurance,4,AllDamage,0.1,100,3.20E+10,,,,/\
173,Hero25,Defender of Halvar,5,GoldAll,0.15,200,3.20E+14,,,,/\
174,Hero25,Ambush Strike Force,6,CritChance,0.02,400,3.20E+20,,,,/\
175,Hero25,Astral Exposure,7,ThisHeroDamage,150,800,3.20E+28,,,,/\
176,Hero26,Ice Grasp,1,ThisHeroDamage,3.5,10,100,,,,/\
177,Hero26,Glacier Breath,2,ThisHeroDamage,6.5,25,3.20E+04,,,,/\
178,Hero26,Towering Wrath,3,TapDamageFromDPS,0.004,25,3.20E+07,,,,/\
179,Hero26,Cold Blooded,4,AllBossDamage,0.05,50,3.20E+10,,,,/\
180,Hero26,Fallen Divinity,5,AllDamage,0.1,200,3.20E+14,,,,/\
181,Hero26,Arctic Fortitude,6,AllBossDamage,0.05,400,3.20E+20,,,,/\
182,Hero26,Power Blur,7,GoldAll,0.12,800,3.20E+28,,,,/\
183,Hero27,Traveller's Charm,1,ThisHeroDamage,3,10,100,,,,/\
184,Hero27,The Farm's Path,2,ThisHeroDamage,7,25,3.20E+04,,,,/\
185,Hero27,Animal Sense,3,AllDamage,0.1,50,3.20E+07,,,,/\
186,Hero27,Loyal Collaboration,4,AllBossDamage,0.1,100,3.20E+10,,,,/\
187,Hero27,Peaceful Resonance,5,CritChance,0.02,200,3.20E+14,,,,/\
188,Hero27,Evasive Intelligence,6,CritDamagePassive,0.3,400,3.20E+20,,,,/\
189,Hero27,Earthen Light,7,GoldTreasurePassive,0.2,800,3.20E+28,,,,/\
190,Hero28,Lion's Claw,1,ThisHeroDamage,3.5,10,100,,,,/\
191,Hero28,Eagle Wing Storm,2,AllDamage,0.01,25,3.20E+04,,,,/\
192,Hero28,Bone Cross,3,ThisHeroDamage,4,50,3.20E+07,,,,/\
193,Hero28,Cracked Thunder,4,ThisHeroDamage,6,100,3.20E+10,,,,/\
194,Hero28,Outer Sight,5,CritDamagePassive,0.2,200,3.20E+14,,,,/\
195,Hero28,Awareness,6,CritChance,0.03,400,3.20E+20,,,,/\
196,Hero28,Inspiring Rage,7,AllDamage,0.15,800,3.20E+28,,,,/\
197,Hero29,Spirit Summoner,1,ThisHeroDamage,3.3,10,100,,,,/\
198,Hero29,Flight Seizer,2,ThisHeroDamage,5.5,25,3.20E+04,,,,/\
199,Hero29,Wind Beacon,3,GoldAll,0.1,50,3.20E+07,,,,/\
200,Hero29,Resonance Chant,4,TapDamagePassive,0.1,100,3.20E+10,,,,/\
201,Hero29,Heart Resolve,5,GoldAll,0.2,200,3.20E+14,,,,/\
202,Hero29,Omen of Animosity,6,AllDamage,0.1,400,3.20E+20,,,,/\
203,Hero29,Beast Flight Mastery,7,GoldAll,0.3,800,3.20E+28,,,,/\
204,Hero30,Witch's Brew Broth,1,CritDamagePassive,0.4,10,100,,,,/\
205,Hero30,Winged Flight Sense,2,TapDamagePassive,0.2,25,3.20E+04,,,,/\
206,Hero30,Medusa's Illusion,3,TapDamageFromDPS,0.01,50,3.20E+07,,,,/\
207,Hero30,Universal Flux,4,GoldAll,0.6,100,3.20E+10,,,,/\
208,Hero30,Arcane Path,5,AllDamage,0.2,200,3.20E+14,,,,/\
209,Hero30,Prodigal Blur,6,AllDamage,0.3,400,3.20E+20,,,,/\
210,Hero30,Enchanted Soul,7,AllDamage,0.4,800,3.20E+28,,,,"

	var skills_temp = skills.split("/");
	skillsInfo = [];
	for (var a = 0; a < skills_temp.length; a++) 
	{
		//alert(artifact_temp[x]);
		var temp = skills_temp[a].split(",");
		//alert(temp[0]);
		skillsInfo.push({skillID: temp[0], owner: temp[1], name: temp[2], bonusType: temp[4], magnitude: parseFloat(temp[5]), reqLevel: parseInt(temp[6]), cost: parseFloat(temp[7]), tableID: "#"+(temp[1])+"skill"+(temp[3]), isActive: false});
	}
	var index = 0;
	for (var x = 1; x < HeroInfo.length; x++)
	{
		for (var y = 0; y < 7; y++)
		{	
			if (typeof HeroInfo[x].skills == "undefined") { HeroInfo[x].skills = []; }
			HeroInfo[x].skills.push(skillsInfo[index]);
			HeroInfo[x].skills[y].isActive = false;
			$("#"+(HeroInfo[x].key)+"skill"+(y+1)).prop("title", 
																HeroInfo[x].skills[y].name + "\n" + 
																HeroInfo[x].skills[y].bonusType + "\n" + 
																HeroInfo[x].skills[y].magnitude + "\n"
																);
			//alert("test");
			index++;
		}
	}
}

function updateHero(hero)
{
	//alert(hero.level + " " + parseInt($( "#Hero"+(hero.heroID)+"heroLevel" ).val()));
	if (hero.level != parseInt($( "#Hero"+(hero.heroID)+"heroLevel" ).val()))
	{
		if (isNaN(parseInt($( "#Hero"+(hero.heroID)+"heroLevel" ).val()))) {$( "#Hero"+(hero.heroID)+"heroLevel" ).val(0);}
		hero.needUpdate = true;
	}
	
	if (hero.needUpdate)
	{
		//alert("test")
		setHeroLevel(hero, parseInt($( "#"+(hero.key)+"heroLevel" ).val()));
		hero.currentDPS = GetDPSByLevel(hero, hero.level);
		$("#output").append("Updating " + hero.name + " " + "" +"<BR>");
		hero.nextLevelDPSDiff = GetDPSByLevel(hero, hero.level + 1) - hero.currentDPS;
		hero.nextUpgradeCost = GetUpgradeCostByLevel(hero.level, hero.cost)
		$("#Hero"+(hero.heroID)+"currentDPS").html((hero.currentDPS > 1000) ? numberFormat(hero.currentDPS) : Math.floor(hero.currentDPS));
		$("#Hero"+(hero.heroID)+"nextLevelDPSDiff").html("+ " + ((hero.nextLevelDPSDiff > 1000) ? numberFormat(hero.nextLevelDPSDiff) : Math.floor(hero.nextLevelDPSDiff)));
		$("#Hero"+(hero.heroID)+"nextUpgradeCost").html(numberFormat(hero.nextUpgradeCost));
		hero.needUpdate = false;
	}
}

function setHeroLevel(hero, level)
{
	hero.level = level;
	for (var a = 0; a < 7; a++)
		{	
			hero.skills[a].isActive = ((hero.skills[a].reqLevel < level && level < 1001) || level > hero.skills[a].reqLevel + 1000) ? true : ((hero.skills[a].reqLevel == level) ? $(hero.skills[a].tableID).is(":checked") : false);
			$(hero.skills[a].tableID).prop("checked", hero.skills[a].isActive);
		}
}

function GetDPSByLevel(hero, level)
{
    var num3 = 0.0;
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
      num4 = (((GetBaseUpgradeCostByLevel(level - 1, hero.cost) * (Math.pow(heroUpgradeBase, (level - (heroEvolveLevel - 1))) - 1.0)) / ((heroUpgradeBase - 1.0))) * num3) * dMGScaleDown;
    }
    else
    {
      num4 = (((GetBaseUpgradeCostByLevel(level - 1, hero.cost) * (Math.pow(heroUpgradeBase, level) - 1.0)) / ((heroUpgradeBase - 1.0))) * num3) * dMGScaleDown;
    }
	//if (hero.heroID == 1) { alert(hero.currentPassiveThisHeroDamage); }
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
    var a = num //* (1.0 + ArtifactInfo[23].currentBonus);
    return Math.ceil(a);
}

function GetBaseUpgradeCostByLevel(iLevel, purchaseCost)
{
    var num = 0.0;
    num = GetHeroBaseCost(iLevel, purchaseCost, iLevel) * Math.pow(heroUpgradeBase, iLevel);
    return Math.ceil(num);
}

function currentPassiveThisHeroDamage(hero)
{
	var num = 0.0;
	for (var x = 0; x < 7; x++)
	{	
		if (hero.skills[x].isActive && hero.skills[x].bonusType=="ThisHeroDamage") 
		{ 	
			num = num + parseFloat(hero.skills[x].magnitude);
		}
		//if (hero.heroID == 1) { alert(hero.skills[x].isActive); }
	}
	return num;
}

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

function UpdateTables()
{
	$("#output").html("");
	for (var x = 1; x < HeroInfo.length; x++)
	{	
		updateHero(HeroInfo[x]);
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
    if (unit == undefined) return temp.toExponential(2);
    var toround = (highnumber == true) ? (p_atomepersecond == true) ? 100 : 100 : 10;
    var res = Math.round(number * toround) / toround;
    return [res.toLocaleString().replace(",", ".") + '' + unit];
}

