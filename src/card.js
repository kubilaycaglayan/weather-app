const card = () => {
  const nameField = document.getElementById('name');
  const tempField = document.getElementById('temp');
  const minField = document.getElementById('min');
  const maxField = document.getElementById('max');
  const weatherField = document.getElementById('weather');
  const humField = document.getElementById('hum');
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
    tempField.innerHTML = temp;
    minField.innerHTML = tempMin;
    maxField.innerHTML = tempMax;
    weatherField.innerHTML = weather;
    humField.innerHTML = humidity;
  }

  function populate() {
    const {
      name, temp, fah, tempMin, tempMinFah, tempMax, tempMaxFah, humidity, weather,
    } = getData();
    nameField.innerHTML = name;
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
