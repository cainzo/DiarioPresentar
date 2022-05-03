# RollingPost 
### admin
Log-in as an admin.
 - mail:  admin@admin.com
 - pass: admin
Multiple CRUD operations : Register | Login | Adm Perfil : NEWS crud Categories crud.
### Librerias necesarias para correr el proyecto :
#### Front End
- npm install react-bootstrap
- npm i react-router-dom
- npm install axios
- npm install @mui/icons-material
- npm install @mui/material
- npm install sweetalert2
- npm i bcryptjs
- npm install draft-js draftjs-to-html
- npm i slate slate-react
- npm i react-draft-wysiwyg
- npm i @emailjs/browser
- npm install node-polyfill-webpack-plugin
#### BackEnd
- npm install mongoose --save
- npm i jsonwebtoken
- npm i dotenv
- npm i express
- npm i nodemon
- npm i validator
- npm i bcryptjs


# Descripcion
  
#### Pagina principal
Pagina que muestra las ultimas noticias de todas las categorias en cards.
#### Por categoria
Muestra las ultimas noticias de la categoria seleccionada
#### Login 
Pagina para logearse y link para registrarse. Usamos JWT solo para devolver un token expirable en 1 dia
#### Registro
Pagina para registrarse
        
#### Perfil
La pagina de perfil es el perfil de admin y solo es accesible para los usuarios que son admin.
Dentro de esta pagina tenemos una tabla de noticias y de usuarios. La tabla de usuarios es solo para mostrar los usuarios. 
La tabla de noticias muentra todas las noticias ordenas desde mas nuevas a mas viejas con la opcion de filtrarlas por categorias. Tambien 
tine los botones para borrar y editar la noticia.     
Ambas tablas estan paginadas por el back-end cada pagina solo obtiene 5 usuarios o noticias a la vez. Con botones de navegacion dinamicos.

###### Sidebar:

En el perfil de adm tambien tenemos una sidebar que actua como menu para acceder a crear una nueva noticia  tambien a los crud de categorias , volver a pagina principal del perfil y tambien deslogear.

#### Autores
- Gonzalo Cainzo
