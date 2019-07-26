window.addEventListener('load', function(){
 console.log("Hello World!");

//this is to manipulate de Dom
function calculate(){
 let totalBill = document.getElementById("total-bill").value;
   // console.log(document.getElementById("total-bill").value);
  let serviceOptions = document.getElementById("service-options").value;
  // console.log(serviceOptions);
  let totalParty = document.getElementById("total-party").value;
  // console.log(totalParty);
  let totalTip = totalBill * serviceOptions;
  // console.log(totalTip);
  let myTip = totalTip / totalParty;
  let myTipAmount = document.createElement("P");
  document.getElementById("tip-content-container").appendChild(node);
}

let submitButton = document.querySelector('#calculate-button');
// console.log(submitButton);

submitButton.onclick = function() { calculate(); event.preventDefault(); };

});
