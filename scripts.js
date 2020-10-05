// Write your JavaScript code here.
// Remember to pay attention to page loading!
let offsetLeft = 0;
let offsetUp = 0;
let shuttleButtonHeight = 0;


function init() {
    let takeoff = document.getElementById("takeoff");
    let landing = document.getElementById("landing");
    let missionAbort = document.getElementById("missionAbort");
    let up = document.getElementById("up");
    let down = document.getElementById("down");
    let left = document.getElementById("left");
    let right = document.getElementById("right");
    let flightStatus = document.getElementById("flightStatus");
    let shuttleBackground = document.getElementById("shuttleBackground");
    let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    let rocket = document.getElementById("rocket");
    
    takeoff.addEventListener("click", function(event){
        let confirmation = window.confirm("Confirm that the shuttle is ready for take off.")
        if (confirmation) {
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            spaceShuttleHeight.innerHTML = 10000;
            shuttleButtonHeight = 10000;
        };
    });

    landing.addEventListener("click", function(event){
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerHTML = 0;
    });

    missionAbort.addEventListener("click", function(event){
        let confirmation = window.confirm("Confirm that you want to abort the mission.")
        if (confirmation) {
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.backgroundColor = "green";
            spaceShuttleHeight.innerHTML = 0;
        };
    });

    up.addEventListener("click", function(event){
        shuttleButtonHeight += 10000;
        spaceShuttleHeight.innerHTML = shuttleButtonHeight;
        offsetUp -= 10;
        rocket.style.position = 'relative';
        rocket.style.top = (offsetUp)+'px';
    });

    down.addEventListener("click", function(event){

    });

    left.addEventListener("click", function(event){

    });

    right.addEventListener("click", function(event){

    });
}









window.onload = init;