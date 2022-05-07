let force = 0
basic.forever(function () {
    force = input.magneticForce(Dimension.Strength)
    while (force < 500) {
        force = input.magneticForce(Dimension.Strength)
        basic.showIcon(IconNames.No)
        basic.pause(500)
        basic.clearScreen()
        basic.pause(500)
    }
})
