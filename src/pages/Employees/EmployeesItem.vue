<script>
import { ref } from "vue";
import { useMessage } from 'naive-ui';

export default {
  name: "AddEmployeeDrawer",
  props: {
    show: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["update:show", "employeeCreated"],
  setup(_, { emit }) {
    const message = useMessage();
    const newEmployee = ref({
      first_name: "",
      last_name: "",
      middle_name: "",
      birthday: null,
      username: "",
      password: "",
      photo: null,
    });

    const createEmployee = async () => {
      try {
        const { default: employeesApi } = await import("@/requests/employees.js");
        const response = await employeesApi.createEmployee(newEmployee.value);

        if (response._success) {
          message.success("Сотрудник добавлен");
          emit("employeeCreated");
          emit("update:show", false);
        } else {
          message.error(response.message || "Произошла ошибка");
        }
      } catch (error) {
        console.error("Ошибка при создании сотрудника:", error);
        message.error("Ошибка при создании сотрудника");
      }
    };

    const closeDrawer = () => {
      emit("update:show", false);
    };

    return {
      newEmployee,
      createEmployee,
      closeDrawer,
    };
  },
};
</script>

<template>
  <n-drawer
      :show="show"
      @update:show="(value) => $emit('update:show', value)"
      width="30%"
  >
    <n-drawer-content title="Добавить сотрудника">
      <n-form label-width="120px" size="small">
        <n-form-item label="Имя">
          <n-input v-model:value="newEmployee.first_name" placeholder="Введите имя" />
        </n-form-item>
        <n-form-item label="Фамилия">
          <n-input v-model:value="newEmployee.last_name" placeholder="Введите фамилию" />
        </n-form-item>
        <n-form-item label="Отчество">
          <n-input v-model:value="newEmployee.middle_name" placeholder="Введите отчество" />
        </n-form-item>
        <n-form-item label="Дата рождения">
          <n-date-picker
              v-model:value="newEmployee.birthday"
              type="date"
              placeholder="Выберите дату"
          />
        </n-form-item>
        <n-form-item label="Логин">
          <n-input v-model:value="newEmployee.username" placeholder="Введите логин" />
        </n-form-item>
        <n-form-item label="Пароль">
          <n-input
              v-model:value="newEmployee.password"
              type="password"
              placeholder="Введите пароль"
          />
        </n-form-item>
        <n-form-item label="Фото">
          <n-upload v-model:value="newEmployee.photo"
          >
            <n-button>Загрузите фото</n-button>
          </n-upload>
        </n-form-item>
        <n-form-item>
          <n-button type="success" @click="createEmployee">Сохранить</n-button>
          <n-button type="default" @click="closeDrawer">Отмена</n-button>
        </n-form-item>
      </n-form>
    </n-drawer-content>
  </n-drawer>
</template>

<style scoped>
</style>
