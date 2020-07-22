(function unit() {
  const fahrenheitButton = document.getElementById('fahrenheit');
  const celsiusButton = document.getElementById('celsius');
  const celsiusInput = document.getElementById('celsius-input');
  const tempField = document.getElementById('temp');
  const minField = document.getElementById('min');
  const maxField = document.getElementById('max');

  function getData() {
    return JSON.parse(localStorage.getItem('weatherSome'));
  }

  function switchUnitIfExists(boolean, data) {
    if (!parseInt(tempField.innerHTML, 10)) {
      return;
    }
    if (boolean) {
      tempField.innerHTML = data.temp;
      minField.innerHTML = data.tempMin;
      maxField.innerHTML = data.tempMax;
    } else {
      tempField.innerHTML = data.fah;
      minField.innerHTML = data.tempMinFah;
      maxField.innerHTML = data.tempMaxFah;
    }
  }

  function activateFahrenheit() {
    if (celsiusInput.checked) {
      fahrenheitButton.className = 'btn btn-primary active';
      celsiusButton.className = 'btn btn-primary';
      celsiusInput.checked = false;
      switchUnitIfExists(false, getData());
    }
  }

  function activateCelsius() {
    if (!celsiusInput.checked) {
      celsiusButton.className = 'btn btn-primary active';
      fahrenheitButton.className = 'btn btn-primary';
      celsiusInput.checked = true;
      switchUnitIfExists(true, getData());
    }
  }

  activateCelsius();

  fahrenheitButton.addEventListener('click', activateFahrenheit);
  celsiusButton.addEventListener('click', activateCelsius);
}());