function getDaysOfCurrentMonth(monthIndex=null, yearInput=null){

  const today = new Date();
  const year =  yearInput ? yearInput : today.getFullYear()
  const month = monthIndex || monthIndex === 0 ? monthIndex : today.getMonth()
  const daysInMonth = new Date(year, month+1, 0 ).getDate(); 
  const weeksOfTheMonth = [];

  // loop through every day of the month
  for (let day = 1; day <= daysInMonth; day++) {
 
    const currentDay = new Date(year, month, day)

    // if it's the first day, check if it starts on Sunday, otherwise get the remaining from previous month
    if(day == 1)
    {

      if(currentDay.getDay() !== 0) // 0 = Sunday
      {
        const numberOfDaysNeededTofetch = currentDay.getDay();

        // calculate number of days needed of the previous month
        const numDaysPreviousMonth = new Date(year, month, 0 ).getDate()

        // iterate those days
        for(let dayInLastMonth = (numDaysPreviousMonth-numberOfDaysNeededTofetch)+1; dayInLastMonth <= numDaysPreviousMonth; dayInLastMonth++){
          addToWeeks(new Date(year, month-1, dayInLastMonth), false)          
        }
        
      }

    }

    addToWeeks(currentDay, true)
    
    // if it's the last day, check if it ends on Saturday, otherwise get the remaining from next month
    if(day == daysInMonth)
    {

      if(currentDay.getDay() !== 6) // 6 = Saturday
      {
        const numberOfDaysNeededTofetch = 6-currentDay.getDay();

        for(let dayInNextMonth = 1; dayInNextMonth <= numberOfDaysNeededTofetch; dayInNextMonth++){          
          addToWeeks(new Date(year, month+1, dayInNextMonth), false)
        }
      }

    }

  }

  // add to week array, every array has 7 days max
  function addToWeeks(day, belongsToMonth) {
    const DAYS_IN_WEEK = 7;
    if (weeksOfTheMonth.length === 0 || weeksOfTheMonth[weeksOfTheMonth.length - 1].length % DAYS_IN_WEEK === 0) {
      weeksOfTheMonth.push([{ day, belongsToMonth }]);
    } else {
      weeksOfTheMonth[weeksOfTheMonth.length - 1].push({ day, belongsToMonth });
    }    
  }
  console.warn(weeksOfTheMonth)
  return weeksOfTheMonth;
  
}
