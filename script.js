function validationForm(event) {
        event.preventDefault();
        let name = document.getElementById("nameValue").value.trim();
        let age = document.getElementById("ageValue").value.trim();
        if (name === "" || age === "") {
          alert("Please enter valid details.");
          return;
        }
        let ageNumber = parseInt(age);
        new Promise((resolve, reject) => {
          setTimeout(() => {
            if (ageNumber >= 18) {
              resolve(`Welcome, ${name}. You can vote.`);
            } else {
              reject(`Oh sorry, ${name}. You aren't old enough.`);
            }
          }, 4000);
        }).then(result => alert(result))
        .catch(error => alert(error));
      }
