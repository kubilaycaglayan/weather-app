const errorHandler = function errorHandler() {
  const errorElement = document.getElementById('error');

  function show() {
    errorElement.style.display = 'block';
  }

  function hide() {
    errorElement.style.display = 'none';
  }

  return {
    show,
    hide,
  };
};

export default errorHandler;
