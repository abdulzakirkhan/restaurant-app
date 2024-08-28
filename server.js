const express=require("express")
const cors=require("cors")
const morgan=require("morgan")
const colors=require("colors")
const dotenv=require("dotenv")



// dotenv configuration
dotenv.config();


// rest object
const app=express()

// middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'))


app.get("/",(req,res) => {
    res.send(`<h1>Hello world this is abdul zakir from pakistan</h1>`)
})

const PORT=process.env.PORT || 3000;

app.listen(PORT,() => {
    console.log(`Server Running on ${PORT}`.magenta)
})