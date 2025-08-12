import { AxiosAdapter } from './src/AxiosAdapter'
import { FetchAdapter } from './src/FetchAdapter'
import { HttpRequest } from './src/HttpRequest'

const url = 'https://jsonplaceholder.typicode.com/posts/1'
const postUrl = 'https://jsonplaceholder.typicode.com/posts'
const payload = { title: 'foo', body: 'bar', userId: 1 }

async function makeRequests(httpClient: HttpRequest) {
  const getResponse = await httpClient.get(url)
  console.log('GET response:', getResponse)
  const postResponse = await httpClient.post(postUrl, payload)
  console.log('POST response:', postResponse)
}

makeRequests(new FetchAdapter())
makeRequests(new AxiosAdapter())
