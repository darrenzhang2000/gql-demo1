//server setup
var express = require('express')
const graphqlHTTP = require('graphql-express')

app = express()

//gql setup
//use this endpoint to handle gql requests
app.use('./graphql', graphqlHTTP({
    schema,
    graphiql
}))

app.listen(4000, ()=>{
    console.log('listening at port 4000')
})