# Lifecycle Methods ( Class Component )

## Mounting :
When an instance of a component is being created and inserted into the DOM.

## Updating :
When a component is being re-render as a result of changes to either its props or state 

## Unmounting : 
When a component is being removed from the DOM



## Mounting :
1. constructor                      [ only in mounting ]
2. static getDerivedStateFromProps
3. render   
4. componentDidMount                [ only in mounting ]

## Updating :
1. static getDerivedStateFromProps
2. shouldComponentUpdate
3. render
4. getSnapshotBeforeUpdate
5. componentDidUpdate

## Unmounting : 
1. componentWillUnmount




# Mouting Phase
### Constructor
- A special type of function that will get called whenever a new component is created.
- Used to initialize states & Binding events.
- Not perform, Http req.

### static getDerivedStateFromProps (rarely used)
- When the state of component depends on change in props.
- set the state
- Not perform, Http req.


### render
- Only Required Method
- Return JSX
- Children component Lifecycle methods also get execute
- Not perform, Http req.


### componentDidMount
- Invoked immediately after a component and its child components have been rendered to DOM
- Perform any AJAX call to load data.



# Updating Phase
### static getDerivedStateFromProps
- Method is called every time a component is re-rendered.
- set the state
- Not perform, Http req.

### shouldComponentUpdate
- Dictates if the component should re-render or not.
- Perfomance Optimization
- Not perform, Http req.

### Render
- Only Required Method
- Return JSX
- Not perform, Http req.

### getSnapshotBeforeUpdate()    [Rarely Used]
- Called right before the changes from the virtual DOM are to be reflected in the DOM.
- Capture some Information From DOM

### componentDidUpdate()
- called after the render is finished in the re-render Cycles.
<!-- - Cause side effects -->

 


### Unmounting Phase ( LAST WISH )
- Method is invoked immediately before a component is unmounted and destroyed.
- Cancelling any network req. , also invalidating timers.
- DO NOT CALL THE SetSTATE METHOD