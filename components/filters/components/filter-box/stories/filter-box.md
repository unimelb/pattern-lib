
## Props:
```
filters: [], // Filter[], required, minLegth = 1
```
#### Filter:
```
name: 'courseType', required, must be unique, will be returned in the "change" and "clear" events to determine which filter has been changed
options: [], // Option[], required - passed to FilterDropdown component
filterBy: 'Course types', // string, required
placeholderLabel: PlaceholderLabel, // object, required - passed to FilterDropdown component
optionsLabel: 'Course types to include:', // string - passed to FilterDropdown component
```

Options will be passed down to the FilterDropdown component, you can review the description and example of this object in the FilterDropdown component readme.

PlaceholderLabel will be also passed to the FilterDropdown component, please go to [FilterDropdown component example](?selectedKind=filters%2Fcomponents%2FFilter%20Dropdown&selectedStory=Default&full=0&addons=1&stories=1&panelRight=0&addonPanel=REACT_STORYBOOK%2Freadme%2Fpanel)

## Usage:

#### Single dropdown:
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
    ]"
    @change="onChange"
    @clear="onClear"
    @update="onUpdate" />
```

#### Multiple dropdowns:
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
        },
        {
            name: 'locations',
            options: locationsOptions,
            filterBy: 'Location',
            placeholderLabel: {
                plural: 'locations',
                singular: 'location'
            },
            optionsLabel: 'Locations to include:'
        }
    ]" 
    @change="onChange"
    @clear="onClear"
    @update="onUpdate" />
```

## Events:

#### change
change event is emitted when the user changed the options and closed the dropdown, or when the user clicked on "Apply filter" button

the payload will be:
```
{
    name: 'courseType', // name of the filter that was passed to the "filters" propery
    changedOptions: [], // updated options array
}
```

#### clear
clear event is emitted when the user clicks the "Clear filter" button, and the payload will be the name field from the filters array prop

#### update
update event is emitted when the user clicks the "Update results" button, this event doesn't have payload

## Source:
Can be used only as a Vue component
