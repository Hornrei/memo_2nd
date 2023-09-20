#!/usr/bin/python3
#
import cgi
import cgitb
import RPi.GPIO as GPIO
import random
import time

cgitb.enable()


led_pins = [13, 19, 26]
GPIO.setmode(GPIO.BCM)
GPIO.setup(led_pins, GPIO.OUT)

form = cgi.FieldStorage()
if 'value' not in form or 'ans' not in form:
    num = '0'
    maeno_ans = [0]
    hantei = ""
else:
    num = form.getvalue('value')
    maeno_ans = form.getfirst('ans')
    
    user_sequence = num
    if user_sequence == maeno_ans:
        hantei = "正解"
    else:
        hantei = "不正解"




sequence = []  # ランダムなシーケンスを格納するリスト
user_sequence = []  # プレイヤーが入力するシーケンスを格納するリスト
quiz_number = 3

def light_all_leds(duration=1):
    for led_pin in led_pins:
        GPIO.output(led_pin, GPIO.HIGH)
    time.sleep(duration)
    for led_pin in led_pins:
        GPIO.output(led_pin, GPIO.LOW)
    time.sleep(0.3)

def light_led(led_pin, duration=1):
    GPIO.output(led_pin, GPIO.HIGH)
    time.sleep(duration)
    GPIO.output(led_pin, GPIO.LOW)
    time.sleep(0.3)


def generate_sequence(length):
    new_sequence = ""
    for _ in range(length):
        new_sequence += str(random.randint(1,3))

    return new_sequence

try:

    # 新しいランダムシーケンスを生成し、表示
    sequence = generate_sequence(quiz_number)
 
    print("Content-Type: text/html")
    print()

    htmlText = f'''
        <!DOCTYPE html>

        <html lang="ja">
        <head>
        <meta charset="utf-8">
        </head>

        <body bgcolor="white">
        <h1>input number</h1>
        <ul>
        <li>yellow 1</li>
        <li>red 2</li>
        <li>green 3</li>
        </ul>

        <form action="./burauza.py" method="get">
        <input type="text" name="value"><br>
        <input type="hidden" name ="ans" value="{sequence}"><br>
        <input type="submit">check<br>
        </form>
        <h2>{hantei}</h2>
        </body>
        </html>
        '''

    print(htmlText)
    for led_pin in sequence:
        light_led(led_pins[int(led_pin)-1])

    
except KeyboardInterrupt:
    GPIO.cleanup()

finally:
    GPIO.cleanup()