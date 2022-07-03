$(() => {

    $("form").submit(e => {

        e.preventDefault();

        const credentials = {
            username: $("#usernameBox").val(),
            password: $("#passwordBox").val()
        };

        $.ajax({
            method: "POST",
            url: "/api/auth/login",
            data: JSON.stringify(credentials),
            contentType: "application/json",
            dataType: "json",
            error: err => alert(err.responseText),
            success: user => {
                sessionStorage.setItem("user", JSON.stringify(user));
                location = "/home";
            }
        });

    });

});
