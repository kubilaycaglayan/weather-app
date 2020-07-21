const table = function table() {
  const nameField = document.getElementById('name');
  const tempField = document.getElementById('temp');
  const celsiusInput = document.getElementById('celsius-input');
  const tableElement = document.getElementsByTagName('table')[0];


  const populate = function populate(data) {
    const { name, temp, fah } = data;
    nameField.innerHTML = name;
    if (celsiusInput.checked) {
      tempField.innerHTML = temp;
    } else {
      tempField.innerHTML = fah;
    }
    show();
  };

  const remove = function remove() {
    nameField.innerHTML = '';
    tempField.innerHTML = '';
  };

  const hide = function hide() {
    tableElement.style.display = 'none';
  };

  const show = function show() {
    tableElement.style.display = 'block';
  };

  return {
    populate,
    hide,
  };
};

export default table;
