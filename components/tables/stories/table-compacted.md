## CMS

Add the class `table--is-compacted` to the `<table>` to define it as a Compacted Table.

By default the first column becomes the header when viewing the table on mobile viewport.

### Example:

```
<table class="table--is-compacted">
 ...
</table>
```

### Becomes

```
<compacted-table>
  <table>
  ...
  </table>
</compacted-table>
```

## (SPA) Vue Example

Manually wrap the `<table>` using `<CompactedTable>` component.

### Example:

```
<CompactedTable>
  <table>
  ...
  </table>
</CompactedTable>
```