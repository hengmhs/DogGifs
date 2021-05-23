const img = document.querySelector('img');
const errorStatus = document.querySelector('#error');
const newDogBtn = document.querySelector('#newDog')

const newDogGif = () => {
  fetch(API_KEY, {mode: 'cors'})
  .then((response) => {
	  errorStatus.innerHTML = '';
	  return response.json();
  })
  .then((response) => {
	  img.src = response.data.images.original.url;
  })
  .catch((response) => {
	  errorStatus.innerHTML = 'Error: No Gif Found!';
  })
}

newDogGif();
newDogBtn.addEventListener('click', newDogGif);


