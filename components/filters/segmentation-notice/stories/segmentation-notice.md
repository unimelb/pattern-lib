Props:
```
options: [], // FilterDropdown/Option[], required
isDefaultFilterApplied: false, // boolean, required
resultsLength: 39, // number, required
userQualification: 'undergrad' // 'undergrad' | 'postgrad' | 'research', required
```

Usage:
```vue
<SegmentationNotice
    :options="options"
    :is-default-filter-applied="false"
    :results-length="39"
    user-qualification="undergrad"
    @clear="onClear"
    @change="onChange" />
```
