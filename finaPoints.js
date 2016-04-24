document.addEventListener('DOMContentLoaded', function () {

$all('input, select', function (ele) {
    ele.on('keyup', calculate);
    ele.on('change', calculate);
});
$id("form").on('submit', calculate);
$id("in_points").on('click', function () {
    $all('#min, #sec, #hun', function (ele) {
        ele.disable();
    });
    $id("points").enable();
});
$id("in_time").on('click', function () {
    $all('#min, #sec, #hun', function (ele) {
        ele.enable();
    });
    $id("points").disable();
});


function calculatePoints(T, B) {
    if (T <= 0 || B < 0) {
        return -1;
    }
    var P = 1000 * Math.pow(B / T, 3);
    // point values are truncated to the integer number.
    return Math.floor(P);
}

function toHundreds(min, sec, hun) {
    return min * 6000 + sec * 100 + hun;
}

function toDisplayTime(hundreds) {
    return {
        min: Math.floor(hundreds / 6000).toString(),
        sec: Math.floor(hundreds % 6000 / 100).toString(),
        hun: Math.floor(hundreds % 100).toString()
    };
}

// Get the base time if not found will return -1
function getBaseTime(course, gender, relay, distance, stroke) {
    var event = baseTimes.filter(function (x) {
        return x.course === course && x.gender === gender && x.relay === relay && x.distance === distance && x.stroke === stroke;
    });
    return event.length === 0 ? -1 : event[0].basetime * 100;
}

function calculateTime(P, B) {
    if (B === 0 || P === 0) {
        return -1;
    }
    return +(function iter(est) {
        return calculatePoints(est + 1, B) === P ? iter(est + 1) : est;
    }(Math.floor((10 * B) / Math.pow(P, 1 / 3))));
}

function calculate() {
    var course = $value('course'),
        gender = $value('gender'),
        dist = $value('distance'),
        relay = dist.substring(0, 2) === "4x" ? 4 : 1,
        distance = relay === 1 ? +dist : +dist.substring(2),
        stroke = $value('stroke'),
        base = getBaseTime(course, gender, relay, distance, stroke),
        inputType = $value('in'),
        time = toHundreds(+$value("min"), +$value("sec"), +$value("hun")),
        points = +$value("points"),
        displayTime;

    if (inputType === "time") {
        points = calculatePoints(time, base).toString();
        $value("points", points);
    } else if (inputType === "points") {
        time = calculateTime(points, base);
        displayTime = toDisplayTime(time);
        $value("min", displayTime.min);
        $value("sec", displayTime.sec);
        $value("hun", displayTime.hun);
    } else {
        alert("Error: I dont know if I should cal time or points");
    }
}

function $value(name, val) {
    var field = document.querySelector('*[name="' + name + '"]')
    if (val) {
        field.value = val;
    } else {
        if (field.type === 'radio') {
            return document.querySelector('*[name="' + name + '"]:checked').value;
        } else {
            return field.value;
        }
    }
}

function $addHelpers(ele) {
    ele.on = function (event, handler) {
        ele.addEventListener(event, handler);
    };
    ele.disable = function () {
        ele.setAttribute("disabled", "disabled");
    };
    ele.enable = function () {
        ele.removeAttribute("disabled");
    };

    return ele;
}

function $all(selector, fn) {
    if(fn) {
        [].forEach.call($all(selector), fn);
    } else {
        elements = document.querySelectorAll(selector);
        return [].map.call(elements, $addHelpers);
    }
}

function $id(name) {
    ele = document.getElementById(name)
    return $addHelpers(ele);
}

});
