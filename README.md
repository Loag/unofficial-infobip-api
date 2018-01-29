# unofficial-infobip-api
unofficial wrapper for infobip api

## usage

```
const infobip-api = require('infobip-unofficial-api')({key: 'api_key'});

const message = {
  to: 'to number',
  from: 'from number',
  message: 'string message'
}

infobip-api.send_sms(message, function(err, res){
  if (!err) {
    console.log(res);
  }
});
```
