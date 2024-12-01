let state = document.querySelector("#state")
let city = document.querySelector("#city")
let zipcode = document.querySelector("#zipcode")
let telephone = document.querySelector("#telephone")

let Tstate = document.querySelector("#tstate")
let Tcity = document.querySelector("#tcity")
let Tzipcode = document.querySelector("#tzip")
let TEMtelephone = document.querySelector("#tphonenumber")

let sameas = document.querySelector("#sameaspermanent")
sameas.addEventListener('change', () => {
        if (sameas.checked === true) {
            Tstate.value = state.value;
            Tcity.value = city.value;
            Tzipcode.value = zipcode.value;
            TEMtelephone.value = telephone.value;
        } else if (sameas.checked === false) {
            Tstate.value = "";
            Tcity.value = "";
            Tzipcode.value = "";
            TEMtelephone.value = "";
        }
    })