const express = require('express');
const path = require('path');


const app = express();

const PORT = process.env.PORT || 3000;


let users = [
    {
        id: 0,
        name: "Erick Lucas",
        phone: "(22) 99942-2502"
    },
    {
        id: 4,
        name: "Lucas",
        phone: "(22) 91932-2132"
    }, {
        id: 2,
        name: "Igor",
        phone: "(22) 91932-4592"
    }
]


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')


app.get('/', (req, res) =>{

    res.render('user', {users: users});
})
app.get('/about', (req, res )=>{
    res.render('about')
})

app.listen(PORT, ()=>{
    console.log(`Server Escutando na Porta ${PORT}`)
})