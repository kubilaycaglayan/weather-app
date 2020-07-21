const table = function table() {
  const nameField = document.getElementById('name');
  const tempField = document.getElementById('temp');
  const celsiusInput = document.getElementById('celsius-input');


  const populate = function populate(data) {
    const { name, temp, fah } = data;
    nameField.innerHTML = name;
    if (celsiusInput.checked) {
      tempField.innerHTML = temp;
    } else {
      tempField.innerHTML = fah;
    }
  };

  const remove = function remove() {
    nameField.innerHTML = '';
    tempField.innerHTML = '';
  };

  return {
    populate,
    remove,
  };
};

export default table;
