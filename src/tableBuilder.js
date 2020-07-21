const table = function table() {
  const nameField = document.getElementById('name');
  const tempField = document.getElementById('temp');

  const populate = function populate(data2) {
    const { name, temp } = data2;
    console.log('populate', data2.name)
    nameField.innerHTML = data2.name;
    tempField.innerHTML = data2.temp;
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
