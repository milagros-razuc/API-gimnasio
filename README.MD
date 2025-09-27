# Gym Management API
API para gestionar un gimnasio: miembros, entrenadores, clases, membresías e inscripciones. Construida con Node.js, Express y Sequelize (MySQL).

## URL BASE
La URL base de la API es:
```
 http://localhost:<PORT>/
 ```

## Modelo BBDD


## Endpoints
### Miembros

| Método | Ruta             | Descripción                | Query/Body                         | Respuesta                                             |
| ------ | ---------------- | -------------------------- | ---------------------------------- | ----------------------------------------------------- |
| GET    | /miembros        | Obtener todos los miembros | —                                  | Array de miembros                                     |
| GET    | /miembros/:id    | Obtener miembro por ID     | —                                  | Objeto miembro                                        |
| POST   | /miembros        | Crear nuevo miembro        | JSON con datos                     | Objeto creado                                         |
| PUT    | /miembros/:id    | Actualizar miembro         | JSON con datos                     | Objeto actualizado                                    |
| DELETE | /miembros/:id    | Eliminar miembro           | —                                  | Mensaje confirmación                                  |
| GET    | /miembros/filtro | Filtrar miembros por query | `?nombre=...&email=...` (opcional) | Array de miembros filtrados  |

### Entrenadores
| Método | Ruta              | Descripción            |
| ------ | ----------------- | ---------------------- |
| GET    | /entrenadores     | Todos los entrenadores |
| GET    | /entrenadores/:id | Entrenador por ID      |
| POST   | /entrenadores     | Crear entrenador       |
| PUT    | /entrenadores/:id | Actualizar entrenador  |
| DELETE | /entrenadores/:id | Eliminar entrenador    |

### Clases
| Método | Ruta        | Descripción      |
| ------ | ----------- | ---------------- |
| GET    | /clases     | Todas las clases |
| GET    | /clases/:id | Clase por ID     |
| POST   | /clases     | Crear clase      |
| PUT    | /clases/:id | Actualizar clase |
| DELETE | /clases/:id | Eliminar clase   |

### Membresias
| Método | Ruta            | Descripción          |
| ------ | --------------- | -------------------- |
| GET    | /membresias     | Todas las membresías |
| GET    | /membresias/:id | Membresía por ID     |
| POST   | /membresias     | Crear membresía      |
| PUT    | /membresias/:id | Actualizar membresía |
| DELETE | /membresias/:id | Eliminar membresía   |

### Inscripciones
| Método | Ruta               | Descripción             |
| ------ | ------------------ | ----------------------- |
| GET    | /inscripciones     | Todas las inscripciones |
| GET    | /inscripciones/:id | Inscripción por ID      |
| POST   | /inscripciones     | Crear inscripción       |
| PUT    | /inscripciones/:id | Actualizar inscripción  |
| DELETE | /inscripciones/:id | Eliminar inscripción    |

#### Notas importantes
* Todos los filtros de texto (nombre, email, etc.) son insensibles a mayúsculas/minúsculas.
* Para filtros dinámicos, se usan query params:
* Respuesta: array de miembros que coincidan parcialmente con los filtros.

## 🔹 Ejemplos de uso (GET,POST, PUT, DELETE)

### 🧪 Ejemplo de `GET /miembros/filtro`

*REQUEST*
```
GET /miembros/filtro?nombre=tom
```

*RESPONSE*

```json
[
    {
    "nombre": "Tomás Díaz",
    "email": "tomas.diaz@email.com",
    "telefono": "+54 11 4444-5555",
    "idMembresia": 4,
    "fecha_inicio_membresia": "2025-01-20",
    "fecha_fin_membresia": "2025-02-19",
    "activo": false
    }
]

```


### 🧪 Ejemplo de `POST /miembros`

*REQUEST*
```
POST http://localhost:<PORT>/miembros
```
Body:
```json
[
    {
    "nombre": "Tomás Díaz",
    "email": "tomas.diaz@email.com",
    "telefono": "+54 11 4444-5555",
    "idMembresia": 4,
    "fecha_inicio_membresia": "2025-01-20",
    "fecha_fin_membresia": "2025-02-19",
    "activo": false
    }
 ]

```
*RESPONSE*
```json
{"message":"Miembro creado exitosamente",

"miembro":{"fecha_registro":"2025-09-27T02:34:04.473Z",
"idMiembro":11,
"nombre":"Tomás Díaz",
"email":"tomas.diaz@email.com",
"telefono":"+54 11 4444-5555",
"idMembresia":4,
"fecha_inicio_membresia":"2025-01-20",
"fecha_fin_membresia":"2025-02-19",
"activo":false}}

```
### 🧪 Ejemplo de `PUT /miembros/:id`

*REQUEST*
```
PUT http://localhost:<PORT>/miembros
```
Body:
```json
[
    {
   "email": "maria.gomez123@email.com"
    }
 ]

```
*RESPONSE*
```json
    {
        "message":"Miembro actualizado exitosamente",
        "miembro":{"idMiembro":1,
            "nombre":"María Gómez",
            "email":"maria.gomez123@email.com",
            "telefono":"+54 11 1111-2222",
            "idMembresia":2,
            "fecha_registro":"2025-03-01",
            "fecha_inicio_membresia":"2025-03-01",
            "fecha_fin_membresia":"2025-03-31",
            "activo":true
        }
    }
```

### 🧪 Ejemplo de `DELETE /miembros/:id`

*REQUEST*
```
DELETE http://localhost:<PORT>/miembros/1

```
*RESPONSE*
```
{"message":"Miembro eliminado exitosamente"}
```
