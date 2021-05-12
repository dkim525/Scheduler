// Define Variables
moment(Date);
$("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'));

var timeNow = moment();
timeNow = timeNow.startOf("hour");

timeBefore = moment().startOf('day').add(9,"hours");

var nine = timeBefore.add(0, "h");
nine = nine.format('hh:mm A');
$(".spanNine").text(nine);

var ten = timeBefore.add(1, "h");
ten = ten.format('hh:mm A');
$(".spanTen").text(ten);

var eleven = timeBefore.add(1, "h");
eleven = eleven.format('hh:mm A');
$(".spanEleven").text(eleven);

var twelve = timeBefore.add(1, "h");
twelve = twelve.format('hh:mm A');
$(".spanTweleve").text(twelve);

var one = timeBefore.add(1, "h");
one = one.format('hh:mm A');
$(".spanOne").text(one);

var two = timeBefore.add(1, "h");
two = two.format('hh:mm A');
$(".spanTwo").text(two);

var three = timeBefore.add(1, "h");
three = three.format('hh:mm A');
$(".spanThree").text(three);

var four = timeBefore.add(1, "h");
four = four.format('hh:mm A');
$(".spanFour").text(four);

var five = timeBefore.add(1, "h");
five = five.format('hh:mm A');
$(".spanFive").text(five);


function time() {
    // 9:00
    timeNow = timeNow.startOf("hour");
    nine = moment().startOf('day').add(9, "hours");
    if (timeNow.isAfter(nine)) {
        $(".form9").addClass("past");
    }
    else if (timeNow.isBefore(nine)) {
        $(".form9").addClass("future");
    }
    else if (timeNow.isSame(nine)) {
        $(".form9").addClass("present");
    }
    // 10:00
    ten = moment().startOf('day').add(10, "hours");
    if (timeNow.isAfter(ten)) {
        $(".form10").addClass("past");
    }
    else if (timeNow.isBefore(ten)) {
        $(".form10").addClass("future");
    }
    else if (timeNow.isSame(ten)) {
        $(".form10").addClass("present");
    }
     // 11:00
     eleven = moment().startOf('day').add(11, "hours");
     if (timeNow.isAfter(eleven)) {
        $(".form11").addClass("past");
    }
    else if (timeNow.isBefore(eleven)) {
        $(".form11").addClass("future");
    }
    else if (timeNow.isSame(eleven)) {
        $(".form11").addClass("present");
    }
     // 12:00
     twelve = moment().startOf('day').add(12, "hours");
     if (timeNow.isAfter(twelve)) {
        $(".form12").addClass("past");
    }
    else if (timeNow.isBefore(twelve)) {
        $(".form12").addClass("future");
    }
    else if (timeNow.isSame(twelve)) {
        $(".form12").addClass("present");
    }
     // 1:00
     one = moment().startOf('day').add(13, "hours");
     if (timeNow.isAfter(one)) {
        $(".form1").addClass("past");
    }
    else if (timeNow.isBefore(one)) {
        $(".form1").addClass("future");
    }
    else if (timeNow.isSame(one)) {
        $(".form1").addClass("present");
    }
     // 2:00
     two = moment().startOf('day').add(14, "hours");
     if (timeNow.isAfter(two)) {
        $(".form2").addClass("past");
    }
    else if (timeNow.isBefore(two)) {
        $(".form2").addClass("future");
    }
    else if (timeNow.isSame(two)) {
        $(".form2").addClass("present");
    }
    // 3:00
    three = moment().startOf('day').add(15, "hours");
    if (timeNow.isAfter(three)) {
        $(".form3").addClass("past");
    }
    else if (timeNow.isBefore(three)) {
        $(".form3").addClass("future");
    }
    else if (timeNow.isSame(three)) {
        $(".form3").addClass("present");
    }
    // 4:00
    four = moment().startOf('day').add(16, "hours");
    if (timeNow.isAfter(four)) {
        $(".form4").addClass("past");
    }
    else if (timeNow.isBefore(four)) {
        $(".form4").addClass("future");
    }
    else if (timeNow.isSame(four)) {
        $(".form4").addClass("present");
    }
    // 5:00
    five = moment().startOf('day').add(17, "hours");
    if (timeNow.isAfter(five)) {
        $(".form5").addClass("past");
    }
    else if (timeNow.isBefore(five)) {
        $(".form5").addClass("future");
    }
    else if (timeNow.isSame(five)) {
        $(".form5").addClass("present");
    };
    
}
time();

var x = [9, 10, 11, 12, 1, 2, 3, 4, 5];
for (var i = 0; i < x.length; i++) {
    var dataHour = localStorage.getItem(x[i]);
    $(".form" + x[i]).val(dataHour);
}

$(".saveBtn").click(function () {
    event.preventDefault();
    var formValue = $(this).siblings(".form-control").val();
    console.log("This worked");
    var listItem = $(this).parent().data("hour");

    localStorage.setItem(listItem, formValue);
});