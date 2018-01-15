import * as Constants from './constants'
import { fromJS } from 'immutable'
import { findInComments } from './helpers'

export const reducer = function (state, action) {
  switch(action.type) {
    case Constants.COMMENT_CREATED:
      let path = []
      if (action.comment.parent_type==='Comment'){
        path = ['comments'].concat(findInComments(state.get('comments'), action.comment.parent_id))
      }
      return state.updateIn(path.concat(['comments']), comments => comments.push(fromJS(action.comment))).merge({
        comment_author: '',
        comment_text: '',
        reply_to: ''
      })
    case Constants.FIELD_CHANGED:
      return state.set(action.field_name, action.value)
    case Constants.REPLY:
      return state.set('reply_to', action.id)
    default:
      return state
  }
}