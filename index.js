const express = require("express");
const format = require('date-format');
const app = express();
const YAML = require('yamljs');


//Swagger Docs related

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = YAML.load('./swagger.yaml')
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//Port

const PORT = 4000 || process.env.PORT;

app.get("/", (req, res) => {
  res.status(200).send("<h1>Hello World aws</h1>");
});




app.get("/api/v1/instagram", (req, res) => {
  const instaSocial = {
    username: "Ritesh",
    followers: 66,
    follows: 70,
    date: format('dd[MM] - hh:mm:ss.SSS', new Date()),
  };

  res.status(200).json( instaSocial );
});

app.get("/api/v1/facebook", (req, res)=>{
    const fbSocial = {
        username: "Ritesh",
        followers: 68,
        follows: 100,
        date: format('dd[MM] - hh:mm:ss.SSS', new Date()),
      };
    
      res.status(200).json( fbSocial );
})


app.get("/api/v1/linkedin", (req, res)=>{
    const linkedSocial = {
        username: "Ritesh Benjwal",
        followers: 680,
        follows: 100,
        date: format('dd-MM-hh:mm:ss.SSS', new Date()),
      };
    
      res.status(200).json( linkedSocial );
})


app.get("/api/v1/:token",(req,res)=>{
    console.log(req.params.token)
    res.status(200).json({
        param: req.params.token
    })
})


app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
