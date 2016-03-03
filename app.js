$(document).ready(function(){
  $(".the-big-lebowski").append('<button class="generate">Generate</button>');
  $(".the-big-lebowski").append('<div class="walter"></div>');
  $(".generate").on("click", theDudeAbides);
  $(".walter").on("click", ".delete", bowlingAlley);
  $(".walter").on("click", ".change", theJesus);

});
var counter = 0;

function theDudeAbides(){
  counter++

  $(".walter").append('<div class="donny"></div>');
  var $el = $(".walter").children().last();

  $el.append('<button class="change">Change</button>');
  $el.append('<p>Generated ' + counter + ' time(s)');
  $el.append('<button class="delete">Delete</button>');
}

function bowlingAlley() {
  $(this).parent().remove();
}

function theJesus(){
  $(this).parent().toggleClass("bunny");
}
