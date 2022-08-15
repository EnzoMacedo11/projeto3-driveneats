function marcarP(marcadorP){
    const opçãoSelecionadaP = document.querySelector('.selecionadoP');
    
        if (opçãoSelecionadaP !== null) {
            opçãoSelecionadaP.classList.remove('selecionadoP');
        }
         const clicarP = document.querySelector(marcadorP);

        clicarP.classList.add('selecionadoP')
  }

  function marcarB(marcadorB){
    const opçãoSelecionadaB = document.querySelector('.selecionadoB');
    
        if (opçãoSelecionadaB !== null) {
            opçãoSelecionadaB.classList.remove('selecionadoB');
        }
         const clicarB = document.querySelector(marcadorB);

        clicarB.classList.add('selecionadoB')
  }
  function marcarS(marcadorS){
    const opçãoSelecionadaS = document.querySelector('.selecionadoS');
    
        if (opçãoSelecionadaS !== null) {
            opçãoSelecionadaS.classList.remove('selecionadoS');
        }
         const clicarS = document.querySelector(marcadorS);

        clicarS.classList.add('selecionadoS')
  }