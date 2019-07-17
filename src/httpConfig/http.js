import axios from 'axios'
import baseURL from './api'

axios.defaults.baseURL = baseURL;

export default axios