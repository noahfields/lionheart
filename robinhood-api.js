const crypto = require('crypto');
console.log(crypto.randomUUID());

/*
let username = 'noahfields@gmail.com';
let password = 'password';
let challenge_type = 'email'; // or 'sms'

payload = {
  'client_id': 'c82SH0WZOsabOXGP2sxqcj34FxkvfnWRZBKlBjFS',
  'expires_in': expiresIn,
  'grant_type': 'password',
  'password': password,
  'scope': 'internal',
  'username': username,
  'challenge_type': 'email', // or sms
  'device_token': crypto.randomUUID() 
};

let response = await fetch('/article/fetch/post/user', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  body: JSON.stringify(user)
});

let result = await response.json();
alert(result.message);
*/
