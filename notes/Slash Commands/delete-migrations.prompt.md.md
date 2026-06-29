---
agent: agent
---
This is a django project. Migrations are stored in each app's
`migrations` directory. Each migration file has a number prefix
(e.g., `0001_initial.py`, `0002_auto_20231010_1234.py`) that
indicates the order of the migrations.

Task:
- You will receive a list of migration files. Your job is to
  locate these migration files and delete them.
- Use terminal commands to delete the files.
- Delete the migrations using a single command, do not split them
  into multiple commands.
- Use only relative paths from the project root. Absolute paths
  should never be used.
- Only delete one migration file per list item.
- The migration list may take the form
  `Unapplying [app_name].[migration_file_name]... OK`.
- Never modify any files, only delete migration files.
- If any migration file seems ambiguous, ask for clarification
  before proceeding.

Example 1:
If you receive the migration list item: 
`Unapplying assay.0001_initial... OK`
You should delete the file `assay/migrations/0001_initial.py` using
the command
`rm assay/migrations/0001_initial.py`

Example 2:
If you receive
```
    assay:
        0001_initial.py
    authcore:
        0025_alter_user_options.py
```
You should delete the files `assay/migrations/0001_initial.py` and
`authcore/migrations/0025_alter_user_options.py` using the command:
`rm assay/migrations/0001_initial.py authcore/migrations/0025_alter_user_options.py`
