//City drop-down 
  //function for city first 
  $(document).ready(function () {
    $('#one').change(function () {
        var first = $('#one').val()
        console.log(first)
    })

    $('#two').change(function () {
        var second = $('#two').val()
        console.log(second)

    })

    $('#three').change(function () {
        var third = $('#three').val()
        console.log(third)
    })

    $('#btn').click(function () {

        checkC()
    })
    function checkC() {

        let first = $('#one').val()
        let second = $('#two').val()
        let third = $('#three').val()

        if (first == "" && second != "" && third != "") {
            alert("Please select first  city ")

        }

        else if (first != second && first != third && second != third && second != "") {
            alert("Your form is submiited.....")
        }
        else if (first != "" && second == "" && third == "") {
            alert("Your form is submiited ")
        }

        else if (first == "" && second == "" && third == "") {
            alert("Please select city ")
        }

        else {
            alert("Please select diffent city in all filed")

        }
    }


})

