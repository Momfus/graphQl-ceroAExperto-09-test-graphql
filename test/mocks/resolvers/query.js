// Se arman los resolvers
const hello = () => {
    return 'Hello Momfus!!';
}

// Los query a resolver
const resolverQueries = {
    Query:  {
        hello
    }
}

module.exports = {
    resolverQueries
}