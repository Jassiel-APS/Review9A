# 📱 Review9A

Proyecto de React Native con Expo, creado como parte del curso de Mireles en 9º Cuatrimestre (UTEZ). Este proyecto incluye soporte para ejecución en Android, iOS (mediante Expo Go), y Web.

---

## 🚀 Requisitos Previos

- Node.js (v18 o superior recomendado)
- npm (v10 o superior recomendado)
- Expo CLI (si no lo tienes):

```bash
npm install -g expo-cli
```

---

## 📦 Instalación

Clona el repositorio y entra al directorio del proyecto:

```bash
git clone https://github.com/tu-usuario/repo-review9a.git
cd Review9A
```

Instala las dependencias del proyecto:

```bash
npm install
```

Instala las dependencias necesarias para soporte web:

```bash
npx expo install react-dom react-native-web @expo/metro-runtime
```

---

### 🎨 Librería de Componentes UI (React Native Elements)

Este proyecto utiliza [React Native Elements](https://reactnativeelements.com/) para la interfaz de usuario.

Ya están instalados los siguientes paquetes:

```bash
npm install @rneui/themed @rneui/base
```

Para más detalles sobre cómo usar los componentes, consulta la [documentación oficial](https://reactnativeelements.com/docs/).

---

## ▶️ Ejecutar el Proyecto

### 📱 Android / iOS (con Expo Go)

```bash
npx expo start
```

> Se abrirá Expo Developer Tools en el navegador. Desde ahí puedes escanear el código QR con la app **Expo Go** en tu teléfono.

### 🌐 Web

```bash
npm run web
```

> Si no instalaste los paquetes para web, usa el comando anterior para agregarlos.

---

## 📁 Estructura del Proyecto

```
Review9A/
├── App.js
├── package.json
├── node_modules/
└── ...
```

---

## ⚠️ Notas

- Algunas dependencias podrían marcar advertencias de `deprecated` durante la instalación. Por ahora, no afectan la ejecución del proyecto.
- Si deseas actualizar tu versión de `npm`, puedes usar:

```bash
npm install -g npm@latest
```

---

## 👨‍💻 Autor

Proyecto desarrollado por Jassiel Alejandro Peralta Santos  
9º Cuatrimestre - UTEZ  
Profesor: Mireles
