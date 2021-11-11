import { ref } from "vue"
import { projectAuth } from "../firebase/config"

const error = ref(null)

const signup = async (email , password , displayName ) => {
    try {
        error.value = null 

        const res = await projectAuth.createUserWithEmailAndPassword(email,password)
        // if(!res){
        //     throw new Error('ali will understand this')
        // }
        await res.user.updateProfile({displayName})
        error.value = null 
        return res 
    }
    catch(err) {
        console.log(err.message);
        error.value = err.message;
    }
    
}

const useSignup = () => {
    return {error , signup}
}

export default useSignup