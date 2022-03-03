'use strict';
const Start=document.querySelector('.HomePage');
const spinner=document.querySelector('.spinner');
const ReelPage=document.querySelector('.ReelPage');
const Video=document.querySelector('#videoPlayer');
const stor=document.querySelector('.story');
const images=document.querySelector('.backGr');
const reelbutton=document.querySelector('.button1');
const allfilters=document.querySelector('.filter');
const iconflip=document.querySelector('.icon');

let linearGrad=['https://www.itl.cat/pngfile/big/99-992191_wallpaper-linear-gradient-green-blue-spring-green-dark.jpg','/Asset/gradienta-LeG68PrXA6Y-unsplash.jpg'];


const Starttimming=function()
{
    setTimeout(()=>{
        Start.classList.add('hidden');
        ReelPage.classList.remove('hidden');
    },3000)
    setTimeout(()=>{
        Start.classList.add('transition')
    },2000)
}

const isit=new Promise((resolve,reject)=>{
    resolve(navigator.mediaDevices.getUserMedia({video:true}));
})

isit.then((data)=>{
    Starttimming();
    Video.srcObject=data;
    Video.play();
    let random= Math.trunc(Math.random()*2);
    console.log(random);
    images.src=linearGrad[random];
    
}).catch((error)=>{
    console.error("Resolving the error");
    alert("Please Enable the Media Acess");
     console.error(error);
})


function mouseDown(item)
{
        item.classList.add('movingAnimation');
}

function mouseUp(item)
{
item.classList.remove('movingAnimation');
}


allfilters.addEventListener('mousedown',function(e){
   let item=e.target.closest('.reelbutton');
   console.log(item);
   console.log(item.dataset.indexnumber);
   mouseDown(item);
   item.addEventListener('mouseup',function(e){
       mouseUp(this)
   })
   item.addEventListener('mouseleave',function(e){
       this.classList.remove('movingAnimation');
   })
})


iconflip.addEventListener('click',function(){
    alert("Buddy Back Camera not available");
})

const Addfilters=()=>
{
    console.log("Added the Filters to be added");
}














