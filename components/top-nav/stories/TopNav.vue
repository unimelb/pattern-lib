<template>
  <div id="sitemap" role="navigation">
    <h2>
      About us
    </h2>
    <ul>
      <li>
        <a href="/leadership">Leadership</a>
        <div class="inner" v-if="complex">
          <ul>
            <li>
              <a href="/leadership/chancellor">Chancellor</a>
              <div class="inner">
                <ul>
                  <li>
                    <a href="/leadership/chancellor/university-council">University Council</a>
                    <div class="inner">
                      <ul>
                        <li>
                          <a href="/leadership/chancellor/university-council/barry-hughes">Professor Barry Hughes</a>
                        </li>
                        <li>
                          <a href="/leadership/chancellor/university-council/frederik-vervaet">Associate Professor Frederik Vervaet</a>
                        </li>
                        <li>
                          <a href="/leadership/chancellor/university-council/jane-hansen">Ms Jane Hansen</a>
                        </li>
                        <li>
                          <a href="/leadership/chancellor/university-council/john-middleton">The Honorable Justice John Middleton</a>
                        </li>
                        <li>
                          <a href="/leadership/chancellor/university-council/kara-hadgraft">Ms Kara Hadgraft</a>
                        </li>
                        <li>
                          <a href="/leadership/chancellor/university-council/marilys-guillemin">Professor Marilys Guillemin</a>
                        </li>
                        <li>
                          <a href="/leadership/chancellor/university-council/mark-leibler">Mr Mark Leibler AC</a>
                        </li>
                        <li>
                          <a href="/leadership/chancellor/university-council/martyn-myer">Mr Martyn Myer AO</a>
                        </li>
                        <li>
                          <a href="/leadership/chancellor/university-council/nilss-olekalns">Professor Nilss Olekalns</a>
                        </li>
                        <li>
                          <a href="/leadership/chancellor/university-council/robin-batterham">Professor Robin John Batterham AO</a>
                        </li>
                        <li>
                          <a href="/leadership/chancellor/university-council/ross-mcpherson">Mr Ross McPherson</a>
                        </li>
                        <li>
                          <a href="/leadership/chancellor/university-council/tony-peake">Mr Tony Peake</a>
                        </li>
                        <li>
                          <a href="/leadership/chancellor/university-council/tyson-holloway-clarke">Mr Tyson Holloway-Clarke</a>
                        </li>
                        <li>
                          <a href="/leadership/chancellor/university-council/wendy-stops">Ms Wendy Stops</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="/leadership/office-of-the-vice-chancellor">Office of the Vice-Chancellor</a>
              <div class="inner">
                <ul>
                  <li>
                    <a href="/leadership/office-of-the-vice-chancellor/news-and-speeches">News and speeches</a>
                    <div class="inner">
                      <ul>
                        <li>
                          <a href="/leadership/office-of-the-vice-chancellor/news-and-speeches/launch-of-educating-australia">Launch of Educating Australia</a>
                        </li>
                        <li>
                          <a href="/leadership/office-of-the-vice-chancellor/news-and-speeches/mgse-professoriate-planning-day">MGSE Professoriate Planning Day</a>
                        </li>
                        <li>
                          <a href="/leadership/office-of-the-vice-chancellor/news-and-speeches/university-wominjeka-welcome">University Wominjeka (Welcome)</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="/leadership/office-of-the-vice-chancellor/past-vice-chancellors">Past Vice-Chancellors</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="/leadership/senior-leadership">Senior leadership</a>
              <div class="inner">
                <ul>
                  <li>
                    <a href="/leadership/senior-leadership/deputy-vice-chancellor-research">Deputy Vice-Chancellor (Research)</a>
                  </li>
                  <li>
                    <a href="/leadership/senior-leadership/head-of-university-services">Head of University Services</a>
                  </li>
                  <li>
                    <a href="/leadership/senior-leadership/provost">Provost</a>
                  </li>
                  <li>
                    <a href="/leadership/senior-leadership/vice-principal-administration-and-cfo">Vice-Principal (Administration and Finance) and Chief Financial Officer</a>
                  </li>
                  <li>
                    <a href="/leadership/senior-leadership/vice-principal-advancement">Vice-Principal (Advancement)</a>
                  </li>
                  <li>
                    <a href="/leadership/senior-leadership/vice-principal-engagement">Vice-Principal (Engagement)</a>
                  </li>
                  <li>
                    <a href="/leadership/senior-leadership/vice-principal-policy-and-projects">Vice-Principal (Policy and Projects)</a>
                  </li>
                  <li>
                    <a href="/leadership/senior-leadership/vice-chancellor">Vice-Chancellor</a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </li>
      <li>
        <a href="/our-history">Our history</a>
      </li>
      <li>
        <a href="/our-vision">Our vision</a>
      </li>
      <li v-if="complex">
        <a href="/alumni-and-staff">Alumni and staff</a>
      </li>
      <li v-if="complex">
        <a href="/ranking-and-stats">Rankings and statistics</a>
      </li>
      <li v-if="complex">
        <a href="/strategy">Strategy and governance</a>
        <div class="inner">
          <ul>
            <li>
              <a href="/strategy/growing-esteem">Growing Esteem</a>
              <div class="inner">
                <ul>
                  <li>
                    <a href="/strategy/growing-esteem/engagement">Engagement</a>
                  </li>
                  <li>
                    <a href="/strategy/growing-esteem/learning-and-teaching">Learning and teaching</a>
                  </li>
                  <li>
                    <a href="/strategy/growing-esteem/reconciliation">Reconciliation</a>
                  </li>
                  <li>
                    <a href="/strategy/growing-esteem/research">Research</a>
                  </li>
                  <li>
                    <a href="/strategy/growing-esteem/strategic-plans">Strategic plans</a>
                  </li>
                  <li>
                    <a href="/strategy/growing-esteem/sustainability">Sustainability</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="/strategy/melbourne-model">Melbourne Model</a>
            </li>
            <li>
              <a href="/strategy/our-structure">Our structure</a>
            </li>
          </ul>
        </div>
      </li>
      <li v-if="complex">
        <a href="/working-with-us">Working with us</a>
        <div class="inner">
          <ul>
            <li>
              <a href="/working-with-us/careers">Careers</a>
            </li>
            <li>
              <a href="/working-with-us/diversity-and-inclusion">Diversity and inclusion</a>
            </li>
            <li>
              <a href="/working-with-us/staff-benefits">Staff benefits</a>
            </li>
          </ul>
        </div>
      </li>
      <li v-if="complex">
        <a href="/news-and-resources">News and resources</a>
      </li>
    </ul>
    <ul class="localnav__meta">
      <li>
        <a href="https://search.unimelb.edu.au">Search</a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'TopNav',
    props: {
      complex: Boolean
    },
  }
</script>
