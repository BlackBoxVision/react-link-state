#API

In these API docs, a **higher-order component (HOC)** refers to a function that accepts a single React component and returns a new React component.

**LinkState** helper is a function that return **higher-order component**:

```javascript
const hoc = withLinkState(['key1', 'key2', 'key3']);
const EnhancedComponent = hoc(BaseComponent);

// Same as
const EnhancedComponent = withLinkState(['key1', 'key2', 'key3'])(BaseComponent);
```

Also, another way to use it, it's as a **decorator**: 

```javascript
withLinkState(['key1', 'key2', 'key3'])
class BaseComponent extends React.Component { ... }
```

## TOC

* [Higher-order component](#higher-order-component)
  + [`withLinkState()`](#withlinkstate)
  
## Higher-order component

### `withLinkState()`

```javascript
withLinkState(stateKeys: Array<string>): HigherOrderComponent
```  

Accepts an Array that is mapped to generate the initialState of the HighOrderComponent. The HigherOrderComponent injects a set of helpers functions
to manage state updates and access specific values stored in the HigherOrderComponent's state. The functions injected are:

### `linkState()`

```javascript
linkState(key: String, callback: (value: Any) => Any): Object 
```  

### `updateState()`

```javascript
updateState(value: Object, callback: Void => Void): Void
```  

### `getState()`

```javascript
getState(): Object
```  

### `getValue()`

```javascript
getValue(key: String): Any
```  

