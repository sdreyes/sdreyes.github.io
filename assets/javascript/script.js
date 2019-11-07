// $(document).ready(function() {
//     $(".sidenav").sidenav();
// });

$("#menu-toggle").click(function(e) {
  e.preventDefault();
  $("#wrapper").toggleClass("toggled");
});