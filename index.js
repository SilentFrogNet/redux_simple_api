import axios from 'axios'

export const fetchData = (url, actions, axiosInstance=null, successCallback=null) => {
  const {begin, success, failure} = actions
  const axiosi = (
	  axiosInstance === null ?
	  axios :
	  axiosInstance
  )
  return dispatch => {
    dispatch(fetchDataBegin(begin))
    return axiosi.get(url)
    .then(json => {
      dispatch(successCallback(success, json.data) || fetchDataResut(success, json.data))
      return json.data
    })
    .catch(error => dispatch(fetchDataResut(failure, error, true)))
  }
}

const fetchDataBegin = (type) => ({ type })
const fetchDataResut = (type, payload, isError=false) => {
	return (
		isError ?
		{ type, error:payload } :
		{ type, payload }
	)
}
