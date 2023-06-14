import axios, { AxiosPromise, AxiosRequestConfig, AxiosResponse } from "axios";
import { oapi as ooapi } from '@/frontend/utils/axios'

async function thunkHandler(asyncFn: AxiosPromise, thunkAPI: { rejectWithValue: CallableFunction }): Promise<any> {
  try {
    const response = await asyncFn;
    return response.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error?.response?.data);
  }
}

function buildUrl(url: string, params: Record<string, string>): string {
  for (const key in params) {
    if (url.search(":" + key)) {
      url = url.replace(":" + key, params[key]);
    }
  }

  return url;
}

export default class api {
  static get =
    (url: string, config: AxiosRequestConfig = {}) =>
    (obj = {}, thunkAPI: { rejectWithValue: CallableFunction }): any =>
      thunkHandler(axios.get(buildUrl(url, obj), { withCredentials: true, ...config }), thunkAPI);

  static post =
    (url: string, config: AxiosRequestConfig = {}) =>
    (obj = {}, thunkAPI: { rejectWithValue: CallableFunction }): any =>
      thunkHandler(axios.post(buildUrl(url, obj), obj, { withCredentials: true, ...config }), thunkAPI);

  static put =
    (url: string, config: AxiosRequestConfig = {}) =>
    (obj = {}, thunkAPI: { rejectWithValue: CallableFunction }): any =>
      thunkHandler(axios.put(buildUrl(url, obj), obj, { withCredentials: true, ...config }), thunkAPI);

  static delete =
    (url: string, config: AxiosRequestConfig = {}) =>
    (obj = {}, thunkAPI: { rejectWithValue: CallableFunction }): any =>
      thunkHandler(axios.delete(buildUrl(url, obj), { withCredentials: true, ...config }), thunkAPI);
}


export class oapi {
  static get =
    (url: string, config: AxiosRequestConfig = {}, thenPromise?: (res: any) => any) =>
    (obj = {}, thunkAPI: { rejectWithValue: CallableFunction }): any =>
      thunkHandler(ooapi.get(buildUrl(url, obj), { withCredentials: true, ...config }).then(res => thenPromise ? thenPromise(res) : res), thunkAPI);

  static post =
    (url: string, config: AxiosRequestConfig = {}) =>
    (obj = {}, thunkAPI: { rejectWithValue: CallableFunction }): any =>
      thunkHandler(ooapi.post(buildUrl(url, obj), obj, { withCredentials: true, ...config }), thunkAPI);

  static put =
    (url: string, config: AxiosRequestConfig = {}) =>
    (obj = {}, thunkAPI: { rejectWithValue: CallableFunction }): any =>
      thunkHandler(ooapi.put(buildUrl(url, obj), obj, { withCredentials: true, ...config }), thunkAPI);

  static delete =
    (url: string, config: AxiosRequestConfig = {}) =>
    (obj = {}, thunkAPI: { rejectWithValue: CallableFunction }): any =>
      thunkHandler(ooapi.delete(buildUrl(url, obj), { withCredentials: true, ...config }), thunkAPI);
}
