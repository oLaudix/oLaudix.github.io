var MonsterNames = ["Snail"]
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