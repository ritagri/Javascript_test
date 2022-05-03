/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

let button = document.getElementById("btn");

    button.onclick = function () {

const state = {};    
    const createTableSkeleton = () => {
        const login = document.createElement('th');
        login.innerText = 'login';
      
        const image = document.createElement('th');
        image.innerText = 'Image';

        const tr = document.createElement('tr');
        tr.append(login, image);
      
        const thead = document.createElement('thead');
        thead.append(tr);
      
        const table = document.createElement('table');
        table.append(thead, document.createElement('tbody'));
        document.body.append(table);}
      

        function populateTable(users) {
            const tbody = document.querySelector('tbody');
            tbody.innerHTML = '';
          
            users.forEach(user => {
              const login = document.createElement('td');
              login.innerText = user.login
          
              const img = document.createElement('img');
              img.src = user.avatar_url;
              const image = document.createElement('td');
              image.append(img);
          
              const tr = document.createElement('tr')
              tr.append(login, image);
              tbody.append(tr);
            });
          }

          createTableSkeleton();

          async function fetchData() {
            try {
              let response = await fetch('https://api.github.com/users');
              if (response.ok) {
                state.users = await response.json();
                populateTable(state.users);
              }
            } catch (error) {
              console.error(error);
            }
          }
          
          fetchData();      
          document.getElementById("message").style.display = "none";
}








        //   KITI BŪDAI
        //   fetch('https://api.github.com/users')
// .then(photo => photo.json())
// .then(getData => {

//     let output = "";

//    getData.forEach((item,index)=>{
//        console.log(item);
//       output += `
//       <img src="${item.avatar_url}">
//       <th>${item.login}</th>
//       `
      
//    })
//    console.log(typeof(output));
//    document.getElementById("output").innerHTML = output;
// })
// .catch(err => console.log("nepavyko",err))


// let display = document.getElementById("btn");
// display.onclick = output;
//     display.innerHTML = output;


 
    // fetch("https://api.github.com/users")
    // .then((myData) => myData.json())
    // .then((getData) => {
    // console.log(getData);
    
    // let output = "";
    
    // getData.forEach((item, index) => {
 
    // output += `
    // <tr>
    // <td> ${item.login} </td>
    // <td><img src="${item.avatar_url}"></td>
    // </tr>`;
    // });
    
    // document.body.innerHTML = output;
    
    // document.body.innerHTML = `<table style="border:1px solid black ;">"` + output + "</table>"
    // });
