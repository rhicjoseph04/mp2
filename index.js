

const url = 'http://127.0.0.1:5500/productdetails.js';

 fetch(url)
 .then (response => response.json()) //object
 .then (result => {
   console.log(result)//array

   let a = [];
   a = result;
  
   let div_area = document.getElementById("products");

   let show ="";

      a.forEach(
        function(item){

        show += 
        `<div class="card d-inline-flex" style="width: 18rem;">
            <img src="${item.img}" class="card-img-top" alt"...">
            <div class="card-body">
            <p class="card-text" id="p${item.id} hidden>${item.id}</p>
            <h5 class="card-text" id="prod${item.id}"> ${item.product}</h5>
            <p class="card-text" id="pri${item.id}">${item.price}</p>
            <a href="#"  class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Buy</a>

        //  Modal
        <div class="modal fade" id="exampleModal" tabindex"-1" aria-labelledby="exampleModalLabel" aria-hidden>
        <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <p class="card-text" id="p${item.id} hidden>${item.id}</p>
        <h5 class="card-text" id="prod${item.id}"> ${item.product}</h5>
        <p class="card-text" id="pri${item.id}">${item.price}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary"Save changes</button>
          </div>
          </div>
        <div>
        </div>
        `;

      });

      div_area.innerHTML = show;
})
   

function addOrder(id){
  let array = localStorage.getItem("order");
  console.log(array);

  if (array == null){
    let orderlist = [];
    let new_id = document.getElementById("p"+id).innerText;
    let new_prod = document.getElementById("prod"+id).innerText;
    let new_price = document.getElementById("prod"+id).innerText;
    orderlist.push({id: new_id, product: new_prod, price: new_price});
    localStorage.setItem("order,",JSON.stringify(orderlist));
  }

}
 

//  var x =
//   document.getElementById("demo");
//   function getLocation() {
//     if (navigator.geolocation) {

//       navigator.geolocation.getCurrentPosition(showPosition);
//     } else {
//       x.innerHTML = "Geolocation is not supported by this browser,";
//     }
//     }
//       x.innerHTML = "Latitude: " + 
//       position.coords.latitude + 
//       "<br>Longtitude" + 
//       position.coords.longitude;
    
  // let url = 'https://quotes15.p.rapidapi.com/quotes/random/';
  // const options = {
  //   method: 'GET',
  //   headers: {
  //     'X-RapidAPI-Key': 'c211b48de4msh1e822ec721d8793p109729jsn485ea7730343',
  //     'X-RapidAPI-HOST': 'quotes15.p.rapidapi.com'
  //   }
  // };

  // fetch(url,options)
  //   .then(response => response.json())
  //   .then(response => {console.log(response)
  //   document.getElementById("quote").innerHTMLm = response.content;
  //   document.getElementById("author").innerHTMLm = response.originator.name;
  //   })
  //   .catch(err => console.log(err));

function getloc(){
  navigator.geolocation.getCurrentPosition(showPosition);

}
 function showPosition(position){
  console.log(position);
  let x = document.getElementById("loc");
  x.innerHTML = `Latitude: ${position.coords.latitude} Longtitude: ${position.coords.longtitude}`;
 }