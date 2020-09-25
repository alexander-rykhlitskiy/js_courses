## State
```html
<!DOCTYPE html>
<html>
<head>
</head>
<body>
  <div class="parent">
    <div class="c1"></div>
    <div class="c2"></div>
  </div>

  <script>
    function bind(state, selectors, node) {
      const setValue = (field, value) => {
        state[`bind_${field}`] = value
        node.querySelector(selectors[field]).textContent = value
      };

      for (let field in state) {
        setValue(field, state[field])
        Object.defineProperty(state, field, {
          get() { return state[`bind_${field}`] },
          set(newValue) {
            setValue(field, newValue)
          }
        })
      }
      node.state = state;
    }

    let state = { name: 'alex', age: 18 }
    bind(state, { name: '.c1', age: '.c2' }, document.querySelector('.parent'))
  </script>
</body>

</html>
```
