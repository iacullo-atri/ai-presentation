# Tasks — a minimal full-stack to-do app

A small to-do application:

- **Backend** — Django + Django REST Framework (SQLite), exposing a REST API at `/api/todos/`.
- **Frontend** — Vite + React + TypeScript, styled with Tailwind CSS, in [`frontend/`](frontend/).

Features: list tasks, add a task, check a task as done (and uncheck).

```
ai-presentation/
├── backend/          # Django project
│   ├── config/       # project settings + root URLs
│   ├── todos/        # the Todo app (model, serializer, viewset, urls)
│   ├── manage.py
│   └── requirements.txt
└── frontend/         # Vite + React + TS + Tailwind
    └── src/
        ├── App.tsx   # the UI
        ├── api.ts    # fetch wrappers for the REST API
        └── types.ts
```

## Running the app

You need **two terminals** — one for the API, one for the UI.

### 2. Frontend

```bash
cd frontend
npm install
npm run dev
```

The Vite dev server proxies `/api/*` to Django
(configured in [frontend/vite.config.ts](frontend/vite.config.ts)), so there is
nothing else to configure.

## API

| Method   | Endpoint           | Description          |
| -------- | ------------------ | -------------------- |
| `GET`    | `/api/todos/`      | List all tasks       |
| `POST`   | `/api/todos/`      | Create a task `{ "title": "..." }` |
| `PATCH`  | `/api/todos/{id}/` | Update a task (e.g. `{ "completed": true }`) |
| `DELETE` | `/api/todos/{id}/` | Delete a task        |

## Notes

- The `SECRET_KEY`, `DEBUG = True`, and permissive CORS in
  [backend/config/settings.py](backend/config/settings.py) are fine for local
  development but must be changed before any production deployment.
- An optional Django admin is available at http://127.0.0.1:8000/admin/ — run
  `python manage.py createsuperuser` to use it.
