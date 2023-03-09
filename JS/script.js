//---Variables---

//

//Username&Surname
let nameSurname = '';

//KmDistance
let KmDistance = 0;

//UserAge
let UserAge = 0;

//KmPrice
const KmPrice = 0.21;

//DiscountJunior
const DJunior = 20;
    
//DiscountSenior
const DSenior = 40;
    
//junior
let junior = 18;
    
//senior
let senior = 65;
    
//DiscountJunior
let DiscountJunior = 0;
    
//DiscountSenior
let DiscountSenior = 0;
    
//finalprice
let FinalPrice = 0;

    
//---End variables---

//---Main---

let btnSub = document.getElementById('btnSubmit');
btnSub.addEventListener("click", calculate);

let btnRes = document.getElementById('btnReset');
btnRes.addEventListener("click", Reset);

    