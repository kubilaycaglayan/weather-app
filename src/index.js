import './style.sass';
import input from './input';
import weather from './weatherApi';
import table from './tableBuilder';
import './unit';
import errorHandler from './errorHandler';
import loading from './loading';

const inputField = document.getElementById('input');
let timeOut;

inputField.oninput = () => {
  clearTimeout(timeOut);
  waitAndShow(getInputAndShowWeather)
};

function waitAndShow(callback) {
  loading().show();
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
        errorHandler().hide();
        table().populate(response);
        loading().hide();
      },
    )
    .catch(
      (err) => {
        table().hide();
        errorHandler().show();
        loading().hide();
      },
    );
}
