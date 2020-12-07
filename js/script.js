
$(document).ready(function () {
    $("#question1").click(function () {
        $("#paragraph1").slideDown("slow");
    });

    $("#question1").dblclick(function () {
        $("#paragraph1").slideUp("slow");
    });
});

$(document).ready(function () {
    $("#question2").click(function () {
        $("#paragraph2").slideDown("slow");
    });

    $("#question2").dblclick(function () {
        $("#paragraph2").slideUp("slow");
    });
});

$(document).ready(function () {
    $("#question3").click(function () {
        $("#paragraph3").slideDown("slow");
    });

    $("#question3").dblclick(function () {
        $("#paragraph3").slideUp("slow");
    });
});

$(document).ready(function () {
    $("#question4").click(function () {
        $("#paragraph4").slideDown("slow");
    });

    $("#question4").dblclick(function () {
        $("#paragraph4").slideUp("slow");
    });
});

$(document).ready(function () {
    $("#form1").submit(function (event) {
        var name = $("input#name").val();
        var email = $("input#email").val();
        var phone = $("input#phone").val();
        var message = $.trim($("#message").val());

        if ((name != "") && (email != "") && (message != "") && (phone != "")) {
            alert("Hello " + name +
                "! We have received your message. Thank you for reaching out to us.")
        } else {
            alert("We have received your message. Thank you for reaching out to us.")
        }
        event.preventDefault();
    });


});
