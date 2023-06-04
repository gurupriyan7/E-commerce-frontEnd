import { getApi, patchApi } from '../../api/api'

const getUserCart = async () => {
  const data = await getApi('cart/user', true)

  return data?.data
}

const updateCart = async ({ userId, prodId, quantity }: any) => {
  const data = await patchApi({
    url: `/cart/${userId}?prodId=${prodId}`,
    authToken: true,
    body: { quantity },
  })

  return data?.data
}
const removeCart = async ({ userId, prodId, quantity }: any) => {
  const data = await patchApi({
    url: `/cart/remove/${userId}?prodId=${prodId}`,
    authToken: true,
    body: { quantity },
  })

  return data?.data
}

const cartService = {
  getUserCart,
  updateCart,
  removeCart,
}

export default cartService
