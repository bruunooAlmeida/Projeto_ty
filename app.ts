let button = document.getElementById('button');
let input1  = document.getElementById('input1');
let input2  = document.getElementById('input2');

function adicionarNumero(num1: number, num2 :number){
        return num1 + num2;
}

if(button){
    button.addEventListener('click', () => {
        console.log(somarNumeros(input1.value , input2.value));
    })

}