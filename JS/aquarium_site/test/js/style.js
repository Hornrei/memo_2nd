$(window).on('load',function(){
 
    setTimeout(function() {
      $('#wave').wavify({
        height: 1000,
        bones: 4,
        amplitude: 40,
        color: 'rgba(43,178,233,0.5)',
        speed: .25,
      });
      $('#wave02').wavify({
        height: 1000,
        bones: 2,
        amplitude: 40,
        color: 'rgba(0,240,237,0.5)',
        speed: .25,
      });
      $('#wave03').wavify({
        height: 1000,
        bones: 5,
        amplitude: 40,
        color: 'rgba(255,255,255,0.3)',
        speed: .25,
      });
    }, 300);
    setTimeout(function() {
      $('#wave').wavify({
        height: 500,
        bones: 4,
        amplitude: 40,
        color: 'rgba(43,178,233,0.5)',
        speed: .25,
      });
      $('#wave02').wavify({
        height: 500,
        bones: 2,
        amplitude: 40,
        color: 'rgba(0,240,237,0.5)',
        speed: .25,
      });
      $('#wave03').wavify({
        height: 500,
        bones: 5,
        amplitude: 40,
        color: 'rgba(255,255,255,0.3)',
        speed: .25,
      });
    }, 1000);
    setTimeout(function() {
      $('#wave').wavify({
        height: 200,
        bones: 4,
        amplitude: 40,
        color: 'rgba(43,178,233,0.5)',
        speed: .25,
      });
      $('#wave02').wavify({
        height: 200,
        bones: 2,
        amplitude: 40,
        color: 'rgba(0,240,237,0.5)',
        speed: .25,
      });
      $('#wave03').wavify({
        height: 200,
        bones: 5,
        amplitude: 40,
        color: 'rgba(255,255,255,0.3)',
        speed: .25,
      });
    }, 1500);
    setTimeout(function() {
      $('#wave').wavify({
        height: -150,
        bones: 4,
        amplitude: 40,
        color: 'rgba(43,178,233,0.5)',
        speed: .25,
      });
      $('#wave02').wavify({
        height: -150,
        bones: 2,
        amplitude: 40,
        color: 'rgba(0,240,237,0.5)',
        speed: .25,
      });
      $('#wave03').wavify({
        height: -150,
        bones: 5,
        amplitude: 40,
        color: 'rgba(255,255,255,0.3)',
        speed: .25,
      });
    }, 1900);
    setTimeout(function() {
      $('body.motif').addClass('appear');
    }, 3000);
  });