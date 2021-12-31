
function displayValue(min: number, max: number, value: number) {
    let step = (max - min) / 25
    let x = min
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            if (x < value) led.plot(j, i)
            else led.unplot(j, i)
            x += step
        }
    }
}

radio.setGroup(1)
basic.forever(function () {
    basic.pause(100)
    radio.sendNumber(0)
})

radio.onReceivedNumber(function (receivedNumber: number) {
    let signal = radio.receivedPacket(RadioPacketProperty.SignalStrength)
    displayValue(-128, -42, signal)
})