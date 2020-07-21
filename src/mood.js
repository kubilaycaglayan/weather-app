const mood = function mood() {
  const body = document.getElementsByTagName('body')[0];

  function sunny() {
    body.style.backgroundColor = 'yellow';
  }

  function snowy() {
    body.style.backgroundColor = 'white';
  }

  function cloudy() {
    body.style.backgroundColor = 'gray';
  }

  function loading() {
    body.style.backgroundColor = 'green';
  }

  // eslint-disable-next-line no-unused-vars
  const weatherList = [
    'Clear',
    'Clouds',
  ];

  const decide = function decide(temp) {
    // console.log('mood temp:', temp, weather);
    if (temp === 'loading') {
      loading();
    } else if (temp < 10) {
      snowy();
    } else if (temp > 9 && temp < 25) {
      cloudy();
    } else {
      sunny();
    }
  };

  return {
    decide,
  };
};

export default mood;
