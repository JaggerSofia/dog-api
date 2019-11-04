'use strict';

function getDogImage(dog) {
    const url = ``
    fetch(url)
        .then(response => {
            if(response.ok) {
                return response.json
            }    
        })
        .then(response => displayResults(responseJson))
}

function displayResults(responseJson) {
    $('.results').html(
        `<img src='${responseJson.message}' class='results-img>`
    )
    $('.results').removeClass('hidden');
}

function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        const dog=$('.number').val();
        getDogImage(dog);
    })
}

$(function() {
    console.log('App loaded! Waiting for submit!');
    watchForm();
})