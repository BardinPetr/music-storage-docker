/* eslint-disable no-undef */
$(() => {
  let lastTxt = '';
  $('#search-text').on('input', () => {
    const newTxt = $('#search-text').val();
    if (lastTxt !== newTxt) {
      $.get('api/search', { text: newTxt }, (data) => {
        console.log(data);
        $('#search-result').html(JSON.stringify(data));
      });
      lastTxt = newTxt;
    }
  });

  $('#uid-submit').click(() => {
    $.get('api/getPlaylist', { uid: $('#uid-input').val() }, (data) => {
      $('#playlist').html(JSON.stringify(data));
    });
  });

  $('#sid-append').click(() => {
    $.post('api/appendToPlaylist', { uid: $('#uid-input').val(), sid: $('#sid-input').val() });
  });

  $('#sid-delete').click(() => {
    $.post('api/removeFromPlaylist', { uid: $('#uid-input').val(), sid: $('#sid-input').val() });
  });

  $('#user-create').click(() => {
    $.post('api/createUser', { name: 'test' }, (data) => {
      $('#user-result').html(JSON.stringify(data));
    });
  });

  $('#sid-play-submit').click(() => {
    $('#mp3_src').attr('src', `${window.location.origin}/api/play.mp3?id=${$('#sid-play-input').val()}`);
    $('#player').trigger('load');
    $('#player').trigger('play');
  });
});