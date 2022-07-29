function float(){
    var num1 = parseFloat(document.calculadora.primernumero.value);
    var num2 = parseFloat(document.calculadora.segundonumero.value);
    var num3 = parseFloat(document.calculadora.tercernumero.value);

    if (num1>num2 & num2>num3){
      document.calculadora.mayor.value=num1;
      document.calculadora.intermedio.value=num2;
      document.calculadora.menor.value=num3;
    }
else if (num1<num2 & num2<num3){
      document.calculadora.mayor.value=num3;
      document.calculadora.intermedio.value=num2;
      document.calculadora.menor.value=num1;
}
    if (num2>num1 & num1>num3){
      document.calculadora.mayor.value=num2;
      document.calculadora.intermedio.value=num1;
      document.calculadora.menor.value=num3;
    }
    else if (num2<num1 & num1<num3){
      document.calculadora.menor.value=num2;
      document.calculadora.intermedio.value=num1;
      document.calculadoramayor.value=num3;
    }
      if (num3>num1 & num1>num2){
        document.calculadora.mayor.value=num3;
        document.calculadora.intermedio.value=num1;
        document.calculadora.menor.value=num2;
      }
      else if (num3<num1 & num1<num2){
        document.calculadora.menor.value=num3;
        document.calculadora.intermedio.value=num1;
        document.calculadora.mayor.value=num2;
      }

        if (num1==num2 & num2==num3){
          alert ("TODOS LOS NUMEROS SON IGUALES");


        }
      

    


}
