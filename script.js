$(function() {
  $('#searchButton').click(function() {
    var results = $('ul');
    var searchTerm = $('#searchbar').val();
    if (searchTerm === '') searchTerm = ' ';

    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&callback=?";

    $.ajax({
      type: "GET",
      url: url,
      async: false,
      dataType: "json",
      success: function(data) {
        console.log(data);
        results.empty();
        $.each(data[1], function(i, result) {
          results.append('<a href="' + data[3][i] + '"><li><strong>' + data[1][i] + '</strong><br>' + data[2][i] + '<br>' + '</li></a>');
        });
      }
    });

    // remove centered class from #search div
  });

  $('#searchbar').keypress(function(e) {
    if (e.which == 13) $('#searchButton').click();
  });
});
