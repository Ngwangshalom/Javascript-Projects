function displayDay(){
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const todayDay = new Date();

    const todaysDay = days[todayDay.getDay()];


    
    console.log("the day of today is " + todaysDay);
}
displayDay();