window.onload = function () {
  document
    .getElementById("form-send-email")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      //Get the input information
      let msg = document.getElementById("message").value;

      // these IDs from the previous steps
      emailjs
        .send("contact_service", "contact_form", {
          message: msg,
        })
        .then(
          function () {
            console.log("SUCCESS!");
          },
          function (error) {
            console.log("FAILED...", error);
          }
        );
    });
};
