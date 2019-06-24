## CMS

By default all tables are transformed into responsive tables at runtime.  Please refer to the `Default (Not Responsive)` story on how to set a non-responsive table.

### Example:

```
<table>
 ...
</table>
```

### Becomes

```
<table-responsive>
  <table>
  ...
  </table>
</table-responsive>
```

## (SPA) Vue Example

Manually wrap the `<table>` using `<TableResponsive>` component.

### Example:

```
<TableResponsive>
  <table>
  ...
  </table>
</TableResponsive>
```