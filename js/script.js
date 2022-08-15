function createBubble() {

    let amout = 100

    let body = document.querySelector('body')

    let i = 0

    while(i <= amout) {

        let newElement = document.createElement('i')
        
        let posX = Math.floor(Math.random() * window.innerWidth) - 10

        let delay = Math.random() * -20
        let duration = Math.random() * 10
        
        let size = Math.floor(Math.random() * 250)
        newElement.style.width = 10 + size + 'px'
        newElement.style.height = 10 + size + 'px'
        newElement.style.left = posX + 'px'
        newElement.style.animationDelay = delay + 's'
        newElement.style.animationDuration = 5 + duration + 's'

        
        body.appendChild(newElement)
        i++

    }
    
}