<template>
  <div>
    <p>Normal list (control):</p>
    <ul>
      <li>Check the degree website.</li>
      <li>Check the entry requirements to clarify your eligibility for application, duplicate instructions after to demonstrate a multiline item: Check the entry requirements to clarify your eligibility for application</li>
      <li>Ensure you meet the University's language requirements</li>
      <li>Apply online or via the hardcopy application form</li>
    </ul>

    <p>Ticked Item:</p>
    <ul>
      <li class="item-ticked">
        Check the degree website.
      </li>
    </ul>

    <p>Ticked list:</p>
    <ul class="list-ticked">
      <li>
        Check the degree website.
      </li>
      <li>
        Check the entry requirements to clarify your eligibility for application, duplicate instructions after to demonstrate a multiline item: Check the entry requirements to clarify your eligibility for application
      </li>
      <li>
        Ensure you meet the University's language requirements
      </li>
      <li>
        Apply online or via the hardcopy application form
      </li>
    </ul>

    <p>Crossed Item:</p>
    <ul>
      <li class="item-crossed">
        Check the degree website.
      </li>
    </ul>

    <p>Crossed list:</p>
    <ul class="list-crossed">
      <li>
        Check the degree website.
      </li>
      <li>
        Check the entry requirements to clarify your eligibility for application, duplicate instructions after to demonstrate a multiline item: Check the entry requirements to clarify your eligibility for application
      </li>
      <li>
        Ensure you meet the University's language requirements
      </li>
      <li>
        Apply online or via the hardcopy application form
      </li>
    </ul>

    <p>Video Item:</p>
    <ul>
      <li class="item-video">
        <a href="#">
          Play video 1
        </a>
      </li>
    </ul>

    <p>Video List:</p>
    <ul class="list-video">
      <li>
        <a href="#">
          Play video 1
        </a>
      </li>
      <li>
        <a href="#">
          Play video 2
        </a>
      </li>
      <li>
        <a href="#">
          Play video 3
        </a>
      </li>
      <li>
        <a href="#">
          Play video 4
        </a>
      </li>
    </ul>

    <p>Video list svg usage example:</p>
    <ul class="list-reset">
      <li>
        <svg
          width="16"
          height="16"
          aria-label="video-play"
          focusable="false"
          role="img"
          style="display: inline-block;">
          <use xlink:href="#icon-video-play" />
          <title>Video-play</title>
        </svg>
        <a href="#">
          Play video 1
        </a>
      </li>
      <li>
        <svg
          width="16"
          height="16"
          aria-label="video-play"
          focusable="false"
          role="img"
          style="display: inline-block;">
          <use xlink:href="#icon-video-play" />
          <title>Video-play</title>
        </svg>        <a href="#">
          Play video 2
        </a>
      </li>
      <li>
        <svg
          width="16"
          height="16"
          aria-label="video-play"
          focusable="false"
          role="img"
          style="display: inline-block;">
          <use xlink:href="#icon-video-play" />
          <title>Video-play</title>
        </svg>        <a href="#">
          Play video 3
        </a>
      </li>
      <li>
        <svg
          width="16"
          height="16"
          aria-label="video-play"
          focusable="false"
          role="img"
          style="display: inline-block;">
          <use xlink:href="#icon-video-play" />
          <title>Video-play</title>
        </svg>
        <a href="#">
          Play video 4
        </a>
      </li>
    </ul>

    <p>Mixed usage:</p>
    <ul>
      <li>Check the degree website.</li>
      <li class="item-ticked">
        Check the entry requirements to clarify your eligibility for application, duplicate instructions after to demonstrate a multiline item: Check the entry requirements to clarify your eligibility for application
      </li>
      <li class="item-ticked">
        A sublist
        <ul>
          <li>Check the degree website.</li>
          <li>Check the entry requirements to clarify your eligibility for application, duplicate instructions after to demonstrate a multiline item: Check the entry requirements to clarify your eligibility for application</li>
          <li class="item-ticked">
            Ensure you meet the University's language requirements
          </li>
          <li>Apply online or via the hardcopy application form</li>
        </ul>
      </li>
      <li class="item-crossed">
        Apply online or via the hardcopy application form
      </li>
      <li class="item-video">
        <a href="#">
          Play video 4
        </a>
      </li>
    </ul>

    <p>No bullet (list reset):</p>
    <ul class="list-reset">
      <li>Check the degree website.</li>
      <li>Check the entry requirements to clarify your eligibility for application, duplicate instructions after to demonstrate a multiline item: Check the entry requirements to clarify your eligibility for application</li>
      <li>Ensure you meet the University's language requirements</li>
      <li>Apply online or via the hardcopy application form</li>
    </ul>
  </div>
</template>
