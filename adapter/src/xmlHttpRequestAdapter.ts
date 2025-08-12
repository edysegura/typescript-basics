import { HttpRequest } from './HttpRequest'

export class XMLHttpRequestAdapter implements HttpRequest {
  clientName = 'XMLHttpRequestAdapter'

  async get(url: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      xhr.open('GET', url)

      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(JSON.parse(xhr.responseText))
        } else {
          reject(new Error(xhr.statusText))
        }
      }

      xhr.onerror = () => {
        reject(new Error('Network Error'))
      }

      xhr.send()
    })
  }

  async post(url: string, payload: any): Promise<any> {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      xhr.open('POST', url)
      xhr.setRequestHeader('Content-Type', 'application/json')

      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(JSON.parse(xhr.responseText))
        } else {
          reject(new Error(xhr.statusText))
        }
      }

      xhr.onerror = () => {
        reject(new Error('Network Error'))
      }

      xhr.send(JSON.stringify(payload))
    })
  }
}
