define(['zepto', 'zepto.event'], function($) {

  function rand4() {
    return Math.floor(Math.random() * 4 );
  }
  $(function() {
    var body_height = $(document).height(),
        cell_height = body_height / 4,
        quarter_cell_height = cell_height / 4;
    $('table').height(body_height);
    $('table tr').each(function(index) {
        $(this).height(cell_height);
        if(index === 3) return;
        $(this).children().eq(rand4()).addClass('target');
    });
    for (var i = 100; i > 0; i--) {
        var el = $('<tr><td></td><td></td><td></td><td></td></tr>');
        el.height(cell_height).children().eq(rand4()).addClass('target');
        $('table tbody').prepend(el);
    };
    var initialTop  = (-$('table').height())+(4 * cell_height);
    $('table').css('top', initialTop);
    var counter = 0, cell_counter=0, temp_height, bit, step = 23;
    $('tr').eq(-2).on('click', 'td', function() {

        var cancelInterval = setInterval(function(){
            $('table').css('top', ($('table').offset().top + step) + 'px');
            counter += 1;
            bit = (counter * step) / cell_height;
            cell_counter = Math.ceil(bit);
            temp_height = parseFloat( bit.toString().replace(/^\d+\./, '0.') );
            if (temp_height > 0.25 &&
                $('tr').eq(-cell_counter).has('td.target').length) {
                clearInterval(cancelInterval);
                alert('You Loose!')
            };
    }, 80);
    });


    $('table').on('click', 'td.target', function() {
        $(this).removeClass('target').addClass('bingo');
    });
  });
});
