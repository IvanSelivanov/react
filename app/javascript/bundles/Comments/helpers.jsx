export function findInComments (comments, id) {
  for(let i=0, count=comments.size;i<count;i++) {
    let c = comments.get(i)
    if (c.get('id')===id) {
      return i
    }
    else
    {
      let path = findInComments(c.get('comments'), id)
      if (path!==false)
        return [i, 'comments'].concat(path)
    }
  }
  return false
}
