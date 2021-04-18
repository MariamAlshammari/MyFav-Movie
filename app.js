 
var disneyPrincessname;

var favMov= function(){

disneyPrincessname = prompt('Hello, please enter your fav disney Princess name cinderella or snow white !');




while(disneyPrincessname !== 'cinderella'&& disneyPrincessname !== 'snow white'){
  disneyPrincessname = prompt('Please enter the name cinderella  or snow white');
}
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