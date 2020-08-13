    Nota: eslint puedes ubicarlos en los node modules como haces en el pakage.json o crear un archivo de configuracion como el de .eslintrc

# PROTFOLIO WEB FR

        App de react basica luego pasar a gatsby o next.js usaremos para este caso react basico con el context y lazy load y compression de img optimizando lo mejor posible el peso de la pagina y evitar renderizados inecesarios en ract con react.memo.

        Nota: React.memo y useMemo son diferentes ten cuidado.

        las imagenes deben ser .webp o de ser posible no usar imagen si el navegador puede hacerlo(svg como opcion). 

        SEO , accesibilidad y fuzyload

    Nota: podemos auto completar los cominos o las rutas con las cuales nuestros archivos son resolvidos por medio de webpack resolve y alias el. Para que sirve esto ?, ejemplo en el caso de que un archivo sea movido a otra carpeta del proyecto tendrias que ir y cambiar la direccion de sus archivos de forma automatica con este metodo podemos indicarle que empiece la busqueda desde src para que simpre los encuentre mas info en la documentacion: https://webpack.js.org/configuration/resolve/

    otra forma es crear un archivo jsconfig.js en src en el cual creamos un alias pero para el compilador el cual le podemos pasar opciones como estas pero las de webpack son mas poderosas se puede hace mucho mas. 

    1.- inicializamos el proyecto con:

        npm init -y && git init, luego podemos especificar el nombre del proyecto y lo demas tambien podriamos usar yarn u otro.

        procedemos a crear nuestro .gitignore para lo principal node modules carpeta dist, etc depende del proyecto.

        y creamos las principales carpetas que sabemos que vamos a utilizar como componentes paginas contenedores,etc.

    2.- Instalamos las principales dependencias de este proyecto

        - npm i react react-dom
        - npm i webpack webpack-cli webpack-dev-server html-webpack-plugin -D
        - Ahora creamos nuestros scripts para build y develop en package.json utilizando webpack para construir nuestra app.

    3.- Creamos y configuramos nuestros primeros archivos index.js app.js index.html, para ver si nuestro app compila.

        Nota: para este paso debemos confugurar webpack en webpack.config.js. Para ello tambien debemos instalar y configurar babel y loader de webpack y especificar el output de babel.

        - npm i @babel/core @babel/preset-env @babel/preset-react babel-loader -D
        - Ahora podemos hacer un npm run dev para ver nuestra app podemos pasar un flag en packge.json para abrir de forma automarica el navegador web de preferencia.

        - RECUERDA: webpack-dev-server crea archivos en memoria ram para mayor velocidad al construir la aplicacion en modo de desarrollo, tambien el orden de los plugins de webpack en especial los loader puede generar errores, no es en todos los casos.

        WEBPACK necesitas comprender el:
            
            - imput o punto de netrada de la app.
            - output o punto de salida.
            - loaders
            - plugins
        
        - Nota: si alo que puedas hacer directamente por script de npm que es mas facil que webpack deberias usarlo asi ya que te permitira manejarte mejor si existe una actualizacion,etc. Recuerda que hay otras opciones a parte de webpack esta Rolan[para cosas mas avanzadas], u parcel[para hacer todo mas sencillo] o incluso next.js que ya integra un numero de ventajas como ssr y static,etc.    