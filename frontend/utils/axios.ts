import axios, { AxiosError } from "axios"
import Cookies from "js-cookie";


export const oapi = axios.create({
  // baseURL: 'http://dazzleapi.ap-southeast-1.elasticbeanstalk.com',
  // baseURL: '/oapi',
  baseURL: process.env.NEXT_PUBLIC_APP_ENV === 'development' ? 'https://test-api.dazzleai.network/api' : 'https://api.dazzleai.network/api'
})

oapi.interceptors.request.use(function (config) {
  console.log('Request:', config.method?.toUpperCase(), config.url, config.params, config.data);
  if (Cookies.get('getimgauth')) {
    config.headers["Authorization"] = `Bearer ${Cookies.get('getimgauth')}`
  }
  return config;
}, function (error) {
  console.log('Request error:', error);
  return Promise.reject(error); 
});


const axiosInstance = axios.create({
  // baseURL: 'http://dazzleapi.ap-southeast-1.elasticbeanstalk.com',
  baseURL: 'https://api.dazzleai.network',
})


axiosInstance.interceptors.request.use(function (config) {
  console.log('Request:', config.method?.toUpperCase(), config.url, config.params, config.data);
  return config;
}, function (error) {
  console.log('Request error:', error);
  return Promise.reject(error);
});

axiosInstance.interceptors.response.use(
  response => {
    console.log(response.data);
    return response;
  },
  error => {
    // window && (window as any)?.gtag('event', 'apierror', {
    //   'event_category': 'error',
    //   'event_label': (error as AxiosError)?.config?.url,
    // });
    console.error('Response error:', error?.response?.status, error?.response?.data);
    return Promise.reject(error);
  }
);

export function handleApiError(error: AxiosError) {
  const status = error?.response ? error?.response?.status : 500
  let message = error?.response?.data ? error?.response?.data : error?.stack ?? 'Unknown Error'

  return { status, message }
}

export default axiosInstance