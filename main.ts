let 角度 = 0
input.onButtonPressed(Button.A, function () {
    if (Math.trunc(input.compassHeading()) == 180) {
        basic.showLeds(`
            # # # # #
            . . . . .
            . # # # .
            . . . . .
            # # # # #
            `)
        basic.showLeds(`
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            . # . . .
            `)
        basic.showLeds(`
            # # # # #
            . . . . .
            . # # # .
            . . . . .
            # # # # #
            `)
    } else {
        if (Math.trunc(input.compassHeading()) == 0) {
            basic.showLeds(`
                . . # . .
                . # # # .
                . . # . .
                # # # # #
                . . # . .
                `)
            basic.showLeds(`
                # # # # .
                # . . # .
                # . . # .
                . # # # .
                . . . # .
                `)
        }
        basic.showLeds(`
            # # # # #
            . . # . .
            # # # # #
            . . # . .
            . . # # #
            `)
        basic.showLeds(`
            . . # . .
            # # # # #
            # . . . #
            . . . # .
            . . # . .
            `)
        basic.showLeds(`
            . . . . #
            . # # # .
            # . # . .
            . . # . .
            . . # . .
            `)
        basic.showLeds(`
            . . . # .
            . # # . .
            . . # . .
            # # # # #
            . . # . .
            `)
        basic.showLeds(`
            # . # . #
            # . # . #
            # # . . .
            # . # . .
            # . . . .
            `)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("GO")
    角度 = randint(0, 359)
    basic.showNumber(Math.round(角度))
    if (input.buttonIsPressed(Button.A)) {
        if (input.compassHeading() == 角度) {
            music.playTone(494, music.beat(BeatFraction.Half))
            music.playTone(392, music.beat(BeatFraction.Whole))
        } else {
            music.playTone(262, music.beat(BeatFraction.Half))
            music.playTone(262, music.beat(BeatFraction.Half))
        }
    }
})
