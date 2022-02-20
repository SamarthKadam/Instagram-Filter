'use strict';
const Start=document.querySelector('.HomePage');
const spinner=document.querySelector('.spinner');
const ReelPage=document.querySelector('.ReelPage');
console.log(ReelPage);
console.log(spinner);


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
    console.log("This is after");
}).catch((error)=>{
    alert("Please Enable the Media Acess");
     console.error(error);
})





















// if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)
// {
//     console.log(navigator.mediaDevices.getUserMedia({video:true}));
//     navigator.mediaDevices.getUserMedia({video:true}).then((data)=>{
//         console.log(navigator.mediaDevices.getUserMedia({video:true}));
//         Starttimming();
//     });
// }
// else{
//     alert("Please allow Devices access");
// }

