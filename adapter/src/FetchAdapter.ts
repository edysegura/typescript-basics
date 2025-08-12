import { HttpRequest } from './HttpRequest'

export class FetchAdapter implements HttpRequest {
  async get(url: string): Promise<any> {
    const response = await fetch(url)
    return response.json()
  }

  async post(url: string, payload: any): Promise<any> {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
    return response.json()
  }
}
