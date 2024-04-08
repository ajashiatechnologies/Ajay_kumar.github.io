document.addEventListener("DOMContentLoaded", function () {
    var submitButton = document.getElementById("submit");
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var messageBox = document.getElementById("messageBox");


    if (submitButton) {
        submitButton.addEventListener("click", function () {
          
            var name = encodeURIComponent(nameInput.value.trim());
            var email = encodeURIComponent(emailInput.value.trim());
            var message = encodeURIComponent(messageBox.value.trim());
    

            if (name === "" || email === "" || message === "" ) {
                alert("Please fill out all fields before submitting.");
                return;
            }

  
            var formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfWK1rIAWf47tIlMg4lyJlLWgNBA8XBNFc4BsVca4fD7HP_lw/viewform?" +
                "usp=sf_link&entry.1000027=" + message +
                "&entry.1000020=" + name +
                "&entry.1000025=" + email;

            
            window.open(formUrl, '_blank');
        });
    }
});
