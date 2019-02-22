# Simple React-Redux API call

This is a simple library to provide tools to interact in an asyncronous way to remote RESTful APIs.

## How to

### Get data from the REST APIs

```
import { fetchData } from '@silentfrog/redux_simple_api'

const FETCH_TODOS_BEGIN = 'FETCH_TODOS_BEGIN'
const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS'
const FETCH_TODOS_FAILURE = 'FETCH_TODOS_FAILURE'

export const fetchTodos = () => {
  return fetchData(
    'http://my.cool.server/api/v1/todos/',
    {
      begin: FETCH_TODOS_BEGIN,
	  success: FETCH_TODOS_SUCCESS,
      failure: FETCH_TODOS_FAILURE
    }
  )
}
```
