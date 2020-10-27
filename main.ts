music.playMelody("- E E F A D A C ", 120)
for (let index = 0; index < 4; index++) {
    basic.showLeds(`
        # # # . .
        # . . . .
        # # # . .
        # . . . .
        # # # . .
        `)
    basic.showLeds(`
        # . . . #
        # . . . #
        . # . # .
        . # . # .
        . . # . .
        `)
    basic.showLeds(`
        # # # # .
        # . . # .
        # # # # .
        # . . # .
        # . . # .
        `)
}
