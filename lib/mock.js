// worlds laziest mock

class Api {
  constructor(options) {
    this.key = options.key;
    if (options.user) {
      this.user_pass = `${options.user}:${options.password}`;
    }
    this.app_id = options.app_id;
  }

  send_sms(input, callback) {
    if (input !== null && typeof input === "object") {
      callback(null, "success");
    } else {
      callback("an error has occured");
    }
  }
  // batch contains array as to:
  send_batch_sms(input, callback) {
    if (input !== null && typeof input === "object") {
      callback(null, "success");
    } else {
      callback("an error has occured");
    }
  }

  send_email(input, callback) {
    if (input !== null && typeof input === "object") {
      callback(null, "success");
    } else {
      callback("an error has occured");
    }
  }

  send_batch_email(input, callback) {
    if (input !== null && typeof input === "object") {
      callback(null, "success");
    } else {
      callback("an error has occured");
    }
  }

  // send singular push note
  send_push_notification(input, callback) {
    if (input !== null && typeof input === "object") {
      callback(null, "success");
    } else {
      callback("an error has occured");
    }
  }

  // send batch push notes
  send_batch_push_notification(input, callback) {
    if (input !== null && typeof input === "object") {
      callback(null, "success");
    } else {
      callback("an error has occured");
    }
  }

  // send to everyone
  send_blast_push_notification(input, callback) {
    if (input !== null && typeof input === "object") {
      callback(null, "success");
    } else {
      callback("an error has occured");
    }
  }

  send_phone_call(input, callback) {
    if (input !== null && typeof input === "object") {
      callback(null, "success");
    } else {
      callback("an error has occured");
    }
  }

  send_batch_phone_call(input, callback) {
    if (input !== null && typeof input === "object") {
      callback(null, "success");
    } else {
      callback("an error has occured");
    }
  }

  phone_number_lookup(input, callback) {
    if (input !== null && typeof input === "object") {
      callback(null, {result: [{data: 'test'}]});
    } else {
      callback("an error has occured");
    }
  }

  phone_number_lookup_sync(input, callback) {
    if (input !== null && typeof input === "object") {
      callback(null, {result: [{data: 'test'}]});
    } else {
      callback("an error has occured");
    }
  }

  send_omni(input, callback) {
    if (input !== null && typeof input === "object") {
      callback(null, "success");
    } else {
      callback("an error has occured");
    }
  }
}

function create(options) {
  return new Api(options);
}

module.exports = create;
