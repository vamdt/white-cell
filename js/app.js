define(['zepto'], function($) {

  function rand4() {
    return Math.floor(Math.random() * 4 );
  }
  $(function() {
    var body_height = $(document).height(),
        cell_height = body_height / 4;
    $('table').height(body_height);
    $('table tr').each(function(index) {
        $(this).height(cell_height);
        $(this).children().eq(rand4()).addClass('target');
    });
    for (var i = 100; i > 0; i--) {
        var el = $('<tr><td></td><td></td><td></td><td></td></tr>');
        el.height(cell_height).children().eq(rand4()).addClass('target');
        $('table tbody').prepend(el);
    };
    $('table').css('top', -100 * cell_height);
    var cancelInterval = setInterval(function(){
        $('table').css('top', ($('table').offset().top + 5) + 'px');
    }, 80);


    $('table').on('click', 'td.target', function() {
        $(this).removeClass('target').addClass('bingo');
    });
  });
});
