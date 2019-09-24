<template>
  <ModalDialog
    title="Register your details"
    trigger="Enter the competition"
  >
    <form class="form">
      <label>
        E-mail
        <div>
          <input
            tabindex="1"
            type="email"
            name="f[email]"
            placeholder="jane@example.com"
          >
        </div>
      </label>
      <label>
        First name
        <div>
          <input
            tabindex="2"
            type="text"
            name="f[text1]"
            placeholder="Jane"
          >
        </div>
      </label>
      <label>
        Last name
        <div>
          <input
            tabindex="3"
            type="text"
            name="f[text2]"
            placeholder="Example"
          >
        </div>
      </label>
      <p>
        <label>
          <input
            tabindex="4"
            type="checkbox"
            name="f[acceptance]"
            value="y"
          >
          I agree with the <a href="/tandc">terms &amp; conditions.</a>
        </label>
      </p>
      <input
        tabindex="5"
        type="submit"
      >
    </form>
  </ModalDialog>
</template>

<script>
import ModalDialog from '../ModalDialog.vue';

export default {
  components: { ModalDialog },
  readme: { html: true, source: false },
};
</script>
