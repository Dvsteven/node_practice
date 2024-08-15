// //servidor
import express from 'express';
import morgan from 'morgan';
import { engine } from 'express-handlebars';
import {join, dirname} from 'path';
import { fileURLToPath } from 'url';

// //Initialitation
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
// //settings
app.set('port', process.env.PORT || 4000);
app.set('views',join(__dirname, 'views'));
//motor de plantills
app.engine('.hbs',engine({
    defaultLayout: 'main',
    layoutsDir: join(app.get('views'), 'layouts'),
    partialsDir: join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

// //middlewares
//ver epeticiones http
app.use(morgan('dev'));
//interfaces y formularios
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

// //Routes
//envio de json -> enviar un render
// app.get('/', (req, res) =>{
//     res.json({"message": "Hola"})
// })

//esto renderiza inde.hbs
app.get('/', (req, res) =>{
    res.render('index')
})


// //public files
app.use(express.static(join(__dirname, 'public')));


// //run server
app.listen(app.get('port'), ()=>
    console.log('listening from port: ', app.get('port')));