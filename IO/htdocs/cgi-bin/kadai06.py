#!/usr/bin/python3
#
import plot_sample
import cgi
import cgitb
cgitb.enable()

# グラフ（PNG画像）の生成
plot_sample.makePNG();

print("Content-Type: text/html")
print()

#form = cgi.FieldStorage()
#for key in form:
#    value = form[key].value
#    print('<p>%s: %s</p>' % (key, value))

msg = """
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
</head>

<body>
<h2>IO31 課題６</h2>
<form>
<input type="button" value=" 再読み込み " onClick="window.location.reload();">
</form>

<img src="../matplotlib_graph_sample.png">

</body>
</html>
"""
print(msg)

