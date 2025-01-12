import axios from 'axios';
import router from '@/router';

const apiClient = axios.create({
    baseURL: 'https://management.alerts.kz',
});

apiClient.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers['X-API-Token'] = token;
    }
    return config;
});

apiClient.interceptors.response.use(
    response => response,
    error => {
        if (error.response && error.response.status === 401) {
            localStorage.removeItem('token');
            router.push('/login');
        }
        return Promise.reject(error);
    }
);

export default apiClient;
