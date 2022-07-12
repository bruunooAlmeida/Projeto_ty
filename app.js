let button = document.getElementById('button');
let input1  = document.getElementById('input1');
let input2  = document.getElementById('input2');

function somarNumeros(num1, num2){
    if( typeof num1 === 'number' && typeof num2  === 'number'){
        return num1 + num2;
    }else number(num1) + number(num2);
}

button.addEventListener('click', () => {
    console.log(somarNumeros(input1.value , input2.value));
})