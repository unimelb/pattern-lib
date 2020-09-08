<template>
  <div
    class="page-header__darken--o50 page-header--campaign"
    style="background-image: url('https://picsum.photos/id/1033/990/530.jpg');">
    <header class="page-header page-header--l1 page-header--no-logo">
      <div class="page-header--center">
        <div class="max max--xsml text-center shim-pb2">
          <h1 class="shim-mb1">
            Talent for every
            <br>possible outcome
          </h1>
          <h3 class="shim-mb2">
            Further details about this amazing campaign.
          </h3>
          <ButtonIcon class="btn--campaign">
            Call to Action
          </ButtonIcon>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import ButtonIcon from '../../../buttons/ButtonIcon.vue';

export default {
  components: {
    ButtonIcon,
  },
};
</script>
