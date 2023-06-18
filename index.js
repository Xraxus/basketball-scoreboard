// Declare and initialize variables that will hold the count of both teams
let homeCount = 0;
let guestCount = 0;

let homeCounterElement = document.getElementById("home-count-el")
let guestCounterElement = document.getElementById("guest-count-el")

resetCounters();

// Function that allows to reset counters
function resetCounters(){
    homeCount = 0;
    guestCount = 0;
    
    homeCounterElement.textContent = homeCount;
    guestCounterElement.textContent = guestCount;
    
    updateLeader();
}

// Function that toggles CSS 'highlight-leader' class on count elements if one of the team is in the lead.
function updateLeader(){
    homeCounterElement.classList.toggle('highlight-leader', homeCount > guestCount);
    guestCounterElement.classList.toggle('highlight-leader', homeCount < guestCount);
}

// Functions that add points to either home or guest depening on teamName passed to the function
function addOnePt(teamName){
    if (teamName === "home") {
        homeCount+=1
        homeCounterElement.textContent = homeCount
    }
    else if (teamName === "guest") {
        guestCount+=1
        guestCounterElement.textContent = guestCount
    }
    updateLeader();
}

function addTwoPt(teamName){
    if (teamName === "home") {
        homeCount+=2
        homeCounterElement.textContent = homeCount
    }
    else if (teamName === "guest") {
        guestCount+=2
        guestCounterElement.textContent = guestCount
    }
    updateLeader();
}

function addThreePt(teamName){
    if (teamName === "home") {
        homeCount+=3
        homeCounterElement.textContent = homeCount
    }
    else if (teamName === "guest") {
        guestCount+=3
        guestCounterElement.textContent = guestCount
    }
    updateLeader();
}