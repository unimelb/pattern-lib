
## Testimonials alt

The component `TestimonialsAlt` acceps the following props:

| props    	   | type    	|
|------------- |---------	|
| title   	   | String  	|
| name      	 | String  	|
| img-src       | String   |
| video     	 | Object  	|
| long     	   | Boolean 	|
| autoplay     | Boolean	|

#### HTML Template

```html
<testimonials-alt
  name="Nigel Huang"
  title="What is it like studying online compared to on campus?"
  :video="{
    url: 'https://www.youtube.com/embed/MH5pJ4jokpI',
    duration: 28,
    preview: 'https://study.unimelb.edu.au/__data/assets/file/0022/265405/Byrd_Video.mp4',
  }"
  img-src="https://study.unimelb.edu.au/__data/assets/image/0021/265404/Byrd_Advice.jpg"
></testimonials-alt>
```
