const request = require("request");

class Api {
  constructor(options) {
    this.key = options.key;
    if (options.user) {
      this.user_pass = `${options.user}:${options.password}`;
    }
    this.app_id = options.app_id;
  }

  send_sms(input, callback) {
    let options = {
      path: "https://api.infobip.com/sms/1/text/single",
      reqType: "POST",
      authType: input.authType || "Basic",
      key: this.user_pass || this.key,
      payload: input.payload || input
    };
    postRequest(options, function(err, response) {
      if (!err) {
        callback(null, response);
      } else {
        callback(err);
      }
    });
  }
  // batch contains array as to:
  send_batch_sms(input, callback) {
    if (isArray(input.to) === false) throw "to must be an array";
    let options = {
      path: "https://api.infobip.com/sms/1/text/single",
      reqType: "POST",
      authType: input.authType || "basic",
      key: this.user_pass || this.key,
      payload: input.payload || input
    };
    postRequest(options, function(err, response) {
      if (!err) {
        callback(null, response);
      } else {
        callback(err);
      }
    });
  }

  send_email(input, callback) {
    let options = {
      path: "https://api.infobip.com/email/1/send",
      reqType: "POST",
      authType: input.authType || "Basic",
      key: this.user_pass || this.key,
      payload: input.payload || input
    };
    postRequest(options, function(err, response) {
      if (!err) {
        callback(null, response);
      } else {
        callback(err);
      }
    });
  }

  send_batch_email(input, callback) {
    if (isArray(input.to) === false || isArray(input.to) === false)
      throw "to must be an array";
    let options = {
      path: "https://api.infobip.com/email/1/send",
      reqType: "POST",
      authType: input.authType || "Basic",
      key: this.user_pass || this.key,
      payload: input.payload || input
    };
    postRequest(options, function(err, response) {
      if (!err) {
        callback(null, response);
      } else {
        callback(err);
      }
    });
  }

  // send singular push note
  send_push_notification(input, callback) {
    let payload = {
      from: this.app_id,
      to: { pushRegistrationId: input.to }, // singular string id
      text: input.message
    };

    let options = {
      path: "https://api.infobip.com/push/2/message/single",
      reqType: "POST",
      authType: input.authType || "Basic",
      key: this.user_pass || this.key,
      payload: payload
    };
    postRequest(options, function(err, response) {
      if (!err) {
        callback(null, response);
      } else {
        callback(err);
      }
    });
  }

  // send batch push notes
  send_batch_push_notification(input, callback) {
    let payload = {
      from: this.app_id,
      to: { pushRegistrationId: input.to }, // array of identifiers
      text: input.message
    };

    let options = {
      path: "https://api.infobip.com/push/2/message/single",
      reqType: "POST",
      authType: input.authType || "Basic",
      key: this.user_pass || this.key,
      payload: payload
    };
    postRequest(options, function(err, response) {
      if (!err) {
        callback(null, response);
      } else {
        callback(err);
      }
    });
  }

  // send to everyone
  send_blast_push_notification(input, callback) {
    let payload = {
      from: this.app_id,
      to: { cloudType: ["APNS", "GCM"] }, // array of identifiers
      text: input.message
    };

    let options = {
      path: "https://api.infobip.com/push/2/message/single",
      reqType: "POST",
      authType: input.authType || "Basic",
      key: this.user_pass || this.key,
      payload: payload
    };
    postRequest(options, function(err, response) {
      if (!err) {
        callback(null, response);
      } else {
        callback(err);
      }
    });
  }

  send_phone_call(input, callback) {
    let options = {
      path: "https://api.infobip.com/tts/3/single",
      reqType: "POST",
      authType: input.authType || "Basic",
      key: this.user_pass || this.key,
      payload: input // contains string 'to', an owned 'from' number, and string 'message' and 'language' string (chars)
    };
    postRequest(options, function(err, response) {
      if (!err) {
        callback(null, response);
      } else {
        callback(err);
      }
    });
  }

  send_batch_phone_call(input, callback) {
    let options = {
      path: "https://api.infobip.com/tts/3/multi",
      reqType: "POST",
      authType: input.authType || "Basic",
      key: this.user_pass || this.key,
      payload: input // contains array 'to', an owned 'from' number, and string 'message' and 'language' string (chars)
    };
    postRequest(options, function(err, response) {
      if (!err) {
        callback(null, response);
      } else {
        callback(err);
      }
    });
  }

  phone_number_lookup(input, callback) {
    let options = {
      path: "https://api.infobip.com/number/1/notify",
      reqType: "POST",
      authType: input.authType || "Basic",
      key: this.user_pass || this.key,
      payload: input // contains array 'to', a notify url 'notifyUrl' and prefered type
    };
    postRequest(options, function(err, response) {
      if (!err) {
        callback(null, response);
      } else {
        callback(err);
      }
    });
  }

  phone_number_lookup_sync(input, callback) {
    let options = {
      path: "https://api.infobip.com/number/1/query",
      reqType: "POST",
      authType: input.authType || "Basic",
      key: this.user_pass || this.key,
      payload: input
    };
    postRequest(options, function(err, response) {
      if (!err) {
        callback(null, response);
      } else {
        callback(err);
      }
    });
  }

  send_omni(input, callback) {
    let options = {
      path: "https://api.infobip.com/number/1/notify",
      reqType: "POST",
      authType: input.authType || "Basic",
      key: this.user_pass || this.key,
      payload: input // contains array 'to', a notify url 'notifyUrl' and prefered type
    };
    postRequest(options, function(err, response) {
      if (!err) {
        callback(null, response);
      } else {
        callback(err);
      }
    });
  }
}

function constructHeaders(options) {
  if (options.authType === "app") {
    return {
      authorization: "App " + options.key,
      "content-type": "application/json",
      accept: "application/json"
    };
  } else {
    // new Buffer(options.user+":"+options.password)
    let authString = new Buffer(options.key).toString("base64");
    return {
      authorization: "Basic " + authString,
      "content-type": "application/json",
      accept: "application/json"
    };
  }
}

function constructPayload(options) {
  let payload = JSON.stringify(options.payload);
  return {
    uri: options.path,
    headers: constructHeaders({
      authType: options.headerType,
      key: options.key
    }),
    method: options.reqType,
    body: payload
  };
}

function postRequest(input, callback) {
  request.post(constructPayload(input), function(err, res, body) {
    if (!err && res.statusCode === 200) {
      callback(null, body);
    } else {
      callback({
        error: err,
        message: body
      });
    }
  });
}

function getRequest(input, callback) {
  request.get(constructPayload(input), function(err, res, body) {
    if (!err && res.statusCode === 200) {
      callback(null, body);
    } else {
      callback({
        error: err,
        message: body
      });
    }
  });
}

function isArray(value) {
  return value && typeof value === "object" && value.constructor === Array;
}

function create(options) {
  return new Api(options);
}

module.exports = create;
