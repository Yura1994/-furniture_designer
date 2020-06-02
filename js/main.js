"use strict";

window.addEventListener('DOMContentLoaded', () => {
    setOptionsValues(3, "stenaSel")
    setOptionsValues(5, "topfacadSel")
    setOptionsValues(4, "botomfacadSel")
    setOptionsValues(2, "stolSel")
    setOptionsValues(4, "oboiSel")
});
document.body.addEventListener('click', function (evt) {
    
            
    if (evt.target.className === 'changeSten change') {
        stena.src = "img/pervui/stena/" + evt.target.attributes.data.value;
    }
    
    if (evt.target.className === 'changeFasadUP change') {
        topfacad.src = "img/pervui/topfacad/" + evt.target.attributes.data.value;
    }
    if (evt.target.className === 'changeFasadDown change') {
        botomfacad.src = "img/pervui/botomfacad/" + evt.target.attributes.data.value;
    }

    if (evt.target.className === 'stolS change') {
        stol.src = "img/pervui/stol/" + evt.target.attributes.data.value;
    }
    if (evt.target.className === 'oboiS change') {
        oboi.src = "img/pervui/oboi/" + evt.target.attributes.data.value;
    }
    oboiS
}, false);
getValuesUrl('stenaSel', 'stena', 'img/pervui/stena/')


getValuesUrl('topfacadSel', 'topfacad', 'img/pervui/topfacad/')

getValuesUrl('botomfacadSel', 'botomfacad', 'img/pervui/botomfacad/')


getValuesUrl('stolSel', 'stol', 'img/pervui/stol/')

getValuesUrl('oboiSel', 'oboi', 'img/pervui/oboi/')

function getValuesUrl(selectedId, imageId, url) {
    let selectedOption = document.getElementById(selectedId);
    let changedOption = document.getElementById(imageId);
    selectedOption.onchange = function (){
        changedOption.src = url + selectedOption.value;
    }   
}
function setOptionsValues(number, selectId) {
    let select = document.getElementById(selectId);
    for (let i = 0; i < number; i++){
        select.innerHTML += `<option value="0${i+1}.png">${i+1}</option>`
    }
}

