/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

fetch("cars.json")
.then(jsonResp => jsonResp.json())
.then(jsonData  => {
    let output = "";
    jsonData.forEach((item,index)=>{
        output += `<h1> ${item.brand}</h1> <h4>${item.models}</h4>`;
    })
    document.getElementById("output").innerHTML = output;
                        })


                     