export const setLocalStorage = async (key: string, data: any) => {
  localStorage.setItem(key, JSON.stringify(data))
}

export const errorMessage = (error:any)=>{
  const message =
  error?.response?.data?.message || error?.message || error.toString()
  return message
}
