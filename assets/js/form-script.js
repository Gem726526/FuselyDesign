let state_arr = new Array("Province 1", "Province 2", "Bagmati Province", "Gandaki Province", "Lumbini Province", "Karnali Province", "Sudurpashchim Province");


let district = new Array();
district[0] = "Select District";
district[1] = "Bhojpur|Dhankuta|Ilam|Jhapa|Khotang|Morang|Okhaldhunga|Panchthar|Sankhuwasabha|Solukhumbu|Sunsari|TaplejungTerhathum|Udayapur";
district[2] = "Bara|Dhanusa|Mahottari|Parsa|Rautahat|Saptari|Sarlahi|Siraha";
district[3] = "Bhaktapur|Chitwan|Dhading|Dolakha|Kathmandu|Kavrepalanchok|Lalitpur|Makawanpur|Nuwakot |Ramechhap|Rasuwa|Sindhuli|Sindhupalchok";
district[4] = "Baglung|Gorkha|Kaski|Lamjung|Manang|Mustang|Myagdi|Nawalpur|Parbat|Syangja|Tanahu ";
district[5] = "Arghakhanchi|Banke|Bardiya|Dang|Gulmi|Kapilvastu|Parasi|Palpa|Pyuthan|Rolpa|Rukum|Rupandehi";
district[6] = "Dailekh|Dolpa |Humla |Jajarkot |Jumla |Kalikot |Mugu |Rukum Paschim |Salyan |Surkhet ";
district[7] = "Achham|Baitadi|Bajhang|Bajura|Dadeldhura|Darchula|Doti|Kailali|Kanchanpur";


function matchPassword() {
    let pw1 = document.getElementById("password").value;
    let pw2 = document.getElementById("confirm-password").value;
    if (pw1 != pw2) {
        alert("Passwords did not match");
    }
}

function populatedistricts(stateElementId, districtElementId) {

    let selectedstateIndex = document.getElementById(stateElementId).selectedIndex;

    let districtElement = document.getElementById(districtElementId);

    districtElement.length = 0;
    districtElement.options[0] = new Option('Select district', '');
    districtElement.selectedIndex = 0;

    let district_arr = district[selectedstateIndex].split("|");

    for (let i = 0; i < district_arr.length; i++) {
        districtElement.options[districtElement.length] = new Option(district_arr[i], district_arr[i]);
    }
}

function populateStates(stateElementId, districtElementId) {

    let stateElement = document.getElementById(stateElementId);
    stateElement.length = 0;
    stateElement.options[0] = new Option('Select State', '-1');
    stateElement.selectedIndex = 0;
    for (let i = 0; i < state_arr.length; i++) {
        stateElement.options[stateElement.length] = new Option(state_arr[i], state_arr[i]);
    }



    if (districtElementId) {
        stateElement.onchange = function() {
            populatedistricts(stateElementId, districtElementId);
        };
    }
}
populateStates("state", "district");


let form = document.getElementById("user_form");
let button = document.querySelector(".register");
form.addEventListener("submit", formdata);


function formdata(e) {
    e.preventDefault();

    first_name = (document.querySelector(".name").value);
    user_name = document.querySelector(".user_name").value;
    phone_number = document.querySelector(".phone_number").value;
    state = document.querySelector(".state").value;
    district = document.querySelector(".district").value;
    about = document.querySelector(".about").value;
    password = document.querySelector(".password").value;
    confirm_password = document.querySelector(".confirm_password").value;
    gender = document.querySelector("input[name='gender']:checked").value;


    let formObject = {
        firstName: first_name,
        user_name: user_name,
        phone_number: phone_number,
        state: state,
        district: district,
        about: about,
        password: password,
        confirm_password: confirm_password,
        gender: gender,
    }
    console.log(formObject)
}