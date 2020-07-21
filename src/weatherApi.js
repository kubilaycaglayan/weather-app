const weather = function weather(cityName = 'Ankara') {
  const key = 'e6efdefd05fcd6a7ba813bc6ce304518';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`;
  let result;
  const data = {};

  const temp = function temp() {
    const resultTemp = parseInt((result.main.temp - 273.15), 10);
    data.temp = resultTemp;
    return resultTemp;
  };

  const name = function name() {
    const resultName = result.name;
    data.name = resultName;
    return resultName;
  };

  const ask = async function ask() {
    fetch(url)
      .then(
        (response) => response.json(),
      )
      .then(
        (response) => {
          result = response;
          name();
          temp();
        },
      )
      .catch(
        (err) => {
          console.log('Having errors...');
          console.log(err);
        },
      );
    return data;
  };

  return {
    ask,
  };
};
