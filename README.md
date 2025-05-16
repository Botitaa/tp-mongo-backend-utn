# 🚗 Car Database API (MongoDB + Mongoose)

Este proyecto en TypeScript permite gestionar una base de datos de autos utilizando MongoDB y Mongoose. Incluye operaciones para agregar, listar, buscar, actualizar y eliminar autos.

---

## 📆 Tecnologías utilizadas

* Node.js
* TypeScript
* MongoDB
* Mongoose
* dotenv

---

## ⚙️ Configuración

1. **Instalación de dependencias**:

   ```bash
   npm install
   ```

2. **Crear archivo `.env`** con la URI de tu base de datos MongoDB:

   ```env
   URI_DB=mongodb+srv://<usuario>:<contraseña>@<cluster>.mongodb.net/<nombre_base>
   ```

---

## 🚀 Uso

El archivo principal es `index.ts`. El flujo de operaciones en `main()` realiza:

1. Conexión a MongoDB.
2. Agregado de un nuevo auto.
3. Obtención de todos los autos.
4. Búsqueda de un auto por ID.
5. Actualización de un auto por ID.
6. Eliminación de un auto por ID.

Para ejecutar el programa:

```bash
ts-node index.ts
```

> Asegurate de tener TypeScript y ts-node instalados globalmente, o usá un script de npm.

---

## 🧠 Estructura de datos

### 📄 Modelo de Auto (`Car`)

```ts
{
  brand: string    // Marca del auto (requerido)
  model: string    // Modelo del auto (requerido, único)
  year: number     // Año de fabricación (requerido)
  plate: string    // Patente del auto (requerido, único)
}
```

---

## 🔧 Funciones disponibles

### `connectMongoDb()`

Conecta a MongoDB utilizando la URI definida en `.env`.

### `addNewCar(car: ICar)`

Agrega un nuevo auto a la base de datos.

### `getCars()`

Obtiene todos los autos almacenados.

### `getUniqueCar(id: string)`

Busca un auto por su ID de MongoDB.

### `updateCar(id: string, newData: Partial<ICar>)`

Actualiza los datos de un auto por su ID.

### `deleteCar(id: string)`

Elimina un auto por su ID.

---

## 🧪 Ejemplo de respuesta

```ts
{
  success: true,
  data: { /* objeto del auto */ },
  message: "car was removed correctly"
}
```

---

## 📌 Notas

* El campo `model` y `plate` son únicos.
* Si se intenta agregar un auto con valores duplicados, se lanzará un error de validación.
* Las funciones devuelven un objeto con los campos: `success`, `data` (si aplica), `message`, y `error` (si ocurre una excepción).

---

## 📝 Autor

Desarrollado por **Agustín Botatna**