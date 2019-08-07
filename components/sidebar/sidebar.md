## CMS Example

```html
<div class="section">
  <div class="section__inner">
    <div class="grid">
      <div class="sidebar">
        <div class="sidebar__header">
          <h3 class="sidebar__title"><svg width="16px" height="16px" aria-label="info" focusable="false" role="img" class="sidebar__title-icon">
              <use xlink:href="#icon-info"></use>
              <title>Info</title>
            </svg>
            Event information</h3>
        </div>
        <div class="sidebar__inner"><a href="www.unimelb.edu.au" class="btn--event btn btn--xsml btn--fullwidth"> Book tickets</a>
          <ul class="sidebar__list">
            <li class="sidebar__list-item list-reset"><svg width="20px" height="20px" aria-label="calendar" focusable="false" role="img" class="sidebar__list-icon">
                <use xlink:href="#icon-calendar"></use>
                <title>Calendar</title>
              </svg>
              <div>
                <h4 class="sidebar__list-title">
                  Dates and Times</h4>
                <div>
                  <div class="sidebar__list-sub-title">20 Nov 19 - 25 Nov 19</div>
                </div>
                <div>
                  <div class="sidebar__list-sub-title">Tue-Fri 7pm-9pm</div>
                </div>
                <div>
                  <div class="sidebar__list-sub-title">Sun-Sat 6pm-10pm</div>
                </div>
              </div>
            </li>
            <li class="sidebar__list-item list-reset"><svg width="20px" height="20px" aria-label="location" focusable="false" role="img" class="sidebar__list-icon">
                <use xlink:href="#icon-location"></use>
                <title>Location</title>
              </svg>
              <div>
                <h4 class="sidebar__list-title">
                  Location</h4>
                <div>
                  <div class="sidebar__list-sub-title">Margaret Lawrence Gallery</div>
                </div>
                <div>
                  <div class="sidebar__list-sub-title">40 Dodds Street</div>
                </div>
                <div>
                  <div class="sidebar__list-sub-title">Southbank</div>
                </div>
                <div>
                  <div class="sidebar__list-sub-title">VIC 3006</div>
                </div>
                <div>
                  <div class="sidebar__list-sub-title"></div> <a href="https://mlg.finearts-music.unimelb.edu.au/" target="_blank" class="sidebar__list-link">Margaret Lawrence Gallery</a>
                </div>
              </div>
            </li>
            <li class="sidebar__list-item list-reset"><svg width="20px" height="20px" aria-label="envelope" focusable="false" role="img" class="sidebar__list-icon">
                <use xlink:href="#icon-envelope"></use>
                <title>Envelope</title>
              </svg>
              <div>
                <h4 class="sidebar__list-title">
                  Entry requirements</h4>
                <div>
                  <div class="sidebar__list-sub-title">No booking required.</div>
                </div>
                <div>
                  <div class="sidebar__list-sub-title">This event is free.</div>
                </div>
              </div>
            </li>
            <li class="sidebar__list-item list-reset"><svg width="20px" height="20px" aria-label="phone" focusable="false" role="img" class="sidebar__list-icon">
                <use xlink:href="#icon-phone"></use>
                <title>Phone</title>
              </svg>
              <div>
                <h4 class="sidebar__list-title">
                  Contact information</h4>
                <div>
                  <div class="sidebar__list-sub-title">Julia Juliasson</div>
                </div>
                <div>
                  <div class="sidebar__list-sub-title">+61 48963 7654</div>
                </div>
                <div>
                  <div class="sidebar__list-sub-title"></div> <a href="mailto:fineartsmusic-er@unimelb.edu.au" class="sidebar__list-email">fineartsmusic-er@unimelb.edu.au</a>
                </div>
              </div>
            </li>
            <li class="sidebar__list-item list-reset"><svg width="20px" height="20px" aria-label="info" focusable="false" role="img" class="sidebar__list-icon">
                <use xlink:href="#icon-info"></use>
                <title>Info</title>
              </svg>
              <div>
                <h4 class="sidebar__list-title">
                  Further information</h4>
                <div>
                  <div class="sidebar__list-sub-title">Suitable for all ages.</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
```

## Vue Example

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
- button-link
 > anchor link of the button

### Usage

```html
  <sidebar title="Event information" title-icon="info" button-text="Book tickets" button-link="www.unimelb.edu.au" items="[{items object}]"></sidebar>
```