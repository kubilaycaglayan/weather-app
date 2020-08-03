/* eslint-disable no-use-before-define */
const loading = () => {
  const spinner = document.getElementsByClassName('spinner-2')[0];
  const card = document.getElementsByClassName('card')[0];
  const result = document.getElementsByClassName('result')[0];

  function show() {
    spinner.style.display = 'block';
    card.style.display = 'flex';
    result.style.visibility = 'hidden';
  }

  function hide() {
    spinner.style.display = 'none';
    card.style.display = 'none';
    result.style.visibility = 'visible';
  }

  return {
    show,
    hide,
  };
};

export default loading;
