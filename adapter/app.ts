import { AxiosAdapter } from './src/AxiosAdapter'
import { FetchAdapter } from './src/FetchAdapter'
import { HttpRequest } from './src/HttpRequest'

const url = 'https://jsonplaceholder.typicode.com/posts/1'
const postUrl = 'https://jsonplaceholder.typicode.com/posts'
const payload = { title: 'foo', body: 'bar', userId: 1 }

async function makeRequests(httpClient: HttpRequest) {
  console.log(`HTTP Client Implementation: ${httpClient.clientName}`)
  const getResponse = await httpClient.get(url)
  console.log('GET response: ✅')
  const postResponse = await httpClient.post(postUrl, payload)
  console.log('POST response: ✅')
}

await makeRequests(new FetchAdapter())
await makeRequests(new AxiosAdapter())
// makeRequests(new XMLHttpRequestAdapter())
