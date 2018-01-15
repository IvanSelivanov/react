import { CommentListP } from '../../app/javascript/bundles/Comments/components/CommentList'
import { comments } from './comments'
import React from 'react'
import { shallow } from 'enzyme'

describe('CommentListP', ()=>{
  let wrap = shallow(<CommentListP comments={comments} />)
  it('Matches shapshot', ()=>{
    console.log(wrap.debug())
    expect(wrap).toMatchSnapshot()
  })
  it('Has two top-level comments', ()=>{
    expect(wrap.children().length).toEqual(2)
  })
})