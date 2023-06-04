
import { postApi } from '../../api/api'
import { setLocalStorage } from '../../utils/appUtils'

const register = async (userData: any) => {
  const data = await postApi("user",userData)
  if (data) {
    setLocalStorage("user",data?.data)

    return data
  }
}

const login = async (userData:any)=>{
  const data = await postApi("user/login",userData)

  if (data) {
    setLocalStorage("user",data?.data)

    return data
  }
}

const authService = {
  register,
  login
}
export default authService
