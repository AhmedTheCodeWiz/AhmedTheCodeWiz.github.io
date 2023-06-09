const canvas = document.querySelector('canvas')
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
const context = canvas.getContext('2d')

canvas.width = screenWidth // 1024
canvas.height = screenHeight // 576

context.fillStyle = 'white';
context.fillRect(0, 0, canvas.width, canvas.height);

const image = new Image()
image.src = 'img/palletTown.png';

const playerImage = new Image()
playerImage.src = 'img/playerDown.png'

class Sprite {
    constructor({position, velocity, image}) {
        this.position = position
        this.image = image
    } 

    draw(){
        context.drawImage(this.image, -938, -890)
    }
}

const background = new Sprite({
    position: {x:-938, y:-890},
    image: image
})

function animate(){
    window.requestAnimationFrame(animate)
    background.draw()
    context.drawImage(
        playerImage,
        0,
        0,
        playerImage.width/4,
        playerImage.height, //cropping________________________
        canvas.width/2 - playerImage.width/8, //locate
        canvas.height/2 - playerImage.height/2,
        playerImage.width /4,
        playerImage.height
    )
}

animate()
window.addEventListener('keydown', (e) => {
    switch (e.key){
        case 'w':
            console.log("you pressed w")
            break
        case 'a':
            console.log("you pressed a")
            break
        case 's':
            console.log("you pressed s")
            break
        case 'd':
            console.log("you pressed d")
            break
    }
})