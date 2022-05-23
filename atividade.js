let velocidade=prompt('Atenção! Digite aqui a velocidade em km/H. Dirija com cuidado.')

if (velocidade>80){
     let multa= (velocidade-80)*5
     alert (`Atenção! a sua velocidade está acima de 80km/h. A sua multa é de R$ ${multa}`);
} else{
    alert ('Muito bem! você está dentro do limite de velocidade.')
}