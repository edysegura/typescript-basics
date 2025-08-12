export interface HttpRequest {
  clientName: string
  get(url: string): Promise<any>
  post(url: string, payload: any): Promise<any>
}
