import express from 'express';
import session from 'express-session';

const app = express();
const PORT = 3000;

app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));
app.set('view engine','ejs');


app.get('/',(req,res)=>{
  res.render('login.ejs');
})

app.get('/regis', (req,res)=>{
  res.render('regis.ejs')
})

app.get('/login',(req,res)=>{
  res.render('login.ejs');
})

app.get('/dashboard',(req,res)=>{
  res.render('index.ejs');
})

app.listen(PORT,()=>console.log(`server berjalan di port ${PORT}`));

