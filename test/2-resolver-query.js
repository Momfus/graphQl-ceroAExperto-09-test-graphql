'use strict';

const EasyGraphQLTester = require('easygraphql-tester');
const fs = require('fs');
const path = require('path');
const resolvers = require('./mocks/resolvers/query').resolverQueries;
const expect = require('chai').expect;

const apiSchema = fs.readFileSync(
  path.join(__dirname, './../src/schema', 'schema.graphql'),
  'utf8'
);

describe("Testing Resolvers - Type Root - Query", () => {

    let tester;
    before( function() {

        tester = new EasyGraphQLTester( apiSchema, resolvers );

    });

    // hello
    it("Comprobar que 'hello' devuelve correcto", async() => { // Necesita ser asíncrona por el tipo de test a realizar
    
        const query = `
        { 
            hello 
        }`
        const result = await tester.graphql(query, undefined, undefined, {});
        console.log(result)

        expect(result.data.hello).to.be.a('string');
        expect(result.data.hello).to.equal('Hello Momfus!!');

    });


    // helloWithName
    it("Comprobar que 'helloWithName' devuelve correcto", async() => { // Necesita ser asíncrona por el tipo de test a realizar
    
        // el nombre de la query puede ser cualquier cosa
        const query = `
        query hhh($name: String!){
            helloWithName(name: $name)
        }`;
        const result = await tester.graphql(query, undefined, undefined, {name: 'Arboleo'});

        expect(result.data.helloWithName).to.be.a('string');
        expect(result.data.helloWithName).to.equal('Hello Arboleo!!');

    });
    
    // helloToGraphQLCourse
    it("Comprobar que 'helloToGraphQLCourse' devuelve correcto", async() => { // Necesita ser asíncrona por el tipo de test a realizar
    
        // el nombre de la query puede ser cualquier cosa
        const query = `
        {
            helloToGraphQLCourse
        }`;

        const result = await tester.graphql(query, undefined, undefined, {});

        expect(result.data.helloToGraphQLCourse).to.be.a('string');
        expect(result.data.helloToGraphQLCourse).to.equal('Bienvenido al Curso de GraphQL');
        expect(result.data.helloToGraphQLCourse).not.to.equal('Hola');

    });



});