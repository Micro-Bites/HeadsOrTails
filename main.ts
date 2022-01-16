input.onGesture(Gesture.Shake, function on_gesture_shake() {
    
    basic.clearScreen()
    comptador = 3
    for (let index = 0; index < 3; index++) {
        basic.showNumber(comptador)
        comptador -= 1
    }
    moneda = randint(0, 1)
    if (moneda == 0) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.No)
    }
    
})
let moneda = 0
let comptador = 0
basic.forever(function on_forever() {
    
})
