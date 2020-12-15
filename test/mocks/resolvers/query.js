const LIST = require('./../data').LIST;

// Se arman los resolvers
const hello = () => {
    return 'Hello Momfus!!';
}

const helloWithName = (_, args) => {
    return `Hello ${args.name}!!`;
}

const helloToGraphQLCourse = () => {
    return 'Bienvenido al Curso de GraphQL';
}

const list = () => {
    return LIST;
}

// Los query a resolver
const resolverQueries = {
    Query:  {
        hello,
        helloWithName,
        helloToGraphQLCourse,
        list
    }
}

module.exports = {
    resolverQueries
}