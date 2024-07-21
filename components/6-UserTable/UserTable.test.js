import { render } from '@testing-library/react'
import fetchMock from 'jest-fetch-mock'
import UserTable from './UserTable'

fetchMock.enableMocks()
describe('fetching api and show in table',()=>{
beforEach(()=>{
    fetch.resetMocks()
})
    test('testing',async()=>{
fetch.mockResponseOnce(JSON.stringify('https://jsonplaceholder.typicode.com/users'))
render(<UserTable/>)
const table = await screen.findByTestId("user-row")
expect(table).toBeInTheDocument()
    })
})