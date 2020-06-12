Props:
```
isLoading: true // boolean, required
```

Usage:
```vue
<Loader :is-loading="isLoading">
  Any content that should be conditionally rendered
</Loader>
```

Source:
```html
<div class="loader">
    <div class="spinner">
        <div class="spinner__cube"></div>
    </div>
</div>
```
