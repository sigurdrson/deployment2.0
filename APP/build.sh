#!/bin/bash

# Script de construcción para Railway
echo "🚀 Construyendo aplicación frontend..."

# Instalar dependencias
npm install

# Construir para producción
npm run build

# Verificar que la construcción fue exitosa
if [ -d "dist" ]; then
    echo "✅ Construcción exitosa!"
    echo "📁 Contenido del directorio dist:"
    ls -la dist/
else
    echo "❌ Error en la construcción"
    exit 1
fi
