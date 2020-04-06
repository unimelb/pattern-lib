Props:
```
options: [], // Option[], required
placeholderLabel: 'course types', // string, required - used in the placeholder when more then 1 option selected
optionsLabel: 'Course types to include:', // string - inserted in the dropdown body before checkboxes
disabled: false, // boolean, false by default
```

Option:
```
label: 'Undergraduate (7)', // string, required
    name: 'undergraduate', // string, required, must be unique
    options: [
        {
            label: "Bachelor (6)"
            name: "bachelor",
            isChecked: true // boolean, required on last nested level
        }
    ], // Option[]
```

Usage:
```vue
<FilterDropdown
  :options="options"
  placeholder-label="course types"
  options-label="Course types to include:"
  @change="onChange"
  @clear="onClear" />
```
