import api from '@/apiClient.js';

export default {
    getEmployees() {
        return api.get('/api/employees');
    },
};