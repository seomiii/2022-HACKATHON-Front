let num = 1;
function calendar() {
  let calendar = document.querySelector(".calendar");
  if (num % 2 === 1) {
  $( function() {
    $( "#datepicker" ).datepicker();
  } );
  num++;
  console.log(num);
  }
  else {
    $( "#datepicker" ).datepicker( "destroy" );
    $( "#datepicker" ).hide();
    $( "#datepicker" ).show();
    num++;
    console.log(num);
  }
}