import React from 'react';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { reducer } from './reducer'
import { fromJS } from 'immutable'
import thunk from 'redux-thunk'
import { CommentContainer } from './components/CommentContainer'

export class App extends React.Component {
  render() {
    const store = createStore(
      reducer,
      fromJS({
        photo: this.props.id,
        comments: this.props.comments,
        comment_author: '',
        comment_text: '',
        comment_parent: '',
        reply_to: ''
      }),
      applyMiddleware(thunk)
    )
//    console.log(store.getState())
    return(
      <Provider store={store}>
        <CommentContainer />
      </Provider>
    )

  }
}