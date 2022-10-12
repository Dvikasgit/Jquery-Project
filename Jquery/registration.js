//Jquery file for Registration form



// Function for Fname
$(document).ready(function () {
    $('#fname').keyup(function () {
        let l = /^[A-Za-z]+$/
        var b = $("#fname").val()
          let a = l.test(b)
          var f=1 ,w=1,c=1
        
        if (b.length = "") {
            $("#fname1").show().html("Please enter a first name")
            f=0
        }
        else if(a == false){
            alert("please enter char only")
            f=0
      }
        
        else if (b.length <= 3) {
            $("#fname1").show().html("Please enter a valid first name")
            f=0
        }
        else if (b.length > 3 && b.length < 10) {
            $('#fname1').hide().html()
            f=1
        }
        else if (b.length >= 10) {
            $("#fname1").show().html("Please enter a valid first name")
            f=0
        }else{
            f=1
        }
        
    });


// Function for lname

    $('#lname').keyup(function () {
        var bNam = /^[A-Za-z]+$/
        var bb = $('#lname').val()        
        var res = bNam.test(bb)
        if (bb.length = "") {
            $("#lname1").show().html("Please enter a last name")
            w=0
        }
        else if(res == false){
            alert("please enter char only")
            w=0
      }
        else if (bb.length < 3) {
            $("#lname1").show().html("Please enter a valid last name")
            w=0
        }

        else if (bb.length > 3 && bb.length < 10) {
            $('#lname1').hide().html()
            w=1
        }
        else if (bb.length > 10) {
            $("#lname1").show().html("Please enter a valid last name")
            w=0

        }
    });
});

// Function for email

$('#email').keyup(function(){
    validmail()
})
function validmail(){
 let umail = $('#email').val();
 let RegExpression=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var result=RegExpression.test(umail)
if(result){
 $('#email1').hide().html();
}
else{
 $('#email1').show().html("provide valid mail id");

}

}

//logic for phone number

$('#phone').keyup(function () {
    var d = $('#phone').val()
    if (d.length < 9) {
        $('#phone1').html("please enter 10 digit  phone number")
    }
    else if (d.length > 9 && d.length <= 10) {
        $('#phone1').hide().html()
    }
    else if (d.length >= 9) {
        $("#phone1").show().html("Please enter only 10 digit number")

    }
})

// Function for password

$('#pwd').keyup(function () {
    var e = $('#pwd').val()
    if (e.length = "") {
        $('#pwd1').html('please create password')
    }
    else if (e.length <= 5) {
        $('#pwd1').html('please create 5 to 10 digit passpword')
    }
    else if (e.length >= 5 && e.length <= 10) {
        $('#pwd1').hide().html()
    }
    else if (e.length >= 11) {
        $('#pwd1').show().html('please create short passoword')
    }

});

// Function for confirm password


$('#cpwd').keyup(function () {
    var v = $('#cpwd').val()
    var cc = $('#pwd').val()
    if (cc !== v) {
        $('#cpwd1').html('your confirm password did not get matched')
    }
    else {
        $('#cpwd1').html('your confirm password  get matched')

    }
});

// Function for address

$('#address').keyup(function () {
    var f = $('#address').val()
    if (f.length == "") {
        $('#address1').show().html("enter a address");
    }
    else if (f.length <= 5) {
        $('#address1').show().html("enter a address");
    }
    if (f.length >= 5) {
        $('#address1').hide().html("enter a address");
    }
});

// Function for city


$('#city').keyup(function () {
    let cha = /^[A-Za-z]+$/
    var g = $('#city').val()
    var gt = cha.test(g)

    if (g.length == "") {
        $('#city1').show().html("enter city")
        c=0
    }
    else if(gt == false){
        alert("enter only Character only")
        c=0
    }
    else if (g.length < 5) {
        $('#city1').show().html("enter a valid city");
        c=0
    }
     else if(g.length > 4) {
        $('#city1').hide().html();
        c=1
    }
    


});

// Function for state

$('#state').change(function () {
    var h = $('#state').val()
    if (h.length == "") {
        $('#state1').show().html("select atleast one state")
    }
    else if (h.length != "") {
        $('#state1').hide().html()
    }
});

// Function for Gender

var  status=false;
$("#m").click(function(){
  $("#gender1").hide();
return status=true;
})
$("#f").click(function(){
  $("#gender1").hide();
  return  status=true;

})
function m_check(){

var gender=$('#m').attr("checked");
if(gender != "checked" && status != true) {
 $("#gender1").show().html("plz select gender");
   return   m_err=false;
} else {
 $("#gender1").hide();
 return   m_err=true;
}
}
function f_check(){
var gender=$('#f').attr("checked");
if(gender != "checked" && status != true) {
$("#gender1").show().html("plz select gender");
return   f_err=false;
} else {
$("#gender1").hide();
return   f_err=true;
}
}

 $('#formbtn').click(function(){
  event.preventDefault();
  m_check()
  f_check()
 })


// Function for Hobby


$('.myhobby').click(function(){
    checkbox()
})

function checkbox(){
    var noc = $('input:checkbox:checked').length
    if(noc < 2){
        $('#hobby1').show().html("select atleast 2 hobby")
    }
    else{
        $('#hobby1').hide()
    }
}



$('#formbtn').click(function () {
    event.preventDefault()
    var a1 = $('#fname').val()
    var b1 = $('#lname').val()
    var c1 = $('#email').val()
    var d1 = $('#phone').val()
    var e1 = $('#pwd').val()
    var f1 = $('#cpwd').val()
    var g1 = $('#address').val()
    var h1 = $('#city').val()
    var stat = $('#state').val()
    var genn  = $('input:checkbox:checked')
    var hobb = $('input:checkbox:checked')
    var lenhob = hobb.length;
    
   var genM = $('#m').val()
   var genF = $('#f').val()


    if(a1.length < 5 || a1.length > 10 ){
        alert('please validate first name filed ');

    }
    else if(b1.length < 5 || b1.length >10){
        alert('please validate last name filed ');
    }
    else if(d1.length < 10 || d1.length > 10){
        alert("Please provide 10 digit number")
    }
    else if(e1.length < 5 ){
        alert("Please Create strong password")

    }
    else if(e1 != f1){
        alert("Please enter current  and confirm password same")

    }
    else if(g1.length < 5){
        alert("Please enter valid address")
    }
    else if(h1.length == ""){
        alert("Please enter city")
    }
    else if(stat == ""){
        alert("Please select state")

    }
    else if(genn == ""  ){
        alert("Please select gender")

    }
    else if(hobb.length < 2){
        alert("Please select atleast two hobby")

    }
    

   else  if ( f==1 && w==1 && c==1 && a1 != "" && b1 != "" && c1 != "" && d1 != "" && e1 != "" && f1 != "" && g1 != "" &&
        h1 != "" && stat != "" && lenhob > 1 && genn != 1  &&  (genM != "" || genF != "" ) ) {
        alert('form is submitted');
        location.reload();

    }
    else {
        alert('fill all the filed');

    }
})
