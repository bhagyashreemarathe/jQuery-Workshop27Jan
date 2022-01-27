$(document).ready(function(){
    $("#btnSubmit").click(function (){
        var userName = $("#username").val();
        var password = $("#password").val();
        auth(userName, password);
    });
});

function auth(userNmae,password){
    $.ajax
    ({
        type: "POST",
        url: "http://localhost:3000/",
        dataType: 'json',
        async: false,
        data: '{"userName": "' + userName + '", "password" : "' + password + '"}',
        success: function(data, textStatus, jqXHR) {
            alert('User: ' + data.user + 'authenticated:' + data.authentication);
        }

    })
}