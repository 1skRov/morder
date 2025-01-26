<script>
import {computed} from "vue";

export default {
  name: "EmployeesDetail",
  props: {
    employee: {
      type: Object,
      required: true,
    },
    show: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["update:show"],
  setup(props, {emit}) {
    const close = () => {
      emit("update:show", false);
    };

    const employeeDetails = computed(() => props.employee);

    function formatTimestamp(timestamp) {
      if (!timestamp) {
        return "Дата не указана";
      }
      const date = new Date(timestamp * 1000);

      const formattedDate = date.toLocaleDateString("ru-RU", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      });

      const formattedTime = date.toLocaleTimeString("ru-RU", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });

      return `${formattedDate} ${formattedTime}`;
    }


    return {
      close,
      employeeDetails,
      formatTimestamp
    };
  },
};
</script>

<template>
  <n-drawer
      :show="show"
      :width="400"
      :native-scrollbar="false"
      closable
      @close="close"
      @update:show="close"
      class="m-2 rounded overflow-hidden"
      style="background: rgb(14 23 38/1)"
  >
    <div class="w-full p-4 flex flex-col gap-7 text-sm">
      <div class="main-info">
        <div class="main-left">
          <img v-if="employee.photo" :src="employee.photo">
          <div v-else>
            <ion-icon name="person-circle-outline" style="font-size: 69px;"></ion-icon>
          </div>
          <div class="flex items-center gap-1.5">
            id: {{ employeeDetails.id }}
            <ion-icon name="copy-outline" class="cursor-pointer p-1 hover:bg-gray-600 rounded"></ion-icon>
          </div>
        </div>
        <div class="main-right">
          <div><span>Логин</span><br>
            <div class="flex items-center gap-1">{{ employee.username || 'не указано' }}
              <ion-icon name="copy-outline" class="cursor-pointer p-1 hover:bg-gray-600 rounded"></ion-icon>
            </div>
          </div>
          <div><span>Имя</span><br>{{ employee.first_name || 'не указано' }}</div>
          <div><span>Фамилия</span><br>{{ employee.last_name || 'не указано' }}</div>
          <div><span>Отчество</span><br>{{ employee.middle_name || 'не указано' }}</div>
        </div>
      </div>
      <div class="add-info">
        <div class="grid grid-cols-2 gap-7">
          <div><p>Дата рождения</p>{{ formatTimestamp(employee.birthday) }}</div>
          <div><p>Роль</p>{{ employee.role_id || 'не указано' }}</div>
          <div><p>Активен</p>
            <n-tag :type="employee.active ? 'success' : 'error'">
              {{ employee.active }}
            </n-tag>
          </div>
          <div><p>Создан</p>{{ formatTimestamp(employee.created_at) }}</div>
          <div><p>Заблокирован</p>
            <n-tag :type="employee.blocked ? 'success' : 'error'">
              {{ employee.blocked }}
            </n-tag>
          </div>
        </div>
        <div class="mt-5">
          <div><p>пароль</p>{{ employee.password || 'не указано' }}</div>
        </div>
      </div>
    </div>
    <!--    <div class="p-4">-->
    <!--      <p><strong>ID:</strong> {{ employeeDetails.id }}</p>-->
    <!--      <p><strong>Имя:</strong> {{ employeeDetails.first_name }}</p>-->
    <!--      <p><strong>Фамилия:</strong> {{ employeeDetails.last_name }}</p>-->
    <!--      <p><strong>Отчество:</strong> {{ employeeDetails.middle_name }}</p>-->
    <!--      <p><strong>Дата Рождения:</strong> {{ employeeDetails.birthday }}</p>-->
    <!--      <p><strong>Роль:</strong> {{ employeeDetails.role_id }}</p>-->
    <!--      <p><strong>Активен:</strong> {{ employeeDetails.is_active ? "Да" : "Нет" }}</p>-->
    <!--      <p><strong>Фото:</strong></p>-->
    <!--      <img-->
    <!--          v-if="employeeDetails.photo"-->
    <!--          :src="employeeDetails.photo"-->
    <!--          alt="Фото"-->
    <!--          style="width: 100px; height: 100px; border-radius: 50%;"-->
    <!--      />-->
    <!--      <p v-else>Нет фото</p>-->
    <!--    </div>-->
  </n-drawer>
</template>

<style scoped>
.main-info {
  @apply w-full p-2.5 rounded flex gap-1;
  background: rgb(67 97 238/0.09);
  border: 1px solid rgb(255 255 255/0.15)
}

.main-left {
  @apply flex flex-col items-center gap-1.5 pr-2;
  border-right: 1px solid rgb(255, 255, 255, 0.3)
}

.main-right {
  @apply grid grid-cols-2 gap-7 pl-2;
}

.main-right span {
  @apply text-gray-500;
}

.add-info {
  @apply w-full p-2.5 rounded ;
  background: rgb(67 97 238/0.09);
  border: 1px solid rgb(255 255 255/0.15)
}

.add-info p {
  @apply text-gray-500 m-0 mb-2;
}
</style>
