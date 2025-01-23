import api from '@/requests/axiosToken.js';

export default {
    async getEmployees() {
        try {
            const response = await api.get('employees');
            return response.data;
        } catch (error) {
            console.error('Ошибка при получении сотрудников:', error);
            throw error;
        }
    },
};