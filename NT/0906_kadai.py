ip1 = list(input("1を入力").split())
ip2 = list(input("2を入力").split())

def tocidr(cidr):
    # CIDR表記からプレフィックス長（ビット数）を取得
    prefix_length = int(cidr.split("/")[1])

    # プレフィックス長を使用してサブネットマスクを計算
    subnet_mask = (0xffffffff << (32 - prefix_length)) & 0xffffffff

    # サブネットマスクを4つの8ビット数に分割
    subnet_mask_parts = [
        (subnet_mask >> 24) & 0xff,
        (subnet_mask >> 16) & 0xff,
        (subnet_mask >> 8) & 0xff,
        subnet_mask & 0xff
    ]

    # 4つの8ビット数をドット区切りの文字列に変換
    subnet_mask_str = ".".join(map(str, subnet_mask_parts))
    ipstr = cidr.split("/")[0]

    return ipstr,subnet_mask_str


#10進数変換

def ip_to_decimal(ip_address):
    ip_parts = ip_address.split('.')
    decimal_ip = 0
    for part in ip_parts:
        decimal_ip = (decimal_ip << 8) | int(part)
    return decimal_ip



if len(ip1) == 1:
    ip1ip = tocidr(ip1[0])[0]
    ip1sub = tocidr(ip1[0])[1]
else:
    ip1ip = ip1[0]
    ip1sub = ip1[1]

if len(ip2) == 1:
    ip2ip = tocidr(ip2[0])[0]
    ip2sub = tocidr(ip2[0])[1]
else:
    ip2ip = ip2[0]
    ip2sub = ip2[1]

#10進表記
ip1ten = ip_to_decimal(ip1ip)
sub1ten = ip_to_decimal(ip1sub)

ip2ten = ip_to_decimal(ip2ip)
sub2ten = ip_to_decimal(ip2sub)


def is_same_network(ip1ten, ip2ten, sub1ten, sub2ten):
    condition1 = (ip1ten & sub1ten) == (ip2ten & sub1ten)
    condition2 = (ip1ten & sub2ten) == (ip2ten & sub2ten)
    return condition1,condition2

net1 = is_same_network(ip1ten,ip2ten,sub1ten,sub2ten)[0]
net2 = is_same_network(ip1ten,ip2ten,sub1ten,sub2ten)[1]



def calculate_host_portion(ip_address, subnet_mask):

    host_portion = ip_address & (~subnet_mask & 0xFFFFFFFF)  # ホスト部の計算

    return host_portion

host11 = calculate_host_portion(ip1ten,sub1ten)
host12 =calculate_host_portion(ip2ten,sub1ten)
host21 = calculate_host_portion(ip1ten,sub2ten)
host22 = calculate_host_portion(ip2ten,sub2ten)
#同一か否か

if (host11 == host12) and (host21 == host22):
    if net1 == net2:
        print("同一のため×")
        quit()






#比較処理
if (ip1ten & sub1ten) == (ip2ten & sub1ten) and (ip1ten & sub2ten) == (ip2ten & sub2ten):
    print("まる")
else:
    print("ばつ")









