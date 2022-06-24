const express=require('express')
const {graphqlHTTP} =require('express-graphql')
const {buildSchema}=require('graphql')
const app=express();
const port=7000;

//graphql shcema
var schema=buildSchema(`
type Query{
    message:String
}
`);


var root={
    message:()=>'Hello world'
};



app.use('/graphql',graphqlHTTP({
    
    schema:schema,
    rootValue:root,
    graphiql:true,
}));
app.listen(port,()=>
{
    console.log(`Express Graphql server now Running App  on port ${port}`)
})
