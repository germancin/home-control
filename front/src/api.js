// api.js
import axios from 'axios';

const toggle_led = async (state) => {
    try {
        const response = await axios.post('http://localhost:4000/api/toggle', { state });
        return response.data;
    } catch (error) {
        console.error(`Error in API: ${error}`);
    }
};

export default toggle_led;