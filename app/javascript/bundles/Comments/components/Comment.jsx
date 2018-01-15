import React from 'react'
import { CommentForm } from './CommentForm'
import { CommentListP } from './CommentList'
import propTypes from 'prop-types'
import { List } from 'immutable'

export class Comment extends React.Component {
  static get propTypes(){
    return {
      text: propTypes.string,
      author: propTypes.string,
      id: propTypes.string,
      children: propTypes.instanceOf(List)
    }
}
  render() {
    return (
      <li className="media">
        <div className="media-body">
        <blockquote className="blockquote">
          <p>{this.props.text}</p>
          <footer className="blockquote-footer">{this.props.author}</footer>
        </blockquote>
        <CommentForm parent={this.props.id}/>
        <CommentListP comments={this.props.children}/>
        </div>
      </li>
    )
  }
}