const formInput = document.querySelector('#number');
const weatherToday = document.querySelector('#weatherToday');


function weather() {

  const input = number.value;
  let weatherTodayOutput = "";

  if (input >= 8 && input <= 10) {
    console.log('superb');
    weatherTodayOutput = ' Superb';

  } else if (input == 6 || input == 7) {
    console.log('good');
    weatherTodayOutput = ' Good';

  } else if (input >= 3 && input <= 5) {
    console.log('okay');
    weatherTodayOutput = ' Okay';

  }  else if (input >= 0 && input <= 2) {
      console.log('bad');
      weatherTodayOutput = ' Bad';

  } else {
    console.log('The number you typed in is invalid');
    weatherTodayOutput = ' The number you typed in is invalid';
  }
  
  weatherToday.innerHTML = weatherTodayOutput;
  weatherToday.style.color = "salmon";
  weatherToday.style.fontSize = "20px";
}




