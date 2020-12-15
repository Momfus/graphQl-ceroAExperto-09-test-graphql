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

// Los query a resolver
const resolverQueries = {
    Query:  {
        hello,
        helloWithName,
        helloToGraphQLCourse
    }
}

module.exports = {
    resolverQueries
}