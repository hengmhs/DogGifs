const img = document.querySelector('img');
const errorStatus = document.querySelector('#error');
const newDogBtn = document.querySelector('#newDog')

const newDogGif = async () => {
  const response = await fetch(API_KEY, {mode: 'cors'});
  response.json().then((response) => {
    errorStatus.innerHTML = '';
	  img.src = response.data.images.original.url;
  });
  /*.catch((response) => {
	  errorStatus.innerHTML = 'Error: No Gif Found!';
  })*/
}

newDogGif();
newDogBtn.addEventListener('click', newDogGif);


