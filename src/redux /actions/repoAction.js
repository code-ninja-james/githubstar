export const FETCH_REPOS='FETCH_REPOS';
export const TOGGLE_BOOKMARK ='TOGGLE_BOOKMARK';

export const fetchRepos=()=>{
    return async dispatch => {

        //logic to fetch data
      const result= await  fetch('https://api.github.com/search/repositories?q=stars:%3E1&sort=stars');
      
      const resultData=await result.json();

        dispatch({
           type:FETCH_REPOS,
            payload:resultData
        });
       
    }
}
export const toogleBookmark=url=>{
return{
    type:TOGGLE_BOOKMARK,
    payload:url
}
}
