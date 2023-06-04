
import { postApi } from '../../api/api'
import { setLocalStorage } from '../../utils/appUtils'

const register = async (userData: any) => {
  const data = await postApi("user",userData)

  if (data) {
    setLocalStorage("user",data)

    return data
  }
}

const authService = {
  register,
}
export default authService
