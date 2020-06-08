import { InMemoryCache } from "apollo-cache-inmemory";
export default function(context){
  return {
  		httpLinkOptions: {
    		uri: 'https://bikmay-recipes.herokuapp.com/v1/graphql',
    		credentials: 'same-origin'
  		},
  		cache: new InMemoryCache(),
	    wsEndpoint: 'ws://bikmay-recipes.herokuapp.com/v1/graphql',
  	}
}