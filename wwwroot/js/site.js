// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


   let req = new XMLHttpRequest();

   req.onreadystatechange = function () {
     if (this.readyState === 4 && this.status === 200) {
        console.log(this.responseText)
    //    let b = JSON.parse(t);
    //    console.log(b[4].name);
     }
   };
   req.open("GET", "https://localhost:7219/api/APIconteroller", true);
   req.send();
