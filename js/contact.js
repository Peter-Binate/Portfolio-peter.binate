window.addEventListener('load', () => {
    const form = document.getElementById('form');
	const username = document.getElementById('username');
	const email = document.getElementById('email');
	const message = document.getElementById('message');
	const popup = document.getElementById("popup");
    const inputsLabel = document.querySelectorAll('.input-anim');
    const messageBoxLabel = document.querySelector('.message-anim');

	
    // Dès qu'on va remplir l'input: fixe le label en haut
    inputsLabel.forEach((function (input) {
        input.addEventListener('input', function (event) {
            checkInputs();
        })
    }))

    // Dès qu'on va remplir le textarea le label est fixé en haut
    messageBoxLabel.addEventListener('input', function (event) {
        // Empêche le label et la value de l'input de se superposer 
        checkInputs();
    })  
    
	form.addEventListener('submit', (e) => {
		e.preventDefault();
		sendEmail();
		checkInputs();
	});

		function checkInputs() {
			const usernameValue = username.value.trim();
			const emailValue = email.value.trim();
			const messageValue = message.value.trim();

			if (usernameValue === '') {
				setErrorFor(username, 'Entrer votre nom');
			} else {
				setSuccessFor(username);
			}

			if (emailValue === '') {
				setErrorFor(email, 'Enter votre Email');
			} else if (!isEmail(emailValue)) {
				setErrorFor(email, 'Email incorrecte');
			} else {
				setSuccessFor(email);
			}

			if (messageValue === '') {
				setErrorForTextArea(message, 'Vous n\'avez écrit aucun message');
			} else {
				setSuccessForTextArea(message);
			}
		}

		function setErrorFor(input, message) {
			const formControl = input.parentElement;
			const small = formControl.querySelector('small');
			small.innerText = message;
			formControl.className = 'input-box active-input error';
            input.classList.add('error');
		}

		function setErrorForTextArea(input, message) {
			const formControl = input.parentElement;
			const small = formControl.querySelector('small');
			small.innerText = message;
			formControl.className = 'message-box active-input error';
            input.classList.add('error');
		}

		// Si tous les champs sont remplies
		function setSuccessFor(input) {
			const formControl = input.parentElement;
			formControl.className = 'input-box active-input success';
			input.classList.remove('error');
		}

		function setSuccessForTextArea(input) {
			const formControl = input.parentElement;
			formControl.className = 'message-box active-input success';
			input.classList.remove('error');
		}

		function isEmail(email) {
			return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
		}

		function openPopup(){
			popup.classList.add("open-popup");
		}

		function closePopup(){
			popup.classList.remove("open-popup");
		}

		
		function sendEmail() {
			const mailContent = 'nom: ' + username.value + 
					 '<br/> email: ' + email.value + 
					 '<br/> message: ' + message.value;

			Email.send({
				Host : "smtp.elasticemail.com",
				Username : "peter.binate@gmail.com",
				Password : "99DC38BD182AE88769F7DF76F765F66EA71F",
				To : 'peter.binate@gmail.com',
				From : email.value,
				Subject : username.value + ' vous a envoyé un message depuis votre Portfolio',
				Body : mailContent,
			}).then(
				message => alert(message),
				//Rénitialisation du formulaire après envois
				form.reset()
			
			/*setTimeout(() => {
				popup.classList.add("open-popup");
			}, 3000)*/
			);
		}

		/*function sendEmail() {
			Email.send({
				SecureToken : "d63ec0f0-4669-4497-aa5f-09b2a9f17",
				Host: "smtp.gmail.com",
				To : 'peter.binate@gmail.com',
				From : "peter.binate@gmail.com",
				Subject : `${usernameValue} vous a envoyé un message depuis votre Portfolio`,
				Body : `Nom: ${usernameValue} <br/> 
						Email: ${emailValue} <br/>
						Message: ${messageValue}`,
			}).then(
			  message => alert("mail envoyé avec")
			);
		}*/
})
		