export class Ajax {
  static send(url, method, data){
    let headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
      'X-Requested-With': 'XMLHttpRequest'
    }
    return fetch(url,{
      method: method,
      credentials: 'include',
      headers: headers,
      body: data
    }).then(res => res.json())
  }
}