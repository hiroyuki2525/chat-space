$(function(){

  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class="MessageBox" data-message-id=${message.id}>
          <div class="MessageInfo">
            <div class="MessageInfo__userName">
              ${message.user_name}
            </div>
            <div class="MessageInfo__date">
              ${message.created_at}
            </div>
          </div>
          <div class="Message">
            <p class="Message__content">
              ${message.content}
            </p>
            <img class="Message__image" src="${message.image}">
          </div>
        </div>`
      return html;
    } else {
      let html =
      `<div class="Chat-box__message-list" data-message-id=${message.id}>
        <div class="Chat-box__message-list__upper-message">
          <div class="Chat-box__message-list__upper-message__user-name">
            ${message.user_name}
          </div>
          <div class="Chat-box__message-list__upper-message__date">
            ${message.created_at}
          </div>
        </div>
        <div class="Chat-box__messagelist__lower-message">
          <p class="Message__content">
            ${message.content}
          </p>
        </div>
      </div>`
      return html;
    };
  }

  $('.Chat-box__message__form').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.Chat-box__messages').append(html);
      $('.Chat-box__messages').animate({ scrollTop: $('.Chat-box__messages')[0].scrollHeight});    
      $('form')[0].reset();
      $(".submit-btn").prop("disabled", false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    });
  });
});