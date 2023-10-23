token  GET https://project-backend-8dts.onrender.com/tasks?month=2023-10 (отримати всі таски за обраний місяць)

token  POST https://project-backend-8dts.onrender.com/tasks (створення таски)

{
    "category": "TODO",
    "date": "2023-10-23",
    "end": "18:00",
    "priority": "MEDIUM",
    "start": "09:00",
    "title": "1st note"
}

token  PATCH https://project-backend-8dts.onrender.com/tasks/{id} (редагування таски)

{
    "title": "1st note",
    "start": "09:00",
    "end": "18:00",
    "priority": "MEDIUM",
    "date": "2023-10-22",
    "category": "TODO"
}


token  DELETE https://project-backend-8dts.onrender.com/tasks/{id}   (видалення таски)