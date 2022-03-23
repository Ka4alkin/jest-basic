const axios = require('axios')
const Ajax = require('./async')

jest.mock('axios')

let data

describe('Ajax: echo', () => {

    beforeEach(() => {
        data = 'some data'
    })

    test('should return value async', async () => {
        const result = await Ajax.echo(data)
        expect(result).toBe(result)
    })

    test('should return some value with promise', () => {
        return Ajax.echo(data).then(data => {
            expect(data).toBe(data)
        })
    })

    test('should catch error with Promise', () => {
        return Ajax.echo().catch(err => {
            expect(err).toBeInstanceOf(Error)
        })
    })

    test('should catch error with Promise', async () => {
        try {
            await Ajax.echo()
        } catch (e) {
            expect(e).toBeInstanceOf(Error)
        }
    })

})


describe('Ajax: GET', () => {

    let response
    let todos

    beforeEach(() => {
        todos = [
            {id: 1, title: 'Todo 1', completed: false}
        ]
        response = {
            data: {
                todos
            }
        }
    })

    test('Should return data from backend', () => {
        axios.get.mockReturnValue(response)

        return Ajax.get().then(data => {
            expect(data.todos).toEqual(todos)
        })
    })
})
