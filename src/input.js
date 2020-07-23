const input = () => {
  const { value } = document.getElementById('input');

  function get() {
    return String(value).trim();
  }

  return {
    get,
  };
};

export default input;
