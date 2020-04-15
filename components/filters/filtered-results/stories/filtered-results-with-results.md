Usage:
```vue
<FilteredResults
    :items="items.length"
    :filters="filters.length"
    :secondary-message="getSecondaryMessage()"
    :callback="changeCategory">
    <div class="grid grid--center grid--2col">
      <ListItem
        v-for="item in items"
        :key="item.id">
        <GenericCard
          :title="item.name"
          :excerpt="item.excerpt"
          :cols="2" />
      </ListItem>
    </div>
  </FilteredResults>
```
