# 🚀 Barberin - Aplicación de Barberías

## 📋 Descripción
Barberin es una aplicación web completa para gestionar citas en barberías, con frontend en Vite y backend en Node.js/Express.

## 🏗️ Estructura del Proyecto
```
deployment2.0/
├── backend/           # API REST en Node.js/Express
├── APP/              # Frontend en Vite
├── railway.json      # Configuración para Railway
└── Procfile         # Configuración de despliegue
```

## 🚀 Despliegue en Railway

### Prerrequisitos
- Cuenta en [Railway.app](https://railway.app)
- Repositorio Git configurado
- Node.js 18+ instalado localmente

### Paso 1: Preparar el Backend
1. **Instalar dependencias:**
   ```bash
   cd backend
   npm install
   ```

2. **Configurar variables de entorno:**
   - Copia `backend/env.example` a `backend/.env`
   - Configura las variables necesarias

### Paso 2: Preparar el Frontend
1. **Instalar dependencias:**
   ```bash
   cd APP
   npm install
   ```

2. **Construir para producción:**
   ```bash
   npm run build
   ```

### Paso 3: Desplegar en Railway

#### Opción A: Backend y Frontend en el mismo proyecto
1. Ve a [Railway.app](https://railway.app)
2. Crea un nuevo proyecto
3. Conecta tu repositorio Git
4. Railway detectará automáticamente la configuración

#### Opción B: Proyectos separados (Recomendado)
1. **Backend:**
   - Crea proyecto "barberin-backend"
   - Conecta la carpeta `backend/`
   - Configura variables de entorno

2. **Frontend:**
   - Crea proyecto "barberin-frontend"
   - Conecta la carpeta `APP/`
   - Configura variables de entorno

### Paso 4: Configurar Variables de Entorno

#### Backend:
```env
NODE_ENV=production
PORT=3000
DB_HOST=tu_host_mysql
DB_USER=tu_usuario
DB_PASSWORD=tu_password
DB_NAME=Barberin
SESSION_SECRET=tu_secret_muy_seguro
ALLOWED_ORIGINS=https://tu-frontend.railway.app
```

#### Frontend:
```env
VITE_API_URL=https://tu-backend.railway.app
```

### Paso 5: Base de Datos
Railway no soporta MySQL nativamente. Opciones:
- **PostgreSQL** (recomendado, nativo en Railway)
- **MySQL externo** (PlanetScale, AWS RDS)
- **Migrar a PostgreSQL**

## 🔧 Comandos Útiles

### Desarrollo Local
```bash
# Backend
cd backend
npm run dev

# Frontend
cd APP
npm run dev
```

### Producción
```bash
# Backend
cd backend
npm start

# Frontend
cd APP
npm run build
npm run preview
```

## 📱 URLs de la Aplicación
- **Frontend:** `https://tu-frontend.railway.app`
- **Backend:** `https://tu-backend.railway.app`
- **Health Check:** `https://tu-backend.railway.app/health`

## 🚨 Solución de Problemas

### Error de CORS
- Verifica `ALLOWED_ORIGINS` en las variables de entorno
- Asegúrate de que el frontend esté en la lista

### Error de Base de Datos
- Verifica credenciales de la base de datos
- Asegúrate de que la base de datos esté accesible desde Railway

### Error de Puerto
- Railway asigna automáticamente el puerto
- Usa `process.env.PORT` en tu código

## 📚 Recursos Adicionales
- [Documentación de Railway](https://docs.railway.app/)
- [Guía de Node.js en Railway](https://docs.railway.app/deploy/deployments/nodejs)
- [Variables de Entorno en Railway](https://docs.railway.app/deploy/environment-variables)

## 🤝 Contribución
1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

## 📄 Licencia
Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.