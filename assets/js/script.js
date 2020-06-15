
// If you can see 'Hello, World!' in the console, then you can remove this and replace it your code
//console.log('Hello, World!');
// YOUR JS CODE GOES HERE
//var today = new Date();
//var date = today.getFullYear() + '-' + (today.getMonth()+1) + '-' + today.getDate();
//var time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
//var amPm = 
//var dateTime = date + '' + time;
//var dateTime = document.getElementById("dateTime").innerHTML = dateTime.toLocalDateString();
//console.log(dateTime.toLocalDateString('en-US'));

$(document).ready(function() {
    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth() + 1;
    var day = d.getDate();
    


    var totalDays = new Date(year, month, 0).getDate();

    var output = (month < 10 ? '0' : '') + month + '/' + (day < 10 ? '0' : '') + day + '/' + year;
    
})



