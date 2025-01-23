<script>
import getEmployee from "@/requests/employees.js"
export default {
  name: "Employees",
  data(){
    return {
      employees: [],
      columns: [
        {
          title: "ID",
          key: "id",
        },
        {
          title: "Username",
          key: "username",
        },
        {
          title: "Имя",
          key: "full_name",
        },
        {
          title: "Фамилия",
          key: "last_name",
        },
        {
          title: "Отчество",
          key: "middle_name",
        },
        {
          title: "Дата Рождения",
          key: "birthday",
        },
        {
          title: "Пароль",
          key: "password",
        },
        {
          title: "Роль",
          key: "role_id",
        },
        {
          title: "Фото",
          key: "photo",
        },
      ],
    }
  },
  mounted() {
    this.getEmployees();
  },
  methods: {
    async getEmployees() {
      try {
        this.employees = await getEmployee.getEmployees();
        if(!this.employees._success){
          this.$message.error(this.employees.message)
        }
      } catch (error) {
        this.$message.error(error);
        console.error("Ошибка при получении сотрудников:", error);
      }
    },
  },
}
</script>

<template>
<div>
{{ employees }}
</div>
</template>

<style scoped>

</style>