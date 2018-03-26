# Upgrade Instructions

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
