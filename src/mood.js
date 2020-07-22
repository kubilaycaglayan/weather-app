/* eslint-disable no-use-before-define */
const mood = function mood() {
  let symbols;

  function sunny() {
    changeSymbol(weatherList.Clear);
  }

  function snowy() {
    changeSymbol(weatherList.Snow);
  }

  function rainy() {
    changeSymbol(weatherList.Rain);
  }

  function cloudy() {
    changeSymbol(weatherList.Clouds);
  }

  function notFound() {
    changeSymbol('fas fa-question text-danger');
  }

  // eslint-disable-next-line no-unused-vars
  const weatherList = {
    Clear: 'far fa-sun text-warning',
    Clouds: 'fas fa-cloud',
    Rain: 'fas fa-cloud-rain text-primary',
    Snow: 'fas fa-snowflake text-white',
  };

  const decide = function decide(weather) {
    switch (weather) {
      case 'Clouds':
        cloudy();
        break;
      case 'Rain':
        rainy();
        break;
      case 'Snow':
        snowy();
        break;
      default:
        sunny();
        break;
    }
  };

  function changeSymbol(className) {
    goLeft();
    bringFromRight(className);
  }

  function goLeft() {
    symbols = document.querySelectorAll('.symbols i');
    symbols[0].remove();
    symbols[1].className += ' go-left';
    setTimeout(() => {
      symbols[1].style.display = 'none';
      symbols[1].className = '';
    }, 3000);
    document.getElementsByClassName('symbols')[0].appendChild(document.createElement('i'));
  }

  function bringFromRight(className = 'fas fa-cloud-sun-rain text-success') {
    const animatedClassName = `${className} come-from-right`;
    symbols[2].className += animatedClassName;
    setTimeout(() => {
      symbols[2].className = className;
    }, 3000);
  }

  return {
    decide,
    notFound,
  };
};

export default mood;
