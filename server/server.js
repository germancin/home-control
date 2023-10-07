const express = require('express');
const cors = require('cors');
const Gpio = require('pigpio').Gpio;
const led = new Gpio(17, { mode: Gpio.OUTPUT });

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/toggle', (req, res) => {
    const state = req.body.state;

    try {
        if (led) {
            led.digitalWrite(state);
            res.json({ status: 'success' });
        } else {
            console.log('Gpio not initialized. Check the environment.');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server running http://localhost:${PORT}`);
});

