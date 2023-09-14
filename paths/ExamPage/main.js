// fuction for dark mode

function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}


// function for alert while ending the exam
function endexamnow() {

    var answer = window.confirm("Do your really want to end the exam ?");
    if (answer === true) {
        window.location.href = "/";
    }
    else {
        return;
    }

}
function startAgain(){
    location.reload();
}

function showDetails(){
    document.querySelector('.checkAns').style.display = 'block';
    // document.querySelector('.checkAns').style.height = "10vh";
}