import axios from 'axios';

const api = axios.create({
    baseURL: 'https://management.alerts.kz/api/',
    headers: {
        'X-API-TOKEN': localStorage.getItem('token')
    },
});

export default api;