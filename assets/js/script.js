const switchModal = () => {
    const modal = document.querySelector('.modal-func')
    const actualStyle = modal.style.display
    if(actualStyle == 'block') {
      modal.style.display = 'none'
    }
    else {
      modal.style.display = 'block'
    }
  }


  function mouseEnter(){

    const cards = document.querySelectorAll('.comprarAgora');
    
    cards.forEach(button =>{
    
        button.addEventListener('mouseover', (event) =>{
            event.currentTarget.closest('.comprarAgora').querySelector('.comprar-agora').style.display = "block";
        });
        
        button.addEventListener('mouseout', (event) =>{
            event.currentTarget.closest('.comprarAgora').querySelector('.comprar-agora').style.display = "none";
        });
    
    });
    }
