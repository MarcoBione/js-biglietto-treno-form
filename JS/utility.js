//calculation
function calculate(){

    //Username&Surname
    nameSurname = document.getElementById('nSurname').value;
    //Check
    console.log(nameSurname);

    //KmDistance
    KmDistance = document.getElementById('KmUser').value;
    //check
    console.log(KmDistance);

    //UserAge
    UserAge = document.getElementById('UserAge').value;
    //check
    console.log(UserAge);

    //check if the user put correct values
    if (KmDistance && UserAge) {

        console.log(KmDistance);
        console.log(UserAge);

        if (UserAge <= junior) {
            //For under 18
            DiscountJunior = ((KmDistance * KmPrice) * DJunior / 100).toFixed(2);
            console.log(DiscountJunior);
            //final calc
            FinalPrice= ((KmDistance * KmPrice) - DiscountJunior).toFixed(2);
            console.log(FinalPrice);
            document.getElementById('price').innerHTML =`
            <p>Ecco a lei Sig/Sig.a: ${nameSurname}</p>
            <p>Il prezzo del suo biglietto: ${FinalPrice}&euro;</p>
            `;
            document.getElementById('discount').innerHTML = `
            <p>Con uno sconto pari a: ${DiscountJunior}&euro;</p>
            `;

            }else if(UserAge >= senior){
                //for senior over 65
                DiscountSenior = ((KmDistance * KmPrice) * DSenior / 100).toFixed(2);
                console.log(DiscountSenior);
                //final calc
                FinalPrice = ((KmDistance * KmPrice) - DiscountSenior).toFixed(2);
                console.log(FinalPrice);
                document.getElementById('price').innerHTML = `
                <p>Ecco a lei Sig/Sig.a: ${nameSurname}</p>
                <p>Il prezzo del suo biglietto: ${FinalPrice}&euro;</p>
                `;
                document.getElementById('discount').innerHTML = `
                <p>Con uno sconto pari a: ${DiscountJunior}&euro;</p>
                `;
            }else{
                //calc if the User is > 18 <65
                FinalPrice = (KmDistance * KmPrice).toFixed(2);
                console.log(KmDistance);
                console.log(KmPrice);
                console.log(FinalPrice);
                document.getElementById('price').innerHTML = `
                <p>Ecco a lei Sig/Sig.a: ${nameSurname}</p>
                <p>Il prezzo del suo biglietto: ${FinalPrice}&euro;</p>
                `;
                document.getElementById('discount').innerHTML = `
                <p class="text-danger">Purtroppo non hai diritto ad uno sconto</p>
                `;
            };
            
    }else{
        document.getElementById('price').innerHTML = `
        <p class="text-danger">I valori da lei inseriti non sono corretti, perfavore ritenti!</p>
        `;
    };
};


//reset
function Reset(){

    document.getElementById('price').innerHTML = ``;

    document.getElementById('discount').innerHTML = ``;

       
}