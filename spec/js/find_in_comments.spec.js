import { comments } from './comments'
import { findInComments } from '../../app/javascript/bundles/Comments/helpers'

describe('findInComments()', ()=> {
  it('finds path in comments tree', ()=>{
    expect(findInComments(comments, '5a589761dacf99226ebba828')).toEqual([0, 'comments', 1])
  })
})