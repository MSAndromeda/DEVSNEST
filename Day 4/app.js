function moveHands() {
    with(new Date()) {
        h = 30 * ((getHours() % 12) + getMinutes() / 60 + getSeconds() / 3600); // 30 degrees hour
        m = 6 * (getMinutes() + getSeconds() / 60 + getMilliseconds() / 60000); // 6 degrees every minute
        s = 6 * (getSeconds() + getMilliseconds() / 1000); // 6 degrees every second
        //rotate CSS attribute to those degree values -->
        document.getElementById("seconds").style.cssText =
            "-webkit-transform:rotate(" + s + "deg);";

        document.getElementById("seconds-back").style.cssText =
            "-webkit-transform:rotate(" + s + "deg);";

        document.getElementById("minutes").style.cssText =
            "-webkit-transform:rotate(" + m + "deg);";

        document.getElementById("hours").style.cssText =
            "-webkit-transform:rotate(" + h + "deg);";
        setTimeout(moveHands, 1); // calling the function every second
    }
}

window.onload = moveHands; // making sure the function starts on load of webpage