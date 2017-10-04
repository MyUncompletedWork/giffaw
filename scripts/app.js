var endPoint= "http://api.giphy.com/v1/gifs/search" ;

$(document).on("ready", function(){

  $("form").on("submit", function(event){
    $(".gif-gallery").text(null)
    event.preventDefault();
    $.ajax({
    method: 'GET',
    url: endPoint,
    data:$("form").serialize(),
    dataType: 'json',
    success: onSuccess,
    error:onError
  })}

)

  function onSuccess(responseData){
    console.log(responseData)
    responseData.data.forEach(function(link){
      $(".gif-gallery").append($('<image src='+link.images.fixed_height.url+'>'))
    })
}


  function onError(x,y,z){
    $(".gif-gallery").append('<p>'+x+'<p>'+'<p>'+y+'<p>'+'<p>'+z+'<p>')
  }

});
