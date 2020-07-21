const weather = async function weather(cityName = 'Ankara') {
  const key = 'e6efdefd05fcd6a7ba813bc6ce304518';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`;
  let result;
  const data = {};

  const temp = function temp() {
    const resultTemp = parseInt((result.main.temp - 273.15), 10);
    data.temp = resultTemp;
    data.fah = parseInt((resultTemp * 1.8 + 32), 10);

    data.tempMin = parseInt((result.main.temp_min - 273.15), 10);
    data.tempMinFah = parseInt((data.tempMin * 1.8 + 32), 10);

    data.tempMax = parseInt((result.main.temp_max - 273.15), 10);
    data.tempMaxFah = parseInt((data.tempMax * 1.8 + 32), 10);
    data.humidity = result.main.humidity;
    return resultTemp;
  };

  const name = function name() {
    const resultName = result.name;
    data.name = resultName;
    return resultName;
  };

  await fetch(url)
    .then(
      (response) => response.json(),
    )
    .then(
      (response) => {
        result = response;
        name();
        temp();
      },
    );
  localStorage.setItem('weatherSome', JSON.stringify(data));
  return data;
};


export default weather;
