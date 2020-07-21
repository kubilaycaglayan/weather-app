const loading = function loading() {
  const spinner = document.getElementById('spinner');

  function show() {
    spinner.style.display = 'block';
  }

  function hide() {
    spinner.style.display = 'none';
  }

  return {
    show,
    hide,
  };
};

export default loading;
