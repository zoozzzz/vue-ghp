<script lang="ts" setup>
import { ref } from "vue";
import { onMounted } from "vue";
import { Marked } from "marked";
import { markedHighlight } from "marked-highlight";
import hljs from "highlight.js";
import resume from "./resume.md?raw";

const articleDetails = ref();

const marked = new Marked(
  markedHighlight({
    langPrefix: "hljs language-",
    highlight(code, lang, info) {
      const language = hljs.getLanguage(lang) ? lang : "plaintext";
      return hljs.highlight(code, { language }).value;
    },
  })
);

onMounted(() => {
  const content = resume;

  articleDetails.value = marked.parse(content);
});
</script>

<template>
  <div class="markdown-body">
    <div v-html="articleDetails" class="markdown-body"></div>
  </div>
</template>

<style scoped lang="less"></style>
