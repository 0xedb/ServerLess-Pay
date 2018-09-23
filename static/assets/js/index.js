 
const donate = $('#donate');
const donation = $('#donation');
const upper = $('.upper'); 
const img = $('.card-img-top');
console.log(upper);

upper.click(() => {
  console.log('you clicked me'); 
   // img.addClass('animated bounceOut'); 
    upper.style.display = 'none';
});
