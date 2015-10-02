$(document).ready(function(){
  $(".fa-plus").on("click", newForm)
  $(".form_spot").on("submit", createItem)
})

var newForm = function(e){
  e.preventDefault();
  var url = $(".add_button").attr("href")
  $.ajax({
    url: url,
    method: "GET"
  })
  .done(function(response){
    $(".form_spot").html("")
    $(".form_spot").append(response)
  })
}

var createItem = function(e){
  e.preventDefault();
  var url= $("form").attr("action")
  var method=$("form").attr("method")
  var data=$("form").serialize()

  $.ajax({
    url: url,
    type: method,
    data: data,
    dataType: "json"
  })
  .done(function(response){
    $("form").hide()
    $(".notepad").append("+" + response.title + "<br>")
  })

}
