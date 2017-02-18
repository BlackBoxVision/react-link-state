#API

In these API docs, a **higher-order component (HOC)** refers to a function that accepts a single React component and returns a new React component.

**withLinkState** helper is a function that return **higher-order component**:

```javascript
//define initialState keys
const defaultState = ['key1', 'key2', 'key3'];

const hoc = withLinkState(defaultState);
const EnhancedComponent = hoc(BaseComponent);

// Same as
const EnhancedComponent = withLinkState(defaultState)(BaseComponent);

//or define initialState with key:value
const defaultState = [{'key1': 'This is the key1'}, {'key2': 10}, {'key3': false}];

const hoc = withLinkState(defaultState);
const EnhancedComponent = hoc(BaseComponent);

// Same as
const EnhancedComponent = withLinkState(defaultState)(BaseComponent);
```

Also, another way to use it, it's as a **decorator**: 

```javascript
//define initialState keys
@withLinkState(['key1', 'key2', 'key3'])
class BaseComponent extends React.Component { ... }

//or define initialState with key:value
@withLinkState([{'key1': 'This is the key1'}, {'key2': 10}, {'key3': false}])
class BaseComponent extends React.Component { ... }
```

## TOC

* [Higher-order component](#higher-order-component)
  + [`withLinkState()`](#withlinkstate)
  
## Higher-order component

### `withLinkState()`

```javascript
withLinkState(
    stateKeys: Array<string>
): HigherOrderComponent
```  

Accepts an Array that is mapped to generate the **initial state** of the **EnhancedComponent**. 

The **EnhancedComponent receives a set of helpers functions as props** to deal with state retrieve/update and input event handlers creation. 

These functions are the following ones:

#### `linkState()`

```javascript
linkState(
    key: String, 
    callback: (value: Any) => Any
): Object 
```  

**linkState** is a function that takes a **key** that represents the portion of the state you want to be updated, and a **callback** that takes a **value** and returns the **value mutated**. 

**linkState** returns an Object containing the following properties:

```javascript
{
  value: String,
  onChange: Event => Void
}
```

#### `updateState()`

```javascript
updateState(
    value: Object, 
    callback: Void => Void
): Void
```  

**updateState** is a function that takes an **Object**, also it can receive a **callback**, and performs a **setState** over the **EnhancedComponent**.  

#### `getState()`

```javascript
getState(): Object
```  

**getState** is a function that returns the full state contained by the **EnhancedComponent**.

#### `getValue()`

```javascript
getValue(
    key: String
): Any
```  

**getValue** is a function that takes a **key** and returns the **value** stored in the **EnhancedComponent**'s state.
