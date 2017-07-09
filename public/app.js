//fetch for patient meds
// looping through array of meds and push to contra fetch
//fetch for contraindications
fetch(`https://rxnav.nlm.nih.gov/REST/rxcui.json?name=omeprazole`)
  .then(function (response) {
    return response.json();
}).then(function (json) {
    return json.idGroup.rxnormId[0];
}).then(function (medID) {
  fetch(`https://rxnav.nlm.nih.gov/REST/interaction/interaction.json?rxcui=${medID}&sources=ONCHigh`)
    .then(function (res2) {
      return res2.json()
  }).then(function (contra) {
      var contraDrug = contra.interactionTypeGroup[0].interactionType[0].interactionPair[0].description;
      console.log(contraDrug);
  })
})

// fetch for patient list
// fetch for med refills
// fetch for authorization
// console.log('Poop');
