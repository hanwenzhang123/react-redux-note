Diving Deeper into Redux
A closer look
- handling async tasks with redux
- where to put our code
- the redux devtools

//Side Effects, Asyns Tasks & Redux
Reducer must be pure, side effect free, synchronous functions!!!
Input (Old State + Action) -> Output (New State)

Where should side-effect and async tasks be executed?
- Inside the components (e.g. useEffect())
- Inside the action creator
