<template>
  <section class="bg-gray-300">
    <div class="h-screen flex items-center justify-center">
      <form class="w-full md:w-1/3 bg-white rounded-lg items-center">
        <div class="flex font-bold justify-center mt-6">
          <img class="h-24 w-24" src="images/avatar1.png">
        </div>

        <h2 class="text-3xl text-center text-gray-700 mb-4">
          Welcome Back!
        </h2>

        <div class="px-12 pb-10">
          <div class="w-full mb-2">
            <div class="flex justify-center">
              <input type="text" placeholder="Username"
                class="px-8 w-full border rounded py-2 text-gray-700 transition duration-200 ease-in focus:border-indigo-200 focus:ring-2 focus:outline-none items-center" />
            </div>
          </div>

          <div class="w-full mb-2">
            <div class="flex justify-center">
              <input type="password" placeholder="Password"
                class="px-8 w-full border rounded py-2 text-gray-700 transition duration-200 ease-in focus:outline-none focus:border-indigo-200 focus:ring-2" />
            </div>
          </div>

          <button type="submit"
            class="w-full mt-6 py-2 rounded bg-blue-500 text-gray-100 focus:outline-none transition duration-500 ease-in hover:bg-indigo-400">
            Login
          </button>

          <a href="#" class="text-sm text-opacity-100 float-right mt-6 mb-4 underline hover:text-blue-600 hover:no-underline">
            Forgot Password
          </a>

          <a href="#" class="text-sm text-opacity-100 float-left mt-6 mb-4 underline hover:text-blue-600 hover:no-underline">
            Create Account
          </a>
        </div>
      </form>
    </div>
  </section>
</template>

<style scoped>
  section {
    font-family: Georgia, "Times New Roman", Times, serif;
  }
</style>


