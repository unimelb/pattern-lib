## Props:
```
items: 10, // number, required - quantity of found results
filters: 2, // number, required - quantity of applyed filters
secondaryMessage: 'Some secondary message.', // string, optional - some message that will be displayed after the main information about resuilts quantity and filters applied
callback: () => { console.log('secondary message clicked') }, // function, optional - will be triggered when the user clicks on secondary message.
```

Usage:
```vue
<FilteredResults
    :items="items.length"
    :filters="filters.length"
    :secondary-message="'Some secondary message.'"
    :callback="changeCategory">
    <div class="grid grid--center grid--2col">
      <ListItem
        v-for="item in items"
        :key="item.id">
        <GenericCard
          :title="item.name"
          href="#"
          :excerpt="item.excerpt"
          :cols="2" />
      </ListItem>
    </div>
  </FilteredResults>
```
