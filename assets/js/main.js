console.log("start");
//Ispis navBarova
//#region navDisplay

//dodaj linkove i nazive kad smislis
var navLinks = ["#", "#traditions", "#aboutChristmas","#sliderContainer",  "https://sescika.github.io/portfolio/"];
var navTekst= ["Home", "Ideas", "History", "Gallery", "About author"];

let navId = document.getElementById("navigation");
let ispisNavMeni = "<ul>"

for(let i in navLinks){
  ispisNavMeni += `<li><a href="${navLinks[i]}">${navTekst[i]}</a>`;  
}
ispisNavMeni += "</ul>";

navId.innerHTML = ispisNavMeni;
  //#region mobileNavDisplay

  let navMob = document.getElementById("mobileNav");
  let ispisNavMeniMob = "<ul>"

  for(let i in navLinks){
    ispisNavMeniMob += `<li><a href="${navLinks[i]}">${navTekst[i]}</a>`;  
  }

  ispisNavMeni += "</ul>";

  navMob.innerHTML = ispisNavMeniMob;
  //#endregion
  //da bi target about strancie bio blank
  navId.lastChild.lastChild.lastChild.setAttribute("target","_blank");
  navMob.lastChild.lastChild.lastChild.setAttribute("target","_blank");
//#endregion

//Countodwn timer do bozica (25. dec.)
//#region Timer
var countDownDate = new Date("Dec 25, 2022 00:00:00").getTime();
var x = setInterval(function() {

  var currentTime = new Date().getTime();

  let distance = countDownDate - currentTime;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  let countdownDisplay = document.getElementById("countdownDisplay");
  countdownDisplay.innerHTML = `${days}D: ${hours}h: ${minutes}m: ${seconds}s`

  if (distance <= 0) {
    clearInterval(x);
    document.getElementById("countdownDisplay").innerHTML = "HAPPY NEW 2023!!!";
  }
}, 1000);
//#endregion

//Obican slider sa slikama
//#region Slider

let slides = document.getElementsByClassName("slider__slide");
let navlinks = document.getElementsByClassName("slider__navlink");
let currentSlide = 0;

document.getElementById("btnNext").addEventListener("click", () => {
  changeSlide(currentSlide + 1)
});
document.getElementById("btnPrev").addEventListener("click", () => {
  changeSlide(currentSlide - 1)
});

function changeSlide(moveTo) {
  if (moveTo >= slides.length) {moveTo = 0;}
  if (moveTo < 0) {moveTo = slides.length - 1;}
  
  slides[currentSlide].classList.toggle("active");
  navlinks[currentSlide].classList.toggle("active");
  slides[moveTo].classList.toggle("active");
  navlinks[moveTo].classList.toggle("active");
  
  currentSlide = moveTo;
}


document.querySelectorAll('.slider__navlink').forEach((bullet, bulletIndex) => {
  bullet.addEventListener('click', () => {
      if (currentSlide !== bulletIndex) {
          changeSlide(bulletIndex);
      }
  })
})
//#endregion

//Dinamicki genersije jednu od opcija za prikaz
//#region Ideas
var brojac = 0;
generateActivity();
function generateActivity() {
let ideaArray = ['Go ice-skating.', 'Make homemade hot chocolate.', 'Build a snow person.', 'Visit a Christmas tree farm.', 'Listen to Christmas classics.', 'DIY craft something.','Bake from scratch.'];
let ideaDescriptionArray = ['Gather your friends for some winter revelry. Embrace the cold weather and serve up some Hot Buttered Rum with Vanilla Ice Cream Balls and your favorite Christmas cookies for an ice-skating party. No snow? No problem. Throw on a scarf and make it a porch party.',
                    'There is nothing like a mug of homemade hot chocolate on a chilly winter day. Forget the watery prepackaged types and make your own with these hot chocolate recipes. These would even make a great gift, packaged with a mug and some marshmallows!',
                    'Go ahead and feel like a kid again! Do not just send the kids out to play; you need to go out and play with them in the snow, too. Dress your snow man, snow woman, snow dog, snow cat, or snow whatever in real mittens and hats.',
                    "It truly isn't Christmas in your home until you've picked out your tree—and nothing's fresher than cutting it down yourself. Pile whole family in the car to pick out your tree at the local Christmas tree farm, which is a fun way to support local farmers, too.",
                    'It is not Christmas without hearing White Christmas! Put together a playlist of classic holiday hits from Bing Crosby, Frank Sinatra, and Dean Martin, and play it often. After all, the holiday season goes by so fast and you have limited time to enjoy those classic sounds.',
                    'You do not have to be super-crafty to make pretty DIY Christmas ornaments or wreaths. Plus, you and your kids will have a blast making something with your own hands',
                    'Dust off the old recipe books or cards and try your hand at Bubbies latkes, Bubkas potica, or Gammies famous 7-Up cake. Your efforts do not have to be perfect, but this simple act pays homage to your loved ones, especially those who are now gone. If you do not have the family recipe that is been handed down, check out our favorite easy Christmas desserts and Christmas candy to find one that is similar to what you remember.'
];
const BASE_IMG = "assets/img/";
let picArray = ['tradition1.jpg','tradition2.png','tradition3.png', 'tradition4.jpg', 'tradition5.jpg', 'tradition6.jpg', 'tradition7.jpg'];
let trad = document.getElementById('traditions');
let ispisActivity = `<div class = "wrapper">
                      <div class="container p-3 rounded-3">
                        <div class="row">
                          <div class="">
                            <h2>While you wait for Christmas you can take part in some of the Christmas activities</h2>
                            <hr>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-lg-6 factText p-5 border-left">
                            <h3>${ideaArray[brojac]}</h3>
                            <p class='p-3'>${ideaDescriptionArray[brojac]}</p>
                          </div>
                          <div class=" col-lg-6 factImg d-flex justify-content-center align-items-center">
                            <img src="${BASE_IMG}${picArray[brojac]}" alt="randomslika1" class="img-fluid rounded-3 border border-dark"/>
                          </div>
                        </div>
                      </div>
                    </div>`
trad.innerHTML = ispisActivity;

if(brojac <= 5) {
  brojac++;
}
else {
  brojac = 0;
}
}
setInterval(generateActivity, 4500);
//#endregion


//#region jQuery code
$(document).ready(function() {
  //#region HamburgerMenu
  $("#hamburger").click(function() {
      $("#mobileNav").slideToggle(500);
  });
  //#endregion

  //#region BttBtn
  var btn = $('#bttBtn');
  
  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '100');
  });
  //#endregion
  
  //#region Tabs
  $('#info div:not(:first)').hide();

  $('#info-nav li').click(function(e) {
    $('#info div').hide();
    $('#info-nav .current').removeClass("current");
    $(this).addClass('current');
    
    var clicked = $(this).find('a:first').attr('href');
    $('#info ' + clicked).fadeIn('fast');
    e.preventDefault();
  }).eq(0).addClass('current');
  //#endregion
  
});
//#endregion