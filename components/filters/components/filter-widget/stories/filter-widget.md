### Usage examples:
#### Required props:
```html
<FilterWidget
    v-slot="{ item }"
    :filter-config="filterConfig"
    :filter-predicate="filterPredicate">
    <ExampleCard :item="item" />
</FilterWidget>
```

#### With optional props:
```html
<FilterWidget
    v-slot="{ item }"
    :filter-config="filterConfig"
    :filter-predicate="filterPredicate"
    secondary-message="Clear filters"
    @secondaryMessageClicked="onSecondaryMessageClick">
    <ExampleCard :item="item" />
</FilterWidget>
```

### Props:

#### filterConfig

config that will be passed to a FilterBox component, you can check the detailed description of this config structure [here](?selectedKind=filters%2Fcomponents%2FFilter%20box&selectedStory=Default&full=0&addons=1&stories=1&panelRight=0&addonPanel=REACT_STORYBOOK%2Freadme%2Fpanel)

Shortened example:
```
[
  {
    name: 'locations',
    filterBy: 'Locations',
    options: options.locations,
    placeholderLabel: {
      plural: 'locations',
      singular: 'location',
    },
    optionsLabel: 'Locations to include:',
  },
  {
    name: 'faculties',
    filterBy: 'Faculties',
    options: options.faculties,
    placeholderLabel: {
      plural: 'faculties',
      singular: 'faculty',
    },
    optionsLabel: 'Faculties to include: ',
  },
]
```

#### filterPredicate
is a function that receives the collection of selected filter names, and you can implement filtering of the data based on those filters. This function must return filtered data.

For the filter config provided above, the filters collection will be:
```
{
    locations: [
        ['all', 'sydney', 'cbd'],
    ],
    faculties: [
        ['all', 'facultyOfHistory'],
        ['all', 'facultyOfSociology'],
        ['all', 'facultyOfArt'],
    ]
}
```
When the options config have nesting, all parent checkbox names are provided in the array

#### secondaryMessage
This string will be rendered in the segmentation notice

### Events:
#### secondaryMessageClicked
The event is triggered when the user clicks on a secondary message

### Slots:
Single item is passed to the default slot, and you can render it in a required way
