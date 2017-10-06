<template>
  <form class="form">
    <label for="t1">Label bound to input</label>
    <div>
      <input id="t1" type="text" placeholder="Text…">
    </div>

    <label>
      Label contains input
      <div>
        <input type="text">
      </div>
    </label>

    <fieldset>
      <label>
        Within fieldset
        <div>
          <input type="text">
        </div>
      </label>
    </fieldset>

    <hr>
    <h4>Using grid to set width</h4>

    <div class="grid grid--flex">
      <div class="cell--mob-1of2">
        <label>
          -1of2
          <div>
            <input type="text">
          </div>
        </label>
      </div>
      <div class="cell--mob-1of2">
        <label>-1of2</label>
        <div>
          <input type="text">
        </div>
      </div>
    </div>

    <div class="grid grid--flex">
      <div class="cell--mob-1of3">
        <label>
          -1of3
          <div>
            <input type="text">
          </div>
        </label>
      </div>
      <div class="cell--mob-1of3">
        <label>
          -1of3
          <div>
            <input type="text">
          </div>
        </label>
      </div>
      <div class="cell--mob-1of3">
        <label>
          -1of3
          <div>
            <input type="text">
          </div>
        </label>
      </div>
    </div>

    <div class="grid grid--flex">
      <div class="cell--mob-1of4">
        <label>
          -1of4
          <div class="field">
            <input type="text">
          </div>
        </label>
      </div>
      <div class="cell--mob-1of4">
        <label>
          -1of4
          <div>
            <input type="text">
          </div>
        </label>
      </div>
      <div class="cell--mob-1of4">
        <label>
          -1of4
          <div>
            <input type="text">
          </div>
        </label>
      </div>
      <div class="cell--mob-1of4">
        <label>
          -1of4
          <div>
            <input type="text">
          </div>
        </label>
      </div>
    </div>

    <div class="grid grid--flex">
      <div class="cell--mob-2of3">
        <label>
          -2of3
          <div>
            <input type="text">
          </div>
        </label>
      </div>
      <div class="cell--mob-1of3">
        <label>
          -1of3
          <div>
            <input type="text">
          </div>
        </label>
      </div>
    </div>

    <div class="grid grid--flex">
      <div class="cell--mob-1of4">
        <label>
          -1of4
          <div>
            <input type="text">
          </div>
        </label>
      </div>
      <div class="cell--mob-3of4">
        <label>
          -3of4
          <div>
            <input type="text">
          </div>
        </label>
      </div>
    </div>

  </form>
</template>
