/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let cost_per_day = 0 ;
let number_of_days = 0;

let monday = document.getElementById('monday');
let tuesday = document.getElementById('tuesday');
let wednesday = document.getElementById('wednesday');
let thursday = document.getElementById('thursday');
let friday = document.getElementById('friday');

let clear_button = document.getElementById('clear-button');
let half_day_button = document.getElementById('half');
let full_day_button = document.getElementById('full');

full_click();


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
// MONDAY 
function monday_click()
{
    monday.classList.add('clicked');
    calculate();
}
monday.addEventListener('click',monday_click);

// TUESDAY 
function tuesday_click()
{
    tuesday.classList.add('clicked');
    calculate();
}
tuesday.addEventListener('click',tuesday_click);

// WEDNESDAY 
function wednesday_click()
{
    wednesday.classList.add('clicked');
    calculate();
}
wednesday.addEventListener('click',wednesday_click);

// THURSDAY 
function thursday_click()
{
    thursday.classList.add('clicked');
    calculate();
}
thursday.addEventListener('click',thursday_click);

//  FRIDAY     
function friday_click()
{
    friday.classList.add('clicked');
    calculate();
}
friday.addEventListener('click',friday_click);



/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function clear_click()
{
    monday.classList.remove('clicked');
    tuesday.classList.remove('clicked');
    wednesday.classList.remove('clicked');
    thursday.classList.remove('clicked');
    friday.classList.remove('clicked');

    cost_per_day = 0;
    number_of_days = 0;

    calculate();
}

clear_button.addEventListener('click',clear_click);




/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

function half_click()
{
    cost_per_day = 20;
    half_day_button.classList.add('clicked');
    full_day_button.classList.remove('clicked');

    calculate();
}
half_day_button.addEventListener('click',half_click);


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function full_click()
{
    cost_per_day = 35;
    full_day_button.classList.add('clicked');
    half_day_button.classList.remove('clicked');

    calculate();
}
full_day_button.addEventListener('click',full_click);


/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function calculate()
{
    number_of_days = 0;
    
    if (monday.classList.contains('clicked') == true)
    {number_of_days += 1;}
    if (tuesday.classList.contains('clicked') == true)
    {number_of_days += 1;}
    if (wednesday.classList.contains('clicked') == true)
    {number_of_days += 1;}
    if (thursday.classList.contains('clicked') == true)
    {number_of_days += 1;}
    if (friday.classList.contains('clicked') == true)
    {number_of_days += 1;}
    
    let calculated_cost = cost_per_day * number_of_days;
    console.log(calculated_cost);
    document.getElementById('calculated-cost').innerHTML = calculated_cost;
}

console.log(calculate);
