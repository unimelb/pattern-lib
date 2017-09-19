<template>
  <div v-on:click="preventClicks">
    <p>Lorem ipsum dolor, sit amet <a href="/foo.pdf">consectetur adipisicing elit (PDF, 125 KB)</a>. Praesentium quae tempora perferendis dolores fuga libero beatae blanditiis debitis consectetur eligendi reiciendis optio voluptatum, quam, illo vel quos aut hic labore! Lorem ipsum dolor, sit amet <a href="/foo.docx">consectetur (DOCX, 1.5 MB)</a> adipisicing elit.</p>
    <ul class="list-tight">
      <li><a href="/foo.pdf">PDF document (PDF, 1.5 MB)</a></li>
      <li><a href="/foo.docx">Word document (DOCX, 124 KB)</a></li>
      <li><a href="/foo.xlsx">Excel spreadsheet (XLSX, 100 KB)</a></li>
      <li><a href="/foo.pptx">PowerPoint presentation (PPTX, 100 KB)</a></li>
      <li><a href="/foo.ppsx">PowerPoint slideshow (PPSX, 100 KB)</a></li>
      <li><a href="/foo.key">Keynote presentation (KEY, 100 KB)</a></li>
      <li><a href="/foo.CSV">CSV file (CSV, 100 KB)</a></li>
    </ul>
    <ul class="list-tight">
      <li><a href="/foo.PDF">PDF document (PDF, 1.5 MB)</a> (with capitalised file extension, in supported browsers)</li>
      <li><a class="link-download" href="/foo">PDF document (PDF, 1.5 MB)</a> (force icon on)</li>
      <li><a class="link-download-off" href="/foo.pdf">PDF document (PDF, 1.5 MB)</a> (force icon off)</li>
    </ul>
  </div>
</template>

<script>
  module.exports = {
    methods: {
      preventClicks: (evt) => {
        evt.preventDefault();
      }
    }
  }
</script>
