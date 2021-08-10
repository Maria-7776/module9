const btn = document.querySelector('.j-btn-request');

function useRequest(url){
  fetch(url)
    .then((response) => {
      const resultNode = document.querySelector('.j-result');
      const image = `<img src=${url} class="card-image"/>`;
      resultNode.innerHTML = image;
    })
    .catch (() => {console.log('error')});
}

btn.addEventListener('click', () => {
  let size = '';
  const value = document.querySelectorAll('input').forEach ((item, index) => {
    if (!(Number(item.value))){
      alert ('Input shall be a number');
    } else if (Number(item.value) < 100 || Number(item.value) > 300){
      alert ('Input number shall be in the range between 100 and 300')
    } else{
      size = size + `/${item.value}`;
    }
  });
  
  if (size) {
    useRequest (`https://picsum.photos${size}`);
  }
})
