import { FETCH_REPOS, TOGGLE_BOOKMARK } from "../actions/repoAction";

const initialState ={
    items:[],
   bookmark:[]
}

export default function(state=initialState,action){

    switch(action.type){
        case FETCH_REPOS:
            return{
                ...state,
                items:action.payload
     
           }
           case TOGGLE_BOOKMARK:
               //add or remove from bookmark
              const index = state.bookmark.findIndex(repo=>repo.url===
                action.payload);
              
              if (index>=0){
                  //item exists in bookmark
                  const bookmark=[...state.bookmark];
                 bookmark.splice(index,1);
                  return {
                      ...state,
                     bookmark
                  }

              }else{
                  //item does not exist in bookmark
                  const repo=state.items.items.find(repo=>repo.url===action.payload);
                  return{
                    ...state,
                   bookmark:state.bookmark.concat(repo)
                }
 
              }
    }
  
    return state;
}