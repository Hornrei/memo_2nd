$(function() {
    $('[name="animal"]:radio').change(function() {
      if ($('[id="hiroi"]').prop('checked')) {
        $('#four').animate({
          opacity: 0
        }, 500, function() {
          $('#four').css('display', 'none');
          $('#three').css('display', 'block');
          $('#three').animate({
            opacity: 1
          }, 500);
        });
      } else if ($('[id="semai"]').prop('checked')) {
        $('#three').animate({
          opacity: 0
        }, 500, function() {
          $('#three').css('display', 'none');
          $('#four').css('display', 'block');
          $('#four').animate({
            opacity: 1
          }, 500);
        });
      }
    });
  });