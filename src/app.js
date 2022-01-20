/* eslint-disable */
import "bootstrap";
import "./main.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");
  const myAlert = document.querySelector("#myAlert");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function(form) {
    form.addEventListener(
      "submit",
      function(event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
          myAlert.classList.replace("dnone", "dshow");
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
window.onload = function() {
  //write your code here
};
