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
    async createEmployee(employeeData) {
        try {
            const response = await api.post("employees", employeeData);
            return response.data;
        } catch (error) {
            console.error("Ошибка при создании сотрудника:", error);
            throw error;
        }
    },
};