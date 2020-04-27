function mainFunction() {
    //some text
    console.log('some text');
};

function getFormValues(evn) {
    /* //match section element Id ..to.. text of list item (remove whitespaces)
    const sectionIdToGoTo = evn.target.textContent.replace(/\s/g, '').toLowerCase();
    let sectionToGoTo = document.getElementById(sectionIdToGoTo);
    boundingSection = sectionToGoTo.getBoundingClientRect();
    //determine distance to scroll
    window.scrollTo({ top: boundingSection.top + window.scrollY, left: 0, behavior: "smooth" });;
    //Wouldn't this solution be easier? Is there an disadvange? Is compability an issue?
    //sectionToGoTo.scrollIntoView({ block: "start", behavior: "smooth" }); */
};

function interactWithServer(evn) {

    console.log("::: Form Submitted :::");
    fetch('http://localhost:8080/analyze', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: formText })
        })
        .then(function(res) {
            return res.json()
        })
        .then(function(res) {
            //document.getElementById("polarity").innerHTML = res.polarity + '   with a polarity confidence of ' + res.polarity_confidence;
            //document.getElementById("subjectivity").innerHTML = res.subjectivity + '   with a subjectivity confidence of ' + res.subjectivity_confidence;
            //document.getElementById("text").innerHTML = res.text;
        })
};

export { mainFunction }
/**
 * Define Global Variables
 * 
 */
const buttonElement = document.getElementById('getLocationData');
//const sections = document.getElementsByTagName('section');
//const numberOfSections = document.getElementsByTagName('section').length; //MEMO:=4
//const navLink = document.getElementsByTagName('li');

// Scroll to section on link click

buttonElement.addEventListener('click', function(evn) {
    evn.preventDefault();
    getFormValues(evn);
});