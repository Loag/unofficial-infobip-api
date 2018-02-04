let ib = require('../lib/core')({user: 'mikeh', password: 'passowrd'});

const message = {
  to: 'to number',
  from: 'from number',
  message: 'string message'
}

ib.send_sms(message, function(err, res){
  if (!err) {
    console.log(res);
  } else {
   console.log(err, res);
  }
});