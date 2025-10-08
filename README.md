# 🕹️ Tienda NextUp Games
Aplicación web sencilla desarrollada con React y Vite.js que simula un carrito de compras básico. Permite a los usuarios explorar una lista de juegos y añadirlos a la bolsa de compras.

## 🎬 Demo
Puedes ver la aplicación en funcionamiento aquí:
[**Github Pages**](https://nisiara.github.io/dfe1_exp3_s3_npm/)


## ✨ Características Principales
* **Catálogo de Juegos**: Explora una selección de títulos con información relevante como título, plataforma, descripción y precios.
* **Filtro**: El usuario puede elegir que tipo de juego desea visualizar por los criterios: 'Más buscados', 'Destacados', 'Más vendidos' 
* **Diseño Responsive**: La interfaz se adapta perfectamente a cualquier dispositivo (móvil, tablet, escritorio).
* **Selección de vista**: El catálogo tiene dos modos de visualización: Grilla y Columna.
* **Emulación flujo de compra**: Permite a los usuarios agregar juegos a la bolsa de compras, este calcula y muestra el monto total a pagar sumando los precios de todos los productos. También se pueden eliminar de la bolsa.
* **Botón 'Agregar a la bolsa' sensible al estado**: Una vez añadido un juego a la bolsa, el botón cambia de mensaje para mejorar la usabilidad.
* **Renderizado Condicional**: Dependiendo de los distintos estados que maneja la aplicación, esta muestra distintas vistas,componentes y/o clases.


## 🛠️ Tecnologías Utilizadas

* **React**: Biblioteca de JavaScript para construir interfaces de usuario.
* **Vite.js**: Herramienta de construcción rápida y ligera.
* **NPM**: Como gestor de paquetes y bundler para un desarrollo eficiente.
* **JSX/Sass**: Estructura y estilos.
* **Bootstrap**: Libreria CSS


## ⚙️ Instalación
Sigue estos pasos para obtener una copia local del proyecto en funcionamiento.

### Prerrequisitos
- Nodejs
- NPM


### Pasos

**1. Clona el repositorio:**
  ```bash
  git clone https://github.com/nisiara/dfe1_exp3_s3_npm.git
  cd dfe1_exp3_s3_npm
  ```

**2. Instala las dependencias usando NPM:**
```bash
npm install
```

**3. Ejecuta el proyecto en modo desarrollo:**
```bash
npm run dev
```


El servidor de desarrollo se iniciará y la aplicación estará disponible en `http://localhost:5173/` (o el puerto que indique Vite).


## 🚀 Ejecución
```bash
npm run build
```
```bash
npm run deploy
```


## ✍️ Autor
Nicolás Silva A. | Desarrollo Front End 1




