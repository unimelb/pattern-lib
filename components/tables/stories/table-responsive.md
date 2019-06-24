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
<responsive-table>
  <table>
  ...
  </table>
</responsive-table>
```

## (SPA) Vue Example

Manually wrap the `<table>` using `<ResponsiveTable>` component.

### Example:

```
<ResponsiveTable>
  <table>
  ...
  </table>
</ResponsiveTable>
```