var date = 44;
var eventDescription;
var entryID;

function initCalendarGrid() {

}

function getDate() {

}

function displayDate(entryID) {

}

function getDescription() {
  console.log("getDescription reached");
  eventDescription = document.getElementById('description').nodeValue;
  
  date = document.getElementById('dateSelect').value;
  date = +date;
  console.log(date);
  console.log(eventDescription);
    (function (){
      document.getElementById(date).innerHtml = eventDescription;
      console.log("inner func reached");
    })();

}

function displayDescription(entryID) {

}