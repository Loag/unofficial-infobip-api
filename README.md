# unofficial-infobip-api
unofficial wrapper for infobip api

## usage

```
const infobip_api = require('infobip-unofficial-api')({user: 'username', password: 'password'});

const message = {
  to: 'to number',
  from: 'from number',
  message: 'string message'
}

infobip_api.send_sms(message, function(err, res){
  if (!err) {
    console.log(res);
  }
});
```
