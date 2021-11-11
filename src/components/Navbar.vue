<template>
  <nav v-if="user">
      <div>
          <p>Hey ther {{user.displayName}}</p>
          <p>email is {{user.email}}</p>
      </div>
      <button @click="handleClick">Log out</button>
  </nav>
</template>

<script>
import useLogout from '../composables/useLogout'
import getUser from '../composables/getUser'
export default {
    setup() {
        const {error , logout} = useLogout()
        const {user} = getUser()
        const handleClick = async() => {
            await logout()
            if(!error.value) {
                console.log("user logout")
            }
        }
        return {handleClick , user}
    }
}
</script>

<style>

</style>