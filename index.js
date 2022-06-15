const cpf = "07505046179";


function validaCPF(cpf){
  const cpf_valido = /^(([d]{3}.[d]{3}.[d]{3}-[d]{2}))$/;

  if(cpf_valido.test(cpf) == false){
    cpf = cpf.replace(/\D/g, "");

    if (cpf.length == 11){
      cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
      cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
      cpf = cpf.replace(/(\d{3})(\d{1,2})/, "$1-$2");

      console.log("CPF Valido: ", cpf);
    }
    else
      console.log("CPF invalido");
  }
  else
    console.log("CPF invalido");
}




validaCPF(cpf);
