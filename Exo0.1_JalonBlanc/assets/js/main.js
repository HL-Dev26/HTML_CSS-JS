const username = document.getElementById('username')
const password1 = document.getElementById('password1')
const password2 = document.getElementById('password2')
const credits = document.getElementById('credits');
const next = document.getElementById('next');
const validate = document.getElementById('validate')
const result = document.getElementById('result')

credits.innerHTML= 'Ludovic HUMERY';

function validerSaisieName(event){
    event.preventDefault()
    if (username.value.length < 3) {
        result.textContent = "Le nom d'utilisateur est trop court (3 caractéres minimum)";    
    }
    else if (password1.value.length < 12){
        result.textContent = "Le mot de passe est trop court (12 caractéres minimum)";
    }
    else if (password1.value !== password2.value){
        result.textContent = "Les mots de passe ne correspondent pas";
    }
    else{
        result.textContent = "Le formulaire est valide !";
        document.body.style.backgroundColor = "green";
    }

}



validate.addEventListener('click',validerSaisieName)
