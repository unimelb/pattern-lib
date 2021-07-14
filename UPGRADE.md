# Upgrade Instructions

## v4.16.0

Level 1 & Level 2 Header buttons using the classes `page-header--campaign`, `page-header__darken--o50`, `page-header__darken--o25` have been changed from `btn btn--inverted` to `btn btn--campaign`.

```html
<a href="#" class="btn--campaign btn"><span class="push-icon">Call to Action <svg width="15px" height="15px" aria-label="chevron-right" focusable="false" role="img" aria-hidden="true" class="push-icon__icon"><use xlink:href="#icon-chevron-right"></use> <title>Chevron-right</title> </svg></span></a>
```

## v4.10.0

Logo has been mirgrated to it's own component - https://pattern-lib-unimelb.netlify.com?selectedKind=Logo

 The following code sample will change from:

```html
<a class="link-img link-reset" href="https://www.unimelb.edu.au/">	
  <img	
    class="page-header__logo"	
    src="../shared/logo.svg"	
    alt="The University of Melbourne homepage"	
  >	
</a>
```

to:

```html
<div class="logo"><a href="https://www.unimelb.edu.au" class="logo__link"><img alt="The University of Melbourne homepage" src="/logo-with-padding.svg" class="logo__image logo__image--lg"></a></div>
```

## v3.5.0
## v3.4.0

The default class for buttons should now be `.button` to include the chevron icon.

```html
<a class="button"></a>
<button class="button"></button>
```

Note this is not a breaking change, since the old behaviour still works, and will not be deprecated.

## v3.3.0
## v3.2.0
## v3.1.5
## v3.1.4
## v3.1.3

No change

## v3.1.2

Semantic `<nav>` element now has no default background colour, for use in breadcrumbs update this to

```html
<nav class="bg-white">
```

## v3.1.1

No change

## v3.1.0

Named inset figure size variants that were deprecated in v0.1.x have now been removed:

* `class="figure figure--inset figure--inset-lge"` becomes `class="figure figure--inset figure--lge`

* `class="figure figure--inset figure--inset-sml"` becomes `class="figure figure--inset figure--sml`

## v3.0.0

* `TabGroup` component has been renamed to `Tabs`, now includes mobile support

```html
<tabs>
  <tab title="First tab">
    ...
  </tab>
  <tab title="Another tab etc.">
    ...
  </tab>
</tabs>
```

* `AccordionGroup` component now holds `Accordion` components

```html
<accordion-group>
  <accordion name="First accordion">
    ...
  </accordion>
  <accordion name="Another section etc.">
    ...
  </accordion>
</accordion-group>
```

Note that the `Accordion` component now works by itself, and should be used instead of the `AccordionGroup` in most cases (`AccordionGroup` offers better
keyboard accessibility between sections and single-open-at-a-time functionality).

* `SectionToggle` component has been renamed to `ToggleBlock`, but none of the implementations have changed (this is the component that drives the `Accordion` and `ToggleBlockMobile` used in the footer).

## v2.1.3
## v2.1.2
## v2.1.1

No change

## v2.1.0

* Remove css override for `main { display: block; }` - this is now included in the deployed css.

## v2.0.1

No change

## v2.0.0

* For `AccordionGroup` component, change `<section>` children to `<accordion-panel>`

```html
<accordion-group>
  <accordion-panel title="Heading/trigger for accordion">
    ...
  </accordion-panel>
</accordion-group>
```

* For `SectionToggle` component, change `<section>` children to `<section-toggle-panel>`

```html
<section-toggle>
  <section-toggle-panel title="First section-toggle-panel">
    ...
  </section-toggle-panel>
</section-toggle>
```

* For `TabGroup` component, change `<section>` children to `<tab>`

```html
<tab-group>
  <tab title="First tab">
    ...
  </tab>
  <tab title="Another tab etc.">
    ...
  </tab>
</tab-group>
```

* Change all `<button>` inside `<a>` to `<span>` with the same classes for Pathfinders and Cards

* Strongly recommend you use the `<page-footer-alt>` component rather than a markup block - this should be placed _inside_ the `<div id="ui">` block.

```html
<page-footer-alt></page-footer-alt>
```
