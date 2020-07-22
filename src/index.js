/* eslint-disable no-use-before-define */
import './style.sass';
import input from './input';
import weather from './weatherApi';
import card from './card';
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
  errorHandler().hide();
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
        loading().hide();
        card().populate();
      },
    )
    .catch(
      () => {
        loading().hide();
        card().hide();
        errorHandler().show();
      },
    );
}
