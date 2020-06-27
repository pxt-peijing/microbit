let brightness = 255
basic.showIcon(IconNames.Heart)
led.setBrightness(brightness)
let mode = 1
basic.forever(function () {
    if (mode == 1) {
        brightness = brightness - 5
        led.setBrightness(brightness)
        if (brightness == 0) {
            mode = 2
        }
    } else if (mode == 2) {
        brightness = brightness + 5
        led.setBrightness(brightness)
        if (brightness == 255) {
            mode = 1
        }
    }
})
