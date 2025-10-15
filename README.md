# BANCKEND- DatosCrud

Servidor Node.js + Express que expone un CRUD y una ruta GET para obtener los usuarios.

## Archivos
- index.js : Servidor y rutas
- db.js : Conexión a PostgreSQL
- .env : Configuración de conexión (no subir a repositorios públicos)

## Configuración
1. Instalar dependencias:
```
npm install
```
2. Debe tener PostgreSQL con la base de datos `DatosCrud` creada.
3. Crear la tabla `usuarios` en la base de datos:
```sql
CREATE TABLE usuarios (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(100),
  correo VARCHAR(100),
  edad INT
);
```
4. Actualizar `.env` si es necesario (ya viene preconfigurado).
5. Ejecute el servidor:
```
npm start
```

La API principal:
- GET  /api/data
- POST /api/usuarios
- PUT  /api/usuarios/:id
- DELETE /api/usuarios/:id

# FRONTEND - DatosCrud (Angular)

Este repositorio contiene los archivos fuente básicos para una app Angular que consume la API.

Necesita tener instalado Angular CLI globalmente:
```
npm install -g @angular/cli
```
## Cómo ejecutar
1. Instala dependencias:
```
npm install
```
2. Inicia la app:
```
npm start
```
3. Abra en: http://localhost:4200

## Estructura mínima incluida
- src/app/services/user.service.ts  -> Servicio HttpClient para comunicarse con el backend
- src/app/components/user-list      -> Componente con formulario y tabla
- src/app/app.module.ts
- src/app/app.component.ts / html

Ajuste la URL del API en `user.service.ts` si tu backend no corre en http://localhost:3000


## PRUEBA DEL MIRCROSERVICIO
  - POSTMAN 

Asegúrate de que el backend esté corriendo en `http://localhost:3000`.

| Método | URL | Descripción | Ejemplo de cuerpo (Body JSON) |
|:-------|:----|:-------------|:-------------------------------|
| **GET** | `http://localhost:3000/api/data` | Obtiene todos los usuarios registrados. |
| **POST** | `http://localhost:3000/api/usuarios` | Crea un nuevo usuario en la base de datos. | ```json { "nombre": "Lezly", "correo": "lezly@gmail.com", "edad": 24 } ``` |
| **PUT** | `http://localhost:3000/api/usuarios/:id` | Actualiza los datos del usuario existente. | ```json { "nombre": "Lezly Murcia", "correo": "lezlym@gmail.com", "edad": 26 } ``` |
| **DELETE** | `http://localhost:3000/api/usuarios/:id` | Elimina un usuario por su ID. | — |

**Prueba rápida:**
1. Crear usuario → método **POST**  
2. Listar usuarios → método **GET**  
3. Modificar usuario → método **PUT**  
4. Eliminar usuario → método **DELETE**

---
- Prueba desde el frontend

1. Ejecute el backend (`npm start` en la carpeta `backend`).
2. Ejecute el frontend (`ng serve` en la carpeta `frontend`).
3. Abre el navegador en:
   ```
   http://localhost:3000
   ```
4. Interactúa con el formulario:
   - **Visualiza** usuarios existentes.
   - **Agrega**, **modifica** o **elimina** usuarios desde la interfaz.
--- 