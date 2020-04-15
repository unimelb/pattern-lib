Props:
```
isLoading: true, // boolean, required
spinnerText: 'Fetching results', // string
isSpinnerVisible: false, // boolean, true by default
```

Source:
```html
<div class="loading-overlay">
    <div class="loading-overlay__overlay loading-overlay__overlay--is-loading"></div>

    <div class="loading-overlay__content loading-overlay__content--is-loading">
      Content that should be disabled during loading
    </div>
</div>
```
