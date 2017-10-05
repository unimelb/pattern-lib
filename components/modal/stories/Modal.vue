<template>
  <div class="fr-dialogmodal js-fr-dialogmodal fr-dialogmodal--is-ready" id="modal-1" aria-hidden="true">
    <div class="fr-dialogmodal-modal js-fr-dialogmodal-modal" aria-labelledby="modal-1-title" role="dialog">
      <div role="document">
        <h2 id="modal-1-title">Register your details</h2>
        <form class="form">
          <label>
            E-mail
            <div>
              <input tabindex="1" type="email" name="f[email]" placeholder="jane@example.com">
            </div>
          </label>
          <fieldset>
            <p>
              <label>
                <input tabindex="2" type="checkbox" name="f[acceptance]" value="y">
                I agree with the <a href="/tandc">terms &amp; conditions.</a>
              </label>
            </p>
          </fieldset>
          <input tabindex="3" type="submit">
        </form>
        <br>
        <button class="fr-dialogmodal-close js-fr-dialogmodal-close" aria-label="Close Dialog" type="button">&#x2715;</button>
      </div>
    </div>
  </div>
</template>

<script>
import Frdialogmodal from '../dialogmodal.js';

export default {
  name: 'Modal',
  mounted: Frdialogmodal,
};
</script>
