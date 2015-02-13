define(['zepto'], function($) {

  function rand4() {
    return Math.floor(Math.random() * 4 );
  }
  $(function() {
    $('table tr').each(function(index) {
      $(this).children().eq(rand4()).addClass('target');
    });
  });
});
