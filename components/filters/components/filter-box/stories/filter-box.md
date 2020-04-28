
## Props:
```
filters: [], // Filter[], required, minLegth = 1
```
#### Filter:
```
name: 'courseType', required, must be unique
options: [], // Option[], required - passed to FilterDropdown component
filterBy: 'Course types', // string, required
placeholderLabel: PlaceholderLabel, // object, required - passed to FilterDropdown component
optionsLabel: 'Course types to include:', // string - passed to FilterDropdown component
```

[Option](?selectedKind=filters%2Fcomponents%2FFilter%20Dropdown&selectedStory=Default&full=0&addons=1&stories=1&panelRight=0&addonPanel=REACT_STORYBOOK%2Freadme%2Fpanel)

[PlaceholderLabel](?selectedKind=filters%2Fcomponents%2FFilter%20Dropdown&selectedStory=Default&full=0&addons=1&stories=1&panelRight=0&addonPanel=REACT_STORYBOOK%2Freadme%2Fpanel)

## Usage:
```vue
<FilterBox
    :filters="[
        {
            name: 'courseType',
            options: options,
            filterBy: 'Course types',
            placeholderLabel: {
                plural: 'course types',
                singular: 'course type'
            },
            optionsLabel: 'Course types to include:'
        }
    ]" />
```

## Source:
Can be used only as a Vue component
