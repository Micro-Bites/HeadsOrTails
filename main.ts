let moneda = 0
input.onGesture(Gesture.Shake, function () {
    moneda = randint(0, 1)
    if (moneda == 0) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.No)
    }
})
basic.forever(function () {
	
})
