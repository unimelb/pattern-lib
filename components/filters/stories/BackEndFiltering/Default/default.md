### Page data:
```
{
  options: {
    locations: locationsOptions, // Option[] - passed to FilterBox and then to FilterDropdown component
    faculties: facultiesOptions,// Option[] - passed to FilterBox and then to FilterDropdown component
  },
  response: { // BE resoponse:
    results: [], // array of results, you can find the example below
    quantity: { // quantity, you can find the example below
      locations: {},
      faculties: {},
    },
  },
  errors: [], // BE errors, are shown instead of the content after the initial page load, or above the content after the update request (you can review the template below)
  isLoading: false, // flag for showing the preloader during the update requests
  isFetched: false, // flag for showing the initial fetching preloader
}
```

locationsOptions and facultiesOptions are used in the FilterDropdown component, the description of the options object structure you can find in the [FilterDropdown component readme](?selectedKind=filters%2Fcomponents%2FFilter%20Dropdown&selectedStory=Default&full=0&addons=1&stories=1&panelRight=0&addonPanel=REACT_STORYBOOK%2Freadme%2Fpanel).

### options that were used in current example:

#### locationsOptions:
```
[
    {
      label: 'All',
      name: 'all',
      options: [
        {
          label: 'Sydney',
          name: 'sydney',
          options: [
            {
              label: 'CBD',
              name: 'cbd',
              isChecked: true,
            },
            {
              label: 'Bondi',
              name: 'bondi',
              isChecked: false,
            },
          ],
        },
        {
          label: 'Melbourne',
          name: 'melbourne',
          options: [
            {
              label: 'Southbank',
              name: 'southbank',
              isChecked: false,
            },
            {
              label: 'Parkville',
              name: 'parkville',
              isChecked: false,
            },
          ],
        },
        {
          label: 'Gold coast',
          name: 'goldCoast',
          options: [
            {
              label: 'CBD',
              name: 'cbd',
              isChecked: false,
            },
          ],
        },
      ],
    },
  ]
```

#### facultiesOptions:
```
[
    {
      label: 'All',
      name: 'all',
      options: [
        {
          label: 'Faculty of History',
          name: 'facultyOfHistory',
          isChecked: true,
        },
        {
          label: 'Faculty of Sociology',
          name: 'facultyOfSociology',
          isChecked: true,
        },
        {
          label: 'Faculty of Art',
          name: 'facultyOfArt',
          isChecked: true,
        },
      ],
    },
  ]
```

### BE response:

#### Result object example:
```
  {
    id: '0',
    name: 'History and Philosophy of Science',
    city: [
      {
        name: 'Sydney',
        campus: ['cbd', 'bondi'],
      },
      {
        name: 'Melbourne',
        campus: ['southbank', 'parkville'],
      },
    ],
    faculty: 'Faculty of History',
    description: 'Labore est anim consequat veniam duis nulla esse esse labore repr',
  }
```

#### locations quantity example:
```
{
  all: {
    quantity: 3,
    sydney: {
      quantity: 2,
      cbd: {
        quantity: 2
      },
      bondi: {
        quantity: 1
      }
    },
    melbourne: {
      quantity: 2,
      southbank: {
        quantity: 2
      },
      parkville: {
        quantity: 1
      }
    },
    goldCoast: {
      quantity: 1,
      cbd: {
        quantity: 1
      }
    }
  }
}
```

#### faculties quantity example:
```
{
  all: {
    facultyOfHistory: {
      quantity: 1
    },
    facultyOfSociology: {
      quantity: 1
    },
    facultyOfArt: {
      quantity: 0
    },
    quantity: 2
  }
}
```

### Computed options:
`filtersApplied` - quantity of selected filters

`optionsWithQuantity` - options with labels merged with quantity received from BE (`${labelFromOptionsObject} (${quantity})`)
### Page template:
```html
<Loader :is-loading="!isFetched && isLoading">
  <!-- BE errors on initial fetch -->
  <ErrorBox v-if="!isFetched" :messages="errors" />

  <!-- if there is no error, the content is rendered -->
  <!-- SectionTwoCol renders main content and side panel (with filters in this case) -->
  <SectionTwoCol v-else direction="right">
    <div slot="main">
      <!-- loading overlay is used to prevent user interactions with content -->
      <LoadingOverlay :is-loading="isLoading" spinner-text="Fetching results">
        <!-- BE errors that occurred during the update request -->
        <ErrorBox :messages="errors" />

        <!-- FilteredResults component renders applied filters and quantity of found results -->
        <FilteredResults :items="response.results.length" :filters="filtersApplied">
          <!-- 2-col layout -->
          <div class="grid grid--center grid--2col">
            <ListItem v-for="item in response.results" :key="item.id">
              <!-- found item content -->
              <GenericCard :title="item.name" :excerpt="item.description" :cols="2" href="#">
                <div slot="sub-title-1" class="sub-title">
                  <div>
                    <div v-for="(location, locationIndex) in item.city" :key="locationIndex">
                      <strong>Location city:</strong> {{ location.name }}
                      <br />
                      <strong>Campus:</strong> {{ location.campus.join(' / ') }}
                      <br />
                      <br />
                    </div>
                  </div>
                </div>
                <div slot="sub-title-2" class="sub-title">
                  <span>{{ item.faculty }}</span>
                </div>
              </GenericCard>
            </ListItem>
          </div>
        </FilteredResults>
      </LoadingOverlay>
    </div>

    <div slot="side">
      <!-- LoadingOverlay blocks filters from interactions during requests -->
      <LoadingOverlay :is-loading="isLoading" :is-spinner-visible="false">
        <!-- FilterBox component renders filters -->
        <FilterBox
          :filters="[
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
                options: facultiesOptionsWithQuantity,
                placeholderLabel: {
                  plural: 'faculties',
                  singular: 'faculty',
                },
                optionsLabel: 'Faculties to include: ',
              },
            ]"
          @change="onChange"
          @clear="onClear"
          @update="onUpdate"
        />
      </LoadingOverlay>
    </div>
  </SectionTwoCol>
</Loader>
```

### Fetch data methods:

#### initial fetch:
```js
async init() {
  this.isLoading = true;
  try {
    this.response = await this.getResults(this.options);
    this.isFetched = true;
  } catch (errors) {
    this.errors = formatErrors(errors);
  }
  this.isLoading = false;
}
```

#### filter changed:
```js
async onChange({ name, changedOptions }) {
  this.isLoading = true;
  this.errors = [];
  try {
    const locationsFacultiesChangedOptions = {
      ...this.options,
      [name]: changedOptions,
    };
    this.response = await this.getResults(locationsFacultiesChangedOptions);
    this.options = locationsFacultiesChangedOptions;
  } catch (errors) {
    this.errors = formatErrors(errors);
  }
  this.isLoading = false;
}
```

#### filters cleared:
```js
async onClear(nameOrNull) {
  this.isLoading = true;
  this.errors = [];
  try {
    // all filters can be cleared - in this case the filter name will be null
    const updatedOptions = !nameOrNull
      ? {
        locations: getOptions('locations', true), // creates new options with all checkboxes checked
        faculties: getOptions('faculties', true),
      } : {
        ...this.options,
        [nameOrNull]: getOptions(nameOrNull, true),
      };

    this.response = await this.getResults(updatedOptions);
    this.options = updatedOptions;
  } catch (errors) {
    this.errors = formatErrors(errors);
  }
  this.isLoading = false;
}
```

#### update results:
```js
async onUpdate() {
  this.isLoading = true;
  this.errors = [];
  try {
    this.response = await this.getResults(this.options);
  } catch (errors) {
    this.errors = formatErrors(errors);
  }
  this.isLoading = false;
}
```

### Helpers:

`formatErrors` - is used to format BE errors, in this example it just converts the error to array of strings

`getOptions` - is used to create new array of options

`this.getResults` - formats options to BE arguments
