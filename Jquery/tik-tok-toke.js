//  Tok Tok Toe registration form

$(document).ready(function () {
    let Uval = 1;
    $('#bt1').click(function () {
        if (Uval == 1) {
            $('#bt1').val("X");
            $('#bt1').prop('disabled', true);
            Uval = 0
        }
        else {
            $('#bt1').val("O");
            $('#bt1').prop('disabled', true);
            Uval = 1
        }
        match();
    })

    $('#bt2').click(function () {
        if (Uval == 1) {
            $('#bt2').val("X")
            $(this).prop('disabled', true);
            Uval = 0
        }
        else {
            $('#bt2').val("O")
            $(this).prop('disabled', true);
            Uval = 1
        }
        match();
    })

    $('#bt3').click(function () {
        if (Uval == 1) {
            $('#bt3').val("X")
            $(this).prop('disabled', true)
            Uval = 0;
        }
        else {
            $('#bt3').val("O")
            $(this).prop('disabled', true)
            Uval = 1
        }
        match();
    })
    $('#bt4').click(function () {
        if (Uval == 1) {
            $('#bt4').val("X")
            $(this).prop('disabled', true)
            Uval = 0;
        }
        else {
            $('#bt4').val("O")
            $(this).prop('disabled', true)
            Uval = 1
        }
        match();
    })
    $('#bt5').click(function () {
        if (Uval == 1) {
            $('#bt5').val("X")
            $(this).prop('disabled', true)
            Uval = 0;
        }
        else {
            $('#bt5').val("O")
            $(this).prop('disabled', true)
            Uval = 1
        }
        match();
    })
    $('#bt6').click(function () {
        if (Uval == 1) {
            $('#bt6').val("X")
            $(this).prop('disabled', true)
            Uval = 0;
        }
        else {
            $('#bt6').val("O")
            $(this).prop('disabled', true)
            Uval = 1
        }
        match();
    })

    $('#bt7').click(function () {
        if (Uval == 1) {
            $('#bt7').val("X")
            $(this).prop('disabled', true)
            Uval = 0;
        }
        else {
            $('#bt7').val("O")
            $(this).prop('disabled', true)
            Uval = 1
        }
        match();
    })

    $('#bt8').click(function () {
        if (Uval == 1) {
            $('#bt8').val("X")
            $(this).prop('disabled', true)
            Uval = 0;
        }
        else {
            $('#bt8').val("O")
            $(this).prop('disabled', true)
            Uval = 1
        }
        match();
    })
    $('#bt9').click(function () {
        if (Uval == 1) {
            $('#bt9').val("X")
            $(this).prop('disabled', true)
            Uval = 0;
        }
        else {
            $('#bt9').val("O")
            $(this).prop('disabled', true)
            Uval = 1
        }
        match();
    })


    $('#button').click(function () {
        $('.buttons').val("")
    })
    function match() {

        let a = $('#bt1').val()
        let b = $('#bt2').val()
        let c = $('#bt3').val()
        let d = $('#bt4').val()
        let e = $('#bt5').val()
        let f = $('#bt6').val()
        let g = $('#bt7').val()
        let h = $('#bt8').val()
        let i = $('#bt9').val()


        if (a == "X" && b == "X" && c == "X") {
            alert("x is winner ");
            location.reload();

        }
        else if (d == "X" && e == "X" && f == "X") {
            alert("x is winner ");
            location.reload();

        }
        else if (g == "X" && h == "X" && i == "X") {
            alert("x is winner ");
            location.reload();

        }
        else if (a == "X" && d == "X" && g == "X") {
            alert("x is winner ");
            location.reload();

        }
        else if (b == "X" && e == "X" && h == "X") {
            alert("x is winner ");
            location.reload();

        }
        else if (c == "X" && f == "X" && i == "X") {
            alert("x is winner ");
            location.reload();

        }
        else if (a == "X" && e == "X" && i == "X") {
            alert("x is winner ");
            location.reload();

        }
        else if (c == "X" && e == "X" && g == "X") {
            alert("x is winner ");
            location.reload();

        }





        else if (a == "O" && b == "O" && c == "O") {
            alert("O is winner ");
            location.reload();

        }
        else if (d == "O" && e == "O" && f == "O") {
            alert("O is winner ");
            location.reload();

        }
        else if (g == "O" && h == "O" && i == "O") {
            alert("O is winner ");
            location.reload();

        }
        else if (a == "O" && d == "O" && g == "O") {
            alert("O is winner ");
            location.reload();

        }
        else if (b == "O" && e == "O" && h == "O") {
            alert("O is winner ");
            location.reload();

        }
        else if (c == "O" && f == "O" && i == "O") {
            alert("O is winner ");
            location.reload();

        }
        else if (a == "O" && e == "O" && i == "O") {
            alert("O is winner ");
            location.reload();

        }
        else if (c == "O" && e == "O" && g == "O") {
            alert("O is winner ");
            location.reload();

        }
        else if (a !== "" && b !== "" && c !== "" && d !== "" && e !== "" && f !== "" && g !== "" && h !== "" && i !== "") {
            alert("Game is Draw please start again");
            location.reload();

        }
    }



})