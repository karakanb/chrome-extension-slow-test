<template>
  <div>
    <div class="flex items-center justify-center bg-gray-50 py-4 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full">
        <div>
          <h2
            class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900"
          >Sign in</h2>
        </div>
        <div class="mt-8">
          <div class="rounded-md shadow-sm">
            <!-- <div>
              <input
                v-model="username"
                aria-label="Username"
                name="username"
                type="text"
                required
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                placeholder="Username"
              />
            </div> -->
            <div class="-mt-px">
              <input
                v-model="password"
                aria-label="Password"
                name="password"
                type="password"
                required
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                placeholder="Password"
              />
            </div>
          </div>
          <div class="mt-6">
            <button
              
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
              :class="{'opacity-50': !buttonEnabled}"
            >
              <span v-if="!loading">Sign in</span>
              <span v-else>
                <i class="fas fa-spinner fa-spin"></i> Signing in...
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: 'asdasdsa',
      password: '',
      extension: '',
    };
  },
  computed: {
    buttonEnabled() {
      return this.username !== '' && this.password !== '';
    },
  },
};
</script>