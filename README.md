# :calendar: Function to Get Days of Current Month
<p>This function returns an array for each week of the month, containing the days of the current month, as well as any days from the previous and/or next month that is needed to complete the weeks.</p>
<p>It's just the basic to build a simple and lightweight calendar.</p>

## :gear: Usage

` getDaysOfCurrentMonth(monthIndex, year) `

### Parameters
- monthIndex (optional): The month index (0-11) to get the days for. If not provided, it defaults to the current month.
- year (optional): The year to get the days for. If not provided, it defaults to the current year.

### Return Value
<p>The function returns an array of arrays, where each sub-array represents a week of the month and contains up to 7 objects, each with a day and belongsToMonth property.</p>

<p>The day property contains a Date object representing the day of the week, and the belongsToMonth property is a boolean indicating whether the day belongs to the current month (true) or the previous/next month (false).</p>

## :bulb: How it Works
<p>The function loops through every day of the month and adds them to an array weeksOfTheMonth, which is an array of arrays. Each sub-array contains up to 7 days and represents a week in the month.</p>

<p>If the first day of the month is not a Sunday, the function will add the remaining days of the previous month to the first week of the array. Similarly, if the last day of the month is not a Saturday, the function will add the remaining days of the next month to the last week of the array. This is done in order to complete the weeks.</p>

<p>The function uses the addToWeeks function to add each day to the array. The addToWeeks function takes two parameters - day which is the current day being iterated, and belongsToMonth which is a boolean indicating whether the day belongs to the current month or not.</p>

## :rocket: Example

` const days = getDaysOfCurrentMonth(3, 2022); // get days for April 2022
console.log(days); `

<p>This would output an array containing the days for April 2022, including any necessary days from March and May to complete the weeks.</p>
