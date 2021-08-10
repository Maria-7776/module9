

const btn = document.querySelector('.button');
const result = document.querySelector('.result');
const pageInput = document.querySelector('.page');
const limitInput = document.querySelector('.limit');

let data = localStorage.getItem('info');
pageInput.value = localStorage.getItem('pageValue');
limitInput.value = localStorage.getItem('limitValue');

btn.addEventListener('click', () => {
  result.textContent = '';
  let page = pageInput.value;
  let limit = limitInput.value;

  if ((isNaN(page)) || page > 10 || page < 1){

    result.innerHTML = 'Номер страницы вне диапазона от 0 до 10';
  }
  else if ((isNaN(limit)) || limit > 10 || limit < 1){
    result.innerHTML = 'Лимит вне диапазона от 0 до 10';
  }
  else if ((isNaN(page)) || page > 10 || page < 1 || 
  (isNaN(limit)) || limit > 10 || limit < 1){
    result.innerHTML = 'Номер страницы и лимит вне диапазона от 0 до 10';
  }
  else {
    fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      localStorage.setItem('info', JSON.stringify(data));
      localStorage.setItem('pageValue', page);
      localStorage.setItem('limitValue', limit);
      displayResult(data);
    })
    .catch(() => {
      console.log('error')
    });
  }
});

function displayResult(data){
  let cards = '';
  if (data){
    data.forEach((item) => {
      const cardBlock = 
      `<div class="card">
      <img src="${item.download_url}"
      class="card-image"/>
      </div>
      `;
      cards = cards + cardBlock;
  });
  result.innerHTML = cards;
    }
  }

displayResult(JSON.parse(data));

