const express = require('express');
const stripe = require('stripe')('tu_clave_privada_de_stripe'); // Sustituir con tu clave privada de Stripe
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/charge', async (req, res) => {
    try {
        const { token, amount } = req.body;

        // Crear un cargo usando el token recibido
        const charge = await stripe.charges.create({
            amount: amount, // Monto a cobrar en centavos (por ejemplo, 500 = $5)
            currency: 'usd', // Moneda en la que se realizará el cobro
            description: 'Pago de prueba',
            source: token.id, // Usar el token generado en el frontend
        });

        res.status(200).send(charge);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
