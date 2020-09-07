BaseCheckbox props:
```
name: 'checkboxName', // string, required
label: 'Undergraduate (7)', // string
isChecked: false, // boolean, default: false
isIndeterminate: true, // boolean, default: false
ariaLabel: 'Undergraduate', // string
```

BaseCheckbox emits `change` event with a payload object:
```
{
    name: 'checkboxName',
    isChecked: false,
    isIndeterminate: true,
}
```

This is the current (unchanged) state of the checkbox. You must change it in the parent component to the desired state

### Source:

Unchecked state:
```html
<label class="base-checkbox base-checkbox--inline">
  <input
    aria-label="unchecked checkbox"
    class="base-checkbox__input"
    type="checkbox">

  <span class="base-checkbox__icon">
    <span class="base-checkbox__icon-checked"></span>

    <span class="base-checkbox__icon-indeterminate"></span>
  </span>

  <span class="base-checkbox__label">Unchecked</span>
</label>
```

Checked state:
```html
<label class="base-checkbox base-checkbox--inline">
  <input
    aria-label="checked checkbox"
    class="base-checkbox__input"
    type="checkbox">

  <span class="base-checkbox__icon">
    <span class="base-checkbox__icon-checked base-checkbox__icon-checked--is-checked"></span>

    <span class="base-checkbox__icon-indeterminate"></span>
  </span>

  <span class="base-checkbox__label">Checked</span>
</label>
```

Indeterminate state:
```html
<label class="base-checkbox base-checkbox--inline">
  <input
    aria-label="indeterminate checkbox"
    class="base-checkbox__input"
    type="checkbox">

  <span class="base-checkbox__icon">
    <span class="base-checkbox__icon-checked"></span>

    <span class="base-checkbox__icon-indeterminate base-checkbox__icon-indeterminate--is-indeterminate"></span>
  </span>

  <span class="base-checkbox__label">Indeterminate</span>
</label>
```
