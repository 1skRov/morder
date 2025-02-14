<script>
import {ref, onMounted, computed, h} from "vue";
import getEmployee from "@/requests/employees.js";
import EmployeeDetailsDrawer from "@/pages/Employees/EmployeesDetail.vue";
import {NTag} from "naive-ui";
import employeesItem from "@/pages/Employees/EmployeesItem.vue";

export default {
  name: "Employees",
  components: {
    EmployeeDetailsDrawer,
    employeesItem
  },
  setup() {
    const employees = ref([]);
    const selectedEmployee = ref(null);
    const isDrawerVisible = ref(false);
    const isAddDrawerVisible = ref(false);
    const total = ref(0);
    const totalPage = computed(() => ({
      pageSize: 10,
      page: total.value
    }))
    const handlePageChange = (curPage) => {
      total.value = curPage
    }

    const getEmployees = async () => {
      try {
        const response = await getEmployee.getEmployees();
        if (response._success) {
          employees.value = response.users;
          total.value = response.total;
        } else {
          console.error("Ошибка:", response.message);
        }
      } catch (error) {
        console.error("Ошибка при получении сотрудников:", error);
      }
    };
    const handleEmployeeCreated = async () => {
      await getEmployees();
    };
    const rowProps = (row) => {
      return {
        style: "cursor: pointer;",
        onClick: () => {
          selectedEmployee.value = row;
          isDrawerVisible.value = true;
        },
      };
    };
    const columns = [
      {
        title: "ID",
        key: "id",
      },
      {
        title: "Фото",
        key: "photo",
        render(row) {
          return h("img", {
            src: row.photo,
            alt: "Фото",
            style: "width: 50px; height: 50px; border-radius: 50%;",
          });
        },
      },
      {
        title: "Логин",
        key: "username",
      },
      {
        title: "Роль",
        key: "role",
      },
      {
        title: "Активен",
        key: "is_active",
        render(row) {
          return h(
              NTag,
              {
                style: {
                  marginRight: '6px'
                },
                bordered: false,
                type: row.is_active ? "success" : "error",
              },
              row.is_active ? "Да" : "Нет"
          );
        },
      },
      {
        title: "Заблокирован",
        key: "is_blocked",
        render(row) {
          return h(
              NTag,
              {
                type: row.is_blocked ? "error" : "info",
                bordered: false,
              },
              row.is_blocked ? "Да" : "Нет"
          );
        },
      },
    ];

    const data = computed(() => {
      return employees.value.map((employee) => ({
        ...employee,
      }));
    });

    onMounted(getEmployees);

    return {
      employees,
      rowProps,
      total,
      totalPage,
      data,
      columns,
      selectedEmployee,
      isDrawerVisible,
      isAddDrawerVisible,
      handleEmployeeCreated,
      handlePageChange,
      getEmployees
    };
  },
};
</script>

<template>
  <div class="p-10 flex flex-col gap-7">
    <div class="table-island">
      <div class="flex items-center">
        <div class="search">
          <input type="text">
          <ion-icon name="search-outline"></ion-icon>
        </div>
        <div class="flex gap-2.5 ml-5">
          <n-tag :bordered="false" type="info">
            Фильтр1
          </n-tag>
          <n-tag :bordered="false" type="info">
            Фильтр2
          </n-tag>
          <n-tag :bordered="false" type="info">
            Фильтр3
          </n-tag>
        </div>
      </div>
      <div class="">
        <n-button strong secondary type="success" @click="isAddDrawerVisible = true">
          Добавить сотрудника
        </n-button>
      </div>
    </div>
    <n-data-table
        :columns="columns"
        :data="data"
        :row-props="rowProps"
        :pagination="totalPage"
        size="small"
        :on-update:page="handlePageChange"
        style="width:100%; height:100%"
    />
    <employee-details-drawer
        v-if="selectedEmployee"
        :employee="selectedEmployee"
        :show="isDrawerVisible"
        @update:show="isDrawerVisible = $event"
        @refreshList="getEmployees"
    />
    <employeesItem
        :show="isAddDrawerVisible"
        @update:show="isAddDrawerVisible = $event"
        @employeeCreated="handleEmployeeCreated"
    />
  </div>
</template>

<style scoped>
img {
  display: block;
  margin: auto;
}
.table-island {
  background: rgb(20 30 50/0.3);
  border: 1px solid rgb(255 255 255/0.15);
  @apply p-1.5 rounded w-full flex justify-between;
}
.search {
  @apply relative flex;
}
input {
  padding: 5px 0 5px 35px;
  @apply text-xs text-white border-none bg-transparent outline-none;
  border-bottom: 1px solid #5a5a5a;
}

input::placeholder {
  @apply text-gray-300;
}

ion-icon {
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  color: #ffffff;
  font-size: 16px;
}
</style>
