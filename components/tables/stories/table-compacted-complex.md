## CMS

Add the class `table--is-compacted` to the `<table>` to define it as a Compacted Table.

By default the first column becomes the header when viewing the table on mobile viewport. This can be overridden by adding the class `table__row--header` to a `<tr>`.

### Example:

```
<table class="table--is-compacted">
  <thead>...</thead>
  <tbody>
    <tr class="table__row--info table__row--header">
      <th>This becomes mobile heading</th>
    </tr>
    ...
  </tbody>
</table>
```

### Becomes

```
<compacted-table>
  <table>
    <thead>...</thead>
    <tbody>
      <tr class="table__row--info table__row--header">
        <th>This becomes mobile heading</th>
      </tr>
      ...
    </tbody>
  </table>
</compacted-table>
```

## (SPA) Vue Example

Manually wrap the `<table>` using `<CompactedTable>`.

### Example:

```
<CompactedTable>
  <table>
  ...
  </table>
</CompactedTable>
```