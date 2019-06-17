// DOM elements

const time=document.getElementById('time');
greeting=document.getElementById('greeting');
name=document.getElementById('name');
focus=document.getElementById('focus');

//show time
function showTime()
{
	let today=new Date(),
	hour=today.getHours(),
	min=today.getMinutes(),
	sec=today.getSeconds();

	//Set AM or PM
	const amPm=hour >= 12 ? 'PM' : 'AM';

	//12 hr format
	hour=hour%12 || 12;

	//output time
	time.innerHTML=`${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

setTimeout(showTime,1000);
}

//add zeors
function addZero(n) {
	return (parseInt(n)<10?'0' : '')+n;
}


//set background and greeting
function setBgGreet(){
	let today=new Date(),
	hour=today.getHours();
	if(hour<12){
		//morning
		document.body.style.backgroundImage="url('./img/morning.jpg')";
		greeting.textContent='Good Morning';
		document.body.style.backgroundRepeat="no-repeat";
		document.body.style.backgroundSize="cover";
	}
	else if(hour<18){
		//Afternoon
		document.body.style.backgroundImage="url('./img/afternoon.jpg')";
		greeting.textContent='Good Afternoon';

	}
	else
	{
		document.body.style.backgroundImage="url('./img/night.jpg')";
		greeting.textContent='Good Evening';
		document.body.style.color='white';
	}
}

//Get name
function getName(){
	if(localStorage.getItem('name') === null){
		name.textContent='[Enter Name]';

	}
	else{
		name.textContent=localStorage.getItem('name');
	}
}

//setname
/*function setName(e) {
	if(e.type==='keypress'){
		//make sure enter is pressed
		if(e.which==13 || e.keyCode==13)
		{
			localStorage.setItem('name',e.target.innerText);
			//name.blur();
		}
	}	else{
		localStorage.setItem('name',e.target.innerText);
	}
}
*/
function getFocus(){
	if(localStorage.getItem('focus') === null){
		focus.textContent='[Enter Focus]';
	}
	else{
		focus.textContent=localStorage.getItem('focus');
	}
}

//name.addEventListener('keypress',setName);
//name.addEventListener('blur',setName);
//run
showTime();
setBgGreet();
getName();
getFocus();