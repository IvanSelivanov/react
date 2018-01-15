import React from 'react'
import { CommentForm } from './CommentForm'
import { CommentList } from './CommentList'

export class CommentContainer extends React.Component {
  render(){
    return (
      <div>
        <CommentForm/>
        <CommentList/>
      </div>
    )
  }
}