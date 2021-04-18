 
<<<<<<< HEAD
var disneyPrincessname;

var favMov= function(){

disneyPrincessname = prompt('Hello, please enter your fav disney Princess name cinderella or snow white !');


=======
var disneyPrincessname = prompt('Hello, please enter your fav disney Princess name cinderella or snow white !');
>>>>>>> 25e81968a3af3aece6cf91403cd9946017dfb91e


while(disneyPrincessname !== 'cinderella'&& disneyPrincessname !== 'snow white'){
  disneyPrincessname = prompt('Please enter the name cinderella  or snow white');
}
<<<<<<< HEAD
}

favMov();

var userChoose;

function showImg(){

if(disneyPrincessname === 'cinderella'){
userChoose='<img src="https://static0.srcdn.com/wordpress/wp-content/uploads/2019/11/Cinderella.jpg">';
}else if (disneyPrincessname === 'snow white'){
  userChoose='<img src="https://e7.pngegg.com/pngimages/606/974/png-clipart-snow-white-princess-aurora-seven-dwarfs-disney-princess-belle-snow-white-seven-dwarfs-disney-princess.png">';
}


var imagesNumber= prompt('How many image do you want???');

for(var i=0 ; i < imagesNumber; i++){
  document.write(userChoose);
}
}
showImg();
=======

var userChoose;

if(disneyPrincessname === 'cinderella'){
userChoose='<img src="https://static0.srcdn.com/wordpress/wp-content/uploads/2019/11/Cinderella.jpg">';
}else if (disneyPrincessname === 'snow white'){
  userChoose='<img src="https://e7.pngegg.com/pngimages/606/974/png-clipart-snow-white-princess-aurora-seven-dwarfs-disney-princess-belle-snow-white-seven-dwarfs-disney-princess.png">';
}


var imagesNumber= prompt('How many image do you want???');

for(var i=0 ; i < imagesNumber; i++){
  document.write(userChoose);
}
>>>>>>> 25e81968a3af3aece6cf91403cd9946017dfb91e
