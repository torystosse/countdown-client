let apiUrl
const apiUrls = {
  production: 'https://pacific-coast-03839.herokuapp.com',
  development: 'http://localhost:19006'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl
