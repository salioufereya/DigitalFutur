// La recuperation des elements 
const form = document.querySelector("#form");

let prenom = document.querySelector('#prenom');
let pseudo = document.querySelector('#pseudo');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let confirm_password = document.querySelector('#confirm_password');
let eye1 = document.querySelector('#eye1');
let eye2 = document.querySelector('#eye2');



//affichage du mot de pass 
eye1.addEventListener('click', e => {
    let parent = eye1.parentElement
    let input = parent.querySelector('input');
    input.type = input.type === "text" ? "password" : "text";
})

eye2.addEventListener('click', e => {
    let parent = eye2.parentElement
    let input = parent.querySelector('input');
    input.type = input.type === "text" ? "password" : "text";
})

// Evenements
//soumissions du formulaire
form.addEventListener('submit', e => {
    e.preventDefault();
    console.log("hello");
    console.log(prenom.value);
    verify();
})


//validation des champs
prenom.addEventListener('blur', (e) => {
    let prenomValue = prenom.value.trim();
    e.preventDefault();
    if (prenomValue === "") {
        let message = "Le prenom est obligatoire";
        setError(prenom, message);
    }
    else if (prenomValue.length < 2) {
        let message = "Veillez saisir minimum de deux caracteres";
        setError(prenom, message);
    } else {
        setSuccess(prenom);
    }
})


pseudo.addEventListener('blur', (e) => {
    let prenomValue = pseudo.value.trim();
    e.preventDefault();
    if (prenomValue === "" || prenomValue === null) {
        let message = "Le pseudo est obligatoire";
        setError(pseudo, message);
    }
    else if (prenomValue.length < 2) {
        let message = "Veillez saisir minimum de deux caracteres";
        setError(pseudo, message);
    } else {
        setSuccess(pseudo);
    }
})

email.addEventListener('blur', (e) => {
    let emailValue = email.value.trim();
    e.preventDefault();
    if (emailValue === "") {
        let message = "Le mail est obligatoire";
        setError(email, message);
    }
    else if (!email_verify(emailValue)) {
        let message = "Email non valide";
        setError(email, message);
    } else {
        setSuccess(email);
    }
})



password.addEventListener('blur', (e) => {
    let passwordValue = password.value.trim();
    e.preventDefault();
    if (passwordValue === "") {
        let message = "Le password est obligatoire";
        setError(password, message);
    }
    else if (!password_verify(passwordValue)) {
        let message = "Le mot de passe est trop faible (10 caracteres dont au moin un special)";
        setError(password, message)
    }
    else {
        setSuccess(password);
    }
})


confirm_password.addEventListener('blur', (e) => {
    let passwordValue = password.value.trim();
    let confirm_passwordValue = confirm_password.value;
    e.preventDefault();
    if (confirm_passwordValue === "") {
        let message = "La confirmation est obligatoire";
        setError(confirm_password, message)
    } else if (passwordValue !== confirm_passwordValue) {
        let message = "Les mot de passes ne correspondent pas";
        setError(confirm_password, message)
    } else {
        setSuccess(confirm_password)
    }
})





prenom.addEventListener('input', e => {
    console.log(prenom.value);
})

// Fonstions
//La function glogal
function verify() {
    // Obtenir toutes les valeurs des inputs
    let prenomValue = prenom.value.trim();
    let pseudoValue = pseudo.value.trim();
    let emailValue = email.value.trim();
    let passwordValue = password.value.trim();
    let confirm_passwordValue = confirm_password.value.trim();
    if (prenomValue === "") {
        let message = "Le prenom est obligatoire";
        setError(prenom, message);
    }
    else if (prenomValue.length < 2) {
        let message = "Veillez saisir minimum de deux caracteres";
        setError(prenom, message);
    } else {
        setSuccess(prenom);
    }

    if (pseudoValue === "") {
        let message = "Le pseudo est obligatoire";
        setError(pseudo, message);
    }
    else if (pseudoValue.length < 2) {
        let message = "Veillez  saisir minimum de deux caracteres";
        setError(pseudo, message);
    }
    else {
        setSuccess(pseudo);
    }
    if (emailValue === "") {
        let message = "l'email est obligatoire";
        setError(email, message);
    } else if (!email_verify(emailValue)) {
        let message = "Email non valide";
        setError(email, message);
    }
    else {
        setSuccess(email);
    }
    if (passwordValue === "") {
        let message = "Le password est obligatoire";
        setError(password, message)
    } else if (!password_verify(passwordValue)) {
        let message = "Le mot de passe est trop faible (10 caracteres dont au moin un special)";
        setError(password, message)
    } else {
        setSuccess(password);
    }
    // pwd confirm
    if (confirm_passwordValue === "") {
        let message = "La confirmation est obligatoire";
        setError(confirm_password, message)
    } else if (passwordValue !== confirm_passwordValue) {
        let message = "Les mot de passes ne correspondent pas";
        setError(confirm_password, message)
    } else {
        setSuccess(confirm_password)
    }


}
//l'affichage du message d'erreur

function setError(elem, message) {
    const formControl = elem.parentElement.parentElement;
    const small = formControl.querySelector('small');
    //Ajout du message d'erreur
    small.innerText = message
    // Ajout de la classe error
    elem.classList.add("is-invalid");
}


//le champ de la couleur du bordure si tout est ok

function setSuccess(elem) {
    elem.classList.add("is-valid");
    elem.classList.remove("is-invalid");
    const formControl = elem.parentElement.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = ""
}

//validation de l'email avec les pattern
function email_verify(email) {
    /*
    * r_rona.22-t@gmail.com
        /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/
    */
    return /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/.test(email);
}
// validation du mot de pass
function password_verify(password) {
    return /^(?=.*[0-9])(?=.*[!@#$%^&*]).{10,}$/.test(password);
}

