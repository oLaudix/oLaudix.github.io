function getData() 
{
	tmp=$(jq -r '.current.temp_c, 
				.current.feelslike_c, 
				.current.pressure_mb, 
				.current.wind_kph, 
				.current.precip_mm, 
				.current.vis_km,
				.location.name,
				.current.condition.text,
				.current.wind_dir,
				.current.humidity,
				.current.cloud,
				.current.is_day,
				.current.temp_f,
				.current.feelslike_f,
				.current.pressure_in,
				.current.wind_mph,
				.current.precip_in,
				.current.vis_miles
				' ./tmp/weather.json)
	IFS=$'\n' read -rd '' -a data <<< "$tmp"
	if (("${data[11]}" == 0)); then
		data[11]="Noc"
	else
		data[11]="Dzień"
	fi
	if ((celcius == 1)); then
		toScreen "${data[0]} °C" "${data[1]} °C" "${data[2]} hPa" "${data[3]} kph" "${data[4]} mm" "${data[5]} km" "${data[6]}" "${data[7]}" "${data[8]}" "${data[9]}%" "${data[10]}%" "${data[11]}"
	else
		toScreen "${data[12]} °F" "${data[13]} °F" "${data[14]} inHg" "${data[15]} mph" "${data[16]} in" "${data[17]} miles" "${data[6]}" "${data[7]}" "${data[8]}" "${data[9]}%" "${data[10]}%" "${data[11]}"
	fi
}

function toScreen()
{
	#reset
	echo ""
	echo "                    Lokacja: $7          "
	echo "                             ${12}          "
	echo "           Warunki pogodowe: $8                    "
	echo "                Temperatura: $1          "
	echo "     Temperatura odczuwalna: $2          "
	echo "                  Cisnienie: $3          "
	echo "            Prędkość wiatru: $4          "
	echo "            Kierunek wiatru: $9          "
	echo "       Wilgotność powietrza: ${10}          "
	echo "               Zachmurzenie: ${11}          " 
    echo "                      Opady: $5          "
    echo "                 Widoczność: $6          "
	echo ""
}

function weather()
{
	if [ -f tmp/weather.json ]; then
		epochTime=`date +%s`
		localtime_epoch=`jq '.location.localtime_epoch' ./tmp/weather.json`
		if [[ "$(jq '.location.name' ./tmp/weather.json)" != *"$localization"* ]] || (($(($epochTime-$localtime_epoch)) > 299)); then
			curl -s -o ./tmp/weather.json "http://api.apixu.com/v1/current.json?key=b3fe0f54de6448eea5f155613170412&q=$localization"
			#echo "Old File - updating"
		fi
	else
		touch tmp/weather.json
		curl -s -o ./tmp/weather.json "http://api.apixu.com/v1/current.json?key=b3fe0f54de6448eea5f155613170412&q=$localization"
	fi
	getData
}

localization="Poznan"
celcius=1
repeat=0
reset
mkdir -p "tmp"
while getopts dfl: option; do
	case "${option}"
	in
	l) localization=${OPTARG};;
	f) celcius=0;;
	d) repeat=1;;
	esac
done
OPTIND=1
while true; do
	weather
	if ((repeat == 0)); then
		exit 0
	fi
	sleep 2
	echo -ne "\r\b\r\b\r\b\r\b\r\b\r\b\r\b\r\b\r\b\r\b\r\b\r\b\r\b\r\b\r"
done
