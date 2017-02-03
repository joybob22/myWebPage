/**
 * Created by braydenlemke on 12/7/16.
 */

$(".educationClick").on("click", function() {
    $("#arrow1").toggleClass("hideContentRotate");
    $("#arrow1").toggleClass("showContentRotate");
    $("#shadow1").toggle();
    $(".educationContent").slideToggle();
});

$("#workClick").on("click", function() {
    $("#arrow2").toggleClass("hideContentRotate");
    $("#arrow2").toggleClass("showContentRotate");
    $("#shadow2").toggle();
    $("#workContent").slideToggle();
});

$("#summaryClick").on("click", function() {
    $("#arrow3").toggleClass("hideContentRotate");
    $("#arrow3").toggleClass("showContentRotate");
    $("#shadow3").toggle();
    $("#summaryContent").slideToggle();
});
