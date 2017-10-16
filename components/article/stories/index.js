import { storiesOf } from '@storybook/vue';
import { withKnobs, text } from '@storybook/addon-knobs';

import ArticleStory from './ArticleStory.vue';
import ArticleInset from './ArticleInset.vue';
import BlockQuotation from '../../block-quotation/BlockQuotation.vue';

storiesOf('Article', module)
  .addDecorator((story) => {
    const Story = story();
    return {
      components: { Story },
      template: `
        <main>
          <div class="max">
            <Story/>
          </div>
        </main>`,
    };
  })
  .addDecorator(withKnobs)
  .add(
    'Basic Article',
    () => ({
      components: { ArticleStory },
      template: `
          <div>
            <article-story>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta officiis possimus accusamus esse obcaecati odio error asperiores nemo ducimus, aperiam minus exercitationem, aspernatur voluptatem, natus animi ullam odit. Laborum, error.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta officiis possimus accusamus esse obcaecati odio error asperiores nemo ducimus, aperiam minus exercitationem, aspernatur voluptatem, natus animi ullam odit. Laborum, error.</p>
            </article-story>
          </div>
        `,
    })
  )
  .add(
    'Article',
    (() => {
      const title = text('Title', 'MGSE Professoriate Planning Day');
      const author = text('Contact', 'John Smith');
      const phone = text('Phone', '+613 4234 2344');
      const email = text('Email', 'john.smith@unimelb.edu.au');
      const content = text('Content', `<div>
              <h3>Test this is a subtitle that has been added from the WYSIWYG editor</h3>
              <p>
                Thank you Johanna. It is a great pleasure to be here, and I am honoured to ask to start off a day of serious discussions amongst the academic leadership at a great graduate school of education.
              </p>
              <p>
                I’m conscious of what an important time this is with the departure of an outstanding leader in Professor Field Rickards. His contribution in 13 years as Dean (and indeed 43 years at the University) includes the transformation of the Faculty of Education into the MGSE and the reorganisation of professional teacher education at Melbourne, which has resulted in the school achieving stellar international rankings.
              </p>
              <p>
                From a wider University perspective, Field and the School have played an important role in shaping the Melbourne Curriculum (sometimes known as the Melbourne Model), with the Master of Teaching undoubtedly one its flagship degrees.
              </p>
              <p>
                More recently, through courses including the Master of Clinical Teaching, the clinical teaching model has begun reaching a generation of practising teaching professionals and leaders, as well as helping shape new teachers who are just beginning their classroom careers.
              </p>
              <p>
                It is important to note also that this School inherits a great tradition of education practice and scholarship, through 20 years of leadership by Dean and later Vice-Chancellor Professor Kwong Lee Dow. Since departing as dean Kwong has been a recognised leader of education debate and policy-making – embodying the idea of scholarly engagement in the community. He remains a role model for what a great engaged school and faculty of education can be.
              </p>
              <p>
                Scholarly engagement in the community is something which remains characteristic of the Melbourne Graduate School of Education to the present day. Last year’s successful ABC television series<em>&nbsp; Revolution School &nbsp;</em>is only one recent example.
              </p>
              <p>
                With such a legacy to build on, it seems to me the ongoing discussions you are now having about the future vision for this School should proceed with enormous confidence and optimism.
              </p>
              <p>
                So what are some of the challenges you might face in as you contemplate the future? A couple of broad questions might be relevant here.
              </p>
              <p>
                The first concerns the way education in general, and schools in particular, are increasingly being asked to sort out and settle a wide number of social problems – to solve all ills from the economic to the social and political; even health problems. How are teachers and educational leaders being prepared for the position of great social responsibility this places on their shoulders?
              </p>
              <p>
                The second concerns the multifaceted and rapid technological change of very recent years, and the impacts of this change on how we learn and how we teach. How important is technological change to learning? As a university and as a school, are we doing all we can to lead a way into the future in response to this question?
              </p>
              <p>
                The many experts present today will have answers to these questions. But I at least suggest that we need not be afraid of the possibilities for school or university in the face of technology.
              </p>
              <p>
                For example in a 2013 article two scholars, Cooper and Sahami <a data-bound='true' href='#_ftn1' name='_ftnref1' title=''>[1]</a> analysed the history of distance and online learning at Stanford. They concluded with the welcome news that teachers are not about to be made obsolete just because of the rise of online learning.
              </p>
              <p>
                “It was Thomas Edison who believed that the advent of the phonograph would completely revolutionize education, rendering teachers obsolete”, they write. Many similar predictions have been made since Edison, Cooper and Sahami say. However, “Online education can augment more traditional instruction”, they conclude.
              </p>
              <p>
                Technological change means all sort of new ways of doing things, not only online but also in the classroom. Earlier this week I opened Studio 156, the new Production Studios on this campus for our Learning Environments and Graduate Online Melbourne teams.
              </p>
              <p>
                At Studio 156 you will find brilliant people, both professional and academic colleagues, working together in creative ways with new technology to find ways of enhancing learning, for students on campus and those taking degree programs online. It suggests that like Edison’s phonograph, the technology of the moment poses an opportunity, rather than a threat, for all those concerned with creating the best teaching and learning experiences for students everywhere.
              </p>
              <p>
                So as we think about the future of the School, we can afford an entirely positive mindset. We have great assets to build on, left us by the present generation of researchers and academics in the School, and the great contributors of the past.
              </p>
              <p>
                We also have exciting opportunities, because of the change in our midst and because of the passion that surround us about education and all that it can achieve.
              </p>
              <p>
                This School is truly in a world-leading position. You occupy a great position at the intersection of technology and learning, as well as on the forefront of the knowledge base about every aspect of learning and classroom practice. That gives us plenty to think about as we set a course for the future.
              </p>
              </div>
            `);
      return {
        components: { ArticleStory },
        template: `
          <div>
            <article-story
              title="${title}"
              author="${author}"
              phone="${phone}"
              email="${email}"
            >
            ${content}
            </div>
          </div>
        `,
      };
    }
    )
  )
  .add('Article Without Sidebar', () => ({
    components: { ArticleInset },
    template: `
        <section-wrap small>
          <article-inset />
        </section-wrap>
      `,
  }))
  .add(
    'Article with blockquote',
    (() => ({
      components: { ArticleStory, BlockQuotation },
      template: `
            <article-story title="This is an article with a blockquote" >
              <h3>Test this is a subtitle that has been added from the WYSIWYG editor</h3>
              <p>
                Thank you Johanna. It is a great pleasure to be here, and I am honoured to ask to start off a day of serious discussions amongst the academic leadership at a great graduate school of education.
              </p>
              <p>
                I’m conscious of what an important time this is with the departure of an outstanding leader in Professor Field Rickards. His contribution in 13 years as Dean (and indeed 43 years at the University) includes the transformation of the Faculty of Education into the MGSE and the reorganisation of professional teacher education at Melbourne, which has resulted in the school achieving stellar international rankings.
              </p>
              <p>
                From a wider University perspective, Field and the School have played an important role in shaping the Melbourne Curriculum (sometimes known as the Melbourne Model), with the Master of Teaching undoubtedly one its flagship degrees.
              </p>
              <div>

              <BlockQuotation borderTop borderBottom author="Donald J. Trump">Some girls are just born with glitter in their veins</BlockQuotation>

              </div>
              <p>
                More recently, through courses including the Master of Clinical Teaching, the clinical teaching model has begun reaching a generation of practising teaching professionals and leaders, as well as helping shape new teachers who are just beginning their classroom careers.
              </p>
              <p>
                It is important to note also that this School inherits a great tradition of education practice and scholarship, through 20 years of leadership by Dean and later Vice-Chancellor Professor Kwong Lee Dow. Since departing as dean Kwong has been a recognised leader of education debate and policy-making – embodying the idea of scholarly engagement in the community. He remains a role model for what a great engaged school and faculty of education can be.
              </p>
              <p>
                Scholarly engagement in the community is something which remains characteristic of the Melbourne Graduate School of Education to the present day. Last year’s successful ABC television series<em>&nbsp; Revolution School &nbsp;</em>is only one recent example.
              </p>
              <p>
                With such a legacy to build on, it seems to me the ongoing discussions you are now having about the future vision for this School should proceed with enormous confidence and optimism.
              </p>
              <p>
                So what are some of the challenges you might face in as you contemplate the future? A couple of broad questions might be relevant here.
              </p>
              <p>
                The first concerns the way education in general, and schools in particular, are increasingly being asked to sort out and settle a wide number of social problems – to solve all ills from the economic to the social and political; even health problems. How are teachers and educational leaders being prepared for the position of great social responsibility this places on their shoulders?
              </p>
              <p>
                The second concerns the multifaceted and rapid technological change of very recent years, and the impacts of this change on how we learn and how we teach. How important is technological change to learning? As a university and as a school, are we doing all we can to lead a way into the future in response to this question?
              </p>
            </article-story>
        `,
    })
    )
  );
