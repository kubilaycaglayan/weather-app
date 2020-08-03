/* eslint-disable no-use-before-define */
const loading = () => {
  const spinners = document.getElementsByClassName('spinner-2');
  const card = document.getElementsByClassName('card')[0];
  const results = document.getElementsByClassName('result');

  function show() {
    spinners[0].style.display = 'block';
    spinners[1].style.display = 'block';
    card.style.display = 'flex';
    results[0].style.visibility = 'hidden';
    results[1].style.visibility = 'hidden';
  }

  function hide() {
    spinners[0].style.display = 'none';
    spinners[1].style.display = 'none';
    card.style.display = 'none';
    results[0].style.visibility = 'visible';
    results[1].style.visibility = 'visible';
  }

  return {
    show,
    hide,
  };
};

export default loading;
