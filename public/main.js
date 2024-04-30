   const incorrecto = document.getElementById('incorrecta')
   document.getElementById('form').addEventListener('submit', async (e) => {
    incorrecto.style.display = 'block'
    e.preventDefault();
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
});
