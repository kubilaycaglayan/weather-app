const table = function table() {
  const nameField = document.getElementById('name');
  const tempField = document.getElementById('temp');
  const minField = document.getElementById('min');
  const maxField = document.getElementById('max');
  const humField = document.getElementById('hum');
  const celsiusInput = document.getElementById('celsius-input');
  const tableElement = document.getElementsByTagName('table')[0];

  const hide = function hide() {
    tableElement.style.display = 'none';
  };

  const show = function show() {
    tableElement.style.display = 'table';
  };

  function getData() {
    return JSON.parse(localStorage.getItem('weatherSome'));
  }

  function fill(temp, tempMin, tempMax, humidity) {
    tempField.innerHTML = temp;
    minField.innerHTML = tempMin;
    maxField.innerHTML = tempMax;
    humField.innnerHTML = humidity;
  }

  const populate = function populate() {
    const {
      name, temp, fah, tempMin, tempMinFah, tempMax, tempMaxFah, humidity,
    } = getData();
    nameField.innerHTML = name;
    if (celsiusInput.checked) {
      fill(temp, tempMin, tempMax, humidity);
    } else {
      fill(fah, tempMinFah, tempMaxFah, humidity);
    }
    show();
  };

  return {
    populate,
    hide,
  };
};

export default table;
