<template>
  <div>
    <SectionWrap
      short
      bg-color="alt"
    >
      <h1 class="shim-mt1 shim-mb1">Tabbed section</h1>
    </SectionWrap>
    <section>
      <Tabs class="bg-alt">
        <Tab title="Use">
          <p>We write using the conventions and principles of modern Australian English.</p>
          <p> Our style is simple and accessible, and often conversational in tone. We avoid archaic language, euphemisms and slang. Australian English is continuously evolving, so always refer to the latest edition of the Macquarie Dictionary (Macquarie Dictionary Publishers) and Style Manual: For Authors, Editors and Printers (John Wiley & Sons) for Australia’s most up-to-date spelling and grammar conventions.</p>
          <ButtonIcon size="xsml">I am a child component</ButtonIcon>
        </Tab>
        <Tab title="Inclusive language">
          <p>We always use inclusive language, avoiding stereotypical and offensive terms that unnecessarily categorise people by attributes such as race, gender or disability. For example, say ‘student’ rather than ‘Asian student’, ‘chairperson’ in place of ‘chairman’ and ‘person with a disability’ instead of ‘disabled person’.</p>
        </Tab>
        <Tab title="An MCE form">
          <form
            id="form_email_1698962"
            enctype="multipart/form-data"
            action="https://resources.web.unimelb.edu.au/controlled-environment/help-guides/using-forms/default-form"
            method="post">
            <input
              id="SQ_FORM_1698962_PAGE"
              type="hidden"
              name="SQ_FORM_1698962_PAGE"
              value="1"
              class="sq-form-field">
            <input
              type="hidden"
              name="form_email_1698962_referral_url"
              value="">
            <fieldset class="sq-form-section">
              <legend class="sq-form-section-title">Details</legend>
              <div class="sq-form-question sq-form-question-text ">
                <label
                  class="sq-form-question-title"
                  for="q1698972_q1">Name <abbr
                    class="sq-form-required-field"
                    title="required">*</abbr></label>
                <div class="sq-form-question-answer">
                  <input
                    id="q1698972_q1"
                    type="text"
                    name="q1698972:q1"
                    value=""
                    size="30"
                    maxlength="300"
                    class="sq-form-field">
                </div>
              </div>
              <div class="sq-form-question sq-form-question-email-address ">
                <label
                  class="sq-form-question-title"
                  for="q1698972_q2">Email address <abbr
                    class="sq-form-required-field"
                    title="required">*</abbr></label>
                <div class="sq-form-question-answer">
                  <input
                    id="q1698972_q2"
                    type="text"
                    name="q1698972:q2"
                    value=""
                    size="30"
                    maxlength="300"
                    class="sq-form-field">
                </div>
              </div>
              <div class="sq-form-question sq-form-question-text ">
                <label
                  class="sq-form-question-title"
                  for="q1698972_q3">Comments</label>
                <em class="sq-form-question-note">This is a note that will be displayed next to the question.</em>
                <div class="sq-form-question-answer">
                  <textarea
                    id="q1698972_q3"
                    name="q1698972:q3"
                    cols="80"
                    rows="10"
                    onkeyup="if (this.value.length > 300) { this.value = this.value.substr(0,300); alert('This field can contain no more than 300 characters.'); this.focus()}"
                    onblur="if (this.value.length > 300) { this.value = this.value.substr(0,300); alert('This field can contain no more than 300 characters.'); this.focus()}"
                    class="sq-form-field"/>
                </div>
              </div>
            </fieldset>
            <fieldset class="sq-form-section">
              <legend class="sq-form-section-title">Checkbox and radio buttons</legend>
              <div class="sq-form-question sq-form-question-tickbox-list ">
                <fieldset>
                  <legend class="sq-form-question-title">Select preferred option <abbr
                    class="sq-form-required-field"
                    title="required">*</abbr></legend>
                  <div class="sq-form-question-answer">
                    <ul>
                      <li>
                        <input
                          id="q1831802_q1_0"
                          type="checkbox"
                          name="q1831802:q1[]"
                          value="0"
                          checked="checked"
                          class="sq-form-field">
                        <label for="q1831802_q1_0">Option 1</label>
                      </li>
                      <li>
                        <input
                          id="q1831802_q1_1"
                          type="checkbox"
                          name="q1831802:q1[]"
                          value="1"
                          class="sq-form-field">
                        <label for="q1831802_q1_1">Option 2</label>
                      </li>
                      <li>
                        <input
                          id="q1831802_q1_2"
                          type="checkbox"
                          name="q1831802:q1[]"
                          value="2"
                          class="sq-form-field">
                        <label for="q1831802_q1_2">Option 3</label>
                      </li>
                    </ul>
                  </div>
                </fieldset>
              </div>
              <div class="sq-form-question sq-form-question-option-list ">
                <fieldset>
                  <legend class="sq-form-question-title">Make a selection (implicitly required)</legend>
                  <div class="sq-form-question-answer">
                    <ul>
                      <li>
                        <input
                          id="q1831802_q2_0"
                          type="radio"
                          name="q1831802:q2"
                          value="0"
                          class="sq-form-field">
                        <label for="q1831802_q2_0">Yes</label>
                      </li>
                      <li>
                        <input
                          id="q1831802_q2_1"
                          type="radio"
                          name="q1831802:q2"
                          value="1"
                          class="sq-form-field">
                        <label for="q1831802_q2_1">No</label>
                      </li>
                      <li>
                        <input
                          id="q1831802_q2_2"
                          type="radio"
                          name="q1831802:q2"
                          value="2"
                          class="sq-form-field">
                        <label for="q1831802_q2_2">Maybe</label>
                      </li>
                    </ul>
                  </div>
                </fieldset>
              </div>
            </fieldset>
            <fieldset class="sq-form-section">
              <legend class="sq-form-section-title">File upload</legend>
              <div class="sq-form-question sq-form-question-file-upload ">
                <label
                  class="sq-form-question-title"
                  for="q1831809_q1">Upload a file</label>
                <div class="sq-form-question-answer">
                  <input
                    id="q1831809_q1"
                    type="file"
                    name="q1831809:q1"
                    class="sq-form-field">
                </div>
              </div>
            </fieldset>
            <fieldset class="sq-form-section">
              <legend class="sq-form-section-title">Dropdowns</legend>
              <div class="sq-form-question sq-form-question-select ">
                <label
                  class="sq-form-question-title"
                  for="q1831808_q1">Please make a selection</label>
                <div class="sq-form-question-answer">
                  <select
                    id="q1831808_q1"
                    name="q1831808:q1"
                    class="sq-form-field">
                    <option
                      value="0"
                      selected="selected">Option 1</option>
                    <option value="1">Option 2</option>
                    <option value="2">Option 3</option>
                  </select>
                </div>
              </div>
            </fieldset>
            <input
              id="form_email_1698962_submit"
              type="submit"
              name="form_email_1698962_submit"
              value="Submit"
              class="sq-form-submit">
            <hr class="spacer">
            <p class="form__subtext">
              The information on this form is being collected by the University of Melbourne for further communication regarding various courses, programs and events at the University in which you have expressed interest. Information collected will only be used by authorised staff for the purpose for which it was collected and will be protected against unauthorized access and use. You can access any personal information the University holds about you. Contact the <a href="http://www.unimelb.edu.au/governance/compliance/privacy/contacts">Privacy Officer</a> to find out more. The <a href="http://www.unimelb.edu.au/governance/compliance/privacy">University’s Privacy Policy</a> is available online.
            </p>
          </form>
        </Tab>
      </Tabs>
    </section>
  </div>
</template>

<script>
import Tab from '../Tab.vue';
import Tabs from '../Tabs.vue';

export default {
  components: { Tab, Tabs },
  readme: { html: true, source: false },
};
</script>
