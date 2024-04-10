const WEATHER_API_URL = "https://api.tomorrow.io/v4/weather/realtime";
const API_KEY = "YOUR_API_KEY";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(selectedLocation) {
  const response = await fetch(
    `${WEATHER_API_URL}?location=${selectedLocation}&apikey=${API_KEY}`
  );

  if (response.status == 404 || response.status == 400) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.location.name;

    document.querySelector(".temp").innerHTML = `${Math.round(
      data.data.values.temperature
    )}°C`;

    document.querySelector(
      ".humidity"
    ).innerHTML = `${data.data.values.humidity}%`;

    document.querySelector(
      ".wind"
    ).innerHTML = `${data.data.values.windSpeed} km/hr`;

    weatherIcon.src = `./assets/${getWeatherIcon(
      data.data.values.weatherCode
    )}`;

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

function getWeatherBehavior(weatherCode) {
  return weatherBehaviors[+weatherCode];
}

function getWeatherIcon(weatherCode) {
  return weatherIcons[+weatherCode];
}

const result = {
  data: {
    time: "2024-04-10T07:31:00Z",
    values: {
      cloudBase: 0.18,
      cloudCeiling: 0.18,
      cloudCover: 87,
      dewPoint: 6.81,
      freezingRainIntensity: 0,
      humidity: 91,
      precipitationProbability: 0,
      pressureSurfaceLevel: 1000.67,
      rainIntensity: 0,
      sleetIntensity: 0,
      snowIntensity: 0,
      temperature: 8.63,
      temperatureApparent: 8.63,
      uvHealthConcern: 0,
      uvIndex: 0,
      visibility: 14.95,
      weatherCode: 1001,
      windDirection: 296.81,
      windGust: 0.69,
      windSpeed: 0.69,
    },
  },
  location: {
    lat: 43.653480529785156,
    lon: -79.3839340209961,
    name: "Old Toronto, Toronto, Golden Horseshoe, Ontario, Canada",
    type: "administrative",
  },
};

const weatherBehaviors = {
  0: "Unknown",
  1000: "Clear, Sunny",
  1100: "Mostly Clear",
  1101: "Partly Cloudy",
  1102: "Mostly Cloudy",
  1001: "Cloudy",
  2000: "Fog",
  2100: "Light Fog",
  4000: "Drizzle",
  4001: "Rain",
  4200: "Light Rain",
  4201: "Heavy Rain",
  5000: "Snow",
  5001: "Flurries",
  5100: "Light Snow",
  5101: "Heavy Snow",
  6000: "Freezing Drizzle",
  6001: "Freezing Rain",
  6200: "Light Freezing Rain",
  6201: "Heavy Freezing Rain",
  7000: "Ice Pellets",
  7101: "Heavy Ice Pellets",
  7102: "Light Ice Pellets",
  8000: "Thunderstorm",
};

const weatherIcons = {
  1000: "10000_clear_large.png",
  1001: "10010_cloudy_large.png",
  1100: "11000_mostly_clear_large.png",
  1101: "11010_partly_cloudy_large.png",
  1102: "11020_mostly_cloudy_large.png",
  1103: "11030_mostly_clear_large.png",
  2000: "20000_fog_large.png",
  2100: "21000_fog_light_large.png",
  2101: "21010_fog_light_mostly_clear_large.png",
  2102: "21020_fog_light_partly_cloudy_large.png",
  2103: "21030_fog_light_mostly_cloudy_large.png",
  2106: "21060_fog_mostly_clear_large.png",
  2107: "21070_fog_partly_cloudy_large.png",
  2108: "21080_fog_mostly_cloudy_large.png",
  4000: "40000_drizzle_large.png",
  4001: "40010_rain_large.png",
  4200: "42000_rain_light_large.png",
  4201: "42010_rain_heavy_large.png",
  4202: "42020_rain_heavy_partly_cloudy_large.png",
  4203: "42030_drizzle_mostly_clear_large.png",
  4204: "42040_drizzle_partly_cloudy_large.png",
  4205: "42050_drizzle_mostly_cloudy_large.png",
  4208: "42080_rain_partly_cloudy_large.png",
  4209: "42090_rain_mostly_clear_large.png",
  4210: "42100_rain_mostly_cloudy_large.png",
  4211: "42110_rain_heavy_mostly_clear_large.png",
  4212: "42120_rain_heavy_mostly_cloudy_large.png",
  4213: "42130_rain_light_mostly_clear_large.png",
  4214: "42140_rain_light_partly_cloudy_large.png",
  4215: "42150_rain_light_mostly_cloudy_large.png",
  5000: "50000_snow_large.png",
  5001: "50010_flurries_large.png",
  5100: "51000_snow_light_large.png",
  5101: "51010_snow_heavy_large.png",
  5102: "51020_snow_light_mostly_clear_large.png",
  5103: "51030_snow_light_partly_cloudy_large.png",
  5104: "51040_snow_light_mostly_cloudy_large.png",
  5105: "51050_snow_mostly_clear_large.png",
  5106: "51060_snow_partly_cloudy_large.png",
  5107: "51070_snow_mostly_cloudy_large.png",
  5108: "51080_wintry_mix_large.png",
  5110: "51100_wintry_mix_large.png",
  5112: "51120_wintry_mix_large.png",
  5114: "51140_wintry_mix_large.png",
  5115: "51150_flurries_mostly_clear_large.png",
  5116: "51160_flurries_partly_cloudy_large.png",
  5117: "51170_flurries_mostly_cloudy_large.png",
  5119: "51190_snow_heavy_mostly_clear_large.png",
  5120: "51200_snow_heavy_partly_cloudy_large.png",
  5121: "51210_snow_heavy_mostly_cloudy_large.png",
  5122: "51220_wintry_mix_large.png",
  6000: "60000_freezing_rain_drizzle_large.png",
  6001: "60010_freezing_rain_large.png",
  6002: "60020_freezing_rain_drizzle_partly_cloudy_large.png",
  6003: "60030_freezing_rain_drizzle_mostly_clear_large.png",
  6004: "60040_freezing_rain_drizzle_mostly_cloudy_large.png",
  6200: "62000_freezing_rain_light_large.png",
  6201: "62010_freezing_rain_heavy_large.png",
  6202: "62020_freezing_rain_heavy_partly_cloudy_large.png",
  6203: "62030_freezing_rain_light_partly_cloudy_large.png",
  6204: "62040_wintry_mix_large.png",
  6205: "62050_freezing_rain_light_mostly_clear_large.png",
  6206: "62060_wintry_mix_large.png",
  6207: "62070_freezing_rain_heavy_mostly_clear_large.png",
  6208: "62080_freezing_rain_heavy_mostly_cloudy_large.png",
  6209: "62090_freezing_rain_light_mostly_cloudy_large.png",
  6212: "62120_wintry_mix_large.png",
  6213: "62130_freezing_rain_mostly_clear_large.png",
  6214: "62140_freezing_rain_partly_cloudy_large.png",
  6215: "62150_freezing_rain_mostly_cloudy_large.png",
  6220: "62200_wintry_mix_large.png",
  6222: "62220_wintry_mix_large.png",
  7000: "70000_ice_pellets_large.png",
  7101: "71010_ice_pellets_heavy_large.png",
  7102: "71020_ice_pellets_light_large.png",
  7103: "71030_wintry_mix_large.png",
  7105: "71050_wintry_mix_large.png",
  7106: "71060_wintry_mix_large.png",
  7107: "71070_ice_pellets_partly_cloudy_large.png",
  7108: "71080_ice_pellets_mostly_clear_large.png",
  7109: "71090_ice_pellets_mostly_cloudy_large.png",
  7110: "71100_ice_pellets_light_mostly_clear_large.png",
  7111: "71110_ice_pellets_light_partly_cloudy_large.png",
  7112: "71120_ice_pellets_light_mostly_cloudy_large.png",
  7113: "71130_ice_pellets_heavy_mostly_clear_large.png",
  7114: "71140_ice_pellets_heavy_partly_cloudy_large.png",
  7115: "71150_wintry_mix_large.png",
  7116: "71160_ice_pellets_heavy_mostly_cloudy_large.png",
  7117: "71170_wintry_mix_large.png",
  8000: "80000_tstorm_large.png",
  8001: "80010_tstorm_mostly_clear_large.png",
  8002: "80020_tstorm_mostly_cloudy_large.png",
  8003: "80030_tstorm_partly_cloudy_large.png",
};
