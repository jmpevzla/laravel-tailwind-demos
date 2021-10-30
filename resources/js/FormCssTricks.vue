<template>
  <section class="flex items-center min-h-screen w-full bg-teal-300 ">
    <div class="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
      <h1 class="block w-full text-center text-gray-900 mb-6">Sign Up</h1>
      <form class="mb-4 md:flex md:flex-wrap md:justify-between" action="/" method="post">
        <!-- <div class="flex flex-col mb-4">
          <label class="mb-2 uppercase font-bold text-lg text-gray-900" for="first_name">First Name</label>
          <input class="border py-2 px-3 text-gray-900" type="text" name="first_name" id="first_name" />
        </div> -->
        <InputCSSTricks name="first_name" label="First Name" />
        <InputCSSTricks name="last_name" label="Last Name" />
        <InputCSSTricks name="email" label="Email" type="email" mdFull />
        <InputCSSTricks name="password" label="Password" type="password" mdFull />

        <!-- <div>
          <label for="last_name">Last Name</label>
          <input type="text" name="last_name" id="last_name" />
        </div>
        <div>
          <label for="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div>
          <label for="password">Password</label>
          <input type="password" name="password" id="password" />
        </div> -->
        <button class="block bg-teal-500 hover:bg-teal-700 cursor-pointer text-white uppercase text-lg mx-auto p-4 rounded"
          type="submit">Create Account</button>
      </form>
      <a href="/login">Already have an account?</a>
    </div>
  </section>
</template>

<script>
import InputCSSTricks from './components/InputCSSTricks.vue';

export default {
  components: {
    InputCSSTricks
  }
}
</script>
