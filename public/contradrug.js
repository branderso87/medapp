fetch(`https://rxnav.nlm.nih.gov/REST/rxcui.json?name=omeprazole`) // use QuerySelector to get and set drug search
  .then(function (response) {
    return response.json();
}).then(function (json) {
    return json.idGroup.rxnormId[0];
}).then(function (medID) {
  fetch(`https://rxnav.nlm.nih.gov/REST/interaction/interaction.json?rxcui=${medID}&sources=ONCHigh`)
    .then(function (res2) {
      return res2.json();
  }).then(function (contra) {
      var contraDrug = contra.interactionTypeGroup[0].interactionType[0].interactionPair[0].description;
      console.log(contraDrug);
      injectHTML(contraDrug);
      function injectHTML(html){
        document.querySelector(".contraindicator-1").insertAdjacentHTML('afterbegin', html);
      }
  })
})
