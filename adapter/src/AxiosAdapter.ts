import axios from 'axios'
import { HttpRequest } from './HttpRequest'

export class AxiosAdapter implements HttpRequest {
  clientName = 'AxiosAdapter'

  async get(url: string): Promise<any> {
    const response = await axios.get(url)
    return response.data
  }

  async post(url: string, payload: any): Promise<any> {
    const response = await axios.post(url, payload)
    return response.data
  }
}
