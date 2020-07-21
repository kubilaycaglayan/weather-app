import './style.sass';
import input from './input';
import weather from './weatherApi';
import table from './tableBuilder';
import './unit';

const inputField = document.getElementById('input');
let timeOut;

inputField.oninput = () => {
  clearTimeout(timeOut);
  waitAndShow(getInputAndShowWeather)
};

function waitAndShow(callback) {
  clearTimeout(timeOut);
  timeOut = setTimeout(
    () => { callback(); },
    600,
  );
}

function getInput() {
  return String(input().value).trim();
}

function getInputAndShowWeather() {
  const inputValue = getInput();
  if (inputValue.length > 2) {
    showWeather(inputValue);
  }
}

async function showWeather(inputValue) {
  await weather(inputValue)
    .then(
      (response) => {
        table().populate(response);
      },
    );
}
