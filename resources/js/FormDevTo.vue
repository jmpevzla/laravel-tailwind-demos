<template>
  <section class="min-h-screen flex bg-gray-100">
    <div class="w-full max-w-md m-auto bg-white rounded-lg border border-gray-200 shadow py-10 px-16">
      <h1 class="text-2xl font-medium text-primary mt-4 mb-12 text-center">
        Log in to your account 🔐
      </h1>

      <form @submit.prevent="handleFormSubmit">
        <div>
          <label for="email">Email</label>
          <input type="email"
            id="email"
            class="w-full p-2 text-primary shadow border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 focus:border-blue-700"
            placeholder="Your Email"
            v-model="loginForm.email" />
        </div>

        <div>
          <label for="password">Password</label>
          <input type="password"
            id="password"
            class="w-full p-2 text-primary shadow border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 focus:border-blue-700"
            placeholder="Your Password"
            v-model="loginForm.password" />
        </div>

        <div class="flex justify-center items-center mt-6">
          <button
            class="bg-green-500 py-2 px-4 text-sm text-white rounded border border-green-500 focus:outline-none focus:border-green-700 hover:bg-green-900 transition duration-200 ease-in">
            Login
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import { reactive } from 'vue';
  export default {
    setup() {
      const loginForm = reactive({
        email: '',
        password: ''
      })

      const handleFormSubmit = (e) => {
        console.log({...loginForm});
      }

      return {
        handleFormSubmit,
        loginForm
      }
    }
  }
</script>
