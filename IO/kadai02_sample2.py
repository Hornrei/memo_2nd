#!/usr/bin/python3
# ターミナルから入力したコマンドライン引数を取得するサンプルプログラム
# 第一引数まで入力すること

import sys

# すべての引数は、文字型として取得される
args = sys.argv
print('Pythonプログラム名 = ', args[0])
print('第一引数 = ', args[1])
#print('第二引数 = ', args[2])
#print('第三引数 = ', args[3])

# 第一引数を
# 文字型->整数型への変換を行い数値化して１０倍してみる
a = int(args[1])
a *= 10
print('第一引数を 10 倍する = ', a)
