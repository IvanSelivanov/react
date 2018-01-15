import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createComment, fieldChange, reply } from '../actions'

export class CommentFormP extends React.Component {
  static get propTypes(){
    return {
      photo: PropTypes.string,
      author: PropTypes.string,
      text: PropTypes.string,
    }
  }

  createComment = () => {
    this.props.createComment({
      photo_id: this.props.photo,
      parent_id: this.props.parent,
      comment: {
        author: this.props.author,
        text: this.props.text
      }
    })
  }

  updateValue = (e) => {
    this.props.fieldChange(e.target.name, e.target.value)
  }

  reply = () => {
    this.props.reply(this.props.parent)
  }

  render() {
    return (
      <div className="clearfix">
        <small
          className={this.props.reply_to===this.props.parent ? 'd-none' : 'd-block mb-4'}
          onClick={this.reply}
        >Ответить</small>
        <div className={this.props.reply_to!==this.props.parent ? 'd-none' : 'd-block card px-3 mb-3'} style={{width: '28rem'}}>
          <div className="form-group">
            <label>Имя:</label>
            <input
              type="text"
              className="form-control"
              name="comment_author"
              value={this.props.author}
              onChange={this.updateValue}
            />
            <small className="form-text text-muted">Представьтесь, пожалуйста</small>
          </div>
          <div className="form-group">
            <label>Комментарий:</label>
            <textarea className="form-control" name={'comment_text'} value={this.props.text} onChange={this.updateValue} />
            <input type="hidden" name="photo_id" value={this.props.photo} />
          </div>
          <div className="form-group">
            <button className="btn btn-primary" onClick={this.createComment}>Сохранить</button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
//  console.log(state)
  return(
    {
      photo: state.get('photo'),
      author: state.get('comment_author'),
      text: state.get('comment_text'),
      reply_to: state.get('reply_to')
    }
  )
}

export const CommentForm = connect(mapStateToProps, { createComment, fieldChange, reply })(CommentFormP)