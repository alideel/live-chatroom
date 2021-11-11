<template>
  <form @submit.prevent="handelSubmit">
      <input type="email" required placeholder="email" v-model="email">
      <input type="password" required placeholder="password" v-model="password">
      <div class="error">{{error}}</div>
      <button>Log In</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import useLogin from '../composables/useLogin'
export default {
    setup(props , context) {
        const {error , login} = useLogin()
        const email = ref('')
        const password = ref('')
        const handelSubmit = async() => {
            await login(email.value,password.value)
            if(!error.value) {
                console.log('the user is login success')
                context.emit('login')
            }
        } 
        return {email , password , handelSubmit , error}
    }
}
</script>

<style>

</style>