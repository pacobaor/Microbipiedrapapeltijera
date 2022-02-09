let Jugada_2 = 0
let Mi_jugada = 0
radio.onReceivedNumber(function (receivedNumber) {
    Jugada_2 = randint(1, 3)
    if (Jugada_2 == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            # # # # #
            # # # # #
            . # # # .
            `)
    } else if (Jugada_2 == 2) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (Jugada_2 == 3) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            # # . # #
            # # . # #
            `)
    }
})
input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(Mi_jugada)
    Mi_jugada = randint(1, 3)
    if (Mi_jugada == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            # # # # #
            # # # # #
            . # # # .
            `)
    } else if (Mi_jugada == 2) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (Mi_jugada == 3) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            # # . # #
            # # . # #
            `)
    }
})
basic.forever(function () {
    radio.setGroup(3)
})
