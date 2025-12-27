// 1 passo: tirar as porcentagens do INSS de acordo com seus salários 
// (soma o result. da porcentagem e depois SUBTRAIR com o salário)

let payment = 3000;
let base_payment;
let ir;


switch (true) {
    case (payment <= 1557):        
        base_payment = payment - (payment * 0.08)
        break;
    case (payment > 1557 && payment <= 2595):
        base_payment = payment - (payment * 0.09)
        break;
    case (payment > 2595 && payment <= 5190):
        base_payment =  payment - (payment * 0.11)
        break;
    case (payment > 5190):
        base_payment = payment - (payment - 570)
        console.log(base_payment)
        break;
}


switch (true) {
    case (base_payment < 1904):
        console.log("You don't need to pay IR.")
        break;
    case (base_payment >= 1904 && base_payment <= 2827):
        ir = (base_payment * 0.075) - 143
        console.log(ir)
        break;
    case (base_payment > 2827 && base_payment <= 3751):
        ir = (base_payment * 0.15) - 355
        break;
    case (base_payment > 3571 && base_payment <= 4664):
        ir = (base_payment * 0.225) - 636
        break;
    case (base_payment > 4664):
        ir = (base_payment * 0.275) - 969
        break;
}

let liquid_salary = base_payment - ir

console.log("You receive a gross salary of " + payment, ".",
"\nApllying the rules of INSS (Brazilian Social Security Institute), you'll have a base salary of " + base_payment, ".",
"\nHowever, you need to pay the IR (Income Tax) of " + ir, "and with this it will total " + liquid_salary, ".")