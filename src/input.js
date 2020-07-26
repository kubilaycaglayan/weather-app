const input = () => {
  const { value } = document.getElementById('input');
  document.getElementById('input').blur();

  function get() {
    return String(value).trim();
  }

  return {
    get,
  };
};

export default input;
