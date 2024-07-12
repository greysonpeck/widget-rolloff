// $(".draggable-handler").mousedown(function (e) {
//   drag = $(this).closest(".draggable");
//   drag.addClass("dragging");
//   drag.css("left", e.clientX - $(this).width() / 2);
//   drag.css("top", e.clientY - $(this).height() / 2 - 10);
//   $(this).on("mousemove", function (e) {
//     drag.css("left", e.clientX - $(this).width() / 2);
//     drag.css("top", e.clientY - $(this).height() / 2 - 10);
//     window.getSelection().removeAllRanges();
//   });
// });

// $(".draggable-handler").mouseleave(stopDragging);
// $(".draggable-handler").mouseup(stopDragging);

// function stopDragging() {
//   drag = $(this).closest(".draggable");
//   drag.removeClass("dragging");
//   $(this).off("mousemove");
// }
var acc = document.getElementsByClassName("accordion");
console.log(acc);

var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var itemGroup = this.nextElementSibling;
        if (itemGroup.style.display === "flex") {
            itemGroup.style.display = "none";
        } else {
            itemGroup.style.display = "flex";
        }
    });
}
