
<!DOCTYPE html>
<html><head>
  <meta http-equiv="content-type" content="text/html; charset=UTF-8">
  <title>Clicker Heroes Calculator</title>
  
  <script type="text/javascript" src="CH_files/jquery-1.js"></script>
  <link rel="stylesheet" type="text/css" href="CH_files/result-light.css">
  <script type="text/javascript" src="CH_files/md5.js"></script>
  <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css">
  
<script type="text/javascript">//<![CDATA[ 
$(window).load(function(){
const UNITS = "KMBTqQsSONdUD!@#$%^&*"; //[]{};\':\"<>?/\\|~`_=-+";
function Format(num) {
    var org = num;
    if (num >= Math.pow(10, 5 + 3 * UNITS.length)) {
        return org.toExponential(3).replace("+", "");
    }
    var p = 0;
    while (num >= 100000) {
        num /= 1000;
        p++;
    }
    var str = Math.floor(num).toLocaleString()
    if (p > UNITS.length) {
        return org.toExponential(3).replace("+", "");
    }
    if (p) str += UNITS[p - 1];
    return str;
}
var Heroes = [{
    name: "Tree Beast",
    cost: 50,
    damage: 5 * 20,
    level: 100
}, {
    name: "Ivan, the Drunken Brawler",
    cost: 250,
    damage: 22 * 20,
    level: 125
}, {
    name: "Brittany, the Beach Princess",
    cost: 1000,
    damage: 74 * 20,
    level: 75
}, {
    name: "The Wandering Fisherman",
    cost: 4000,
    damage: 245 * 8,
    level: 100
}, {
    name: "Betty Clicker",
    cost: 20000,
    damage: 976,
    level: 100
}, {
    name: "The Masked Samurai",
    cost: 100e3,
    damage: 3725 * 20,
    level: 75
}, {
    name: "Leon",
    cost: 400e3,
    damage: 10859 * 8,
    level: 75
}, {
    name: "The Great Forest Seer",
    cost: 2500e3,
    damage: 47143 * 20,
    level: 75
}, {
    name: "Alexa, the Assassin",
    cost: 15000e3,
    damage: 186e3 * 5.0625,
    level: 100
}, {
    name: "Natalia, Ice Apprentice",
    cost: 100e6,
    damage: 782e3 * 20,
    level: 75
}, {
    name: "Mercedes, Duchess of Blades",
    cost: 800e6,
    damage: 3721e3 * 20,
    level: 100
}, {
    name: "Bobby, Bounty Hunter",
    cost: 6500e6,
    damage: 17010e3 * 20,
    level: 100
}, {
    name: "Broyle Lindoven, Fire Mage",
    cost: 50e9,
    damage: 69480e3 * 10,
    level: 100
}, {
    name: "Sir George II, King's Guard",
    cost: 450e9,
    damage: 460e6 * 20,
    level: 100
}, {
    name: "King Midas",
    cost: 4e12,
    damage: 3017e6,
    level: 125
}, {
    name: "Referi Jerator, Ice Wizard",
    cost: 36e12,
    damage: 20009e6 * 20,
    level: 125
}, {
    name: "Abaddon",
    cost: 320e12,
    damage: 131e9 * 11.390625,
    level: 75
}, {
    name: "Ma Zhu",
    cost: 2.7e15,
    damage: 814e9 * 20,
    level: 75
}, {
    name: "Amenhotep",
    cost: 24e15,
    damage: 5335e9 * 2,
    level: 50
}, {
    name: "Beastlord",
    cost: 300e15,
    damage: 49143e9 * 8,
    level: 100
}, {
    name: "Athena, Goddess of War",
    cost: 9e18,
    damage: 1086e12 * 16,
    level: 100
}, {
    name: "Aphrodite, Goddess of Love",
    cost: 3.5e20,
    damage: 31124e12 * 16,
    level: 125
}, {
    name: "Shinatobe, Wind Deity",
    cost: 1.4e22,
    damage: 917e15 * 8,
    level: 100
}, {
    name: "Grant, the General",
    cost: 4.19999999999999e24,
    damage: 202e18 * 4,
    level: 75
}, {
    name: "Frostleaf",
    cost: 2.1e27,
    damage: 74698e18 * 4,
    level: 75
}, {
    name: "Dread Knight",
    cost: 1.000e40,
    damage: 1.25768E+32 * 1,
    level: 75,
    basedamage: 1.25768E+32
}, {
    name: "Atlas",
    cost: 1.000e55,
    damage: 9.25253E+44 * 1,
    level: 75,
    basedamage: 9.25253E+44
}, {
    name: "Terra",
    cost: 1.000e70,
    damage: 6.8069E+57 * 1,
    level: 75,
    basedamage: 6.8069E+57
}, {
    name: "Phthalo",
    cost: 1.000e85,
    damage: 5.0077E+70 * 1,
    level: 75,
    basedamage: 5.0077E+70
}, {
    name: "Orntchya Gladeye",
    cost: 1.000e100,
    damage: 3.68407E+83 * 1,
    level: 75,
    basedamage: 3.68407E+83
}, {
    name: "Lilin",
    cost: 1.000e115,
    damage: 2.71029E+96 * 1,
    level: 75,
    basedamage: 2.71029E+96
}, {
    name: "Cadmia",
    cost: 1.000e130,
    damage: 1.9939E+109 * 1,
    level: 75,
    basedamage: 1.9939E+109
}, {
    name: "Alabaster",
    cost: 1.000e145,
    damage: 1.4669E+122 * 1,
    level: 75,
    basedamage: 1.4669E+122
}, {
    name: "Astraea",
    cost: 1.000e160,
    damage: 1.0792E+135 * 1,
    level: 75,
    basedamage: 1.0792E+135
}, ];
var DogcogLevel = null;
var ArgaivLevel = null;
for (var i = 0; i < 20; i++) {
    Heroes[i].id = i;
    var tr = $("<tr></tr>");
    tr.append($("<td></td>").text(Heroes[i].name));
    Heroes[i].gilded = $("<input></input>").attr("type", "text").val("0").attr("tabindex", i * 2 + 4);
    Heroes[i].level = $("<input></input>").attr("type", "text").val(Heroes[i].level).attr("tabindex", i * 2 + 5);
    tr.append($("<td></td>").append(Heroes[i].gilded)).append($("<td></td>").append(Heroes[i].level));
    var j = i + 20;
    if (j < Heroes.length) {
        Heroes[j].id = j;
        tr.append($("<td></td>").text(Heroes[j].name));
        Heroes[j].gilded = $("<input></input>").attr("type", "text").val("0").attr("tabindex", j * 2 + 4);
        Heroes[j].level = $("<input></input>").attr("type", "text").val(Heroes[j].level).attr("tabindex", j * 2 + 5);
        tr.append($("<td></td>").append(Heroes[j].gilded)).append($("<td></td>").append(Heroes[j].level));
        if (j >= 25) {
            var dmg = $("<input></input>").attr("type", "text").val("");
            dmg.attr("id", j).val("1");
            tr.append($("<td></td>").append(dmg));
        } else {
            tr.append($("<td></td>"));
        }
    } else if (j == Heroes.length) {
        tr.append($("<td></td>")).append($("<td></td>")).append($("<td></td>")).append($("<td></td>"));
    } else if (j == Heroes.length + 1) {
        tr.append($("<td></td>").text("Dogcog, Ancient of Thrift"));
        DogcogLevel = $("<input></input>").attr("type", "text").val(0).attr("tabindex", 54);
        tr.append($("<td></td>")).append($("<td></td>").append(DogcogLevel)).append($("<td></td>"));
    } else if (j == Heroes.length + 2) {
        tr.append($("<td></td>").text("Argaiv, Ancient of Enhancement"));
        ArgaivLevel = $("<input></input>").attr("type", "text").val(0).attr("tabindex", 55);
        tr.append($("<td></td>")).append($("<td></td>").append(ArgaivLevel)).append($("<td></td>"));
    }
    $("#herotbl").append(tr);
}
const ANTI_CHEAT_CODE = "Fe12NAfA3R6z4k0z";
const SALT = "af0ik392jrmt0nsfdghy0";

window.Import = function Import() {
    var txt = $("#savedata").val();
    if (txt.search(ANTI_CHEAT_CODE) != -1) {
        var result = txt.split(ANTI_CHEAT_CODE);
        txt = "";
        for (var i = 0; i < result[0].length; i += 2) {
            txt += result[0][i];
        }
        if (CryptoJS.MD5(txt + SALT) != result[1]) {
            alert("Bad hash");
            return;
        }
    }
    var data = $.parseJSON(atob(txt));
    var heroes = data.heroCollection.heroes;
    for (var k in heroes) {
        var id = parseInt(k);
        if (id < 2 || id > 35) continue;
        Heroes[id - 2].level.val(heroes[k].level);
        Heroes[id - 2].gilded.val(heroes[k].epicLevel);
    }
    if (data.ancients.ancients["11"]) {
        DogcogLevel.val(data.ancients.ancients["11"].level);
    } else {
        DogcogLevel.val(0);
    }
    if (data.ancients.ancients["28"]) {
        ArgaivLevel.val(data.ancients.ancients["28"].level);
    } else {
        ArgaivLevel.val(0);
    }
    if (data.gold) {
        $("#skipgold").val(data.gold);
    }
    Compute();
}

function Damage(hero, lvl) {
    var x10 = Math.min(Math.floor(lvl / 1000), 3);
    var x4 = Math.min(Math.max(Math.floor((lvl - 175) / 25), 0) - x10, 154);
    return hero.damage * (1 + (0.5 + 0.02 * ArgaivLevel.val()) * parseInt(hero.gilded.val())) * lvl * Math.pow(4, x4) * Math.pow(10, x10);
}

function Cost(hero, from, to) {
    return hero.cost * Math.pow(1.07, from) * (Math.pow(1.07, to - from) - 1) / 0.07 * (1 - 0.02 * Math.min(25, parseInt(DogcogLevel.val())));
}

function HeroInfo(hero, level, mined) {
    var res = null;
    var curdmg = Damage(hero, level);
    for (var i = level + 1; i < level + 250; i++) {
        var ed = Damage(hero, i) - curdmg;
        if (ed < mined) continue;
        var ec = Cost(hero, level, i);
        if (!res || ed / ec > res.ratio) {
            res = {
                hero: hero,
                level: i,
                ratio: ed / ec,
                cost: ec
            };
        }
    }
    for (var i = Math.floor((level + 250) / 25) * 25; i <= 4100; i += 25) {
        var ed = Damage(hero, i) - curdmg;
        if (ed < mined) continue;
        var ec = Cost(hero, level, i);
        if (!res || ed / ec > res.ratio) {
            res = {
                hero: hero,
                level: i,
                ratio: ed / ec,
                cost: ec
            };
        }
    }
    return res;
}

function ParseNum(val) {
    val = val.replace(",", "");
    var num = parseFloat(val);
    if (isNaN(num)) return null;
    if (val.length == 0) return num;
    var index = UNITS.indexOf(val[val.length - 1]);
    if (index >= 0) num = num * Math.pow(1000, index + 1);
    return num;
}

window.Compute = function Compute() {
    var skip = ParseNum($("#skipgold").val());
    $("#skipgold").val("");

    var curinfo = [];
    var levels = [];
    var total = 0;
    for (var i = 0; i < Heroes.length; i++) {
        if (i >= 25) {
            var multiplier = $("#" + i).val();
            Heroes[i].damage = Heroes[i].basedamage * multiplier
        }
        levels.push(parseInt(Heroes[i].level.val()));
        total += Damage(Heroes[i], levels[i]);
    }
    for (var i = 0; i < Heroes.length; i++) {
        curinfo.push(HeroInfo(Heroes[i], levels[i], total * 0.01));
    }
    var output = [];
    var initial = total;
    var maxcombine = -1;
    for (var i = 0; i < 250; i++) {
        var best = -1;
        for (var j = 0; j < curinfo.length; j++) {
            if (curinfo[j] && (best < 0 || curinfo[j].ratio > curinfo[best].ratio)) {
                best = j;
            }
        }
        var delta = Damage(curinfo[best].hero, curinfo[best].level) - Damage(curinfo[best].hero, levels[best]);
        if (delta > 0.01 * total) {
            var combine = output.length - 1;
            if (skip && curinfo[best].cost <= skip) {
                for (var i = 0; i < output.length; i++) {
                    if (output[i].hero == curinfo[best].hero) {
                        combine = i;
                    }
                }
                if (combine > maxcombine && (combine != output.length - 1 || curinfo[best].level - output[combine].prev > 25)) {
                    maxcombine = combine;
                }
            } else {
                skip = null;
            }
            if (combine >= 0 && output[combine].hero == curinfo[best].hero) {
                delta = Damage(curinfo[best].hero, curinfo[best].level) - Damage(curinfo[best].hero, output[combine].prev);
                output[combine].level = curinfo[best].level;
                output[combine].increase = 100 * delta / (skip ? initial : output[combine].total);
                output[combine].cost += curinfo[best].cost;
            } else {
                output.push({
                    hero: curinfo[best].hero,
                    level: curinfo[best].level,
                    prev: levels[best],
                    cost: curinfo[best].cost,
                    increase: 100 * delta / total,
                    total: total
                });
            }
            levels[best] = curinfo[best].level;

            if (skip) {
                skip -= curinfo[best].cost;
            }

            total = 0;
            for (var q = 0; q < Heroes.length; q++) {
                total += Damage(Heroes[q], levels[q]);
            }
        }
        curinfo[best] = HeroInfo(Heroes[best], levels[best], total * 0.01);
    }
    var text = "";
    for (var i = 0; i < output.length; i++) {
        text += output[i].level + " - " + output[i].hero.name + " (" + Format(output[i].cost) + " gold, " + Math.round(output[i].increase) + "% damage)";
        text += " <a href=\"javascript: void(0)\" class=\"donebtn\" heroid=\"" + output[i].hero.id +
            "\" herolvl=\"" + output[i].level + "\">(done)</a>";
        text += "<br/>\n";
        if (i == maxcombine) {
            text += "<hr/>\n";
        }
    }
    $("#output").html(text);
    $(".donebtn").click(function () {
        var heroid = parseInt($(this).attr("heroid"));
        var herolvl = parseInt($(this).attr("herolvl"));
        var prev = parseInt(Heroes[heroid].level.val());
        if (herolvl > prev) {
            Heroes[heroid].level.val(herolvl);
            $(".donebtn").each(function () {
                if ($(this).attr("heroid") == heroid && parseInt($(this).attr("herolvl")) <= herolvl) {
                    $(this).hide();
                }
            });
        }
    });
}
Compute();

/*
    // Hero efficiency rankings
    function _Damage(hero, lvl) {
      var x10 = lvl / 1000;
      var x4 = (lvl - 175) / 25;
      return hero.damage * lvl * Math.pow(4, x4) * Math.pow(2.5, x10);
    }
    function _Cost(hero, from, to) {
      return hero.cost * Math.pow(1.07, from) * (Math.pow(1.07, to - from) - 1) / 0.07;
    }
    var lambda = Math.log(4) / 25 + Math.log(2.5) / 1000;
    function _dDamage(hero, lvl) {
      return hero.damage * (1 + lambda * lvl) * Math.exp(lambda * lvl);
    }
    function _dCost(hero, lvl) {
      return hero.cost * Math.pow(1.07, lvl);
    }
    var otext = "";
    var hlist = [];
    for (var i = 0; i < Heroes.length; i++) {
      var left = 100;
      var right = 4000;
      while (right - left > 0.5) {
        var mid = (left + right) / 2;
        if (_dDamage(Heroes[i], mid) / _dCost(Heroes[i], mid) < 1e-10) {
          right = mid;
        } else {
          left = mid;
        }
      }
      var lvl = Math.floor((left + right) / 2);
      hlist.push({name: Heroes[i].name, level: lvl, damage: _Damage(Heroes[i], lvl)});
    }
    hlist.sort(function(x, y) {return y.damage - x.damage;});
    for (var i = 0; i < hlist.length; i++) {
      otext += "* " + hlist[i].name + " (" + hlist[i].damage.toExponential(3).replace("+", "") + "; " + hlist[i].level + ")<br/>";
    }
    $("#output").html(otext);
    */
});//]]>  

</script>

  <style type="text/css">
	.wrapper {
		margin: 0 auto;
		width: 1004px;
		font-family:verdana;
	}
	#herotbl {
		border: 1px solid #d2d2d2;
	}
	#herotbl td, th {
		overflow: hidden;
		white-space: nowrap;
	}
	#herotbl td {
		text-indent: 5px;
		border-right: none;
		border-bottom: 1px solid #ccc;
	}
	#herotbl tr:last-child td {
		border-bottom: 0px !important;
	}
	#herotbl td:last-child {
		border-right: 0px !important;
	}
	#herotbl td:nth-child(3) {
		border-right: 1px solid black !important;
	}
	#herotbl th {
		padding:8px;
		font-size:14px;
	}
	#herotbl th:last-child {
		border-right: 0px !important;
	}
	#herotbl th:nth-child(3) {
		border-right: 1px solid black !important;
	}
	#herotbl input {
		border: 1px solid #d2d2d2;
		height: 100%;
		padding: 3px;
		width: 80px;
	}
	#herotbl input:focus {
		outline: 0;
	}
	#output {
		border: 1px solid black;
		overflow: scroll;
		margin-top: 10px;
		height: 45%;
	}
	hr {
		margin: 1px;
	}
	.table > thead > tr > th, .table > tbody > tr > th, .table > tfoot > tr > th, .table > thead > tr > td, .table > tbody > tr > td, .table > tfoot > tr > td {padding:2px;}
  </style>

</head>
<body>
<div class="wrapper">
	<div class="panel panel-danger">
		<div class="panel-heading">Read me!</div>
		<div class="panel-body">
			<p>To use, paste your data and/or edit hero levels/gilds by hand, then click Update. The list will show the optimal order to level your heroes in. After getting an upgrade, press <span style="color: #00e; text-decoration: underline">(done)</span> to update the hero level in the table. Press Update again to clean up the upgrade list.<br /><b>The calculator assumes that all upgrades are purchased to Frostleaf, do not try to use this for early game.</b>
			</p>
		</div>
	</div>

	<div class="panel panel-primary">
		<div class="panel-heading">Paste save data (click wrench, click Save, close the save prompt because its already copied to clipboard):</div>
		<div class="panel-body">
			<textarea id="savedata" style="width: 100%; height: 50px" onfocus="this.select()" onmouseup="return false"></textarea>
			<input value="Import" onclick="Import()" style="margin-bottom: 12px" type="button" class="btn btn-primary">
		</div>
	</div>
	<div class="alert alert-warning" role="alert">
		The calculator <b>does NOT assume</b> you have all upgrades purchased for champions past Frostleaf, manually enter the multiplier for their upgrades in the appropriate <b>"Dmg Multiplier"</b> field:
		<br /><br />
		<ul class="list-group">
		  <li class="list-group-item">No Upgrades = 1</li>
		  <li class="list-group-item">One Upgrade = 2</li>
		  <li class="list-group-item">Two Upgrades = 4</li>
		  <li class="list-group-item">Three Upgrades = 8</li>
		  <li class="list-group-item">Four Upgrades = 20</li>
		</ul>
	</div>
<table id="herotbl" border="0" cellspacing="0" class="table table-striped" style="font-size:12px;">
    <tr>
        <th>Hero</th>
        <th>Gilded</th>
        <th>Level</th>
        <th>Hero</th>
        <th>Gilded</th>
        <th>Level</th>
        <th>Dmg Multiplier</th>
    </tr>
</table>
<input type="button" value="Update" onclick="Compute()" class="btn btn-default"></input><br />
Current gold (optional):
<input type="text" id="skipgold"></input>
<div id="output">
</div>
<br /><br />
<div class="panel panel-default">
	<div class="panel-heading">About</div>
	<div class="panel-body">
		Original calculator and source from <a href="http://www.reddit.com/r/ClickerHeroes/comments/2pq2wo/hero_level_calculator_finished/">zzzmmmxxxnnn</a>.<br>
		Visit <a href="http://www.reddit.com/r/clickerheroes">/r/clickerheroes</a> for more info.
	</div>
</div>
<br />
</div> 

</body>
</html>