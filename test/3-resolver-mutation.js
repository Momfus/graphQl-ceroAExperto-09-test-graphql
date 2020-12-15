'use strict';

const EasyGraphQLTester = require('easygraphql-tester');
const fs = require('fs');
const path = require('path');

const LIST = require('./mocks/data').LIST;

const apiSchema = fs.readFileSync(
  path.join(__dirname, './../src/schema', 'schema.graphql'),
  'utf8'
);

const resolvers = require('./mocks/resolvers/mutation').resolversMutation;
const expect = require('chai').expect; // Para manejo de excepciones

describe("Testing Resolvers - Type Root - Mutation", () => {

    let tester;
    before( function() {

        tester = new EasyGraphQLTester( apiSchema, resolvers );

    });

    afterEach(async() => {
      // console.log('Se ejecuta despues del it')
      // const listLength = LIST.length;
      // console.log(LIST);
      // for( let i = 0; i < listLength, i++ ) {
      //   LIST.pop();
      // }
      // console.log(LIST);

    });

    it("Comprobar que 'add' devuelve correcto", async() => { // Necesita ser asíncrona por el tipo de test a realizar
      const query = `
        mutation addMutation($value: String!) {
          add(value: $value)
        }
      `;
    
        // Hacer el primer test
        // Primer elemento igual a Momfus
        const result = await tester.graphql( query, undefined, undefined, { value: 'Momfus' } );
        // console.log(result.data.add);

        expect(result.data.add[0]).to.equal("Momfus");
        expect(result.data.add).to.have.lengthOf(1);

        // Longitud igual a 1
        const result2 = await tester.graphql( query, undefined, undefined, { value: 'Hola' } );


        expect(result2.data.add[1]).to.equal("Hola");
        expect(result2.data.add).to.have.lengthOf(2);

        const result3 = await tester.graphql( query, undefined, undefined, { value: 'Adios' } );
        // console.log(result3.data.add);

        expect(result3.data.add[2]).to.equal("Adios");
        expect( typeof(result3.data.add[2]) ).to.equal('string');
        expect(result3.data.add).to.have.lengthOf(3);


    });

    it("Comprobar que 'removeLast' devuelve correcto", async() => { // Necesita ser asíncrona por el tipo de test a realizar
      
      console.log(LIST);
      
      const query = `
        mutation {
          removeLast
        }
      `;
    
        // Hacer el primer test
        expect(LIST).to.have.lengthOf(3);
        
        // Hacer primer test
        const result = await tester.graphql( query, undefined, undefined, {} );
        console.log(result.data.removeLast);

        expect(result.data.removeLast).to.have.lengthOf(2);

        expect(result.data.removeLast[0]).to.equal("Momfus");
        expect(result.data.removeLast[1]).to.equal("Hola");

        const result2 = await tester.graphql( query, undefined, undefined, {} );
        expect(result2.data.removeLast).to.have.lengthOf(1);



    });

});