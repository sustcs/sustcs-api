```js
GET <Domain>\/qrcode  // http://127.0.0.1:7001/qrcode
{
  prefix: '',
  scanType: '', // weapp, h5
  param: '',
  action:'' // login
},
// Response
{
  statusCode: '', // 200 or 422
  msg: '' // qrcode or invalid_param
}
```