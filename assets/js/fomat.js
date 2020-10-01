


function Start(timeout) {
  setTimeout(ChangeImages, timeout);
}
let Images = ['url("https://cdn.tgdd.vn/2020/09/banner/iphone-hotsale-800-300-800x300-3.png")', 
'url("https://cdn.tgdd.vn/2020/09/banner/800-300-800x300-5.png")',
'url("https://cdn.tgdd.vn/2020/09/banner/800-300-800x300-23.png")',
'url("https://cdn.tgdd.vn/2020/09/banner/800-300-800x300-25.png")'];
 let image = document.getElementById("banner-img");

function ChangeImages(){
   if (image.style.backgroundImage == Images[0]){
     image.style.backgroundImage = Images[1];
     Start(2000);
   }
   else if (image.style.backgroundImage == Images[1]){
     image.style.backgroundImage = Images[2];
     Start(2000);
   }
   else if (image.style.backgroundImage == Images[2]){
     image.style.backgroundImage = Images[3];
     Start(2000);
   }
   else if (image.style.backgroundImage == Images[3]){
     image.style.backgroundImage = Images[0];
     Start(2000);
   }
}

Start(1000);




