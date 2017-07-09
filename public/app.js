console.log("is this on?")

document.getElementById("patientsTab").onclick = function() {patientTabPopulate()};

function patientTabPopulate() {
    alert("Hey this is patient tab");
}

document.getElementById("patientSearchForm").onsubmit = function() {patientSearch()};

function patientSearch() {
    alert("The form was submitted");
}

document.getElementById("patientSearchForm").onclick = function() {patientSearch()};
