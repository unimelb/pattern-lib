<template>
  <div>
    <modal-dialog title="Register your details" trigger="Enter the competition">
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
    </modal-dialog>
    <modal-dialog title="Another modal dialog" trigger="Another modal dialog">
      <p>This one just has straight content, no forms to be had.</p>
    </modal-dialog>
  </div>
</template>

<script>
import ModalDialog from '../ModalDialog.vue';

export default {
  components: { ModalDialog },
};
</script>
