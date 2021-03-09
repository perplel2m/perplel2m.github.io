$(document).ready(function() {
  $('input:radio[name=attack]').on('change',function(){
    var x = $(this).val();
    console.log(x);
  })
});
