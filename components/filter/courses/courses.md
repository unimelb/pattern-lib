## Courses Filter component

Once a user clicks on `Filter` the array in the `:data` prop will be used for client-side filtering.

 ### Example

 ```javascript
<courses-filter
    :data='[
    {
        "title": "Graduate Certificate in Visual Art",
        "url": "https://study.unimelb.edu.au/find/courses/graduate/graduate-certificate-in-visual-art",
        "faculty": "Fine Arts and Music",
        "area_of_interest": "Arts",
        "delivery_modes": [
            "On Campus"
        ],
        "csp": false
    },
    {
        "title": "Graduate Certificate in Youth Mental Health",
        "url": "https://study.unimelb.edu.au/find/courses/graduate/graduate-certificate-in-youth-mental-health",
        "faculty": "Medicine, Dentistry and Health Sciences - MSPACE",
        "area_of_interest": "Mental health, psychology and social work",
        "delivery_modes": [
            "Online"
        ],
        "csp": false
    }]' >
</courses-filter>
```