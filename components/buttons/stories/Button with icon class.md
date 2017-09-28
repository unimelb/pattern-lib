## Button with icon class

A small set of icons can also be added by adding the class `btn--icon` and the name of the icon `btn--icon--<icon name>` where icon name is one of the following available :

1. chevron-right
1. download
1. search
1. twitter

eg: 

```html
<button class="btn btn--icon btn--icon--chevron-right">
  button label
</button>
```

There are also inverted classes that are required as the svg needs a fill color passed to it. They are used by appending `--inverted` 

eg: 

```html
<div class="bg-inverted">
  <button class="btn btn--inverted btn--icon btn--icon--download-inverted">Button with icon</button>
</div>
```

