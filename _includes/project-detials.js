$(document).ready(function() {
  $('.project-tag').click(function() {
    var title = $(this).find('.project-title').text();
    var description = $(this).find('.project-description').text();
    var link = $(this).find('.project-link').attr('href');

    $('#project-title').text(title);
    $('#project-description').text(description);
    $('#project-link').attr('href', link);

    $('#project-details').show();
  });

  $('#close-project-details').click(function() {
    $('#project-details').hide();
  });
});
