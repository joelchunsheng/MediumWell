var overlay = $('<div id="overlay"></div>');
var image = $('<img>');
var caption = $('<p></p>');

//append overlay to the html page
$("body").append(overlay);
overlay.append(image);
overlay.append(caption);
overlay.hide();

//capture the click event on the link to an image
$("#imagegallery a").click(function (evt) {

    evt.preventDefault();//to stop the hyperlink 
    var imgLoc = $(this).attr("href");

    image.attr("src", imgLoc);
    var captiontxt = $(this).children("img").attr("alt");
    caption.text(captiontxt);

    overlay.slideDown(1000);
});

overlay.click(function () {

    $(this).slideUp(1000);
});