single AppCheckbox props:
```
label: 'Undergraduate (7)', // string
ariaLabel: 'Undergraduate', // string
modelValue: false // boolean
```

usage with `v-model`:
```vue
<template>
  <AppCheckbox
    v-model="isChecked"
    label="Single checkbox" />
</template>

<script >
export default {
  data() {
    return {
      isChecked: true
    };
  }
}
</script>
```


AppCheckbox list props:
```
label: 'Undergraduate (7)', // string
ariaLabel: 'Undergraduate', // string
name: 'checkboxName1', // string, required
modelValue: ['checkedCheckboxName1', 'checkedCheckboxName2'] // array of checked checkbox names
```

usage with `v-model`:
```vue
<template>
  <AppCheckbox
    v-for="checkbox in checkboxes"
    :key="checkbox.name"
    :name="checkbox.name"
    v-model="checkedCheckboxes"
    label="Single checkbox" />
</template>

<script >
export default {
  data() {
    return {
      checkboxes: [
        {
          label: 'Checkbox1',
          name: 'checkbox1'
        },
        {
          label: 'Checkbox2',
          name: 'checkbox2'
        }
      ],
      checkedCheckboxes: ['checkbox1']
    };
  }
}
</script>
```
