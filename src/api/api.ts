import axios from "axios"
import { appConfig } from "../config/appConfig"

export const postApi = async (url: string, body: any) => {
  const response = await axios.post(`${appConfig.apiUrl}/${url}`, body, {
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return response?.data
}
