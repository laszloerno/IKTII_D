import defaultUser from '../utils/default-user';

export async function signIn(email, password) {
  try {
    // Send request
    console.log(email, password);

    return {
      isOk: true,
      data: defaultUser
    };
  }
  catch {
    return {
      isOk: false,
      message: "Authentication failed"
    };
  }
}

export async function getUser() {
  try {
    // Send request

    return {
      isOk: true,
      data: defaultUser
    };
  }
  catch {
    return {
      isOk: false
    };
  }
}

export async function createAccount(email, password, lastName, firstName) {
  try {
    // Send request
    console.log(email, password, lastName, firstName);
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const body_raw = {
      email: email,
      password: password,
      lastName: lastName,
      firstName: firstName
    }
    const body = JSON.stringify(body_raw)

    const res = await axios.post(
      'http://los',
      body,
      config
    )



    return {
      isOk: true
    };
  }
  catch {
    return {
      isOk: false,
      message: "Failed to create account"
    };
  }
}

export async function changePassword(email, recoveryCode) {
  try {
    // Send request
    console.log(email, recoveryCode);

    return {
      isOk: true
    };
  }
  catch {
    return {
      isOk: false,
      message: "Failed to change password"
    }
  }
}

export async function resetPassword(email) {
  try {
    // Send request
    console.log(email);

    return {
      isOk: true
    };
  }
  catch {
    return {
      isOk: false,
      message: "Failed to reset password"
    };
  }
}
