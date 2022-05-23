let salario= parseInt(prompt ('digite o seu salário'))
if (salario>1250){
  let aumento=(salario*10/100)+salario;
  alert(aumento)
} else{
    let aumento=(salario*15/100)+salario;
    alert(aumento)
}