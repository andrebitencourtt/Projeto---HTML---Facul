function validaContato(){

    if(document.meuForm.nome.value==""){
        alert('Preencha o campo Nome.');
        document.meuForm.nome.focus();
        return false;
    }

    if(document.meuForm.email.value==""){
        alert('Preencha o campo E-mail.');
        document.meuForm.email.focus();
        return false;
    }

    if(document.meuForm.telefone.value==""){
        alert('Preencha o campo Telefone.');
        document.meuForm.telefone.focus();
        return false;
    }

    if(document.meuForm.calendario.value==""){
        alert('Preencha o campo Calendário.');
        document.meuForm.calendario.focus();
        return false;
    }

    if(document.meuForm.sexo.value==""){
        alert('Preencha o campo Sexo.');
        return false;
    }

    if(document.meuForm.checkbox.checked==false){
        alert('Preencha o campo Checkbox.');
        return false;
    }

    if(document.meuForm.mensagem.value==""){
        alert('Preencha o campo Mensagem.');
        document.meuForm.mensagem.focus();
        return false;
    }
}

function createButtonEnviar(checkbox){
    
    var elemento = document.getElementById("button");
    
    if(document.meuForm.checkbox.checked==true){
  
        var input = document.createElement("input");
        
        input.setAttribute("type", "submit");
        input.setAttribute("value", "Enviar");
        input.setAttribute("class", "button enviar"); 
        
        elemento.appendChild(input);
        
    }else{

        if (elemento.parentNode)
        elemento.removeChild(elemento.firstChild);
		
    }
}