import RPi.GPIO as GPIO
import time
import random
import keyboard


led_pins = [13, 19, 26] 


GPIO.setmode(GPIO.BCM)
GPIO.setup(led_pins, GPIO.OUT)


sequence = []  
user_sequence = [] 
round_number = 1  



def light_all_leds(duration=1):
    for led_pin in led_pins:
        GPIO.output(led_pin, GPIO.HIGH)
    time.sleep(duration)
    for led_pin in led_pins:
        GPIO.output(led_pin, GPIO.LOW)
    time.sleep(0.1)  


def light_led(led_pin, duration=1):
    GPIO.output(led_pin, GPIO.HIGH)
    time.sleep(duration)
    GPIO.output(led_pin, GPIO.LOW)
    GPIO.cleanup()


def generate_sequence(length):
    new_sequence = [random.choice(led_pins) for _ in range(length)]
    return new_sequence


try:
    while True:
        print(f"Round {round_number}")
        round_number += 1


        sequence = generate_sequence(round_number)
        for led_pin in sequence:
            light_led(led_pin)


        print("Your turn! Enter the sequence:")
        user_input = ""
        for _ in range(len(sequence)):
            key = keyboard.read_event(suppress=False).name
            if key in ["1", "2", "3"]:
                user_input += key
                light_led(led_pins[int(key) - 1])
            else:
                print("Invalid input. Game over.")
                break

        user_sequence = [int(led_pins[pin]) for pin in user_input]

        if user_sequence == sequence:
            print("Correct! Next round.")
            light_all_leds()
        
        else:
            print("Wrong sequence. Game over.")
            break

except KeyboardInterrupt:
    GPIO.cleanup()

finally:
    GPIO.cleanup()