$(document).ready(function(){
  submitForm()
});

// define functions here
function submitForm(){
  $('form').on('submit', function(event){
    var item = $('#item').val()
    let li = document.createElement('li')
    li.innerHTML = item
    $("#list ol")[0].append(li)
    event.preventDefault()
  })
}
