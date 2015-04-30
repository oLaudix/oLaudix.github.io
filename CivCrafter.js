var civs = [[19, "Thorp"], [59, "Hamlet"], [199, "Village"], [1999, "Suburb"], [4999, "Town"], [9999, "City"], [19999, "Capital"], [49999, "County"], [99999, "State",], [199999, "Nation"], [499999, "Realm"], [1000000, "Empire"]]

function RandomIntRange(min,max)
{
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function RandomFloatRange(min,max)
{
	return Math.random() * (max - min) + min;
}

function randomReal(xmin,xmax) { ;}

function CalcCiv(iterationss,civ)
{
    var num11 = 0
    var pop = civ[0]
    var num2 = Math.pow(Math.ceil((pop*0.04)*1)+10,1)
    var totalmin = 999999999999999
    var totalmax = 0
    var num10 = RandomIntRange(0,100)
    var num6 = RandomFloatRange(0.9,1.1)
    var resources = 0
    var resourcesmin = 99999999999999
    var resourcesmax = 0
    var averageresources = 0
    //--------------------
    var soldiers = 0
    var soldiersmin = 999999999999999
    var soldiersmax = 0
    var averagesoldiers = 0
    //--------------------
    var archers = 0
    var archersmin = 999999999999999
    var archersmax = 0
    var averagearchers = 0
    //--------------------
    var knights = 0
    var knightsmin = 999999999999999
    var knightsmax = 0
    var averageknights = 0
    //--------------------
    var dragons = 0
    var dragonsmin = 999999999999999
    var dragonsmax = 0
    var averagedragons = 0
    //--------------------
    var minpower = 99999999999999
    var maxpower = 0
    var minarmy = [0,0,0,0]
    var maxarmy = [0,0,0,0]
    var averagepower = 0
    var power = 0
    //--------------------
    var iterations = iterationss
    var randomiteration = 0
    var randomiteration = RandomIntRange(0,iterations)

	for (var a = 0; a < iterations; a++)
	{
        var temp = a*100/iterations
        //--------------------
        soldiers = 0
        archers = 0
        knights = 0
        dragons = 0
        power = 0
        averagepower = 0
        resources = 0
        num8 = RandomIntRange(3,10)
        //num8 = 4
        i = 0;
        //-----petla
        //for i in range(0,num8):
        while (i < num8)
		{
            num10 = RandomIntRange(0,100)
            //num10 = 85
            num11 = 0
            if (num10 < 50)
			{
                num11 = Math.floor((num2 / num8) * RandomFloatRange(0.9,1.1))
                if (num11 < 1) 
				{ 
					num11 = 1 
				}
                soldiers = soldiers + num11
                averagesoldiers = averagesoldiers + num11
			}
            else if (num10 < 80)
			{
                num11 = Math.floor((num2 / num8 / 1.5) * RandomFloatRange(0.9,1.1))
                if (num11 < 1) 
				{ 
					i = i - 1 
				}
                else
				{
                    archers = archers + num11
                    averagearchers = averagearchers + num11
				}
			}
            else if (num10 < 95)
			{
                num11 = Math.floor((num2 / num8 / 3) * RandomFloatRange(0.9,1.1))
                if (num11 < 1)
				{
                    i = i - 1
				}
                else
				{
                    knights = knights + num11
                    averageknights = averageknights + num11
				}
			}
            else
			{
                num11 = Math.floor((num2 / num8 / 500) * RandomFloatRange(0.9,1.1))
                if (num11 < 1)
				{
                    i = i - 1
				}
                else
				{
                    dragons = dragons + num11
                    averagedragons = averagedragons + num11
				}
			}
            i = i + 1;
		}
        //-----petla
        power = soldiers * 0.06 + archers * 0.08 + knights * 0.22 + dragons * 50
        averagepower = averagepower + power
        resources = Math.round(pop * Math.random())
        averageresources = averageresources + resources

        if (resources < resourcesmin)
		{
            resourcesmin = resources
		}
        if (resources > resourcesmax)
		{
            resourcesmax = resources
		}

        if (power < minpower)
		{
            minarmy[0] = soldiers
            minarmy[1] = archers
            minarmy[2] = knights
            minarmy[3] = dragons
            minpower = power
		}
        if (power > maxpower)
		{
            maxpower = power
            maxarmy[0] = soldiers
            maxarmy[1] = archers
            maxarmy[2] = knights
            maxarmy[3] = dragons
		}

        if (soldiers < soldiersmin)
		{
            soldiersmin = soldiers
		}
		
        if (soldiers > soldiersmax)
		{
            soldiersmax = soldiers
		}

        if (archers < archersmin)
		{
            archersmin = archers
		}
		
        if (archers > archersmax)
		{
            archersmax = archers
		}

        if (knights < knightsmin) 
		{
            knightsmin = knights 
		}
		
        if (knights > knightsmax)
		{
            knightsmax = knights
		}

        if (dragons < dragonsmin)
		{
            dragonsmin = dragons
		}
        if (dragons > dragonsmax)
		{
            dragonsmax = dragons
		}

        if (soldiers + archers + dragons + knights < totalmin)
		{
            totalmin = soldiers + archers + dragons + knights
		}
        if (soldiers + archers + dragons + knights > totalmax)
		{
            totalmax = soldiers + archers + dragons + knights
		}
        /*if a == randomiteration:
            print(".....................................")
            print("Soldiers: {}".format(soldiers))
            print("Archers: {}".format(archers))
            print("Knights: {}".format(knights))
            print("Dragons: {}".format(dragons))
            print(".....................................")*/
        //print("{}%".format(a*100/iterations))
	}
	var txt = ""
	txt += civ[1]  + "<br>"
	txt += "====================================="  + "<br>"
	txt += "Minimum Soldiers: " + soldiersmin + "<br>"
	txt += "Maximum Soldiers: " + soldiersmax + "<br>"
	txt += "Average Soldiers: " + averagesoldiers/iterations + "<br>"
    txt += "-------------------------------------" + "<br>"
    txt += "Minimum Archers: " + archersmin + "<br>"
    txt += "Maximum Archers: " + archersmax + "<br>"
    txt += "Average Archers: " + averagearchers/iterations + "<br>"
    txt += "-------------------------------------" + "<br>"
    txt += "Minimum Knights: " + knightsmin + "<br>"
    txt += "Maximum Knights: " + knightsmax + "<br>"
    txt += "Average Knights: " + averageknights/iterations + "<br>"
    txt += "-------------------------------------" + "<br>"
    txt += "Minimum Dragons: " + dragonsmin + "<br>"
    txt += "Maximum Dragons: " + dragonsmax + "<br>"
    txt += "Average Dragons: " + averagedragons/iterations + "<br>"
    txt += "-------------------------------------" + "<br>"
    txt += "Minimum Army Power: " + minpower + "<br>"
    txt += "Maximum Army Power: " + maxpower + "<br>"
    txt += "Average Army Power: " + averagepower + "<br>"
    txt += "Weakest Army: " + (minarmy[0]) + " soldiers, " + (minarmy[1]) + " archers, " + (minarmy[2]) + " knights, " + (minarmy[3]) + " dragons" + "<br>"
    txt += "Strongest Army: " + (maxarmy[0]) + " soldiers, " + (maxarmy[1]) + " archers, " + (maxarmy[2]) + " knights, " + (maxarmy[3]) + " dragons" + "<br>"
    txt += "Minimum Soldiers to defeat average Enemy: " + Math.ceil(averagepower/0.06) + "<br>"
    txt += "Minimum Archer to defeat average Enemy: " + Math.ceil(averagepower/0.08) + "<br>"
    txt += "Minimum Knights to defeat average Enemy: " + Math.ceil(averagepower/0.22) + "<br>"
    txt += "-------------------------------------" + "<br>"
    txt += "Minimum Resources: " + resourcesmin + "<br>"
    txt += "Maximum Resources: " + resourcesmax + "<br>"
    txt += "Average Resources: " + averageresources/iterations + "<br>"
    txt += "=====================================" + "<br>"
    //txt += "<br>"
	return txt
}

function clearCiv(civ)
{
	var txt = ""
	txt += civ[1]  + "<br>"
	txt += "====================================="  + "<br>"
	txt += "Minimum Soldiers: " + 0 + "<br>"
	txt += "Maximum Soldiers: " + 0 + "<br>"
	txt += "Average Soldiers: " + 0 + "<br>"
    txt += "-------------------------------------" + "<br>"
    txt += "Minimum Archers: " + 0 + "<br>"
    txt += "Maximum Archers: " + 0 + "<br>"
    txt += "Average Archers: " + 0 + "<br>"
    txt += "-------------------------------------" + "<br>"
    txt += "Minimum Knights: " + 0 + "<br>"
    txt += "Maximum Knights: " + 0 + "<br>"
    txt += "Average Knights: " + 0 + "<br>"
    txt += "-------------------------------------" + "<br>"
    txt += "Minimum Dragons: " + 0 + "<br>"
    txt += "Maximum Dragons: " + 0 + "<br>"
    txt += "Average Dragons: " + 0 + "<br>"
    txt += "-------------------------------------" + "<br>"
    txt += "Minimum Army Power: " + 0 + "<br>"
    txt += "Maximum Army Power: " + 0 + "<br>"
    txt += "Average Army Power: " + 0 + "<br>"
    txt += "Weakest Army: " + 0 + " soldiers, " + 0 + " archers, " + 0 + " knights, " + 0 + " dragons" + "<br>"
    txt += "Strongest Army: " + 0 + " soldiers, " + 0 + " archers, " + 0 + " knights, " + 0 + " dragons" + "<br>"
    txt += "Minimum Soldiers to defeat average Enemy: " + Math.ceil(0/0.06) + "<br>"
    txt += "Minimum Archer to defeat average Enemy: " + Math.ceil(0/0.08) + "<br>"
    txt += "Minimum Knights to defeat average Enemy: " + Math.ceil(0/0.22) + "<br>"
    txt += "-------------------------------------" + "<br>"
    txt += "Minimum Resources: " + 0 + "<br>"
    txt += "Maximum Resources: " + 0 + "<br>"
    txt += "Average Resources: " + 0 + "<br>"
    txt += "=====================================" + "<br>"
	return txt
}

//for b in range(len(civs)):

//print(num2)


