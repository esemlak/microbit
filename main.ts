let X3 = 0
let X1 = 0
let B = 0
let X2 = 0
basic.clearScreen()
while (true) {
    for (let X = 0; X <= 4; X++) {
        X2 = 4 - X
        B = X2 - X
        for (let A = 0; A <= B; A++) {
            led.toggle(X + A, X)
            basic.pause(100)
        }
        B = B - 1
        X1 = X + 1
        X3 = X2 - 1
        for (let A = 0; A <= B; A++) {
            led.toggle(X2, X1 + A)
            basic.pause(100)
        }
        for (let A = 0; A <= B; A++) {
            led.toggle(X3 - A, X2)
            basic.pause(100)
        }
        B = B - 1
        for (let A = 0; A <= B; A++) {
            led.toggle(X, X3 - A)
            basic.pause(100)
        }
    }
}
basic.forever(function () {
	
})
