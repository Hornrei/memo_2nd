$(document).ready(function() {
    $(window).on('scroll', function() {
      $('.element').each(function() {
        if (isElementInViewport($(this)) && $(this).css('opacity') === '0') {
          $(this).animate({ opacity: 1 }, 500); // フェードインのアニメーション
        }
      });
    });
  
    // 要素がビューポート内にあるかどうかをチェックするヘルパー関数
    function isElementInViewport(el) {
      var rect = el[0].getBoundingClientRect();
      return (
        rect.bottom >= 0 &&
        rect.right >= 0 &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.left <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  });
  