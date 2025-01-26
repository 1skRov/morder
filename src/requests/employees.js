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
    async blockEmployee(employeeId) {
        try {
            const response = await api.put(`employees/${employeeId}`, {
                action: "blocked",
            });
            return response.data;
        } catch (error) {
            console.error(`Ошибка при блокировке сотрудника с ID ${employeeId}:`, error);
            throw error;
        }
    },
    async unblockEmployee(employeeId) {
        try {
            const response = await api.put(`employees/${employeeId}`, {
                action: "unblocked",
            });
            return response.data;
        } catch (error) {
            console.error(`Ошибка при разблокировке сотрудника с ID ${employeeId}:`, error);
            throw error;
        }
    }
};