const hamburgerMenu = document.querySelector('.hamburger-menu')
const mainNav = document.querySelector('.main-nav')

hamburgerMenu.addEventListener('click', function () {
  mainNav.classList.toggle('hidden')
})

var splide = new Splide('.splide')
var bar = splide.root.querySelector('.my-carousel-progress-bar')

// Updates the bar width whenever the carousel moves:
splide.on('mounted move', function () {
  var end = splide.Components.Controller.getEnd() + 1
  var rate = Math.min((splide.index + 1) / end, 1)
  bar.style.width = String(100 * rate) + '%'
})

splide.mount()
//  architecture portfolio
function arch1(){
  let detailsshow=document.getElementById("show1");
  detailsshow.classList.toggle("hidden");
}
function arch2(){
  let detailsshow=document.getElementById("show2");
  detailsshow.classList.toggle("hidden");
}

function arch3(){
  let detailsshow=document.getElementById("show3");
  detailsshow.classList.toggle("hidden");
}

function arch(){
  let detailsshow=document.getElementById("show");
  detailsshow.classList.toggle("hidden");
}
function archA(){
  let detailsshow=document.getElementById("showA");
  detailsshow.classList.toggle("hidden");
}
function archB(){
  let detailsshow=document.getElementById("showB");
  detailsshow.classList.toggle("hidden");
}
function archC(){
  let detailsshow=document.getElementById("showC");
  detailsshow.classList.toggle("hidden");
}
function archD(){
  let detailsshow=document.getElementById("showD");
  detailsshow.classList.toggle("hidden");
}
function archE(){
  let detailsshow=document.getElementById("showE");
  detailsshow.classList.toggle("hidden");
}


//  connections portfolio
function connection(){
  let detailsshow=document.getElementById("c");
  detailsshow.classList.toggle("hidden");
}
function connection1(){
  let detailsshow=document.getElementById("c1");
  detailsshow.classList.toggle("hidden");
}

function connection2(){
  let detailsshow=document.getElementById("c2");
  detailsshow.classList.toggle("hidden");
}

function connection3(){
  let detailsshow=document.getElementById("c3");
  detailsshow.classList.toggle("hidden");
}
function connection4(){
  let detailsshow=document.getElementById("c4");
  detailsshow.classList.toggle("hidden");
}
function connection5(){
  let detailsshow=document.getElementById("c5");
  detailsshow.classList.toggle("hidden");
}
function connection6(){
  let detailsshow=document.getElementById("c6");
  detailsshow.classList.toggle("hidden");
}
function connection7(){
  let detailsshow=document.getElementById("c7");
  detailsshow.classList.toggle("hidden");
}
function connection8(){
  let detailsshow=document.getElementById("c8");
  detailsshow.classList.toggle("hidden");
}



//  DEA portfolio
function dea(){
  let detailsshow=document.getElementById("d");
  detailsshow.classList.toggle("hidden");
}
function dea1(){
  let detailsshow=document.getElementById("d1");
  detailsshow.classList.toggle("hidden");
}

function dea2(){
  let detailsshow=document.getElementById("d2");
  detailsshow.classList.toggle("hidden");
}

function dea3(){
  let detailsshow=document.getElementById("d3");
  detailsshow.classList.toggle("hidden");
}
function dea4(){
  let detailsshow=document.getElementById("d4");
  detailsshow.classList.toggle("hidden");
}
function dea5(){
  let detailsshow=document.getElementById("d5");
  detailsshow.classList.toggle("hidden");
}
function dea6(){
  let detailsshow=document.getElementById("d6");
  detailsshow.classList.toggle("hidden");
}
function dea7(){
  let detailsshow=document.getElementById("d7");
  detailsshow.classList.toggle("hidden");
}
function dea8(){
  let detailsshow=document.getElementById("d8");
  detailsshow.classList.toggle("hidden");
}



//  Structure portfolio
function structure(){
  let detailsshow=document.getElementById("s");
  detailsshow.classList.toggle("hidden");
}
function structure1(){
  let detailsshow=document.getElementById("s1");
  detailsshow.classList.toggle("hidden");
}

function structure2(){
  let detailsshow=document.getElementById("s2");
  detailsshow.classList.toggle("hidden");
}

function structure3(){
  let detailsshow=document.getElementById("s3");
  detailsshow.classList.toggle("hidden");
}
function structure4(){
  let detailsshow=document.getElementById("s4");
  detailsshow.classList.toggle("hidden");
}
function structure5(){
  let detailsshow=document.getElementById("s5");
  detailsshow.classList.toggle("hidden");
}
function structure6(){
  let detailsshow=document.getElementById("s6");
  detailsshow.classList.toggle("hidden");
}
function structure7(){
  let detailsshow=document.getElementById("s7");
  detailsshow.classList.toggle("hidden");
}
function structure8(){
  let detailsshow=document.getElementById("s8");
  detailsshow.classList.toggle("hidden");
}



//  visulization portfolio
function visulization(){
  let detailsshow=document.getElementById("v");
  detailsshow.classList.toggle("hidden");
}
function visulization1(){
  let detailsshow=document.getElementById("v1");
  detailsshow.classList.toggle("hidden");
}

function visulization2(){
  let detailsshow=document.getElementById("v2");
  detailsshow.classList.toggle("hidden");
}

function visulization3(){
  let detailsshow=document.getElementById("v3");
  detailsshow.classList.toggle("hidden");
}
function visulization4(){
  let detailsshow=document.getElementById("v4");
  detailsshow.classList.toggle("hidden");
}
function visulization5(){
  let detailsshow=document.getElementById("v5");
  detailsshow.classList.toggle("hidden");
}
function visulization6(){
  let detailsshow=document.getElementById("v6");
  detailsshow.classList.toggle("hidden");
}
function visulization7(){
  let detailsshow=document.getElementById("v7");
  detailsshow.classList.toggle("hidden");
}
function visulization8(){
  let detailsshow=document.getElementById("v8");
  detailsshow.classList.toggle("hidden");
}


//  retrofitting portfolio
function retrofitting(){
  let detailsshow=document.getElementById("r");
  detailsshow.classList.toggle("hidden");
}
function retrofitting1(){
  let detailsshow=document.getElementById("r1");
  detailsshow.classList.toggle("hidden");
}

function retrofitting2(){
  let detailsshow=document.getElementById("r2");
  detailsshow.classList.toggle("hidden");
}

function retrofitting3(){
  let detailsshow=document.getElementById("r3");
  detailsshow.classList.toggle("hidden");
}
function retrofitting4(){
  let detailsshow=document.getElementById("r4");
  detailsshow.classList.toggle("hidden");
}
function retrofitting5(){
  let detailsshow=document.getElementById("r5");
  detailsshow.classList.toggle("hidden");
}
function retrofitting6(){
  let detailsshow=document.getElementById("r6");
  detailsshow.classList.toggle("hidden");
}
function retrofitting7(){
  let detailsshow=document.getElementById("r7");
  detailsshow.classList.toggle("hidden");
}
function retrofitting8(){
  let detailsshow=document.getElementById("r8");
  detailsshow.classList.toggle("hidden");
}




//  interior portfolio
function interior(){
  let detailsshow=document.getElementById("i");
  detailsshow.classList.toggle("hidden");
}
function interior1(){
  let detailsshow=document.getElementById("i1");
  detailsshow.classList.toggle("hidden");
}

function interior2(){
  let detailsshow=document.getElementById("i2");
  detailsshow.classList.toggle("hidden");
}

function interior3(){
  let detailsshow=document.getElementById("i3");
  detailsshow.classList.toggle("hidden");
}
function interior4(){
  let detailsshow=document.getElementById("i4");
  detailsshow.classList.toggle("hidden");
}
function interior5(){
  let detailsshow=document.getElementById("i5");
  detailsshow.classList.toggle("hidden");
}
function interior6(){
  let detailsshow=document.getElementById("i6");
  detailsshow.classList.toggle("hidden");
}
function interior7(){
  let detailsshow=document.getElementById("i7");
  detailsshow.classList.toggle("hidden");
}
function interior8(){
  let detailsshow=document.getElementById("i8");
  detailsshow.classList.toggle("hidden");
}



//  MEP portfolio
function mep(){
  let detailsshow=document.getElementById("m");
  detailsshow.classList.toggle("hidden");
}
function mep1(){
  let detailsshow=document.getElementById("m1");
  detailsshow.classList.toggle("hidden");
}

function mep2(){
  let detailsshow=document.getElementById("m2");
  detailsshow.classList.toggle("hidden");
}

function mep3(){
  let detailsshow=document.getElementById("m3");
  detailsshow.classList.toggle("hidden");
}
function mep4(){
  let detailsshow=document.getElementById("m4");
  detailsshow.classList.toggle("hidden");
}
function mep5(){
  let detailsshow=document.getElementById("m5");
  detailsshow.classList.toggle("hidden");
}
function mep6(){
  let detailsshow=document.getElementById("m6");
  detailsshow.classList.toggle("hidden");
}
function mep7(){
  let detailsshow=document.getElementById("m7");
  detailsshow.classList.toggle("hidden");
}
function mep8(){
  let detailsshow=document.getElementById("m8");
  detailsshow.classList.toggle("hidden");
}



//  softwarereseller portfolio
function softwarereseller(){
  let detailsshow=document.getElementById("sr");
  detailsshow.classList.toggle("hidden");
}
function softwarereseller1(){
  let detailsshow=document.getElementById("sr1");
  detailsshow.classList.toggle("hidden");
}

function softwarereseller2(){
  let detailsshow=document.getElementById("sr2");
  detailsshow.classList.toggle("hidden");
}

function softwarereseller3(){
  let detailsshow=document.getElementById("sr3");
  detailsshow.classList.toggle("hidden");
}
function softwarereseller4(){
  let detailsshow=document.getElementById("sr4");
  detailsshow.classList.toggle("hidden");
}
function softwarereseller5(){
  let detailsshow=document.getElementById("sr5");
  detailsshow.classList.toggle("hidden");
}
function softwarereseller6(){
  let detailsshow=document.getElementById("sr6");
  detailsshow.classList.toggle("hidden");
}
function softwarereseller7(){
  let detailsshow=document.getElementById("sr7");
  detailsshow.classList.toggle("hidden");
}
function softwarereseller8(){
  let detailsshow=document.getElementById("sr8");
  detailsshow.classList.toggle("hidden");
}
