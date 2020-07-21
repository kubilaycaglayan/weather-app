const unit = (function unit() {
  const fahrenheitButton = document.getElementById('fahrenheit');
  const celsiusButton = document.getElementById('celsius');
  const celsiusInput = document.getElementById('celsius-input');
  const tempField = document.getElementById('temp');

  function getData() {
    return JSON.parse(localStorage.getItem('weatherSome'));
  }

  function switchUnitIfExists(boolean, data) {
    if (isNaN(parseInt(tempField.innerHTML, 10))) {
      return;
    }
    if (boolean) {
      tempField.innerHTML = data.temp;
    } else {
      tempField.innerHTML = data.fah;
    }
  }

  function activateFahrenheit() {
    if (celsiusInput.checked) {
      fahrenheitButton.className = 'btn btn-secondary active';
      celsiusButton.className = 'btn btn-secondary';
      celsiusInput.checked = false;
      switchUnitIfExists(false, getData());
    }
  }

  function activateCelsius() {
    if (!celsiusInput.checked) {
      celsiusButton.className = 'btn btn-secondary active';
      fahrenheitButton.className = 'btn btn-secondary';
      celsiusInput.checked = true;
      switchUnitIfExists(true, getData());
    }
  }

  activateCelsius();

  fahrenheitButton.addEventListener('click', activateFahrenheit);
  celsiusButton.addEventListener('click', activateCelsius);
}());