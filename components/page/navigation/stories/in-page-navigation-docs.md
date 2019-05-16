## In Page Navigation

The In Page Navigation component can be used to create a navigation through the page.

**Note**: The component is generated automatically, based on the heading level (`h1, h2, h3, h4 and h5`) and must have and `id` in each heading target.  

The heading **must** contain `navigation` as part of it's ID. This is to ensure no other headings with ID's (that you don't want included) are included.

The color options are:

- `navy, teal, yellow, emerald, orange, green, purple, pink`

### Usage Example:

#### HTML

```html
 <in-page-navigation
      color="navy"
      title="on this page"
      heading-level="h1"/>
</in-page-navigation>
```

### Sample Heading tag.

```html
<h2 id="navigation-link-1>Heading<h2>
<h3 id="navigation-course-heading>Heading<h3>
```