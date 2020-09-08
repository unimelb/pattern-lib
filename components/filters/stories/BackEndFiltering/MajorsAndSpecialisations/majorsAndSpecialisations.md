### Page data:

```
{
  userQualification: 'undergrad', // 'undergrad' | 'postgrad' | 'research' - this parameter changes segmentation notice text and default selected filters
  options: options,  // Option[] - passed to FilterBox and then to FilterDropdown component (example below)
  response: { // BE resoponse:
    results: [], // array of results, you can find the example below
    quantity: {}, // quantity of each filtered result
  },
  isDefaultFilterApplied: true, // changes segmentation message
  errors: [], // BE errors, are shown instead of the content after the initial page load, or above the content after the update request (you can review the template below)
  isLoading: false, // flag for showing the preloader during the update requests
  isFetched: false, // flag for showing the initial fetching preloader
}
```

options is used in the FilterDropdown component, the description of the options object structure you can find in the [FilterDropdown component readme](?selectedKind=filters%2Fcomponents%2FFilter%20Dropdown&selectedStory=Default&full=0&addons=1&stories=1&panelRight=0&addonPanel=REACT_STORYBOOK%2Freadme%2Fpanel).

#### options that were used in current example:
```
[
  {
    label: 'All',
    name: 'all',
    options: [
      {
        label: 'Undergraduate',
        name: 'undergrad',
        options: [
          {
            label: 'Bachelor',
            name: 'bachelor',
            isChecked: false, // true for the 'undergrad' user qualification
          },
          {
            label: 'Diploma',
            name: 'diploma',
            isChecked: false, // true for the 'undergrad' user qualification
          },
          {
            label: 'Honours',
            name: 'honours',
            isChecked: false, // true for the 'undergrad' user qualification
          },
        ],
      },
      {
        label: 'Graduate',
        name: 'postgrad',
        options: [
          {
            label: 'Certificate of bla bla bla bla bla',
            name: 'certificate',
            isChecked: false, // true for the 'postgrad' user qualification
          },
          {
            label: 'Diploma',
            name: 'diploma',
            isChecked: false, // true for the 'postgrad' user qualification
          },
          {
            label: 'Master',
            name: 'master',
            isChecked: false, // true for the 'postgrad' user qualification
          },
        ],
      },
      {
        label: 'Research',
        name: 'research',
        options: [
          {
            label: 'Master',
            name: 'master',
            isChecked: false, // true for the 'research' user qualification
          },
          {
            label: 'PhD',
            name: 'phd',
            isChecked: false, // true for the 'research' user qualification
          },
        ],
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
  name: 'Ancient World Studies',
  excerpt: 'bachelor',
  studyOption: 'undergrad',
}
```

#### quantity example:

```
{
  all: {
    undergrad: {
      quantity: 7,
      bachelor: 6,
      diploma: 1
    },
    postgrad: {
      quantity: 29,
      certificate: 10,
      diploma: 6,
      master: 13
    },
    research: {
      quantity: 4,
      master: 2,
      phd: 2
    },
    quantity: 40
  }
}
```

### Computed options:
`filterDropdownOptions` - options with labels merged with quantity received from BE (`${labelFromOptionsObject} (${quantity})`)

`messageDefaultFilters` - segmentation message that is shown when default filters applied

`messageCustomFilters` - segmentation message that is show when custom filters applied

`secondaryMessage` - conditionally shows `messageDefaultFilters` or `messageCustomFilters`

`filtersApplied` - quantity of selected filters

### Page template:
```html
<Loader :is-loading="!isFetched && isLoading">

    <!-- BE errors on initial fetch -->
    <ErrorBox
      v-if="!isFetched"
      :messages="errors" />

    <!-- if there is no error, the content is rendered -->
      <!-- SectionTwoCol renders main content and side panel (with filters in this case) -->
    <SectionTwoCol
      v-else
      direction="right">
      <div slot="main">

        <!-- loading overlay is used to prevent user interactions with content -->
        <LoadingOverlay
          :is-loading="isLoading"
          spinner-text="Fetching results">

          <!-- BE errors that occurred during the update request -->
          <ErrorBox
            :messages="errors" />

          <!-- FilteredResults component renders applied filters, quantity of found results and segmentation notice -->
          <FilteredResults
            :items="response.results.length"
            :filters="filtersApplied"
            :secondary-message="secondaryMessage"
            :callback="segmentationChange">

            <!-- 2-col layout -->
            <div class="grid grid--center grid--2col">
              <ListItem
                v-for="item in response.results"
                :key="item.id">

                <!-- found item content -->
                <GenericCard
                  href="#"
                  :title="item.name"
                  :excerpt="item.excerpt"
                  :cols="2" />
              </ListItem>
            </div>
          </FilteredResults>
        </LoadingOverlay>
      </div>

      <div slot="side">
        <!-- LoadingOverlay blocks filters from interactions during requests -->
        <LoadingOverlay
          :is-loading="isLoading"
          :is-spinner-visible="false">

          <!-- FilterBox component renders filters -->
          <FilterBox
            :filters="[
              {
                name: 'courseTypes',
                filterBy: 'Course types',
                options: filterDropdownOptions,
                placeholderLabel: {
                  plural: 'course types',
                  singular: 'course type',
                },
                optionsLabel: 'Course types to include:',
              },
            ]"
            @change="onChange"
            @clear="onClear"
            @update="onUpdate" />
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
    this.response = await this.getResults(this.filterDropdownOptions);
    this.isFetched = true;
  } catch (errors) {
    this.errors = formatErrors(errors);
  }
  this.isLoading = false;
}
```

#### filter changed:

```js
async onChange({ changedOptions }) {
  this.isLoading = true;
  this.errors = [];
  try {
    this.response = await this.getResults(changedOptions);
    this.options = changedOptions;
    this.isDefaultFilterApplied = false;
  } catch (errors) {
    this.errors = formatErrors(errors);
  }
  this.isLoading = false;
}
```

#### filters cleared:

```js
async onClear() {
  this.isLoading = true;
  this.errors = [];
  try {
    this.response = await this.getResults(all); // all - options object with all checkboxes selected
    this.options = all;
    this.isDefaultFilterApplied = false;
  } catch (errors) {
    this.errors = formatErrors(errors);
  }
  this.isLoading = false;
}
```

#### reset to default qualification - triggered on custom segmentation message click
```js
async onResetToDefaultQualification() {
  this.isLoading = true;
  this.errors = [];
  try {
    const defaultOptionsForUserQualification = defaultOptions[this.userQualification]; // default options - options for all types of qualifications

    this.response = await this.getResults(defaultOptionsForUserQualification);
    this.options = defaultOptionsForUserQualification;
    this.isDefaultFilterApplied = true;
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
    this.response = await this.getResults(this.filterDropdownOptions);
  } catch (errors) {
    this.errors = formatErrors(errors);
  }
  this.isLoading = false;
}
```

### Helpers:

`formatErrors` - is used to format BE errors, in this example it just converts the error to array of strings

`this.getResults` - formats options to BE arguments
