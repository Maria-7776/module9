/* Этап 1. Подготовка данных */

// Создание экземпляра класса DOMParser. Он позволит нам парсить XML
const parser = new DOMParser();

// XML, который мы будем парсить
const xmlString = `
<list>
<student>
  <name lang="en">
    <first>Ivan</first>
    <second>Ivanov</second>
  </name>
  <age>35</age>
  <prof>teacher</prof>
</student>
<student>
  <name lang="ru">
    <first>Петр</first>
    <second>Петров</second>
  </name>
  <age>58</age>
  <prof>driver</prof>
</student>
</list>
`;

/* Этап 2. Получение данных */

// Парсинг XML
const xmlDOM = parser.parseFromString(xmlString, "text/xml");

// Получение всех DOM-нод
const listNode = xmlDOM.querySelector("list");

const studentNode1 = listNode.firstElementChild;
const nameNode1 = studentNode1.querySelector("name");
const firstNode1 = nameNode1.querySelector("first");
const secondNode1 = nameNode1.querySelector("second");
const ageNode1 = studentNode1.querySelector("age");
const profNode1 = studentNode1.querySelector("prof");

// Получение данных из атрибутов
const langAttr1 = nameNode1.getAttribute('lang');


// Получение всех DOM-нод
const studentNode2 = listNode.lastElementChild;
const nameNode2 = studentNode2.querySelector("name");
const firstNode2 = nameNode2.querySelector("first");
const secondNode2 = nameNode2.querySelector("second");
const ageNode2 = studentNode2.querySelector("age");
const profNode2 = studentNode2.querySelector("prof");

// Получение данных из атрибутов
const langAttr2 = nameNode2.getAttribute('lang');

/* Этап 3. Запись данных в результирующий объект */
const result = {
  list: [
     {
      name: firstNode1.textContent + " " + secondNode1.textContent,
      age: Number(ageNode1.textContent),
      prof: profNode1.textContent,
      lang: langAttr1,
     },
     {
      name: firstNode2.textContent + " " + secondNode2.textContent,
      age: Number(ageNode2.textContent),
      prof: profNode2.textContent,
      lang: langAttr2, 
     }
   ]
};
console.log(result);