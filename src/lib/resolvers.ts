//import { QueryResolvers } from './type-defs.graphqls';
import { ResolverContext } from './with-apollo';

const Query: Required<QueryResolvers<ResolverContext>> = {
  viewer(_parent: any, _args: any, _context: any, _info: any) {
    return { id: String(1), name: 'Mr Formánek', status: 'cached' };
  },

  getRandom(_parent: any, _args: { max: any; }, _context: any, _info: any) {
    const { max } = _args;
    return Math.round(Math.random() * max);
  },
};

export default { Query };
