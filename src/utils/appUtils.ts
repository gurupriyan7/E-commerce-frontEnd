export const setLocalStorage = async (key: string, data: any) => {
  localStorage.setItem(key, JSON.stringify(data))
}
