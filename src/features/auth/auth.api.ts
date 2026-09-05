const baseUrl = import.meta.env.VITE_API_BASE_URL

export const endpoints = {
  login: `${baseUrl}/auth/login/`,
  register: `${baseUrl}/auth/register/`,
  logout: `${baseUrl}/auth/logout/`,
  me: `${baseUrl}/auth/me/`,
  tokenRefresh: `${baseUrl}/auth/token/refresh/`,
}

export async function postJson<TResponse>(url: string, payload: unknown): Promise<TResponse> {
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    throw new Error(String(response.status))
  }

  if (response.status === 204) {
    return undefined as TResponse
  }

  return await response.json()
}
