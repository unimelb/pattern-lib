<template>
  <SectionWrap bg-color="white">
    <AccordionGroup>
      <AccordionPanel title="Arts">
        <h3>As one of the world’s leading universities, we aspire to build on our distinguished traditions and create an innovative future.</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci alias, cumque, esse incidunt consequatur, accusantium odit blanditiis ipsam dolorem repellendus ut corporis earum, illum a maiores optio voluptate dicta.</p>
        <ButtonIcon size="xsml">I am a child component</ButtonIcon>
      </AccordionPanel>
      <AccordionPanel title="Science">
        <h3>As one of the world’s leading universities, we aspire to build on our distinguished traditions and create an innovative future.</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci alias, cumque, esse incidunt consequatur, accusantium odit blanditiis ipsam dolorem repellendus ut corporis earum, illum a maiores optio voluptate dicta.</p>
      </AccordionPanel>
    </AccordionGroup>
    <p>Second group:</p>
    <AccordionGroup>
      <AccordionPanel title="Arts 2">
        <h3>As one of the world’s leading universities, we aspire to build on our distinguished traditions and create an innovative future.</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci alias, cumque, esse incidunt consequatur, accusantium odit blanditiis ipsam dolorem repellendus ut corporis earum, illum a maiores optio voluptate dicta.</p>
      </AccordionPanel>
      <AccordionPanel title="An MCE form">
        <form id="form_email_1698962" enctype="multipart/form-data" action="https://resources.web.unimelb.edu.au/controlled-environment/help-guides/using-forms/default-form" method="post">
          <input type="hidden" name="SQ_FORM_1698962_PAGE" value="1" class="sq-form-field" id="SQ_FORM_1698962_PAGE">
          <input type="hidden" name="form_email_1698962_referral_url" value="">
          <fieldset class="sq-form-section">
            <legend class="sq-form-section-title">Details</legend>
            <div class="sq-form-question sq-form-question-text ">
              <label class="sq-form-question-title" for="q1698972_q1">Name <abbr class="sq-form-required-field" title="required">*</abbr></label>
              <div class="sq-form-question-answer">
                <input type="text" name="q1698972:q1" value="" size="30" maxlength="300" id="q1698972_q1" class="sq-form-field">
              </div>
            </div>
            <div class="sq-form-question sq-form-question-email-address ">
              <label class="sq-form-question-title" for="q1698972_q2">Email address <abbr class="sq-form-required-field" title="required">*</abbr></label>
              <div class="sq-form-question-answer">
                <input type="text" name="q1698972:q2" value="" size="30" maxlength="300" id="q1698972_q2" class="sq-form-field">
              </div>
            </div>
            <div class="sq-form-question sq-form-question-text ">
              <label class="sq-form-question-title" for="q1698972_q3">Comments</label>
              <em class="sq-form-question-note">This is a note that will be displayed next to the question.</em>
              <div class="sq-form-question-answer">
                <textarea name="q1698972:q3" cols="80" rows="10" onkeyup="if (this.value.length > 300) { this.value = this.value.substr(0,300); alert('This field can contain no more than 300 characters.'); this.focus()}" onblur="if (this.value.length > 300) { this.value = this.value.substr(0,300); alert('This field can contain no more than 300 characters.'); this.focus()}" id="q1698972_q3" class="sq-form-field"></textarea>
              </div>
            </div>
          </fieldset>
          <fieldset class="sq-form-section">
            <legend class="sq-form-section-title">Checkbox and radio buttons</legend>
            <div class="sq-form-question sq-form-question-tickbox-list ">
              <fieldset>
                <legend class="sq-form-question-title">Select preferred option <abbr class="sq-form-required-field" title="required">*</abbr></legend>
                <div class="sq-form-question-answer">
                  <ul>
                    <li>
                      <input type="checkbox" name="q1831802:q1[]" id="q1831802_q1_0" value="0" checked="checked" class="sq-form-field">
                      <label for="q1831802_q1_0">Option 1</label>
                    </li>
                    <li>
                      <input type="checkbox" name="q1831802:q1[]" id="q1831802_q1_1" value="1" class="sq-form-field">
                      <label for="q1831802_q1_1">Option 2</label>
                    </li>
                    <li>
                      <input type="checkbox" name="q1831802:q1[]" id="q1831802_q1_2" value="2" class="sq-form-field">
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
                      <input type="radio" name="q1831802:q2" id="q1831802_q2_0" value="0" class="sq-form-field">
                      <label for="q1831802_q2_0">Yes</label>
                    </li>
                    <li>
                      <input type="radio" name="q1831802:q2" id="q1831802_q2_1" value="1" class="sq-form-field">
                      <label for="q1831802_q2_1">No</label>
                    </li>
                    <li>
                      <input type="radio" name="q1831802:q2" id="q1831802_q2_2" value="2" class="sq-form-field">
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
              <label class="sq-form-question-title" for="q1831809_q1">Upload a file</label>
              <div class="sq-form-question-answer">
                <input type="file" name="q1831809:q1" id="q1831809_q1" class="sq-form-field">
              </div>
            </div>
          </fieldset>
          <fieldset class="sq-form-section">
            <legend class="sq-form-section-title">Dropdowns</legend>
            <div class="sq-form-question sq-form-question-select ">
              <label class="sq-form-question-title" for="q1831808_q1">Please make a selection</label>
              <div class="sq-form-question-answer">
                <select name="q1831808:q1" id="q1831808_q1" class="sq-form-field">
                  <option value="0" selected="selected">Option 1</option>
                  <option value="1">Option 2</option>
                  <option value="2">Option 3</option>
                </select>
              </div>
            </div>
          </fieldset>
          <input type="submit" name="form_email_1698962_submit" value="Submit" class="sq-form-submit" id="form_email_1698962_submit">
          <hr class="spacer">
          <p class="form__subtext">
            The information on this form is being collected by the University of Melbourne for further communication regarding various courses, programs and events at the University in which you have expressed interest. Information collected will only be used by authorised staff for the purpose for which it was collected and will be protected against unauthorized access and use. You can access any personal information the University holds about you. Contact the <a href="http://www.unimelb.edu.au/governance/compliance/privacy/contacts">Privacy Officer</a> to find out more. The <a href="http://www.unimelb.edu.au/governance/compliance/privacy">University’s Privacy Policy</a> is available online.
          </p>
        </form>
      </AccordionPanel>
    </AccordionGroup>
  </SectionWrap>
</template>

<script>
import AccordionGroup from '../AccordionGroup.vue';
import AccordionPanel from '../AccordionPanel.vue';

export default {
  components: { AccordionGroup, AccordionPanel },
  readme: { html: true, source: false },
};
</script>
