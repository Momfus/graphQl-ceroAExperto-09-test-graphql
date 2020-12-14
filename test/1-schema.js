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

  // Query
  describe('Type Root: Query ', () => {

    // hello
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

    // helloWithName
    it("Llamada 'helloWithName' válida ", () => {
        const query = `
                query helloWithName($name: String!) {
                    helloWithName(name: $name)
                }
              `;
              tester.test( true, query, {name: "Momfus"} );
      });
  
      it("Llamada 'helloWithName' inválida ", () => {
            const query = `
                    query helloWithName($name: String!) {
                        helloWithName(name: $name)
                    }
                    `;
  
                tester.test( false, query, {} ); 
      });
  
      // helloToGraphQLCourse
      it("Llamada 'helloToGraphQLCourse' válida ", () => {
        const query = `
                  {
                    helloToGraphQLCourse
                  }
              `;

              tester.test( true, query, {} );
      });
  
      it("Llamada 'helloToGraphQLCourse' inválida ", () => {
          const query = `
                    {
                        helloToGraphQLCourse {
                            id
                            name
                        }
                    }
                `;
  
                tester.test( false, query, {} );
      });
  
      // list
      it("Llamada 'list' válida ", () => {
        const query = `
                  {
                    list
                  }
              `;

              tester.test( true, query, {} );
      });
  
      it("Llamada 'list' inválida ", () => {
          const query = `
                    {
                        list {
                            id
                            name
                        }
                    }
                `;
  
                tester.test( false, query, {} ); 
      });


  });

  // Mutation
  describe('Type Root: Mutation ', () => {

    // list
    it("Llamada 'add' válida ", () => {
        const query = `
                mutation addElement($value: String!) {
                    add(value: $value)
                }
            `;

        tester.test( true, query, { value: "Momfus" } );
    });

    it("Llamada 'add' inválida ", () => {
        const query = `
                query addElement($value: String!) {
                    add(value: $value)
                }
            `;

        tester.test( false, query, {} ); 
    });

    // RemoveLast
    it("Llamada 'removeLast' válida ", () => {
        const query = `
                mutation {
                    removeLast
                }
            `;

        tester.test( true, query, {} );
    });

    it("Llamada 'removeLast' inválida ", () => {
        const query = `
                query {
                    removeLast
                }
            `;

        tester.test( false, query, {} ); 
    });

  });

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
