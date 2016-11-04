import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLList,
    GraphQLID
} from 'graphql';

export default new GraphQLObjectType({
    name: 'Show',
    fields: {
        id: {
            type: GraphQLInt
        },
        url: {
            type: GraphQLString
        },
        name: {
            type: GraphQLString
        },
        type: {
            type: GraphQLString
        },
        language: {
            type: GraphQLString
        },
        genres: {
            type: new GraphQLList(GraphQLString)
        },
        status: {
            type: GraphQLString
        },
        airstamp: {
            type: GraphQLString
        },
        runtime: {
            type: GraphQLInt
        },
        premiered: {
            type: GraphQLInt
        },
        weight: {
            type: GraphQLInt
        },
        summary: {
            type: GraphQLString
        },
        updated: {
            type: GraphQLInt
        },
    }
});
