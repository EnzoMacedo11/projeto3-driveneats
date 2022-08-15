function marcarP(marcadorP){
    const opçãoSelecionadaP = document.querySelector('.menuPrincipal .selecionado');
    
        if (opçãoSelecionadaP !== null) {
            opçãoSelecionadaP.classList.remove('selecionado');
        }
         const clicarP = document.querySelector(marcadorP);

        clicarP.classList.add('selecionado')
        verificar()
  }

  function marcarB(marcadorB){
    const opçãoSelecionadaB = document.querySelector('.menuBebidas .selecionado');
    
        if (opçãoSelecionadaB !== null) {
            opçãoSelecionadaB.classList.remove('selecionado');
        }
         const clicarB = document.querySelector(marcadorB);

        clicarB.classList.add('selecionado')
        verificar()
  }
  function marcarS(marcadorS){
    const opçãoSelecionadaS = document.querySelector('.menuSobremesa .selecionado');
    
        if (opçãoSelecionadaS !== null) {
            opçãoSelecionadaS.classList.remove('selecionado');
        }
         const clicarS = document.querySelector(marcadorS);

        clicarS.classList.add('selecionado')
        verificar()
  }


function verificar(){
  let listapedidos = document.querySelectorAll(".selecionado");
  let fecharpedido = document.querySelector(".botaoselecionar");
  if (listapedidos.length == 3){
    fecharpedido.classList.add('FazerPedidoCor');
    fecharpedido.innerHTML = "Fazer Pedido"
    
  }

}
function enviarwpp(){
    
    let pratoSelecionado = document.querySelector(".selecionado .textoPrato").textContent;
    let bebidaSelecionada  = document.querySelector(".selecionado .textoBebida").textContent;
    let sobremesaSelecionada  = document.querySelector(".selecionado .textoSobremesa").textContent;


    let pratos = document.querySelector(" .selecionado  .conversor").textContent;
    let bebida = document.querySelector(".selecionado  .conversor").textContent;
    let sobremesa = document.querySelector(" .selecionado  .conversor").textContent;

    pratos = parseFloat(pratos.replace(",", "."));
    bebida = parseFloat(bebida.replace(",", "."));
    sobremesa = parseFloat(sobremesa.replace(",", "."));
    

    let total =  (pratos + bebida + sobremesa).toFixed(2);

    let linkwpp = 'https://wa.me/?text=';
    let infped = `Olá gostaria de fazer o pedido:`;
    let addprato = `-Prato: ${pratoSelecionado}`;
    let addbebida =`-Bebida: ${bebidaSelecionada}`;
    let addsobremesa = `-Sobremesa: ${sobremesaSelecionada}`;
    let addtotal = `-Total: ${total}`;

    let link = encodeURIComponent(infped)
    window.open(linkwpp + infped + "%0A" + addprato + "%0A" + addbebida + "%0A" + addsobremesa + "%0A" + addtotal)
  
}