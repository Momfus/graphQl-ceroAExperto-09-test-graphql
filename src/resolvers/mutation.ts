import { IResolvers } from "graphql-tools";
import { LIST } from "./resolversMap";

const mutation: IResolvers = {
    Mutation: {
        add(_: void, { value }: any) {
            LIST.push(value);
            return LIST;
        },
        removeLast() {
            (LIST.length > 0 ) ? LIST.pop(): ''; // Si tiene algun elemento quitarlo, sino devolver nada
            return LIST;
        }
    }
}

export default mutation;