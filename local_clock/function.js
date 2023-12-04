 const Time = document.getElementById('clock');
 setInterval(function(){
    let date = new Date();
    Time.innerHTML = date.toLocaleTimeString();
 },1000);