let lightRing = neopixel.create(DigitalPin.P0, 12, NeoPixelMode.RGB)
let start = 30
lightRing.setBrightness(10)
lightRing.showRainbow(1, 360)
basic.forever(function () {
    basic.pause(100)
    lightRing.rotate(1)
    lightRing.show()
})
