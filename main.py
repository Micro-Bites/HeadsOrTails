def on_gesture_shake():
    global comptador, moneda
    basic.clear_screen()
    comptador = 3
    for index in range(3):
        basic.show_number(comptador)
        comptador -= 1
    moneda = randint(0, 1)
    if moneda == 0:
        basic.show_icon(IconNames.HAPPY)
    else:
        basic.show_icon(IconNames.NO)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

moneda = 0
comptador = 0

def on_forever():
    pass
basic.forever(on_forever)
