# 🚀 Guía de Despliegue en Railway - Barberin

## 📋 Resumen
Esta guía te llevará paso a paso para desplegar tu aplicación Barberin en Railway, tanto el backend como el frontend.

## 🎯 Objetivos del Despliegue
- ✅ Backend API en Railway
- ✅ Frontend en Railway  
- ✅ Base de datos PostgreSQL en Railway
- ✅ Variables de entorno configuradas
- ✅ CORS configurado correctamente

## 🛠️ Preparación Local

### 1. Verificar que todo esté listo
```bash
# Verificar estructura del proyecto
ls -la

# Verificar que las dependencias estén instaladas
cd backend && npm list --depth=0
cd ../APP && npm list --depth=0
```

### 2. Construir el frontend
```bash
cd APP
npm run build
```

## 🌐 Despliegue en Railway

### Paso 1: Crear cuenta en Railway
1. Ve a [Railway.app](https://railway.app)
2. Inicia sesión con GitHub
3. Crea una nueva cuenta si es necesario

### Paso 2: Crear el proyecto Backend
1. **Crear nuevo proyecto:**
   - Click en "New Project"
   - Selecciona "Deploy from GitHub repo"
   - Conecta tu repositorio

2. **Configurar el servicio:**
   - Nombre: `barberin-backend`
   - Directorio: `backend/`
   - Framework: `Node.js`

3. **Variables de entorno:**
   ```env
   NODE_ENV=production
   PORT=3000
   DB_TYPE=postgresql
   DB_HOST=${DATABASE_URL}
   DB_USER=${DATABASE_USER}
   DB_PASSWORD=${DATABASE_PASSWORD}
   DB_NAME=${DATABASE_NAME}
   DB_PORT=5432
   SESSION_SECRET=tu_session_secret_muy_seguro_2024
   ALLOWED_ORIGINS=https://tu-frontend.railway.app
   ```

### Paso 3: Crear la base de datos PostgreSQL
1. **En el proyecto backend:**
   - Click en "New"
   - Selecciona "Database" → "PostgreSQL"
   - Railway generará automáticamente las variables de entorno

2. **Variables generadas automáticamente:**
   - `DATABASE_URL`
   - `DATABASE_USER`
   - `DATABASE_PASSWORD`
   - `DATABASE_NAME`

### Paso 4: Crear el proyecto Frontend
1. **Crear nuevo proyecto:**
   - Click en "New Project"
   - Selecciona "Deploy from GitHub repo"
   - Conecta el mismo repositorio

2. **Configurar el servicio:**
   - Nombre: `barberin-frontend`
   - Directorio: `APP/`
   - Framework: `Static Site`

3. **Variables de entorno:**
   ```env
   VITE_API_URL=https://tu-backend.railway.app
   ```

### Paso 5: Configurar el dominio personalizado (opcional)
1. **Backend:**
   - Ve a "Settings" → "Domains"
   - Agrega tu dominio personalizado

2. **Frontend:**
   - Ve a "Settings" → "Domains"
   - Agrega tu dominio personalizado

## 🔧 Configuración Post-Despliegue

### 1. Verificar que el backend funcione
```bash
# Health check
curl https://tu-backend.railway.app/health

# Respuesta esperada:
{
  "status": "OK",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "service": "BARBERIN API"
}
```

### 2. Verificar que el frontend funcione
- Abre la URL del frontend en tu navegador
- Verifica que se conecte al backend
- Revisa la consola del navegador para errores

### 3. Configurar CORS
- Asegúrate de que `ALLOWED_ORIGINS` incluya la URL del frontend
- Verifica que las cookies de sesión funcionen

## 🚨 Solución de Problemas Comunes

### Error: "Cannot find module"
- **Solución:** Verifica que `package.json` esté en el directorio correcto
- **Solución:** Asegúrate de que `npm install` se ejecute durante el build

### Error: "Database connection failed"
- **Solución:** Verifica las variables de entorno de la base de datos
- **Solución:** Asegúrate de que `DB_TYPE` esté configurado correctamente

### Error: "CORS policy"
- **Solución:** Verifica `ALLOWED_ORIGINS` en las variables de entorno
- **Solución:** Asegúrate de que incluya la URL del frontend

### Error: "Port already in use"
- **Solución:** Railway asigna automáticamente el puerto
- **Solución:** Usa `process.env.PORT` en tu código

## 📊 Monitoreo y Logs

### 1. Ver logs en tiempo real
- Ve a tu servicio en Railway
- Click en "Deployments" → "Latest"
- Click en "View Logs"

### 2. Métricas importantes
- **Uptime:** Debe ser 99%+
- **Response time:** Debe ser <500ms
- **Error rate:** Debe ser <1%

### 3. Alertas
- Configura alertas para downtime
- Configura alertas para errores 5xx

## 🔄 Actualizaciones y Re-despliegue

### 1. Despliegue automático
- Railway se conecta automáticamente a tu repositorio
- Cada push a `main` dispara un nuevo despliegue

### 2. Despliegue manual
- Ve a tu servicio
- Click en "Deploy" → "Deploy Now"

### 3. Rollback
- Ve a "Deployments"
- Selecciona una versión anterior
- Click en "Promote"

## 💰 Costos y Límites

### Plan Gratuito
- **Backend:** $5/mes por servicio
- **Base de datos:** $5/mes
- **Frontend:** $5/mes
- **Total:** ~$15/mes

### Plan Pro
- **Backend:** $20/mes por servicio
- **Base de datos:** $20/mes
- **Frontend:** $20/mes
- **Total:** ~$60/mes

## 🎉 ¡Listo!
Tu aplicación Barberin ahora está desplegada en Railway y lista para usar en producción.

### URLs finales:
- **Frontend:** `https://tu-frontend.railway.app`
- **Backend:** `https://tu-backend.railway.app`
- **API Health:** `https://tu-backend.railway.app/health`

### Próximos pasos:
1. Configurar dominio personalizado
2. Configurar SSL/HTTPS
3. Configurar monitoreo y alertas
4. Configurar backup de la base de datos
5. Configurar CI/CD pipeline

## 📞 Soporte
- **Railway Docs:** [docs.railway.app](https://docs.railway.app)
- **Railway Discord:** [discord.gg/railway](https://discord.gg/railway)
- **GitHub Issues:** Reporta problemas en tu repositorio
