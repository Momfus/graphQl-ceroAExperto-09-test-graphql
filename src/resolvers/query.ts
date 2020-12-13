import { IResolvers } from 'graphql-tools';
import { LIST } from "./resolversMap";


const query: IResolvers = {
    Query: {
        hello(): string {
            return 'Hello world!!';
        },
        helloWithName(_: void, args): string {
            return `Hello ${args.name}!!`;
        },
        helloToGraphQLCourse(): string {
            return 'Hello to GraphQL Course!!';
        },
        list() {
            return LIST;
        }
    }
};

export default query;