const express = require("express")
const app = express()
const pokemon = require("./models/pokemon.js")
const port = 3000
const methodOverride = require("method-override")



app.use(express.urlencoded({ extended: true}))
app.use(methodOverride("_method"))
app.use("/public", express.static('public'));

app.listen(port)
console.log("listening")

// Your app should use RESTful routes:

// Index
// GET /pokemon
app.get("/pokemon", (req,res) => {
    res.render("index.ejs", {pokemon:pokemon})
})

// New
// GET /pokemon/new

app.get("/pokemon/new", (req,res) => {
    res.render("new.ejs")
    
    })

    // Destroy
// DELETE /pokemon/:id

app.delete("/pokemon/:id", (req, res) => {
    pokemon.splice(req.params.id, 1) /
    res.redirect("/pokemon") 
  })

// Update
// PUT /pokemon/:id

app.put("/pokemon/:id/", (req, res) => {
    pokemon[req.params.id] = req.body 
    res.redirect("/pokemon") 
  })

// Create
// POST /pokemon

app.post("/pokemon", (req, res) => {
    pokemon.push(req.body)
    res.redirect("/pokemon") 
  
  })

  // Edit
// GET /pokemon/:id/edit

app.get("/pokemon/:id/edit", (req,res) => {
        res.render("edit.ejs", {
        
    pokemon: pokemon[req.params.id], 
      index: req.params.id, 
    }
    )
    })

// Show
// GET /pokemon/:id
app.get("/pokemon/:id", (req,res) => {
   res.render("show.ejs", { pokemon:pokemon[req.params.id]})
})










  
