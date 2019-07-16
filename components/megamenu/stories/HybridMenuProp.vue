<template>
  <MegaMenu :items="items"/>
</template>

<script>
import MegaMenu from "../MegaMenu.vue";
import megaMenuDocs from "./mega-menu-docs.md";

const mockedItems = [
  {
    title: "Study",
    href: "https://study.unimelb.edu.au"
  },
  {
    title: "Study with us",
    href: "https://study.unimelb.edu.au/study-with-us",
    items: [
      {
        title: "Our degrees",
        href: "https://study.unimelb.edu.au/study-with-us/our-degrees"
      },
      {
        title: "Scholarships",
        href: "https://study.unimelb.edu.au/study-with-us/scholarships"
      },
      {
        title: "Information for",
        href: "https://study.unimelb.edu.au/study-with-us/information-for"
      }
    ]
  },
  {
    title: "Find a course",
    href: "https://study.unimelb.edu.au/find"
  },
  {
    title: "How to apply",
    href: "https://study.unimelb.edu.au/applications",
    items: [
      {
        title: "Undergraduate study",
        href: "https://study.unimelb.edu.au/applications/undergraduate-study"
      },
      {
        title: "Graduate coursework study",
        href: "https://study.unimelb.edu.au/applications/graduate-study"
      },
      {
        title: "Graduate research study",
        href: "https://study.unimelb.edu.au/applications/graduate-research"
      },
      {
        title: "Single subject studies",
        href: "https://study.unimelb.edu.au/applications/single-subject-study"
      },
      {
        title: "Exchange and Study Abroad program",
        href:
          "https://study.unimelb.edu.au/applications/study-abroad-and-exchange-program"
      },
      {
        title: "Special entry and equity schemes",
        href: "https://study.unimelb.edu.au/applications/special-entry-scheme"
      },
      {
        title: "Scholarships",
        href: "https://scholarships.unimelb.edu.au/"
      },
      {
        title: "Information for career practitioners",
        href:
          "https://study.unimelb.edu.au/applications/information-for-careers-practitioners"
      }
    ]
  },
  {
    title: "Your experience",
    href: "https://study.unimelb.edu.au/your-experience",
    items: [
      {
        title: "Reputation and rankings",
        href: "https://study.unimelb.edu.au/your-experience/reputation-rankings"
      },
      {
        title: "Your support services",
        href: "https://study.unimelb.edu.au/your-experience/support-services"
      },
      {
        title: "Your life on campus",
        href: "https://study.unimelb.edu.au/your-experience/campus-life"
      },
      {
        title: "Making the most of Melbourne",
        href: "https://study.unimelb.edu.au/your-experience/making-the-most"
      },
      {
        title: "Accommodation",
        href: "https://study.unimelb.edu.au/your-experience/accommodation"
      },
      {
        title: "Your career",
        href: "https://study.unimelb.edu.au/your-experience/career"
      }
    ]
  },
  {
    title: "Connect with us",
    href: "https://study.unimelb.edu.au/connect-with-us",
    items: [
      {
        title: "View our brochures",
        href: "https://study.unimelb.edu.au/connect-with-us/view-our-brochures"
      },
      {
        title: "Get updates",
        href: "https://study.unimelb.edu.au/connect-with-us/get-updates"
      },
      {
        title: "Events",
        href: "https://study.unimelb.edu.au/connect-with-us/events"
      }
    ]
  },
  {
    title: "Open Day",
    href: "https://study.unimelb.edu.au/openday",
    items: [
      {
        title: "What&rsquo;s on",
        href: "https://study.unimelb.edu.au/openday/whats-on"
      },
      {
        title: "Melbourne model",
        href: "https://study.unimelb.edu.au/openday/melbourne-model"
      },
      {
        title: "Creative competitions",
        href: "https://study.unimelb.edu.au/openday/creative-competitions"
      },
      {
        title: "Getting here",
        href: "https://study.unimelb.edu.au/openday/getting-here"
      },
      {
        title: "What&rsquo;s on (link to itinerary)",
        href: "https://openday.unimelb.edu.au/plan-my-day"
      }
    ]
  }
];
export default {
  components: { MegaMenu },
  readme: { custom: megaMenuDocs, source: true, html: true },

  data() {
    return {
      items: mockedItems
    };
  }
};
</script>
