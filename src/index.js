import './style.sass';
import input from './input';
import weather from './weatherApi';
import table from './tableBuilder';

const inputField = document.getElementById('input');
inputField.oninput = () => {
  const inputValue = String(input().value).trim();
  if (inputValue.length > 4) {
    howIsTheWeather(inputValue)
  }
};

async function howIsTheWeather(inputValue) {
  const data = await weather(inputValue).data;
  console.log('onclick action', data, data.name)
  table().populate(data);
}

/* const dummyData = {
  temp: 45,
  name: 'Simerniya',
};

table().populate(dummyData);
table().remove() */
