# Quick Links Alt component

It accepts props such as:

- `items`: Array of links/buttons - see usage example below of object
- `listType`: Defaults to `ul` - can be `ol`
- `searchQuery`: String to change the styling to unbold and text highlight matching results
- `fullWidth`: Add horizontal padding to match the page gutter
- `noInset`: Remove horizonal padding
- `borderBottom`: Add a horizontal border to bottom
- `buttons`: Style the link as button with chevron icon instead of arrow

#### Usage with links:

```html
 <quick-links-alt :items='[
    {
        "title": "Start your application",
        "href": "#",
    },
    {
        "title": "Explore scholarships",
        "href": "#",
    },
    {
        "title": "Find accommodation",
        "href": "#",
    },
    {
        "title": "Alternate pathways to Melbourne University",
        "href": "#",
    },
  ]'></quick-links-alt>
```

#### Usage with buttons:

```html
 <quick-links-alt buttons :items='[
    {
        "title": "Accounting",
        "preview": "Quick view",
        "ariaLabel": "Accounting - opens in sidebar",
        "ariaControls": "sidebar",
        "action": () => console.log("Click"),
        "id": "btn-accounting",
    },
    {
        "title": "Agricultural sciences",
        "preview": "Quick view",
        "ariaLabel": "Agricultural sciences - opens in sidebar",
        "ariaControls": "sidebar",
        "action": () => console.log("Click"),
        "id": "btn-agricultural-sciences",
    },
    {
        "title": "Architectural engineering",
        "preview": "Quick view",
        "ariaLabel": "Architectural engineering - opens in sidebar",
        "ariaControls": "sidebar",
        "action": () => console.log("Click"),
        "id": "btn-architectural-engineering",
    },
    {
        "title": "Architecture",
        "preview": "Quick view",
        "ariaLabel": "Architecture - opens in sidebar",
        "ariaControls": "sidebar",
        "action": () => console.log("Click"),
        "id": "btn-architecture",
    },
  ]'></quick-links-alt>
```

#### Screen reader announcement (NVDA)

Links
- Start your application link

Buttons
- Accounting Quick view button

Variations
- marked content Acc out of marked content outing link
