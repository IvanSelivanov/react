import { Ajax } from './services'
import * as Constants from './constants'

export function createComment (data) {
  const url = '/photos/'+data.photo_id+'/comments'
  return (dispatch => {
    Ajax.send(url, 'post', JSON.stringify(data)).then(
      data => dispatch({
        type: Constants.COMMENT_CREATED,
        comment: data
      })
    )
  })
}

export function fieldChange (name, data) {
  return {
      type: Constants.FIELD_CHANGED,
      field_name: name,
      value: data
  }
}

export function reply (id) {
  return {
    type: Constants.REPLY,
    id: id
  }
}