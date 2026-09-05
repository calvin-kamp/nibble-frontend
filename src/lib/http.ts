async function request<TResponse>(
  url: string,
  method: string,
  payload?: unknown,
): Promise<TResponse> {
  const response = await fetch(url, {
    method,
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: payload === undefined ? undefined : JSON.stringify(payload),
  })

  if (!response.ok) {
    throw new Error(String(response.status))
  }

  if (response.status === 204) {
    return undefined as TResponse
  }

  return await response.json()
}

export const http = {
  get: <T>(url: string) => request<T>(url, 'GET'),
  post: <T>(url: string, payload?: unknown) => request<T>(url, 'POST', payload),
  patch: <T>(url: string, payload?: unknown) => request<T>(url, 'PATCH', payload),
  delete: <T>(url: string) => request<T>(url, 'DELETE'),
}
