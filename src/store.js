const uuid = require('uuid/v4')

const bookmarks = [
  { id: uuid(),
    title: 'Thinkful',
    url: 'https://www.thinkful.com',
    description: 'Think outside the classroom',
    rating: 5 },
  { id: uuid(),
    title: 'Google',
    url: 'https://www.google.com',
    description: 'Where we find everything else',
    rating: 4 }
]
  
  module.exports = { bookmarks }