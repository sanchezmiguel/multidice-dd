def on_button_pressed_a():
    display_dice_selected()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global dice_type
    dice_type += 1
    if dice_type >= len(dice_types):
        dice_type = 0
    display_dice_selected()
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_gesture_shake():
    roll_dice()
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def display_dice_selected():
    basic.show_string("d"+dice_types[dice_type])
def roll_dice():
    global dice_rolled
    dice_rolled = randint(1, dice_types[dice_type])
    basic.show_number(dice_rolled)
dice_rolled = 0
dice_types: List[number] = []
dice_type = 0
dice_type = 1
dice_types = [4, 6, 8, 10, 12, 20, 100]