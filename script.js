'use strict';

function getDogImage(dog) {
  fetch(`https://dog.ceo/api/breeds/image/random/${dog}`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
    console.log(responseJson);
    for(let i=0; i<responseJson.message.length; i++)
    $('.results').append(
      `<img src="${responseJson.message[i]}" class="results-image">`
    )
    $('.results').removeClass('hidden');
  }

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    const dog=$('.number').val();
    if(dog <= 0){
      alert('Cannot be less than 0')
    } else if(dog > 50){
      alert('Cannot be more than 50')
    } else {
      getDogImage(dog);
    }
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});
