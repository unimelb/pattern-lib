<template>
  <div class="header-tools">
    <PageSearch />
    <PageNav title="About Us" root="/about">
      <ul>
        <li>
          <AccordionGroup>
            <section title="The section is called Leadership but I want to test a long title">
              <ul class="sitenav__list">
                <li>
                  <AccordionGroup>
                    <section title="Chancellor">
                      <ul class="sitenav__list">
                        <li>
                          <AccordionGroup>
                            <section title="University Council">
                              <ul class="sitenav__list">
                                <li><a href="/leadership/chancellor/university-council/barry-hughes">Professor Barry Hughes</a></li>
                                <li><a href="/leadership/chancellor/university-council/frederik-vervaet">Associate Professor Frederik Vervaet</a></li>
                                <li><a href="/leadership/chancellor/university-council/jane-hansen">Ms Jane Hansen</a></li>
                                <li><a href="/leadership/chancellor/university-council/john-middleton">The Honorable Justice John Middleton</a></li>
                                <li><a href="/leadership/chancellor/university-council/kara-hadgraft">Ms Kara Hadgraft</a></li>
                                <li><a href="/leadership/chancellor/university-council/marilys-guillemin">Professor Marilys Guillemin</a></li>
                                <li><a href="/leadership/chancellor/university-council/mark-leibler">Mr Mark Leibler AC</a></li>
                                <li><a href="/leadership/chancellor/university-council/martyn-myer">Mr Martyn Myer AO</a></li>
                                <li><a href="/leadership/chancellor/university-council/nilss-olekalns">Professor Nilss Olekalns</a></li>
                                <li><a href="/leadership/chancellor/university-council/robin-batterham">Professor Robin John Batterham AO</a></li>
                                <li><a href="/leadership/chancellor/university-council/ross-mcpherson">Mr Ross McPherson</a></li>
                                <li><a href="/leadership/chancellor/university-council/tony-peake">Mr Tony Peake</a></li>
                                <li><a href="/leadership/chancellor/university-council/tyson-holloway-clarke">Mr Tyson Holloway-Clarke</a></li>
                                <li><a href="/leadership/chancellor/university-council/wendy-stops">Ms Wendy Stops</a></li>
                              </ul>
                            </section>
                          </AccordionGroup>
                        </li>
                      </ul>
                    </section>
                  </AccordionGroup>
                </li>
              </ul>
            </section>
          </AccordionGroup>
        </li>
        <li><a href="/news-and-media">News and Media</a></li>
      </ul>
    </PageNav>
  </div>
</template>

<script>
import PageNav from '../PageNav.vue';
import PageSearch from '../../search/PageSearch.vue';
import AccordionGroup from '../../../accordion/AccordionGroup.vue';

export default {
  components: { PageNav, PageSearch, AccordionGroup },
  readme: {
    html: true,
    source: false,
  },
};
</script>
