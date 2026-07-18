function calculateSum() {

  const value1Raw = document.getElementById('value1').value;
  const value2Raw = document.getElementById('value2').value;

  const value1 = value1Raw.replace(",", ".");
  const value2 = value1Raw.replace(",", ".");
  

  if (value1 === "" ||  value2 === "" ) {
    throw new Error("Preencha os campos para realizar a soma.")
  }

  const result = Number(value1) + Number(value2);
  return result;

}

function displayResult(result) {
  document.getElementById("result").innerHTML = `Resultado: ${result}`
}

function sum() {
  try {
    const result = calculateSum();
    displayResult(result);
  }
  catch (error) {
    displayResult(error.message);
  }
  finally{
    value1.value = "";
    value2.value = "";  
  }

}

window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
};

