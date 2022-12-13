console.log("start");
var errNum = 0;
window.onload = function() {
  let btn = document.getElementById("submitBtn");
  btn.addEventListener("click", formValidation);
}
//Ispis navBarova
//#region navDisplay

//dodaj linkove i nazive kad smislis
var navLinks = ["#", "#traditions", "#aboutChristmas","#sliderContainer", "#formContainer", "https://sescika.github.io/portfolio/"];
var navTekst= ["Home", "Ideas", "History", "Gallery", "Send wishes", "About author"];

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
                          <h2>While you wait for Christmas you can take part in some of the Christmas activities</h2>
                          <hr>
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

//Forma create elements
//#region Kreiranje forme
let formHolderId = document.getElementById("formContainer");
  //#region form creation
  //createForm
  let cForm = document.createElement("form");
  document.getElementById("formPart").appendChild(cForm);
  cForm.setAttribute("id", "forma");
  //Create Sender
    //SenderName
      //sender label
      let cSenderNameLabel = document.createElement("label");
      let cSenderNameLabelNode = document.createTextNode("Your name: ");
      cSenderNameLabel.appendChild(cSenderNameLabelNode);
      cSenderNameLabel.setAttribute("for","senderName");
      //sender input
      let cSenderName = document.createElement("input");
    
      cSenderName.setAttribute("type", "text");
      cSenderName.setAttribute("name", "senderName");
      cSenderName.setAttribute("id", "senderName");
      cSenderName.setAttribute("placeholder", "From...");
    //email
      //email label
      let cSenderEmailLabel = document.createElement("label");
      let cSenderEmailNode = document.createTextNode("Your email: ");
      cSenderEmailLabel.setAttribute("for","senderId");
      cSenderEmailLabel.appendChild(cSenderEmailNode);

      //email input
      let cSenderEmail = document.createElement("input");
      cSenderEmail.classList.add("form-control");
      cSenderEmail.setAttribute("type", "email");
      cSenderEmail.setAttribute("id", "senderId");
      cSenderEmail.setAttribute("placeholder", "example@gmail.com");

    //textarea
    let cTextArea = document.createElement("textarea");
    cTextArea.setAttribute("name", "textarea");
    cTextArea.setAttribute("id", "textarea");
    cTextArea.setAttribute("rows", "10");
    cTextArea.setAttribute("cols", "30");
    cTextArea.setAttribute("placeholder", "Write something to send...");
  //CreateReciever
    //email
      //email label
      let cRecieverEmailLabel = document.createElement("label");
      let cRecieverEmailNode = document.createTextNode("Who are you sending email to: ");
      cRecieverEmailLabel.setAttribute("for","recieverId");
      cRecieverEmailLabel.appendChild(cRecieverEmailNode);
      //email input
      let cRecieverEmail = document.createElement("input");
      cRecieverEmail.setAttribute("type", "email");
      cRecieverEmail.setAttribute("id", "recieverId");
      cRecieverEmail.setAttribute("placeholder", "example@gmail.com");
  //CreateTos
    //label
    let cTosLabel = document.createElement("label");
    let cTosLabelNode = document.createTextNode("By checking this you agree to the following");
    cRecieverEmailLabel.setAttribute("for","cbTos");
    cTosLabel.appendChild(cTosLabelNode);
    cTosLabel.innerHTML += "<a href='https://www.google.com/' target='_blank'><strong>Terms of service</strong></a>";
    //checkbox
    let cCheckBox = document.createElement("input");
    cCheckBox.setAttribute("type","checkbox");
    cCheckBox.setAttribute("id", "cbTos");
    cCheckBox.setAttribute("value", "tos");
    cCheckBox.setAttribute("name", "cbTos");
    
  //#region Rb
  //radiobuttons
  let div7 = document.createElement('div');
  div7.classList.add("mb-4");

  let divrb1 = document.createElement('div');
  divrb1.classList.add("form-check");

  let cRadio1 = document.createElement('input');
  cRadio1.classList.add("form-check-input");

  cRadio1.setAttribute("type", "radio");
  cRadio1.setAttribute("name", "rbType");
  cRadio1.setAttribute("id", "rbCard");
  cRadio1.setAttribute("value", "C");
  divrb1.appendChild(cRadio1);

  let labelRb1 = document.createElement("label");
  labelRb1.classList.add("me-3");
  let labelRb1TextNode = document.createTextNode("Card");
  labelRb1.appendChild(labelRb1TextNode);
  labelRb1.setAttribute("for","rbCard");
  divrb1.appendChild(labelRb1);

  div7.appendChild(divrb1);

  let divrb2 = document.createElement('div');
  divrb2.classList.add("form-check");

  let cRadio2 = document.createElement('input');
  cRadio2.classList.add("form-check-input");
  cRadio2.setAttribute("type", "radio");
  cRadio2.setAttribute("name", "rbType");
  cRadio2.setAttribute("id", "rbGift");
  cRadio2.setAttribute("value", "G");
  divrb2.appendChild(cRadio2);

  let labelRb2 = document.createElement("label");
  let labelRb2TextNode = document.createTextNode("Gift");
  labelRb2.appendChild(labelRb2TextNode);
  labelRb2.setAttribute("for","rbGift");
  divrb2.appendChild(labelRb2);
  div7.appendChild(divrb2);
  //#endregion

  //#region ddl

  let div8 = document.createElement('div');
  div8.classList.add("mb-4");

  let ddlValues = ["0", "S", "V"];
  let ddlText = ["Select one", "Stylish", "Vintage"];

  let sel = document.createElement('select');
  sel.setAttribute("id", "ddlStyle");
  sel.classList.add("form-select");

  for(let i in ddlValues) 
  {
    let temp = document.createElement('option');
    temp.setAttribute("value",`${ddlValues[i]}`);
    temp.innerHTML = ddlText[i];
    sel.appendChild(temp);
  }

  div8.appendChild(sel);

  //#endregion
  //Create Submit
  let cSubmitBtn = document.createElement("input");
  cSubmitBtn.setAttribute("type", "button");
  cSubmitBtn.setAttribute("id", "submitBtn");
  cSubmitBtn.setAttribute("value", "Send!");
  //#endregion
  //#region appending   
  let div1 = document.createElement("div");
  div1.classList.add("mb-4");
  cSenderNameLabel.classList.add("form-label");
  div1.appendChild(cSenderNameLabel);
  cSenderName.classList.add("form-control");
  div1.appendChild(cSenderName);
  let p1 = document.createElement('p');
  p1.classList.add("alert", "alert-danger", "mt-3", "hide");
  div1.appendChild(p1);
  cForm.appendChild(div1);

  let div2 = document.createElement("div");
  div2.classList.add("mb-4");
  div2.appendChild(cSenderEmailLabel);
  cSenderEmailLabel.classList.add("form-label");
  div2.appendChild(cSenderEmail);
  cSenderEmail.classList.add("form-control");
  let p2 = document.createElement('p');
  p2.classList.add("alert", "alert-danger", "mt-3", "hide");
  div2.appendChild(p2);
  cForm.appendChild(div2);

  let div3 = document.createElement("div");
  div3.classList.add("mb-4");
  div3.appendChild(cTextArea);
  cTextArea.classList.add("form-control");
  let p3 = document.createElement('p');
  p3.classList.add("alert", "alert-danger", "mt-3", "hide");
  div3.appendChild(p3);
  cForm.appendChild(div3);

  let div4 = document.createElement("div");
  div4.classList.add("mb-4");
  div4.appendChild(cRecieverEmailLabel);
  cRecieverEmailLabel.classList.add("form-label");
  div4.appendChild(cRecieverEmail);
  cRecieverEmail.classList.add("form-control");
  let p4 = document.createElement('p');
  p4.classList.add("alert", "alert-danger", "mt-3", "hide");
  div4.appendChild(p4);
  cForm.appendChild(div4);

  let p7 = document.createElement('p');
  p7.classList.add("alert", "alert-danger", "mt-3", "hide");
  div7.appendChild(p7);
  cForm.appendChild(div7);

  let p8 = document.createElement('p');
  p8.classList.add("alert", "alert-danger", "mt-3", "hide");
  div8.appendChild(p8);
  cForm.appendChild(div8);

  let div5 = document.createElement("div");
  div5.classList.add("mb-4");
  div5.appendChild(cCheckBox);
  cCheckBox.classList.add("me-2");
  div5.appendChild(cTosLabel); 
  cTosLabel.classList.add("form-label");
  let p5 = document.createElement('p');
  p5.classList.add("alert", "alert-danger", "mt-3", "hide");
  div5.appendChild(p5);
  cForm.appendChild(div5);

  let div6 = document.createElement("div");
  div6.classList.add("mb-4");
  div6.appendChild(cSubmitBtn);
  cSubmitBtn.classList.add("form-control");
  let p6 = document.createElement('p');
  p6.classList.add("alert", "alert-danger", "mt-3", "hide");
  div6.appendChild(p6);
  cForm.appendChild(div6);
  
  //#endregion
//#endregion

//Obrada forme
//#region obrada forme
function formValidation() {
  //dohvatanje elemenata forme
  let objName, objSmail, objTxt, objRmail, arrType, objStyle, arrTos;
  objName = document.getElementById("senderName");
  objSmail = document.getElementById("senderId");
  objRmail = document.getElementById("recieverId");
  objTxt = document.getElementById("textarea");
  arrType = document.getElementsByName("rbType");
  objStyle = document.getElementById("ddlStyle");
  arrTos = document.getElementsByName("cbTos");

  //regexi 
  let reSenderName, reEmail;

  reSenderName = /^[A-Z][a-z]{2,16}(\s[A-Z][a-z]{2,16})+$/
  reEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  //email, name
  regexCheck(reSenderName, objName, "Name must be 2 or more characters with first capital letter! eg. John Doe");
  regexCheck(reEmail, objSmail, "Email must be in valid format! eg. someone@gmail.com");
  regexCheck(reEmail, objRmail, "Email must be in valid format! eg. someone@gmail.com");
  

  //textbox
  try {
    if(objTxt.value.length < 15) {
      objTxt.nextElementSibling.classList.remove("hide");
      objTxt.classList.add("redBorder");
      errNum++;
      throw ("Be more creative! (15+ characters)")
    }
    else {
      objTxt.nextElementSibling.classList.add("hide");
      objTxt.nextElementSibling.innerHTML = "";
      objTxt.classList.remove("redBorder");
    }
  }
  catch (err) 
  {
    objTxt.nextElementSibling.innerHTML = err;
  }

  //radiobutton
  let typeValues = "";
  for(let i = 0; i < arrType.length; i++){
    if(arrType[i].checked){
      typeValues = arrType[i].value;
        break;
    }
  }
  try {
    if(typeValues == "") {
      arrType[0].parentElement.parentElement.lastChild.classList.remove("hide");
      errNum++;
      throw("Pick either Gift or Card!");
    }
    else {
      arrType[0].parentElement.parentElement.lastChild.classList.add("hide");
      arrType[0].parentElement.parentElement.lastChild.innerHTML = "";
    }
  }
  catch (err) 
  {
    arrType[0].parentElement.parentElement.lastChild.innerHTML = err;
  }
  //checkbox
  let tosValue = "";
  if(arrTos[0].checked) {
    tosValue = arrTos[0].value;
  }

  try {
    if(tosValue == "") {
      arrTos[0].nextElementSibling.nextElementSibling.classList.remove("hide");
      errNum++;
      throw ("You must agree to the following.")
    }
    else {
      arrTos[0].nextElementSibling.nextElementSibling.classList.add("hide");
      arrTos[0].nextElementSibling.nextElementSibling.innerHTML = "";
    }
  }
  catch (err) {
    arrTos[0].nextElementSibling.nextElementSibling.innerHTML = err;
  }
  //select
  let styleValue = objStyle.options[objStyle.options.selectedIndex].value;
  try {
    if(styleValue == "0")
    {
      objStyle.nextElementSibling.classList.remove("hide");
      objStyle.classList.add("redBorder");
      errNum++;
      throw("Select style!");
    }
    else{
      objStyle.nextElementSibling.classList.add("hide");
      objStyle.classList.remove("redBorder");
      objStyle.nextElementSibling.innerHTML = "";
    } 
  }
  catch (err) {
    objStyle.nextElementSibling.innerHTML = err;
  }
}
function regexCheck(re, obj, message){
  if(!re.test(obj.value))
  {
    obj.nextElementSibling.classList.remove("hide");
    obj.nextElementSibling.innerHTML = message;
    obj.classList.add("redBorder");
    errNum++;
  }
  else{
    obj.nextElementSibling.classList.add("hide");
    obj.nextElementSibling.innerHTML = "";
    obj.classList.remove("redBorder");
  }
}

//#endregion

//Footer ispis
//#region Footer
let objFooter = document.getElementById('footer');
let ispisFooter = `<div class = "wrapper">
                      <div class="container">
                        <div class="row">
                          <div class="col-12 fIcons d-flex justify-content-center align-items-center justify-content-md-end">
                            <a href="#"><i class="fa-solid fa-sitemap"></i></a>
                            <a href="#" class="mx-md-5 ms-3"><i class="fa-solid fa-book"></i></a>
                          </div>
                        </div>
                        <hr>
                        <div class="row">
                          <div class="copy">
                            <h4>Lazar Pelanović 2022 &copy;</h4>
                          </div>
                        </div>
                      </div>
                    </div>`
objFooter.innerHTML = ispisFooter;


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

  $("#textarea").css("resize", "none");
  
});
//#endregion