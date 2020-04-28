## Props:
```
options: [], // Option[], required
placeholderLabel: PlaceholderLabel, // object, required - used in the placeholder when there are options selected
optionsLabel: 'Course types to include:', // string - inserted in the dropdown body before checkboxes
disabled: false, // boolean, false by default
```

#### PlaceholderLabel:
```
plural: 'course types', // string, required
singular: 'course type', // string, required
```

#### Option:
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

## Usage:
```vue
<FilterDropdown
  :options="options"
  placeholder-label="course types"
  options-label="Course types to include:"
  @change="onChange"
  @clear="onClear" />
```

## Source:
Can be used only as a Vue component
