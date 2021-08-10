function useRequest(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  
  xhr.onload = function() {
    if (xhr.status != 200) {
      console.log('Статус ответа: ', xhr.status);
    } else {
      const result = JSON.parse(xhr.response);
      if (callback) {
        callback(result);
      }
    }
  };
  
  xhr.onerror = function() {
    console.log('Ошибка! Статус ответа: ', xhr.status);
  };
  
  xhr.send();
};


const resultNode = document.querySelector('.j-result');

function displayResult(apiData) {
  let cards = '';
    
  apiData.forEach(item => {
    const cardBlock = `
      <div class="card">
        <img
          src="${item.download_url}"
          class="card-image"
        />
        <p>${item.author}</p>
      </div>
    `;
    cards = cards + cardBlock;
  });
  
    
  resultNode.innerHTML = cards;
}

const btnNode = document.querySelector('.j-btn-request');

btnNode.addEventListener('click', () => {
  let value;
  value = Number(document.querySelector('input').value);
  if (typeof value == 'number' && !isNaN(value)){
    if (value >=1 && value <= 10){
      let requestedLink = `https://picsum.photos/v2/list?limit=${value}`;
      useRequest(requestedLink, displayResult);
    }
    else{
      alert ('Enter a number from 1 to 10')
    }
  } else{
    alert('Input shall be a number');
  }
  });