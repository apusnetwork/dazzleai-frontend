import axios, { AxiosError } from "axios"

const axiosInstance = axios.create({
  baseURL: 'http://dazzleapi.ap-southeast-1.elasticbeanstalk.com',
})


export function handleApiError(error: AxiosError) {
  const status = error.response ? error.response.status : 500
  let message = error.response?.data ? error.response?.data : error.stack ?? 'Unknown Error'

  return { status, message }
}

export default axiosInstance