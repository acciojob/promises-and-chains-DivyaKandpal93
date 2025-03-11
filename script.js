 function validateForm(event) {
            event.preventDefault(); // Prevents form submission
            
            let age = document.getElementById("age").value.trim();
            let name = document.getElementById("name").value.trim();
            
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
            })
            .then(message => alert(message))
            .catch(error => alert(error));
        }