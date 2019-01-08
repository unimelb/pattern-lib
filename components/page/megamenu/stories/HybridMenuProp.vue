<template>
  <MegaMenu
    :items="[{
      &quot;title&quot;: &quot;Study&quot;,
      &quot;href&quot;: &quot;https:\/\/study.unimelb.edu.au&quot;
    }, {
      &quot;title&quot;: &quot;Study with us&quot;,
      &quot;href&quot;: &quot;https:\/\/study.unimelb.edu.au\/study-with-us&quot;,
      &quot;items&quot;: [{
                            &quot;title&quot;: &quot;Our degrees&quot;,
                            &quot;href&quot;: &quot;https:\/\/study.unimelb.edu.au\/study-with-us\/our-degrees&quot;
                          },
                          {
                            &quot;title&quot;: &quot;Scholarships&quot;,
                            &quot;href&quot;: &quot;https:\/\/study.unimelb.edu.au\/study-with-us\/scholarships&quot;
                          },
                          {
                            &quot;title&quot;: &quot;Information for&quot;,
                            &quot;href&quot;: &quot;https:\/\/study.unimelb.edu.au\/study-with-us\/information-for&quot;
                          }
      ]
    }, {
      &quot;title&quot;: &quot;Find a course&quot;,
      &quot;href&quot;: &quot;https:\/\/study.unimelb.edu.au\/find&quot;
    }, {
      &quot;title&quot;: &quot;How to apply&quot;,
      &quot;href&quot;: &quot;https:\/\/study.unimelb.edu.au\/applications&quot;,
      &quot;items&quot;: [{
                            &quot;title&quot;: &quot;Undergraduate study&quot;,
                            &quot;href&quot;: &quot;https:\/\/study.unimelb.edu.au\/applications\/undergraduate-study&quot;
                          },
                          {
                            &quot;title&quot;: &quot;Graduate coursework study&quot;,
                            &quot;href&quot;: &quot;https:\/\/study.unimelb.edu.au\/applications\/graduate-study&quot;
                          },
                          {
                            &quot;title&quot;: &quot;Graduate research study&quot;,
                            &quot;href&quot;: &quot;https:\/\/study.unimelb.edu.au\/applications\/graduate-research&quot;
                          },
                          {
                            &quot;title&quot;: &quot;Single subject studies&quot;,
                            &quot;href&quot;: &quot;https:\/\/study.unimelb.edu.au\/applications\/single-subject-study&quot;
                          },
                          {
                            &quot;title&quot;: &quot;Exchange and Study Abroad program&quot;,
                            &quot;href&quot;: &quot;https:\/\/study.unimelb.edu.au\/applications\/study-abroad-and-exchange-program&quot;
                          },
                          {
                            &quot;title&quot;: &quot;Special entry and equity schemes&quot;,
                            &quot;href&quot;: &quot;https:\/\/study.unimelb.edu.au\/applications\/special-entry-scheme&quot;
                          },
                          {
                            &quot;title&quot;: &quot;Scholarships&quot;,
                            &quot;href&quot;: &quot;https:\/\/scholarships.unimelb.edu.au\/&quot;
                          },
                          {
                            &quot;title&quot;: &quot;Information for career practitioners&quot;,
                            &quot;href&quot;: &quot;https:\/\/study.unimelb.edu.au\/applications\/information-for-careers-practitioners&quot;
                          }
      ]
    }, {
      &quot;title&quot;: &quot;Your experience&quot;,
      &quot;href&quot;: &quot;https:\/\/study.unimelb.edu.au\/your-experience&quot;,
      &quot;items&quot;: [{
                            &quot;title&quot;: &quot;Reputation and rankings&quot;,
                            &quot;href&quot;: &quot;https:\/\/study.unimelb.edu.au\/your-experience\/reputation-rankings&quot;
                          },
                          {
                            &quot;title&quot;: &quot;Your support services&quot;,
                            &quot;href&quot;: &quot;https:\/\/study.unimelb.edu.au\/your-experience\/support-services&quot;
                          },
                          {
                            &quot;title&quot;: &quot;Your life on campus&quot;,
                            &quot;href&quot;: &quot;https:\/\/study.unimelb.edu.au\/your-experience\/campus-life&quot;
                          },
                          {
                            &quot;title&quot;: &quot;Making the most of Melbourne&quot;,
                            &quot;href&quot;: &quot;https:\/\/study.unimelb.edu.au\/your-experience\/making-the-most&quot;
                          },
                          {
                            &quot;title&quot;: &quot;Accommodation&quot;,
                            &quot;href&quot;: &quot;https:\/\/study.unimelb.edu.au\/your-experience\/accommodation&quot;
                          },
                          {
                            &quot;title&quot;: &quot;Your career&quot;,
                            &quot;href&quot;: &quot;https:\/\/study.unimelb.edu.au\/your-experience\/career&quot;
                          }
      ]
    }, {
      &quot;title&quot;: &quot;Connect with us&quot;,
      &quot;href&quot;: &quot;https:\/\/study.unimelb.edu.au\/connect-with-us&quot;,
      &quot;items&quot;: [{
                            &quot;title&quot;: &quot;View our brochures&quot;,
                            &quot;href&quot;: &quot;https:\/\/study.unimelb.edu.au\/connect-with-us\/view-our-brochures&quot;
                          },
                          {
                            &quot;title&quot;: &quot;Get updates&quot;,
                            &quot;href&quot;: &quot;https:\/\/study.unimelb.edu.au\/connect-with-us\/get-updates&quot;
                          },
                          {
                            &quot;title&quot;: &quot;Events&quot;,
                            &quot;href&quot;: &quot;https:\/\/study.unimelb.edu.au\/connect-with-us\/events&quot;
                          }
      ]
    }, {
      &quot;title&quot;: &quot;Open Day&quot;,
      &quot;href&quot;: &quot;https:\/\/study.unimelb.edu.au\/openday&quot;,
      &quot;items&quot;: [{
                            &quot;title&quot;: &quot;What&rsquo;s on&quot;,
                            &quot;href&quot;: &quot;https:\/\/study.unimelb.edu.au\/openday\/whats-on&quot;
                          },
                          {
                            &quot;title&quot;: &quot;Melbourne model&quot;,
                            &quot;href&quot;: &quot;https:\/\/study.unimelb.edu.au\/openday\/melbourne-model&quot;
                          },
                          {
                            &quot;title&quot;: &quot;Creative competitions&quot;,
                            &quot;href&quot;: &quot;https:\/\/study.unimelb.edu.au\/openday\/creative-competitions&quot;
                          },
                          {
                            &quot;title&quot;: &quot;Getting here&quot;,
                            &quot;href&quot;: &quot;https:\/\/study.unimelb.edu.au\/openday\/getting-here&quot;
                          },
                          {
                            &quot;title&quot;: &quot;What&rsquo;s on (link to itinerary)&quot;,
                            &quot;href&quot;: &quot;https:\/\/openday.unimelb.edu.au\/plan-my-day&quot;
                          }
      ]
  }]"
  />
</template>

<script>
import { codeBlock } from "../../../../.storybook/utils";
import MegaMenu from "../MegaMenu.vue";
import JSON from "../sample.json";

const markup = codeBlock(`
<mega-menu :items='[
  {
    "title": "Menu title",
    "href": "/url",
    "items": [
      {
        "title": "Sub-menu title",
        "href": "/sub-url",
      },
      {
        "title": "Sub-menu title 2",
        "href": "/sub-url-2",
      },
    ]
  },
  {
    "title": "Menu title 2",
    "href": "/url-2",
  }
]' active="/url-to-match" />
`);

export default {
  components: { MegaMenu },
  data: () => ({
    json: JSON.menu
  }),
  readme: {
    custom: markup,
    source: false
  }
};
</script>
