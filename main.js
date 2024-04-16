
function verificarTime() {
  
  var continuarPerguntando = true;

  while (continuarPerguntando) {
    
    var respostaTime = prompt("Qual filósofo acredita que tudo flui?");

    
    if (respostaTime.toLowerCase() === "Heráclito de Éfeso") { 
     alert("Correto! pronto para outra pergunta?");
    continuarPerguntando = false; // sai do loop após a resposta correta 
     }  else {
      alert("Não é isso! Tente novamente.")
     }
   }    
}


// Chamada da função para iniciar o processo
verificarTime();

  
