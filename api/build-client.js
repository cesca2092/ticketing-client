import axios from 'axios';

const buildClient = ({ req }) => {
  if (typeof window === 'undefined') {
    // server
    const url = 'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local'
    return axios.create({
      baseURL: url,
      headers: req.headers
    })
  } else {
    // client
    return axios.create({
      baseURL: '/'
    })
  }
}

export default buildClient;