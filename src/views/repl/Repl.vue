<script setup>
import { Repl } from '@vue/repl'
import CodeMirror from '@vue/repl/codemirror-editor'
// import '@vue/repl/style.css'
// ^ no longer needed after 3.0
</script>

<template>
  <Repl :editor="CodeMirror" />
</template>