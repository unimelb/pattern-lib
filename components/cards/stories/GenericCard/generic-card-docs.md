The Generic Card component can be create with 3 times of view (1/2/3 columns).
The component props (thumb/title/cols/href/excerpt);
You can add only 3 sub-titles in slots (sub-title-1/sub-title-2/sub-title-3/). Other sub-title slots will not render.
Cols props can more then 0 and less then 3.
The component have one slot for links.
```html
<SectionWrap class="bg-alt">
    <div class="grid grid--2col">
      <ListItem>
        <GenericCard
          :cols="2"
          title="Test 1"
        >
          <!--Slots-->
        </GenericCard>
      </ListItem>
      <ListItem>
        <GenericCard
          :cols="2"
          title="Test 1"
        >
          <!--Slots-->
        </GenericCard>
      </ListItem>
    </div>
  </SectionWrap>

```