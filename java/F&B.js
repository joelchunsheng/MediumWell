
$(document).ready(function () {
    $("#btnRes").click(function (e) {
        $("#output").html(""); // to remove the output if visible when the button is clicked
        ShowDialog(false);
        e.preventDefault();
    });

    $("#btnClose").click(function (e) {
        HideDialog();
        e.preventDefault();
    });

    $("#btnSubmit").click(function (e) {
        HideDialog();
        Thanks();
        e.preventDefault();

    });
});

function ShowDialog() {
    $("#overlay").show();
    $("#dialog").fadeIn(300);
}

function HideDialog() {
    $("#overlay").hide();
    $("#dialog").fadeOut(300);

}

function Thanks() {
    alert("Thank you for your reservation!")
}