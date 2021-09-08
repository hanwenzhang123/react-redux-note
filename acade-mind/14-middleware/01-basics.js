Diving Deeper into Redux
A closer look
- handling async tasks with redux
- where to put our code
- the redux devtools

//Refresh Practice Code
https://github.com/academind/react-complete-guide-code/tree/19-advanced-redux/code/02-refresher-practice-finished

//Side Effects, Asyns Tasks & Redux
Reducer must be pure, side effect free, synchronous functions!!!
Input (Old State + Action) -> Output (New State)

Where should side-effect and async tasks be executed?
- Inside the components (e.g. useEffect())
- Inside the action creator

//Frontend Code Depends On Backend Code
//With Backend
Backend API  -|
    |     Does a lot of work (i.e. transforms data + store data)
    |     Send data & receive + use response(i.e. less code on the frontend, ahead of reducer)
Frontend React API  -|
//Without Backend
Backend API  -|
    |     Does NOT a lot of work (i.e. just stores incoming dataa)
    |     Transform data & send data (i.e. more code on the front-end, ahead of the reducer)
Frontend React API  -|
    

//Where to put our logic (code)? Where should our logic (code) go?
Fat Reducers vs Fat Components vs Fat Actions
- synchoronous, side-effect free code (i.e. data transformations)
    - prefer reducers
    - avoid action creatos or components
- async code or code with side-effects
    - prefer action creatos or components
    - avoid reducers
