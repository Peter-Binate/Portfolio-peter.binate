window.addEventListener('load', () => {
    const section = document.getElementById('contact');
	const form = document.getElementById('form');
	const username = document.getElementById('username');
	const email = document.getElementById('email');
	const message = document.getElementById('message');
	const popup = document.getElementById("popup");
	const popupOverlay = document.getElementById("overlay");
	const popupButton = document.getElementById("popupButton");
	const inputsLabel = document.querySelectorAll('.input-anim');
    const messageBoxLabel = document.querySelector('.message-anim');

	
    // Dès qu'on va remplir l'input: fixe le label en haut
    inputsLabel.forEach((function (input) {
		const inputTarget = input.parentElement;
        inputTarget.addEventListener('input', function (event) {
            checkInputs(input.id); // input.id corresponds à l'id de l'input (dans le html)
        })
    }))

    // Dès qu'on va remplir le textarea le label est fixé en haut
    messageBoxLabel.addEventListener('input', function (event) {
        // Empêche le label et la value de l'input de se superposer 
        checkMessageInput();
    })  
    
	// Lorsque l'on valide le formulaire
	form.addEventListener('submit', (e) => {
		e.preventDefault();
		checkInputs('');
		checkMessageInput();
		sendEmail();
	});

		function checkInputs(idName) {
			
			var usernameValue = username.value.trim();
			var emailValue = email.value.trim();

			if (idName == "username" || idName == "") {
				if (usernameValue === '') {
					setErrorFor(username, 'Entrer votre nom');
				} else {
					setSuccessFor(username);
				}
			}
			else if (idName == "email" || idName == "") {
				if (emailValue === '') {
					setErrorFor(email, 'Enter votre Email');
				} else if (!isEmail(emailValue)) {
					setErrorFor(email, 'Email incorrecte');
				} else {
					setSuccessFor(email);
				}
			}
		};

		function checkMessageInput() {
			const messageValue = message.value.trim();

			if (messageValue === '' ) {
				setErrorForTextArea(message, 'Vous n\'avez écrit aucun message');
			} else {
				setSuccessForTextArea(message);
			}
		}
		// **************************************** //

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
			popupOverlay.classList.add("active");
			popupButton.addEventListener('click', (e) =>{
				closePopup();
			});
		}

		function closePopup(){
			popup.classList.remove("open-popup");
			popupOverlay.classList.remove("active");
		}

		
		function sendEmail() {
			const mailContent = 'nom: ' + username.value + 
					 '<br/> email: ' + email.value + 
					 '<br/> message: ' + message.value;

			const classUsername = username.parentElement.classList.value;
			const classEmail = email.parentElement.classList.value;
			const classMessageBox = message.parentElement.classList.value;
			//const checkError = username.classList.contains("input-anim error");

			if (classUsername === "input-box active-input error" || classUsername === "" || classEmail === "input-box active-input error" || classEmail === "" || classMessageBox === "message-box active-input error" || classMessageBox === "" ) {
				console.log("bad username");
				console.log("classUsername: " + classUsername);
			} else {
				console.log("good username");
				console.log(classUsername);
				Email.send({
					SecureToken : "d63ec0f0-4669-4497-aa5f-09b2a9f17",
					Host : "smtp.elasticemail.com",
					Username : "peter.binate@gmail.com",
					Password : "99DC38BD182AE88769F7DF76F765F66EA71F",
					To : 'peter.binate@gmail.com',
					From : 'peter.binate@gmail.com',
					Subject : username.value + ' vous a envoyé un message depuis votre Portfolio',
					Body : mailContent,
				}).then(
					 //message => alert(message),
					 openPopup(),
					//Rénitialisation du formulaire après envois
					form.reset()
				);
			}
			/*setTimeout(() => {
				console.log("ok");
			}, 3000)*/
		}
})