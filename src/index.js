/* eslint-disable no-use-before-define */
import './style.sass';
import input from './input';
import weather from './weatherApi';
import table from './tableBuilder';
import './unit';
import errorHandler from './errorHandler';
import loading from './loading';
import mood from './mood';

const inputField = document.getElementById('input');
let timeOut;

inputField.oninput = () => {
  clearTimeout(timeOut);
  waitAndShow(getInputAndShowWeather);
};

function waitAndShow(callback) {
  loading().show();
  mood().decide('loading');
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
        mood().decide(response.temp);
        errorHandler().hide();
        table().populate();
        loading().hide();
      },
    )
    .catch(
      () => {
        table().hide();
        errorHandler().show();
        loading().hide();
      },
    );
}
