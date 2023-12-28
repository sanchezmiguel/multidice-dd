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
    display_rolling()
    roll_dice()
})
function display_dice_selected () {
    basic.showString("d" + dice_types[dice_type])
}
function display_rolling () {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Diamond)
        basic.pause(100)
        basic.showIcon(IconNames.SmallDiamond)
        basic.pause(100)
    }
}
function roll_dice () {
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
