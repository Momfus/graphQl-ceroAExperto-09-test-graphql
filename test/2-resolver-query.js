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

});