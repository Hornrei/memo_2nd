$(document).ready(function(){   // DOMが読み込まれたら実行
    $.ajax({
        url: "data.json",    // データを取得するURL
        dataType: "json",    // データの種類
        success: function(json) { // 成功した時の処理
            let graphs = "";
            for (let i in json) {
                graphs += `
                    <div class="bar">
                        <div class="bar-info type-${json[i].type}" data-total="${json[i].value}">
                            ${json[i].type}型
                            <span class="percent">${json[i].value}</span>
                        </div>
                    </div>`;
            }
            // ここでgraphsを使った処理を追加する（例：どこかの要素に追加するなど）
            $('.wrapper').append(graphs);
        },
        error: function() {   // 失敗した時の処理
            alert("読み込み失敗");
        }
    });
});

function typeSet() {
    $('.bar-info').each(function () {
        
        let total = $(this).data('total');
        $(this).css('width', total + '%');
    });

    $('.percent').each(function () {
        var $this = $(this);

        $({ Counter: 0 }).animate({
            Counter: $this.text()
        }, {
            duration: 3000,
            easing: 'swing',
            step: function () { $this.text(Math.ceil(this.Counter) + "%"); }
        });
    });
}

setTimeout(typeSet, 100);