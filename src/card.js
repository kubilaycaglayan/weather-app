const card = () => {
  const nameField = document.getElementsByClassName('name-result');
  const tempField = document.getElementsByClassName('degree-result');
  const minField = document.getElementsByClassName('min-result');
  const maxField = document.getElementsByClassName('max-result');
  const weatherField = document.getElementsByClassName('weather-result');
  const humField = document.getElementsByClassName('hum-result');
  const celsiusInput = document.getElementById('celsius-input');
  const card = document.getElementsByClassName('card')[0];
  const result = document.getElementsByClassName('result')[0];

  function hide() {
    card.style.display = 'none';
    result.style.visibility = 'hidden';
  }

  function show() {
    card.style.display = 'flex';
    result.style.visibility = 'visible';
  }

  function getData() {
    return JSON.parse(localStorage.getItem('weatherSome'));
  }

  function fill(temp, tempMin, tempMax, humidity, weather) {
    tempField[0].innerHTML = temp;
    minField[0].innerHTML = tempMin;
    maxField[0].innerHTML = tempMax;
    weatherField[0].innerHTML = weather;
    humField[0].innerHTML = humidity;

    tempField[1].innerHTML = temp;
    minField[1].innerHTML = tempMin;
    maxField[1].innerHTML = tempMax;
    weatherField[1].innerHTML = weather;
    humField[1].innerHTML = humidity;
  }

  function populate(response) {
    const {
      name, temp, fah, tempMin, tempMinFah, tempMax, tempMaxFah, humidity, weather,
    } = response;
    nameField[0].innerHTML = name;
    nameField[1].innerHTML = name;
    if (celsiusInput.checked) {
      fill(temp, tempMin, tempMax, humidity, weather);
    } else {
      fill(fah, tempMinFah, tempMaxFah, humidity, weather);
    }
    show();
  }

  return {
    populate,
    hide,
  };
};

export default card;
