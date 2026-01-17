const baseUrl = "http://localhost:5050"
export default class APIServices {
  async signUp(payload) {
    const response = await fetch(`${baseUrl}/auth/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    });
    const result = await response.json();
    console.log(result)
    return result;
  }
  async verifyOTP(payload) {
    const response = await fetch(`${baseUrl}/auth/varify`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    });
    const result = await response.json();
    return result;
  }
  async loginUser(payload) {
    const response = await fetch(`${baseUrl}/auth/login`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    });
    const result = await response.json();
    return result;
  }
  async profile() {
    const response = await fetch(`${baseUrl}/auth/profile`, {
      method: 'GET',
      credentials: 'include',
    });
    const result = await response.json();
    return result;
  }
} 