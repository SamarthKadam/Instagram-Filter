"use strict";
const Start = document.querySelector(".HomePage");
const spinner = document.querySelector(".spinner");
const ReelPage = document.querySelector(".ReelPage");
const Video = document.querySelector("#videoPlayer");
const stor = document.querySelector(".story");
const images = document.querySelector(".backGr");
const reelbutton = document.querySelector(".button1");
const allfilters = document.querySelector(".filter");
const iconflip = document.querySelector(".icon");
const FilterCover = document.querySelector(".FilterBlockScope");
const PFilters=document.querySelector('.ParentFilter');
let ReelAnswers;

let linearGrad = [
  "https://www.itl.cat/pngfile/big/99-992191_wallpaper-linear-gradient-green-blue-spring-green-dark.jpg",
  "/Asset/gradienta-LeG68PrXA6Y-unsplash.jpg",
];

class App {
  timerfilter;
  constructor() {
    this._getReuqestfromMedia();
    iconflip.addEventListener("click", this._CamNot);
    allfilters.addEventListener("mousedown", this._startfilter.bind(this));
  }

  _CamNot() {
    alert("Buddy Back Camera not available");
  }
  _ClearInDiv(parent)
  {
    parent.innerHTML='';
  }
  _insertInsideElement(html, parent) {
    this._ClearInDiv(parent);
    parent.insertAdjacentHTML('beforeend',html);
  }

  _CurrentActiveFilter(val) {
    let filters = [
      `<div class="quetion">
    WHERE IS YOUR SOUL MATE?
    <div class="arrow-left"></div>
  </div>
  <div class="answer">
    <div class="arrow-right"></div>
    <img
      src="/Asset/outline_location_on_white_24dp.png"
      alt=""
    /><span class="ReelAnswer">North Korea</span>
  </div>`,
 `<div class="question-die-reel">This filter tells what age you will die</div>
  <div class="answer-die-reel">6</div>`,
  ` <div class="quetion-reel-3">
  What emoji are you
  <img src="/Asset/emojis/emoji-10.png" class="emoji-Adjust Emoji" alt="">
  <div class="indicatediv"></div>
</div>`
    ];
    if (val == 1) {
      let trash=0;
      let count=0;
      let countries=['Tokyo','London','New York','Paris','Beijing','Shanghai','Los Angeles','Madrid','Barcelona','Chicago','Amsterdam','Bangkok','Sydney','Melboune','Moscow','Mexico City','Mumbai','Berlin','Lisbon','Denmark','Sweden','Ukraine'];
      this._insertInsideElement(filters[val-1],PFilters);
      FilterCover.classList.remove("hidden");
      ReelAnswers=document.querySelector('.ReelAnswer');
     this.timerfilter=setInterval(() => {
       if(count===70)
       {
         let randomnum=Math.ceil(Math.random()*countries.length);
         ReelAnswers.innerHTML=countries[randomnum-1];
         let answerbackground=document.querySelector('.answer');
         let arrowright=document.querySelector('.arrow-right');
         answerbackground.style.backgroundColor = "#FF5733";
         arrowright.style.borderLeft="10px solid #FF5733";
         clearInterval(this.timerfilter);
         return;
       }
        trash=trash%19;
        ReelAnswers.innerHTML=countries[trash];
        trash=trash+1;
        count++;
      },100);
    }
    if(val==2)
  {
    let count=0;
    this._insertInsideElement(filters[val-1],PFilters);
    let answerdeath=document.querySelector('.answer-die-reel');
    FilterCover.classList.remove('hidden');
    this.timerfilter=setInterval(() => {
      let random=Math.ceil(Math.random()*100)+1;
      answerdeath.innerHTML=random;
      count++;
      if(count===70)
      {
        clearInterval(this.timerfilter);
        if(random<=50)
        {
          answerdeath.style.color='#C3272B';
        }
        if(random>50)
        {
          answerdeath.style.color='#26C281';
        }
        return;
      }
    },100);
  }
  if(val==3)
  {
    let count=0;
    let images=16;
    this._insertInsideElement(filters[val-1],PFilters);
    let emojiimg=document.querySelector('.Emoji');
    FilterCover.classList.remove('hidden');
    this.timerfilter=setInterval(() => {
      emojiimg.src=`/Asset/emojis/emoji-${(count+1)%images}.png`
      count++;
      if(count===80)
      {
        let mathrandom=Math.ceil(Math.random()*16);
        emojiimg.src=`/Asset/emojis/emoji-${mathrandom-1}.png`;
        clearInterval(this.timerfilter);
      }
    }, 100);

  }

  }
  _startWaitTimer() {
    setTimeout(() => {
      Start.classList.add("hidden");
      ReelPage.classList.remove("hidden");
    }, 3000);
    setTimeout(() => {
      Start.classList.add("transition");
    }, 2000);
  }

  _startfilter(e) {
    function mouseDown(item) {
      item.classList.add("movingAnimation");
    }

    function mouseUp(item) {
      FilterCover.classList.add("hidden");
      this._ClearInDiv(PFilters);
      item.classList.remove("movingAnimation");
      clearInterval(this.timerfilter);
    }

    function mouseleaving (item) {
      FilterCover.classList.add("hidden");
      item.classList.remove("movingAnimation");
      clearInterval(this.timerfilter);
    }

    let item = e.target.closest(".reelbutton");
    if(!item)
    {
      return;
    }
    this._CurrentActiveFilter(item.dataset.indexnumber);
    mouseDown(item);
    item.addEventListener("mouseup",mouseUp.bind(this,item));
    item.addEventListener("mouseleave",mouseleaving.bind(this,item));
  }

  _getReuqestfromMedia() {
    const isit = new Promise((resolve, reject) => {
      resolve(navigator.mediaDevices.getUserMedia({ video: true }));
    });

    this._ContinueData(isit);
  }

  async _ContinueData(isit) {
    isit
      .then((data) => {
        this._startWaitTimer();
        Video.srcObject = data;
        Video.play();
        let random = Math.trunc(Math.random() * 2);
        images.src = linearGrad[random];
      })
      .catch((error) => {
        console.error("Resolving the error");
        alert("Please Enable the Media Acess");
        console.error(error);
      });
  }
}

const Insta = new App();

// const Starttimming=function()
// {
//     setTimeout(()=>{
//         Start.classList.add('hidden');
//         ReelPage.classList.remove('hidden');
//     },3000)
//     setTimeout(()=>{
//         Start.classList.add('transition')
//     },2000)
// }

// const isit=new Promise((resolve,reject)=>{
//     resolve(navigator.mediaDevices.getUserMedia({video:true}));
// })

// isit.then((data)=>{
//     Starttimming();
//     Video.srcObject=data;
//     Video.play();
//     let random= Math.trunc(Math.random()*2);
//     console.log(random);
//     images.src=linearGrad[random];

// }).catch((error)=>{
//     console.error("Resolving the error");
//     alert("Please Enable the Media Acess");
//      console.error(error);
// })

// function mouseDown(item)
// {
//         item.classList.add('movingAnimation');
// }

// function mouseUp(item)
// {
// item.classList.remove('movingAnimation');
// }

// allfilters.addEventListener('mousedown',function(e){
//    let item=e.target.closest('.reelbutton');
//    console.log(item);
//    console.log(item.dataset.indexnumber);
//    mouseDown(item);
//    item.addEventListener('mouseup',function(e){
//        mouseUp(this)
//    })
//    item.addEventListener('mouseleave',function(e){
//        this.classList.remove('movingAnimation');
//    })
// })

// iconflip.addEventListener('click',function(){
//     alert("Buddy Back Camera not available");
// })

// const Addfilters=()=>
// {
//     console.log("Added the Filters to be added");
// }
