import {
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLInt,
    GraphQLSchema
} from 'graphql';

import * as rp from 'request-promise';

import episodeType from './episode';
import showType from './show';

export const schema : GraphQLSchema =  new GraphQLSchema({

    query: new GraphQLObjectType({
        name: 'RootQueryType',
        fields: {
            episode: {
                type: episodeType,
                args: {
                    id: {
                        name: 'id',
                        type: new GraphQLNonNull(GraphQLInt)
                    }
                },
                resolve: (_, args) => {
                    return rp(`http://api.tvmaze.com/episodes/${args.id}`)
                        .then((res) => JSON.parse(res));
                }
            },
            show: {
                type: showType,
                args: {
                    id: {
                        name: 'id',
                        type: new GraphQLNonNull(GraphQLInt)
                    }
                },
                resolve: (_, args) => {
                    return rp(`http://api.tvmaze.com/shows/${args.id}`)
                        .then((res) => JSON.parse(res));
                }
            }
        }
    }),
});
