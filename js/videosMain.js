// (function () {
//   const carButtons = document.querySelectorAll('.data-ref');
//
//   function getCarData() {
//     // make an AJAX call to the database with the fetch API
//     const url = './includes/functions.php?carModel=' + this.id;
//
//     // the fetch API uses a JS Promise (new ES6 addition)
//     fetch(url) // do our ajax call
//       .then((resp) => resp.json()) // convert the response to JSON (built-in method)
//       .then((data) => { processResult(data); }) // then do the process result function
//       .catch(function(error) {
//         console.log(error); // catch any errors and show them in the console
//       });
//   }
//
//   function processResult(data) {
//     // deconstruct the data and extract only what we need
//     const { modelName, pricing, modelDetails } = data;
//
//     let model = document.querySelector('.modelName').textContent = modelName;
//     let price = document.querySelector('.priceInfo').innerHTML = pricing;
//     let desc = document.querySelector('.modelDetails').textContent = modelDetails;
//
//     // refactor this with an arrow function (shorthand function declaration)
//     carButtons.forEach(car => car.classList.add('nonActive'));
//
//     document.querySelector(`#${data.model}`).classList.remove('nonActive');
//   }
//
//   // event handling for the car thumbs -> get data on a click
//   carButtons.forEach(car => car.addEventListener('click', getCarData));
// })();
