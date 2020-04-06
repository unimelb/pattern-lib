Props:
```
isLoading: true, // boolean, required
spinnerText: 'Fetching results', // string
isSpinnerVisible: false, // boolean, true by default
```

Spinner with custom text:
```vue
<LoadingOverlay
  :is-loading="true"
  spinner-text="Fetching results">
  Content that should be disabled during loading
</LoadingOverlay>
```

Source:
```html
<div class="loading-overlay">
    <div class="loading-overlay__overlay loading-overlay__overlay--is-loading">
        <div class="spinner">
            <div class="spinner__cube"></div>
            <div class="spinner__text">
                Fetching results
            </div>
        </div>
    </div>

    <div class="loading-overlay__content loading-overlay__content--is-loading">
      Content that should be disabled during loading
    </div>
</div>
```
