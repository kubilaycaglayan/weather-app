/* eslint-disable no-use-before-define */
import './style.sass';
import input from './input';
import weather from './weatherApi';
import card from './card';
import './unit';
import errorMessage from './errorMessage';
import loading from './loading';
import mood from './mood';

(function main() {
  const inputField = document.getElementById('input');
  let timeOut;

  inputField.oninput = () => {
    clearTimeout(timeOut);
    waitAndShow(getInputAndShowWeather);
  };

  function waitAndShow(callback) {
    loading().show();
    errorMessage().hide();
    clearTimeout(timeOut);
    timeOut = setTimeout(
      () => { callback(); },
      1000,
    );
  }

  function getInputAndShowWeather() {
    const inputValue = input().get();
    if (inputValue.length > 2) {
      showWeather(inputValue);
    } else {
      loading().hide();
    }
  }

  async function showWeather(inputValue) {
    await weather(inputValue)
      .then(
        (response) => {
          mood().decide(response.weather);
          errorMessage().hide();
          loading().hide();
          card().populate();
        },
      )
      .catch(
        () => {
          mood().notFound();
          loading().hide();
          card().hide();
          errorMessage().show();
        },
      );
  }
}());
