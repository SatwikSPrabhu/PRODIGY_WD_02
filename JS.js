let startTime = 0;
let running = false;
let lapCount = 1;

function startStop() {
    if (running) {
        clearInterval(interval);
        document.getElementById("startStop").innerHTML = "Start";
    } else {
        startTime = startTime || new Date().getTime();
        interval = setInterval(updateTime, 10);
        document.getElementById("startStop").innerHTML = "Stop";
    }
    running = !running;
}

function updateTime() {
    const currentTime = new Date().getTime();
    const elapsedTime = currentTime - startTime;
    const formattedTime = formatTime(elapsedTime);
    document.getElementById("stopwatch").innerHTML = formattedTime;
}

function formatTime(milliseconds) {
    const date = new Date(milliseconds);
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const seconds = date.getUTCSeconds();
    const millisecondsStr = date.getUTCMilliseconds().toString().padStart(3, '0');
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${millisecondsStr}`;
}

function reset() {
    clearInterval(interval);
    startTime = 0;
    running = false;
    document.getElementById("startStop").innerHTML = "Start";
    document.getElementById("stopwatch").innerHTML = "00:00:00.000";
    document.getElementById("lap-times").innerHTML = "";
    lapCount = 1;
}

function lap() {
    if (running) {
        const lapTime = formatTime(new Date().getTime() - startTime);
        const lapElement = document.createElement("p");
        lapElement.innerHTML = `Lap ${lapCount}: ${lapTime}`;
        document.getElementById("lap-times").appendChild(lapElement);
        lapCount++;
    }
}