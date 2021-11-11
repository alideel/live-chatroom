<template>
    <form>
        <textarea 
            placeholder="type your message here ...." 
            v-model="message"
            @keypress.enter.prevent="handelSubmit"
        ></textarea>
    </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import getUser from '../composables/getUser'
import { timestamp } from '../firebase/config'
import useCollection from '../composables/useColllection'
export default {
    setup() {
        const message = ref('')
        const {user} = getUser()
        const {error , addDoc} = useCollection('messages')
        const handelSubmit = async() => {
            const chat = {
                user: user.value.displayName,
                message: message.value,
                createdAt: timestamp()
            }
            console.log(chat)
            await addDoc(chat)
            if(!error.value) {
                message.value = ''
            }
        }
        return {message , handelSubmit}
    }
}
</script>

<style scoped>
    form {
        margin: 10px;
    }
    textarea {
        width: 100%;
        max-width: 100%;
        margin-bottom: 6px;
        padding: 10px;
        box-sizing: border-box;
        border: 0;
        border-radius: 20px;
        font-family: inherit;
        outline: none;
    }
</style>