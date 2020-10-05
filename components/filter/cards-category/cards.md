## Cards Filter Categories component

Once a user clicks on `Filter` the array in the `:data` prop will be used for client-side filtering.

 ### Example

 ```javascript
<cards-filter-category
    :data='[
    {
        "title": "Masters Exhibition 2018",
        "link": "https://matrix-cms.unimelb.edu.au/ffam-dev/showcase/masters-exhibition-2018",
        "type": "Course overviews",
        "study_level": "Undergraduate",
        "disciplines": [
            "Visual Art"
        ],
        "img_url": "https://matrix-cms.unimelb.edu.au/__data/assets/image/0027/76743/varieties/thumb.jpg",
        "duration": "10",
        "location": "Margaret Lawrence Gallery and The Stables"
    },
    {
        "title": "Master of Coin",
        "link": "https://matrix-cms.unimelb.edu.au/ffam-dev/showcase/wilin-jams-2018",
        "type": "Major overviews",
        "study_level": "Undergraduate",
        "disciplines": [
            "Indigenous Arts and Culture"
        ],
        "img_url": "https://matrix-cms.unimelb.edu.au/__data/assets/image/0026/76373/varieties/thumb.jpg",
        "duration": "10",
        "location": "Performing Arts Building"
    }]' >
</cards-filter-category>
```