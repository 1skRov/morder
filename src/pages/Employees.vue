<script>
import employMethods from '@/requests/employees.js'
export default {
  name: "Employees",
  data(){
    return {
      employees: []
    }
  },
  async created() {
    try {
      const response = await employMethods.getEmployees();
      console.log("sotrudniki",response.data);
    } catch (err) {
      console.error('Ошибка при загрузке сотрудников:', err);
    }
  },
}
</script>

<template>

</template>

<style scoped>

</style>