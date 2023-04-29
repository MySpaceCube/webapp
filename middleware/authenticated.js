const axios = require('axios').default;
import { useAuthStore } from '../stores';

console.log(axios)
const token = await $fetch('/sign-in', {
  method: 'post',
  body: {
    username: this.username,
    password: this.password,
  },
});
