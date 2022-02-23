$(document).ready(function(){
    $("#toggle").click(function(){
        let check =  $("#menu").hasClass("active-menu");
        alert(check);
        if (check===true) {
            $("#menu").removeClass("active-menu");
        } else {
            $("#menu").addClass("active-menu");
        }
    });
  });