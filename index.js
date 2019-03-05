import axios from 'axios'

export const fetchData = (url, actions, axiosInstance=null, successCallback=null) => {
  const {begin, success, failure} = actions
  const axiosi = axiosInstance === null ? axios : axiosInstance
  return dispatch => {
    dispatch(dispatchDataBegin(begin))
    return axiosi.get(url)
    .then(json => {
      dispatch(
        (typeof successCallback === 'function') ?
          successCallback(success, json.data) :
          fetchDataResult(success, json.data)
      )
      return json.data
    })
    .catch(error => dispatch(fetchDataResult(failure, error, true)))
  }
}

export const postData = (url, actions, axiosInstance=null, successCallback=null) => {
  const {begin, success, failure} = actions
  const axiosi = axiosInstance === null ? axios : axiosInstance
  return dispatch => {
    dispatch(dispatchDataBegin(begin))
    return axiosi.get(url)
    .then(json => {
      dispatch(
        (typeof successCallback === 'function') ?
          successCallback(success, json.data) :
          postDataResult(success, json.data)
      )
      return json.data
    })
    .catch(error => dispatch(postDataResult(failure, error, true)))
  }
}

export async function asyncPostData(url, data, axiosInstance=null) {
  return await asyncPostDataInner(url, data, axiosInstance)
}

const asyncPostDataInner = (url, data, axiosInstance=null) => {
  const axiosi = axiosInstance === null ? axios : axiosInstance
  axiosi.post(url, data)
  .then(json => {
    return json.data
  })
  .catch(error => error)
}

const dispatchDataBegin = (type) => ({ type })
const fetchDataResult = (type, data, isError=false) => {
	return (
		isError ?
		{ type, error:data } :
		{ type, data }
	)
}
const postDataResult = (type, data, isError=false) => {
	return (
		isError ?
		{ type, error:data } :
		{ type, data }
	)
}

