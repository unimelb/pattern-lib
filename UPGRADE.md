# Upgrade Instructions

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

* Strongly recommend you use the `<page-footer>` component rather than a markup block

```html
<page-footer></page-footer>
```
