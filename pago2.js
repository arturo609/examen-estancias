// Enviar el token al servidor
fetch('http://localhost:3000/charge', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        token: token,
        amount: 500, // Monto en centavos (500 = $5)
    }),
})
.then(response => response.json())
.then(data => {
    alert('Pago realizado con éxito');
})
.catch(error => {
    alert('Error en el pago');
});
