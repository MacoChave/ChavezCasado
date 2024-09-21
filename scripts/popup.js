document.addEventListener('DOMContentLoaded', () => {
    let modalComponent = document.querySelector('#modal')
    let fullImage = document.querySelector('#fullImage')
    let btnClose = document.querySelector('#btnClose')
    
    let images = document.querySelectorAll('.gallery-img')
    
    images.forEarch(image => {
        image.addEventListener('click', () => {
            console.log('Imagen clicked: ', this)
            modalComponent.style.display ='block'
            fullImage.src = this.src 
    
        })
    })
    
    btnClose.addEventListener('click', () => {
        modalComponent.style.display = 'none'
    })
    
    modalComponent.addEventListener('click', () => {
        if (event.target === modalComponent)
            modalComponent.style.display = 'none'
    })
})