## Mega Menu

The Mega Menu componet receive some props as shown below:

Example:

```html
<mega-menu
  items="items"
  top-menu="top menu"
  active="/random-link"
  faculty-name="Faculty of Medicine, Dentistry and Health Sciences"
  faculty-link="/faculty-link"
  faculty-width="25.5%"
></mega-menu>
```

## Items prop example:

```json
[
  {
    "title": "Study",
    "href": "/",
    "feature": {
      "alt": "screen reader only",
      "text": "Study at the Conservatorium celebrates lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "img": "https://source-to-image.com",
      "link": "http://google.com"
    },
    "items": [
      { "title": "Entry requirements21", "href": "/2random-link" },
      { "title": "Entry requirements22", "href": "http://2www.google.com" },
      { "title": "Entry requirements23", "href": "http://2www.google.com" },
      { "title": "Entry requirements24", "href": "http://2www.google.com" },
      { "title": "Entry requirements25", "href": "http://2www.google.com" }
    ]
  },
  {
    "title": "Find a course",
    "href": "/find-a-course"
  },
  {
    "title": "Why's Melbourne",
    "href": "/why-melbourne",
    "feature": {
      "title": "Campaign title",
      "text": "Study at the Conservatorium celebrates lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "img": "https://source-to-image.com",
      "link": "http://google.com"
    },
    "items": [
      { "title": "Entry requirements1", "href": "/random-link" },
      { "title": "Entry requirements2", "href": "http://www.google.com" },
      { "title": "Entry requirements3", "href": "http://www.google.com" },
      { "title": "Entry requirements4", "href": "http://www.google.com" },
      { "title": "Entry requirements5", "href": "http://www.google.com" }
    ]
  },
  {
    "title": "Admissions",
    "href": "/admissions",
    "feature": {
      "title": "Different campaign",
      "text": "Study at the Conservatorium celebrates lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    "items": [
      { "title": "Entry non requirements6", "href": "http://www.google.com" },
      { "title": "Entry non requirements7", "href": "http://www.google.com" },
      {
        "title": "Entry non requirements8 has a particularly long title for no good reason",
        "href": "http://www.google.com"
      },
      { "title": "Entry non requirements9", "href": "http://www.google.com" },
      {
        "title": "Entry non requirements10",
        "href": "http://www.google.com"
      },
      {
        "title": "Entry non requirements11",
        "href": "http://www.google.com"
      },
      {
        "title": "Entry non requirements12",
        "href": "http://www.google.com"
      },
      {
        "title": "Entry non requirements13",
        "href": "http://www.google.com"
      },
      {
        "title": "Entry non requirements14",
        "href": "http://www.google.com"
      },
      { "title": "Entry non requirements15", "href": "http://www.google.com" }
    ]
  },
  {
    "title": "Student experience",
    "href": "/student-experience",
    "feature": {
      "alt": "screen reader only",
      "text": "Study at the Conservatorium celebrates lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "img": "https://source-to-image.com",
      "link": "http://google.com"
    },
    "items": [
      { "title": "Entry requirements21", "href": "/2random-link" },
      { "title": "Entry requirements22", "href": "http://2www.google.com" },
      { "title": "Entry requirements23", "href": "http://2www.google.com" },
      { "title": "Entry requirements24", "href": "http://2www.google.com" },
      { "title": "Entry requirements25", "href": "http://2www.google.com" }
    ]
  },
  {
    "title": "Connect",
    "href": "/connect"
  }
]
```

## Top menu example:

```json
[
  {
    "title": "Students",
    "href": ""
  },
  {
    "title": "Alumni",
    "href": ""
  },
  {
    "title": "Supporters and Partners",
    "href": ""
  },
  {
    "title": "Students",
    "href": ""
  }
]
```

### Usage Example:
