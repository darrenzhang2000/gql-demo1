const graphql = require('graphql')

const {
    GraphQLObjectType,
    GraphQLList,
    GraphQLInt,
    GraphQLID,
    GraphQLString
} = graphql
//dummy data
var hahitats = [
    {
        id: 1,
        cost: 100,
        type_: "fire",
        name: "Fire Habitat",
    },
    {
        id: 2,
        cost: 250,
        type_: "nature",
        name: "Nature Habitat",
    },
    {
        id: 3,
        cost: 500,
        type_: "earth",
        name: "Earth Habitat",
    }
]

var Monsters = [
    {
        id: 1,
        name: "Firesaur",
        traits: ["fire"],
        cost: "100"
    },
    {
        id: 2,
        name: "Treezard",
        traits: ["nature"],
        cost: "100"
    },
    {
        id: 3,
        name: "Greensaur",
        traits: ["nature", "fire"],
        cost: "100"
    },
]

//types
const Habitat = new GraphQLObjectType({
    name: "habitat",
    fields: ()  => ({
        id: { type: GraphQLID },
        name:{ type: GraphQLInt },
        cost:{ tyoe: GraphQLInt },
        traits: { type: GraphQLList }
    })
})

const Monster = new GraphQLObjectType({
    name: "monster",
    fields: () => ({
        id: { type: GraphQLID },
        cost: { type: GraphQLInt },
 