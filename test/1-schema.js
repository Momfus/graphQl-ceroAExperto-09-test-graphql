//  Uando easyGraphQl para determinar el testing en graphql: https://github.com/EasyGraphQL/easygraphql-tester

'use strict';

const EasyGraphQLTester = require('easygraphql-tester');
const fs = require('fs');
const path = require('path');

const apiSchema = fs.readFileSync(
  path.join(__dirname, './../src/schema', 'schema.graphql'),
  'utf8'
);

// Ejecutar con npm run test (especificado en package.json)

// const tester = new EasyGraphQLTester(apiSchema);

// Definición de las pruebas
describe('Test Schema GraphQL', () => {
  let tester;

  before(function () {
    // runs once before the first test in this block
    tester = new EasyGraphQLTester(apiSchema);
  });

  describe('Type Root: Query ', () => {

    it("Llamada 'hello' válida ", () => {
      const query = `
                {
                    hello
                }
            `;
            /** extraido de la documentación de Mocha
             * Validate that the query mutation is valid or not.
             * @param isValid { Boolean } - It will say if the Query/Mutation is valid or not.
             * @param query - The Query/Mutation to test.
             * @param args - In case it is a mutation, it will the input type (los argumentos)
             */
            tester.test( true, query, {} );
    });

    it("Llamada 'hello' inválida ", () => {
        const query = `
                  {
                      hello {
                          id
                          name
                      }
                  }
              `;

              tester.test( false, query, {} ); // SE espera que la prueba sea fallida (ya que hello no tiene atributos id y name)
    });

  });

  describe('Type Root: Mutation ', () => {});

  /*
    after(function() {
        // runs once after the last test in this block
    });
    */

  /*
    beforeEach(function() {
        // runs before each test in this block
    });
    */

  /*
    afterEach(function() {
        // runs after each test in this block
    });
    */

  // test cases
});
