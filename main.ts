input.onButtonPressed(Button.A, function () {
    display_dice_selected()
})
input.onButtonPressed(Button.B, function () {
    dice_type += 1
    if (dice_type >= dice_types.length) {
        dice_type = 0
    }
    display_dice_selected()
})
input.onGesture(Gesture.Shake, function () {
    roll_dice()
})
function display_dice_selected () {
    basic.showString("d" + dice_types[dice_type])
}
function roll_dice () {
    basic.clearScreen()
    basic.pause(200)
    dice_rolled = randint(1, dice_types[dice_type])
    basic.showNumber(dice_rolled)
}
let dice_rolled = 0
let dice_types: number[] = []
let dice_type = 0
dice_type = 1
dice_types = [
4,
6,
8,
10,
12,
20,
100
]
