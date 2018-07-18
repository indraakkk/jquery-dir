// ============================================================
// global variable
const todoInputForm = document.getElementById("input-form");


// ============================================================
// display time
const displayClock = () => {
    const timeDate = new Date();
    const clock = document.querySelector("#clock");
    const date = document.querySelector("#date");

    let hours = timeDate.getHours() % 12;
    let minutes = timeDate.getMinutes();
    let dayOrNight = '';

    if (hours.toString().length < 2) {
        hours = '0' + hours;
    }
    if (minutes.toString().length < 2) {
        minutes = '0' + minutes;
    }
    if (timeDate.getHours() <= 12) {
        dayOrNight = 'AM';
    } else {
        dayOrNight = 'PM';
    }

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = days[timeDate.getDay()];

    const clockOutput = hours + ' : ' + minutes + ' ' + dayOrNight;
    const dateOutput = today;

    clock.textContent = clockOutput;
    date.textContent = dateOutput;
}

window.onload = clockFunction = () => {
    displayClock();
    setInterval(displayClock, 1000)
}


// ============================================================
// add todo
const create = (event) => {
    event.preventDefault()
}

$(document).ready(function () {
    $("#button-add").click(function () {
        let text = $("input").val()
        if ($("input").val().length === 0) {
            alert("fill the form first")
        } else($("#add").append("<li>" + text + "</li>"))
        $('input').val("")
    });
});

$(document).on("click", "li", function () {
    $("this").hide();
});

// ================================================================
// event listener

todoInputForm.addEventListener("submit", create);

// ================================================================
// resize images
$(document).ready(function () {
    $("img").css("max-height", "10rem");
});

// animate container
$(document).ready(function () {
    $("#button-move").click(function () {
        $(".d-flex").animate({
            top: '50px'
        });
    });
});

// hide images
$("#img1").click(function () {
    $(this).hide()
});

$("#img2").click(function () {
    $(this).hide();
});
$("#img3").click(function () {
    $(this).hide();
});