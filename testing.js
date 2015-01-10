function testing()
{
	var text = "";
	for (var i = 0; i < 30; i++)
	{	
		hero = HeroInfo[heroList[i]];
		hero.earnedGoldIncrease = GetOfflineGoldByTime(1000, currentAllHeroDPS + hero.nextLevelDPSDiff) - GetOfflineGoldByTime(1000, currentAllHeroDPS);
		hero.efficiency = (hero.nextUpgradeCost/hero.earnedGoldIncrease);
		//text += hero.name + " - " + hero.earnedGoldIncrease + "g - " + "s<br>";
		//$("#output").append(hero.efficiency + "<br>");
	}
	
}