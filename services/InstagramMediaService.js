import Axios from 'axios'

const RESOURCE_NAME = 'https://graph.instagram.com/me/media'
const FIELDS = 'id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,username,children{media_url,thumbnail_url,media_type}'
const ACCESS_TOKEN = 'IGQVJYY2FmRUhFTEJRVVJTMmVqN3BicnFVRklVT2dndEJJYjVrRmlveHBwUkRLQkxzZAUZAuamFZAMVpra3gxVTBNNEZAzSUxCN2F3LU9aYUxpLVlaWlVFcGxjdnJIRmRZAWWo5bEJNSEpn'

export default {

  getAll () {
    return Axios.get(`${RESOURCE_NAME}`, {
      params: {
        fields: FIELDS,
        access_token: ACCESS_TOKEN
      }
    })
  }
}
