import axios, { AxiosRequestConfig } from 'axios'
import { appConfig } from '../config/appConfig'
import { getLocalStorageItem } from '../utils/appUtils'

interface PatchApiProps {
  url: string
  body: any
  authToken?: boolean
}

export const postApi = async (url: string, body: any) => {
  const response = await axios.post(`${appConfig.apiUrl}/${url}`, body, {
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return response?.data
}

export const getApi = async (url: string, authToken?: boolean) => {
  const userData = getLocalStorageItem('user')
  console.log(userData)

  const config: AxiosRequestConfig = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  if (authToken) {
    config.headers = {
      Authorization: `Bearer ${userData?.token}`,
    }
  }
  const response = await axios.get(`${appConfig.apiUrl}/${url}`, config)

  return response?.data
}

export const patchApi = async ({
  url,
  authToken = false,
  body,
}: PatchApiProps) => {
  const userData = getLocalStorageItem('user')

  const config: AxiosRequestConfig = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  if (authToken) {
    config.headers = {
      Authorization: `Bearer ${userData?.token}`,
    }
  }
  const response = await axios.patch(`${appConfig.apiUrl}/${url}`, body, config)

  return response?.data
}
