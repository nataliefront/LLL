// Калькулятор стоимости
let myButton = document.querySelector('.calculator_button');
let myClearButton = document.querySelector('.calculator_button_clear');
let myTotal = document.querySelector('.calculator_total');

let myQuantitys = document.querySelectorAll('.calculator_quantity');
let myCourses = document.querySelectorAll('.calculator_course');

myButton.addEventListener('click', () => {
    let inputValueQuantity = Array.from(myQuantitys).find(element => element.checked == true)
    let inputValueCourse = Array.from(myCourses).find(element => element.checked == true)
    let total = inputValueQuantity.value * inputValueCourse.value
    myTotal.innerText = `Вартість курсу становить ${total} грн`
});

myClearButton.addEventListener('click', function () {
    myTotal.innerText = ''
});


