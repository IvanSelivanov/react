import React from 'react'
import { connect } from 'react-redux'
import { Comment } from './Comment'
import propTypes from 'prop-types'
import { List } from 'immutable'

export class CommentListP extends React.Component {
  static get propTypes(){
    return {
      comments: propTypes.instanceOf(List)
    }
  }

  render() {
    const { comments } = this.props
    return (
      <ul className="list-unstyled ml-5">
        { comments.map( comment => {
          return(
              <Comment
                key = {comment.get('id')}
                author = {comment.get('author')}
                text = {comment.get('text')}
                id = {comment.get('id')}
                children = {comment.get('comments')}
              />
          )
        })}
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    comments: state.get('comments')
  }
}

export const CommentList = connect(mapStateToProps)(CommentListP)