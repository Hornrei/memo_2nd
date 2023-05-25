#!/usr/bin/python3
# GPIO13を出力として緑LEDに給電（+3.3v）する
# GPIO19を出力として黄LEDに給電（+3.3v）する
# GPIO26を出力として赤LEDに給電（+3.3v）する
#

import RPi.GPIO as GPIO       # GPIOを使用する準備

PORT_G = 13                   # 緑LED用PIO番号
PORT_Y = 19                   # 黄LED用PIO番号
PORT_R = 26                   # 赤LED用PIO番号

GPIO.setmode(GPIO.BCM)        # ピン番号をBCMモード（論理的な番号）で指定する宣言

GPIO.setup(PORT_G, GPIO.OUT, initial=GPIO.LOW)  # GPIO13を出力用（+3.3v）として使用する宣言、初期値は消灯
GPIO.setup(PORT_Y, GPIO.OUT, initial=GPIO.LOW)  # GPIO19を出力用（+3.3v）として使用する宣言、初期値は消灯
GPIO.setup(PORT_R, GPIO.OUT, initial=GPIO.LOW)  # GPIO26を出力用（+3.3v）として使用する宣言、初期値は消灯

mode = 0

# 0〜7を入力すると、対応するビットのLEDを点灯する
# 負の値（-1など）を入力するとループ処理を終了する
while mode >= 0:
    # LEDの点灯モードを入力する（4:緑LED、2:黄LED。1:赤LED）
    mode = int(input('mode(0〜7) = '))

    # 全てのLEDをいったん消灯する
    GPIO.output(PORT_G, GPIO.LOW)
    GPIO.output(PORT_Y, GPIO.LOW)
    GPIO.output(PORT_R, GPIO.LOW)

    # 入力値の対応するビットのLEDを点灯する
    if mode & 4 > 0:
        GPIO.output(PORT_G, GPIO.HIGH)    # 緑LEDを点灯する
    if mode & 2 > 0:
        GPIO.output(PORT_Y, GPIO.HIGH)    # 黄LEDを点灯する
    if mode & 1 > 0:
        GPIO.output(PORT_R, GPIO.HIGH)    # 赤LEDを点灯する

GPIO.cleanup()  # GPIOの設定を初期化する
                   # ※※※すべてのLEDが消灯する※※※
