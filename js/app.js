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
    var el;
    setInterval(function() {
        el = $('<tr><td></td><td></td><td></td><td></td></tr>');
        el.height(cell_height).children().eq(rand4()).addClass('target');
        $('table tbody').prepend(el);
    }, 300);

  });
});
