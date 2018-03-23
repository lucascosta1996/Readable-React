export const api = "http://localhost:3001";

let token = localStorage.token;
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Authorization': token
}

//CATEGORIES
export const allCategories = () => {
  return fetch(`${api}/categories/`, { headers })
    .then(res => res.json())
    .then(data => data.categories)
  }

//POSTS
export const allPostsbyCategory = (category) => {
  return fetch(`${api}/${category}/posts`, { headers })
    .then(res => res.json())
    .then(data => data)
  }

  export const allPosts = () => {
    return fetch(`${api}/posts`, { headers })
    .then(res => res.json())
  }

  export const getPost = (id) => {
    return fetch(`${api}/posts/${id}`, { headers })
      .then(res => res.json())
  }

  export const addPost = (newPost) => {
    return fetch(`${api}/posts`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(newPost)
    })
    .then(data => data.json())
  }

 export const editPost = (id, post) => {
  return fetch(`${api}/posts/${id}`, {
    method: 'PUT',
    headers: headers,
    body: JSON.stringify(post)
  })
    .then(data => data.json())
}

export const deletePost = (id) => {
  return fetch(`${api}/posts/${id}`, {
    method: 'DELETE',
    headers
  })
}

export const votePost = (id, option) => {
  return fetch(`${api}/posts/${id}`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({ option: option })
  }).then(data => data.json())
}

//COMMENTS
export const allComments = (id) => {
  return fetch(`${api}/posts/${id}/comments`, { headers })
    .then(res => res.json())
}

export const addComment = (newComment) => {
  return fetch(`${api}/comments`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(newComment)
  }).then(data => data.json())
}

export const deleteComment = (id) => {
  return fetch(`${api}/comments/${id}`, {
    method: 'DELETE',
    headers: headers
  }).then(data => data.json())
}

//either upVote or downVote
export const voteComment = (id, option) => {
  return fetch(`${api}/comments/${id}`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({ option: option })
  })
  .then(data => data.json())
}

export const editComment = (id, comment) => {
  return fetch(`${api}/comments/${id}`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(comment)
  }).then(data => data.json())
}
