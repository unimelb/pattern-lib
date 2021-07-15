# Documenting stories

By default, the README panel shows the full HTML source of the current story. This behaviour can be customised for each story with the `readme` property. For instance, the README of the `AccordionDefault` story is configured to show the story's HTML template:

```html
<script>
import AccordionGroup from '../AccordionGroup.vue';

export default {
  components: { AccordionGroup },
  readme: { html: true },
};
</script>
```

The default `readme` configuration is as follows:

```js
{
  custom: null, // custom markdown document
  html: false, // HTML template (i.e. shallow render with kebab-case tags and props)
  source: true, // HTML source (i.e. full render)
  minified: false, // HTML source, minified
  decorated: false, // HTML source with decorator
}
```

Typically, use:

- `html: true` for components exposed in the `lib` target, like `AccordionGroup`.
- `minified: true` for immutable components (e.g. `PageFooterAlt`)
- `decorated: true` when the decorator is important to the story (e.g. video embed inside a section).

It may also make sense to disable the HTML source with `source: false` in some rare cases, like in the progressive image story.

## Custom documentation

If a component requires custom documentation, place the documentation in a markdown file, import the file, and pass it to the `custom` option:

```html
<script>
import myComponentDocs from './my-component-docs.md';

export default {
  readme: { custom: myComponentDocs },
};
</script>
```

The content of the markdown file will appear at the start of the story's README. If don't want the README to show anything else, disable the `source` option:

```js
export default {
  readme: {
    custom: myComponentDocs,
    source: false,
  },
};
