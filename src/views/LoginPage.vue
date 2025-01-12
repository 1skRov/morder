<template>
  <div class="login-container">
    <div class="screen">
      <div class="screen__content">
        <n-form
            class="login"
            label-width="0"
        >
          <div class="login__field">
            <i class="login__icon fas fa-user"></i>
            <n-form-item prop="username">
              <n-input
                  v-model="username"
                  placeholder="User name"
              />
            </n-form-item>
          </div>
          <div class="login__field">
            <i class="login__icon fas fa-lock"></i>
            <n-form-item prop="password">
              <n-input
                  type="password"
                  v-model="password"
                  placeholder="Password"
              />
            </n-form-item>
          </div>

          <div class="login__submit">
            <n-button block color="#32ba8b" size="large" @click="handleLogin">
              <span class="button__text">Log In</span>
            </n-button>
          </div>
        </n-form>
      </div>

      <div class="screen__background">
        <span class="screen__background__shape screen__background__shape4"></span>
        <span class="screen__background__shape screen__background__shape3"></span>
        <span class="screen__background__shape screen__background__shape2"></span>
        <span class="screen__background__shape screen__background__shape1"></span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth';

const username = ref('');
const password = ref('');
const authStore = useAuthStore();

const handleLogin = async () => {
  await authStore.login({ username: username.value, password: password.value });
};
</script>

<style scoped>
.login-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-image: linear-gradient(to top, #5ef9af, #5ff9b5, #61f9bc, #64f9c1, #67f9c7, #70f9c9, #78f8cc, #80f8ce, #8df8cf, #99f7d0, #a3f7d1, #adf6d3);
}

.screen {
  background: linear-gradient(90deg, #eac930, #e8e190);
  position: relative;
  height: 600px;
  width: 360px;
  box-shadow: 0px 0px 24px #a89d5d;
}

.screen__content {
  z-index: 1;
  position: relative;
  height: 100%;
}

.screen__background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  -webkit-clip-path: inset(0 0 0 0);
  clip-path: inset(0 0 0 0);
}

.screen__background__shape {
  transform: rotate(45deg);
  position: absolute;
}

.screen__background__shape1 {
  height: 520px;
  width: 520px;
  background: #FFF;
  top: -50px;
  right: 120px;
  border-radius: 0 72px 0 0;
}

.screen__background__shape2 {
  height: 220px;
  width: 220px;
  background: #86efac;
  top: -172px;
  right: 0;
  border-radius: 32px;
}

.screen__background__shape3 {
  height: 540px;
  width: 190px;
  background: linear-gradient(270deg, #9eee98, #9af3b3);
  top: -24px;
  right: 0;
  border-radius: 32px;
}

.screen__background__shape4 {
  height: 400px;
  width: 200px;
  background: #86efac;
  top: 420px;
  right: 50px;
  border-radius: 60px;
}

/* Форма логина */
.login {
  width: 320px;
  padding: 30px;
  padding-top: 156px;
}

.login__field {
  padding: 20px 0px;
  position: relative;
}

.login__icon {
  position: absolute;
  top: 30px;
  color: #7875B5;
}

.login__submit {
  margin-top: 30px;
}

.button__icon {
  font-size: 24px;
  margin-left: 10px;
  color: #7875B5;
}
</style>
