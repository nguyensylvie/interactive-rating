$("form").submit(function (event) {
  event.preventDefault();
  value = $("input[name='rating']:checked").val();
  if (value !== undefined) {
    $("form").attr("hidden", true);
    $("#thank-you").attr("hidden", false);
    $(".msg").html("You selected " + value + " out of 5");
  }
});
