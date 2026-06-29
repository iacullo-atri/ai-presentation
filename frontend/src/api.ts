import type { Todo } from './types'

// Requests go to the Vite dev server, which proxies /api to Django.
const BASE = '/api/todos/'

async function handle<T>(res: Response): Promise<T> {
  if (!res.ok) {
    throw new Error(`Request failed: ${res.status} ${res.statusText}`)
  }
  // 204 No Content (e.g. DELETE) has no body to parse.
  return res.status === 204 ? (undefined as T) : res.json()
}

export function listTodos(): Promise<Todo[]> {
  return fetch(BASE).then((r) => handle<Todo[]>(r))
}

export function createTodo(title: string): Promise<Todo> {
  return fetch(BASE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title }),
  }).then((r) => handle<Todo>(r))
}

export function updateTodo(
  id: number,
  patch: Partial<Pick<Todo, 'title' | 'completed'>>,
): Promise<Todo> {
  return fetch(`${BASE}${id}/`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(patch),
  }).then((r) => handle<Todo>(r))
}
