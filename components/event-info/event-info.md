## Event Info Component

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
    },
    {
        "icon": "location",
        "title": "Location",
        "subTitles": [
            {
                "email": "20 Nov 19"
            },
            {
                "text": "20 Nov 19"
            },
            {
                "text": "20 Nov 19"
            }
        ]
    },
    {
        "icon": "envelope",
        "title": "Entry requirements",
        "subTitles": [
            {
                "text": "20 Nov 19"
            },
            {
                "text": "20 Nov 19"
            },
            {
                "text": "20 Nov 19"
            }
        ]
    },
    {
        "icon": "phone",
        "title": "Contact information",
        "subTitles": [
            {
                "text": "20 Nov 19"
            },
            {
                "text": "20 Nov 19"
            },
            {
                "text": "20 Nov 19"
            }
        ]
    },
    {
        "icon": "info",
        "title": "Further information",
        "subTitles": [
            {
                "text": "20 Nov 19"
            },
            {
                "text": "20 Nov 19"
            },
            {
                "email": "20 Nov 19"
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
  <event-info title="Event information" title-icon="info" button-text="Book tickets" items="[{items object}]"></event-info>
```