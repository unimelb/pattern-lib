# Upgrade Instructions

## v2.1.3

No change

## v2.1.2

No change

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

* Strongly recommend you use the `<page-footer>` component rather than a markup block - this should be placed _inside_ the `<div id="ui">` block.

```html
<page-footer></page-footer>
```

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
