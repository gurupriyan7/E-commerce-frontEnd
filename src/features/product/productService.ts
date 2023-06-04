import { getApi } from '../../api/api'

const getProducts = async () => {
  const data = await getApi('product')

  return data?.data
}

const productService = {
  getProducts,
}

export default productService
