Redux Middleware/Async/Thunk: The complete Guide
https://www.youtube.com/watch?v=qA6oyQQTJ3I

//Middleware - a function returns another function
const myLogger = (store) => {
    return (next) => {
        return (action) => {        //action object
            console.log("Middleware Run");
            return next(action);     //this step is import to connect the middleware
        }
    }
}
const store = createStore(counterReducer, appliMiddleware(mylogger));  //middlware takes place before reducer

//shorter middleware
const myLogger = store => next => action => {
    console.log("Middleware Run");
    return next(action);         //always call next function
}
const store = createStore(counterReducer, appliMiddleware(mylogger)); 

//add a second middleware
const secondMiddleware = store => next => action => {
    console.log("Middleware Run");
    return next(action);         //always call next function
}
const store = createStore(counterReducer, appliMiddleware(mylogger, secondMiddleware)); //order is important 

//add a third middleware
const capAtTen = store => next => action => {
    console.log(store)  //store has 2 function, dispatch and getState
    if (store.getState() >= 10){
     return next({type: "DECREMENT"})   
    }
    next(action);
}
const store = createStore(counterReducer, appliMiddleware(mylogger, secondMiddleware, capAtTen));


//Async
//actions must be plain objects, use custom middleware for async actions
// - action creators can only return plain javascript objects with a type property
// - the action will get sent to the reducer before the data is fetched from the API

//Thunk
//it allows our action object returns an object or a function

//index.js
const store = createStore(counterReducer, appliMiddleware(thunk));  //specify all the middleware you use

//action.js
//WRONG - async await works differently here
// export const fetchPosts = async () => {     //async await because Axios fetching data might take some time
//     const response = await Axios.get("URL")       //store the data
    
//     return {      //has to return an action object, can not return anything else
//         type:"FETCH_POST",
//         payload: response.data
//     } 
// }
//CORRECT
export const fetchPosts = () => {   //only care what action creator returns (outter function), not the inner function
    return async (dispatch, getState) => {       //getState is to get what in our state
        const response = await Axios.get("URL")
        console.log(response.data);      //print out the data we get 
        dispatch({
            type:"FETCH_POST",
            payload: response.data
        })
    }   //since we return a seperate function, it allows us to use async await function
}       //since we have thunk, so we can return a function instead of just an object

//reducer.js - apply the logics we needs to
const initState = []
const postsReducer = (state = initState, action) => {
    switch(action.type){
        case "FETCH_POST":
            return action.payload
        default:
            return state;
    }
}

//Post.jsx
const Posts = () => {
   const dispatch = useDispatch()
   const posts = useSelector((state) => state);
    
   useEffect(()=> {
       dispatch(fetchPosts())
   },[])
    
    return (
        <div>
            {posts.map((el) => {
            return <h3> {el.title} </h3>;
            })}
        </div>
    )
}


//Loading & Error Handling
// - make use of the request/success/failure pattern to handle loading and error state
// - sperate action for request, success and failure
//reducer.js
const initState = {
    items: [],
    loading: false,
    error: null,
};

const postsReducer = (state = initState, action) => {
    switch(action.type){
        case "FETCH_POST_REUQUEST":
            return {
                ...state.
                loading: true,
                error: null,
            }
        case "FETCH_POST_SUCCESS":
            return {
                ...state.
                loading: false,
                items: action.payload,
            }
        case "FETCH_POST_REUQUEST":
            return {
                ...state.
                loading: false,
                error: action.error,
                items: [],
            }
        default:
            return state;
    }
}
