AppCheckbox props:
```
name: 'checkboxName', // string, required
label: 'Undergraduate (7)', // string
isChecked: false, // boolean, default: false
isIndeterminate: true, // boolean, default: false
ariaLabel: 'Undergraduate', // string
```

AppCheckbox emits `change` event with a payload object:
```
{
    name: 'checkboxName',
    isChecked: false,
    isIndeterminate: true,
}
```

This is the current (unchanged) state of the checkbox. You must change it in the parent component to the desired state
