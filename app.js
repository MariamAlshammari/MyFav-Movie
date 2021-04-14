console.log('hello');


 console.log('hello Mariam');


console.log(3*3+8);

var theName='Mariam';





alert('Welcome in my page!');


var userName = prompt('please enter your name:');
console.log(userName);


var userAge=prompt('please enter your Age:');

if(userAge >= 18){
  alert('you can see my website');
 }else{
   alert('sorry you are under age');
   
 }





var timeNow= prompt('please enter the time now');

if(timeNow >= 18){
  document.write('Good Evening');
  document.write('<img src="https://www.desicomments.com/dc3/21/445056/4450561.png">');
}else if(timeNow >= 12){
  document.write('Good Afternoon');
  document.write('<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcXhO0Se5wrdMBpNwdgNPmZTFbYDoJlqg4AQ&usqp=CAU">')
}else if (timeNow >= 0){
  document.write('Good Morning');
  document.write('<img src="https://alamphoto.com/wp-content/uploads/2017/12/Good-morning-images-70-623x934.jpg">')

}
else{alert('Please try enter time again!');}

var txt;
var r = confirm("Are you sure to open this page!");
if (r == true) {
  txt = "You pressed OK!";
} else {
  txt = "You pressed Cancel!";
}