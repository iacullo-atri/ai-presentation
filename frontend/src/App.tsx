import { useEffect, useMemo, useState } from 'react'
import { createTodo, listTodos, updateTodo } from './api'
import type { Todo } from './types'

function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [title, setTitle] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [adding, setAdding] = useState(false)

  useEffect(() => {
    listTodos()
      .then(setTodos)
      .catch(() => setError('Could not load tasks. Is the backend running?'))
      .finally(() => setLoading(false))
  }, [])

  const remaining = useMemo(
    () => todos.filter((t) => !t.completed).length,
    [todos],
  )

  async function handleAdd() {
    const trimmed = title.trim()
    if (!trimmed || adding) return
    setAdding(true)
    setError(null)
    try {
      const created = await createTodo(trimmed)
      setTodos((prev) => [created, ...prev])
      setTitle('')
    } catch {
      setError('Could not add task.')
    } finally {
      setAdding(false)
    }
  }

  async function toggle(todo: Todo) {
    // Optimistic update, rolled back on failure.
    setTodos((prev) =>
      prev.map((t) => (t.id === todo.id ? { ...t, completed: !t.completed } : t)),
    )
    try {
      await updateTodo(todo.id, { completed: !todo.completed })
    } catch {
      setError('Could not update task.')
      setTodos((prev) =>
        prev.map((t) =>
          t.id === todo.id ? { ...t, completed: todo.completed } : t,
        ),
      )
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 flex items-start justify-center px-4 py-12 sm:py-20">
      <div className="w-full max-w-lg">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white">Tasks</h1>
          <p className="mt-2 text-sm text-slate-400">
            {remaining} {remaining === 1 ? 'task' : 'tasks'} remaining
          </p>
        </header>

        <div className="rounded-2xl bg-white shadow-2xl shadow-black/30 ring-1 ring-black/5 overflow-hidden">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              handleAdd()
            }}
            className="flex gap-2 border-b border-slate-100 p-4"
          >
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Add a new task…"
              className="flex-1 rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-slate-800 placeholder-slate-400 outline-none transition focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-100"
            />
            <button
              type="submit"
              disabled={!title.trim() || adding}
              className="shrink-0 rounded-lg bg-indigo-600 px-5 py-2.5 font-medium text-white shadow-sm transition hover:bg-indigo-500 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Add
            </button>
          </form>

          {error && (
            <p className="border-b border-rose-100 bg-rose-50 px-4 py-2.5 text-sm text-rose-600">
              {error}
            </p>
          )}

          <ul className="divide-y divide-slate-100">
            {loading ? (
              <li className="px-4 py-12 text-center text-slate-400">Loading…</li>
            ) : todos.length === 0 ? (
              <li className="px-4 py-12 text-center text-slate-400">
                <p className="text-base font-medium text-slate-500">All clear ✨</p>
                <p className="mt-1 text-sm">Add your first task above.</p>
              </li>
            ) : (
              todos.map((todo) => (
                <li
                  key={todo.id}
                  className="group flex items-center gap-3 px-4 py-3 transition hover:bg-slate-50"
                >
                  <button
                    onClick={() => toggle(todo)}
                    aria-label={todo.completed ? 'Mark as not done' : 'Mark as done'}
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition ${
                      todo.completed
                        ? 'border-indigo-600 bg-indigo-600 text-white'
                        : 'border-slate-300 text-transparent hover:border-indigo-400'
                    }`}
                  >
                    <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                      <path
                        fillRule="evenodd"
                        d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0l-3.5-3.5a1 1 0 011.4-1.4l2.8 2.79 6.8-6.79a1 1 0 011.4 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>

                  <span
                    onClick={() => toggle(todo)}
                    className={`flex-1 cursor-pointer select-none text-slate-800 transition ${
                      todo.completed ? 'text-slate-400 line-through' : ''
                    }`}
                  >
                    {todo.title}
                  </span>
                </li>
              ))
            )}
          </ul>
        </div>

        <p className="mt-6 text-center text-xs text-slate-500">
          Django REST Framework · React · Tailwind
        </p>
      </div>
    </div>
  )
}

export default App
