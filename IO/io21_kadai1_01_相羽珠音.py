import RPi.GPIO as GPIO
from time import sleep

PORT = 26
GPIO.setmode(GPIO.BCM)
GPIO.setup(PORT, GPIO.OUT, initial=GPIO.LOW)

while True:
    try:
        GPIO.output(PORT, GPIO.HIGH)
        sleep(1.0)
        GPIO.output(PORT, GPIO.LOW)
        sleep(1.0)
    except KeyboardInterrupt:
            break
        
GPIO.cleanup()