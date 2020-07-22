const loading = function loading() {
  const spinner = document.getElementById('spinner');
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
