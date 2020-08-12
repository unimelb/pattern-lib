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
ariaLabel: 'Your aria label choice if differing from the label',
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
  :options="[
    {
      label: 'All (49)',
      name: 'all',
      options: [
        {
          label: 'Undergraduate (7)',
          name: 'undergraduate',
          options: [
            {
              label: 'Bachelor (6)',
              name: 'bachelor',
              isChecked: true,
            },
            {
              label: 'Diploma (1)',
              name: 'diploma',
              isChecked: true,
            },
            {
              label: 'Honours (0)',
              name: 'honours',
              isChecked: false,
            },
          ],
        },
        {
          label: 'Graduate (38)',
          name: 'graduate',
          isChecked: false,
          options: [
            {
              label: 'Certificate (10)',
              name: 'certificate',
              isChecked: false,
            },
            {
              label: 'Diploma (6)',
              name: 'diploma',
              isChecked: false,
            },
            {
              label: 'Master (22)',
              name: 'master',
              isChecked: false,
            },
          ],
        },
        {
          label: 'Research (4)',
          name: 'research',
          options: [
            {
              label: 'Master (2)',
              name: 'master',
              isChecked: false,
            },
            {
              label: 'PhD (2)',
              name: 'phd',
              isChecked: false,
            },
          ],
        },
      ],
    },
  ]"
  placeholder-label="course types"
  options-label="Course types to include:"
  @change="onChange"
  @clear="onClear"
/>
```

## Events:

#### change
change event is emitted when the user changed the options and closed the dropdown, or when the user clicked on "Apply filter" button
the payload will be an object of changed options

#### clear
clear event is emitted when the user clicks the "Clear filter" button, and this event doesn't have payload

## Source:
Can be used only as a Vue component
