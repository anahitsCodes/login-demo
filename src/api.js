export async function fetchMe(token) {
  const response = await fetch('https://dummyjson.com/auth/me', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return response.json()
}

export async function loginApi(username, password) {
  const response = await fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });

  const data = await response.json();
  if (!response.ok) {
    throw data
  }
  return data
}