Props:
```
options: [], // Option[], required - passed to FilterDropdown component
filterBy: 'Course types', // string, required
placeholderLabel: 'course types', // string, required - passed to FilterDropdown component
optionsLabel: 'Course types to include:', // string - passed to FilterDropdown component
```

Usage:
```vue
<FilterBox
    :options="options"
    filter-by="Course types"
    placeholder-label="course types"
    options-label="Course types to include:" />
```

### Source:
Can be used only as a Vue component
