let X2 = 0
let X1 = 0
basic.clearScreen()
for (let X = 0; X <= 4; X++) {
    X1 = X
    X2 = 4 - X
    for (let A = 0; A <= X2 - X1; A++) {
        led.plot(X1 + A, X)
        control.waitMicros(200000)
    }
    for (let A = 0; A <= X2 - X1; A++) {
        led.plot(X2, X1 + A)
        control.waitMicros(200000)
    }
    for (let A = 0; A <= X2 - X1; A++) {
        led.plot(X2 - A, 4 - X)
        control.waitMicros(200000)
    }
    for (let A = 0; A <= X2 - X1; A++) {
        led.plot(X1, X2 - A)
        control.waitMicros(200000)
    }
}
basic.forever(function () {
	
})
