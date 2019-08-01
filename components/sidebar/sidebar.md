## Sidebar Component

The component props are:

- items

```json
[
    {
        "icon": "calendar",
        "title": "Dates and Times",
        "subTitles": [
            {
                "email": "unimelb@unimelb.edu.au"
            },
            {
                "text": "20 Nov 19"
            },
            {
                "link": "Margaret Lawrence Gallery",
                "href": "https://mlg.finearts-music.unimelb.edu.au/"
            }
        ]
    }
]
```

- title
 > Title of the card

- title-icon
 > Icon on top of the card, the options are: [Icons](https://pattern-lib-unimelb.netlify.com/?selectedKind=Icons&selectedStory=Spritesheet&full=0&addons=1&stories=1&panelRight=0&addonPanel=REACT_STORYBOOK%2Freadme%2Fpanel)
- button-text
 > Text of the button that will be rendered


## Usage Example

```html
  <sidebar title="Event information" title-icon="info" button-text="Book tickets" items="[{items object}]"></sidebar>
```