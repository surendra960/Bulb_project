const btn = document.querySelector('#btn');
const bulb = document.querySelector('#bulb_off');

// function kaamka(){
//     if(btn.src.match(/off/))
//     {
//         bulb_off.src = './bulb_on.gif';
//     }
// }

btn.addEventListener('click' , function(){
    if(bulb.src.match('off'))
    {
        console.log('onnnnnn');
       bulb.src = './pic_bulbon.gif';
       btn.innerHTML='Turn Off ';

     }
     else{
         bulb.src = './pic_bulboff.gif';
         btn.innerHTML='Turn ON ';
     }
});
