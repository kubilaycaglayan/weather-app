(function unit() {
  const fahrenheitButton = document.getElementById('fahrenheit');
  const celsiusButton = document.getElementById('celsius');
  const celsiusInput = document.getElementById('celsius-input');
  const tempField = document.getElementsByClassName('degree-result');
  const minField = document.getElementsByClassName('min-result');
  const maxField = document.getElementsByClassName('max-result');

  function getData() {
    return JSON.parse(localStorage.getItem('weatherSome'));
  }

  function setCelsius(data) {
    tempField[0].innerHTML = data.temp;
    minField[0].innerHTML = data.tempMin;
    maxField[0].innerHTML = data.tempMax;

    tempField[1].innerHTML = data.temp;
    minField[1].innerHTML = data.tempMin;
    maxField[1].innerHTML = data.tempMax;
  }

  function setFahrenheit(data) {
    tempField[0].innerHTML = data.fah;
    minField[0].innerHTML = data.tempMinFah;
    maxField[0].innerHTML = data.tempMaxFah;

    tempField[1].innerHTML = data.fah;
    minField[1].innerHTML = data.tempMinFah;
    maxField[1].innerHTML = data.tempMaxFah;
  }

  function switchUnitIfExists(isCelsius, data) {
    if (!parseInt(tempField[0].innerHTML, 10)) {
      return;
    }
    if (isCelsius) {
      setCelsius(data);
    } else {
      setFahrenheit(data);
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