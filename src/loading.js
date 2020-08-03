/* eslint-disable no-use-before-define */
const loading = () => {
  const spinners = document.getElementsByClassName('spinner-2');
  const card = document.getElementsByClassName('card')[0];
  const result = document.getElementsByClassName('result')[0];

  function show() {
    spinners[0].style.display = 'block';
    spinners[1].style.display = 'block';
    card.style.display = 'flex';
    result.style.visibility = 'hidden';
  }

  function hide() {
    spinners[0].style.display = 'none';
    spinners[1].style.display = 'none';
    card.style.display = 'none';
    result.style.visibility = 'visible';
  }

  return {
    show,
    hide,
  };
};

export default loading;
