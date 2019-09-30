<template>
  <div
    class="page-header__darken--o50"
    style="background-image: url(https://placeimg.com/990/530/arch/1)">
    <header class="page-header page-header--l2 page-header--no-logo">
      <div class="page-header--center">
        <div class="max max--xsml text-center shim-pb2">
          <h1 class="shim-mb1">
            Talent for every<br>possible outcome
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
import CardPathfinder from '../../../cards/CardPathfinder.vue';
import ButtonIcon from '../../../buttons/ButtonIcon.vue';

export default {
  components: {
    CardPathfinder,
    ButtonIcon,
  },
};
</script>
