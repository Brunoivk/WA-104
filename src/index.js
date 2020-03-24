import express from "express"
import studenti from "./studenti"

const app = express()
const port= 3000
console.log("Hello world u konzoli")

app.get('/studenti', (req, res) =>{
    console.log("Svi studenti : ");
    res.json(studenti)
  console.log(studenti)

}),
app.get('/studenti/first', (req, res) =>{
    
    console.log("Prvi student : ");
     let prvi = studenti[0];
     
    res.json(prvi)
     console.log(prvi);


}),
app.get('/studenti/last', (req, res) =>{
    console.log("Zadnji student : ");
    let zadnji = studenti[studenti.length - 1];
    
    res.json(zadnji)
    console.log(zadnji);
  

})

app.listen(port, () => console.log(`Slusam na portu ${port}!`))