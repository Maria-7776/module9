/* Этап 1. Подготовка данных */

// JSON, который мы будем парсить
const jsonString = `
{
  "list": [
   {
    "name": "Petr",
    "age": "20",
    "prof": "mechanic"
   },
   {
    "name": "Vova",
    "age": "60",
    "prof": "pilot"
   }
  ]
 }
`;

/* Этап 2. Получение данных */
const data = JSON.parse(jsonString);
const list = data.list;
//console.log('list', list);

/* Этап 3. Запись данных в результирующий объект */
const result = {
  list:[
    {
      name: list[0].name,
      age: Number(list[0].age),
      prof: list[0].prof,
    },
    {
      name: list[1].name,
      age: Number(list[1].age),
      prof: list[1].prof,
    }
  ]
};
console.log('result', result);