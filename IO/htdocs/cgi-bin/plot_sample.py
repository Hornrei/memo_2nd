#!/usr/bin/python3
# CSVファイルを読み込んで、グラフ画像を生成する
# 2021.12.08 M.Okuno
import matplotlib.pyplot as plt
import csv

def makePNG():
    # データを読み込むリスト
    x  = []     # 日時 : 文字列
    y1 = []     # 温度 : 実数
    y2 = []     # 湿度 : 実数

    # CSVの読み込み
    csvFileName = './sample.csv'
    with open(csvFileName, encoding='utf8', newline='') as f:
        csvreader = csv.reader(f)
        for row in csvreader:
            if row:
                dt1 = row[0].split(' ')
                dt2 = dt1[1].split(':')
                dt3 = dt2[0] + ':' + dt2[1]
                x.append(dt3)
                y1.append(float(row[1]))
                y2.append(float(row[2]))

    # figureを生成する
    fig = plt.figure()

    # ax1をfigureに設定、ax2を２軸グラフとして追加する
    ax1 = fig.add_subplot(1, 1, 1)
    ax2 = ax1.twinx()

    # axesにplot
    ax1.plot(x, y1, c='#00ff00', marker='o')
    ax1.set_ylim(0,40)
    ax1.tick_params(axis='y', colors='#00ff00')

    ax2.plot(x, y2, c='#0000ff', marker='x')
    ax2.set_ylim(0,100)
    ax2.tick_params(axis='y', colors='#0000ff')

    # グラフを表示する（デバッグ用）
    # plt.show()

    # グラフをpngフォーマットでファイル保存する
    pngFileName = "matplotlib_graph_sample.png"
    fig.savefig(pngFileName)

#---------------------------------------------------
if __name__ == '__main__':
    makePNG()
