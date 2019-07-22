## Cards Filter component

The prop `show-ssr` can be used to show server side code from another source (ie, CMS).  This is useful for SEO purposes.  

Once a user clicks on `Search` the array in the `:data` prop will be used for client-side filtering.

 ### Example

 ```javascript
<cards-filter
    :data='[{
    "title": "Masters Exhibition 2018",
    "link": "https://matrix-cms.unimelb.edu.au/ffam-dev/showcase/masters-exhibition-2018",
    "description": "Masters Exhibition 2018 by Visual Art Postgraduates at the Victorian College of the Arts",
    "performance": [
        "Exhibition"
    ],
    "school": "Victorian College of the Arts",
    "disciplines": [
        "Visual Art"
    ],
    "img_url": "https://matrix-cms.unimelb.edu.au/__data/assets/image/0027/76743/varieties/thumb.jpg",
    "start_time": "2018-12-01",
    "location": "Margaret Lawrence Gallery and The Stables"
},
{
    "title": "Wilin Jams 2018",
    "link": "https://matrix-cms.unimelb.edu.au/ffam-dev/showcase/wilin-jams-2018",
    "description": "Wilin Centre for Indigenous Arts and Culture event Wilin Jams",
    "performance": [
        "Event"
    ],
    "school": "Victorian College of the Arts",
    "disciplines": [
        "Indigenous Arts and Culture"
    ],
    "img_url": "https://matrix-cms.unimelb.edu.au/__data/assets/image/0026/76373/varieties/thumb.jpg",
    "start_time": "2018-11-29",
    "location": "Performing Arts Building"
}]'
show-ssr>
    <div>Server-side code goes here</div>
</cards-filter>
```