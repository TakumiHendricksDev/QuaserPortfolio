<template>
  <q-page>
    <div class="q-pa-xl">
      <div class="text-h2-responsive text-bold text-grey-9 q-mb-md">
        {{ post.title }}
      </div>
      <div class="text-h6-responsive text-grey-8 q-mb-xl">
        {{ post.description }}
      </div>
      <div class="q-pa-lg bg-grey-1 markdown-container">
        <vue-markdown
          :source="markdownContent"
          :options="md.options"
          :plugins="plugins"
        />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { doc, getDoc } from "firebase/firestore";
import { db, storage } from "../firebase/firebase";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import VueMarkdown from "vue-markdown-render";
import MarkdownItAnchor from "markdown-it-anchor";
import markdownit from "markdown-it";
import hljs from "highlight.js"; // https://highlightjs.org
import "highlight.js/styles/xcode.css";
import { fetchFile } from "src/utils/util";

// Initialize Markdown
const md = markdownit({
  html: true,
  linkify: true,
  typographer: true,
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return (
          '<pre><code class="hljs">' +
          hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
          "</code></pre>"
        );
      } catch (__) {}
    }

    return (
      '<pre><code class="hljs">' + md.utils.escapeHtml(str) + "</code></pre>"
    );
  },
});

// plugins
const plugins = [MarkdownItAnchor];

const post = ref([]);
const markdownContent = ref("");
const route = useRoute();

async function getPost() {
  const postId = route.params.id; // assuming the id is passed as a route parameter
  const postDocRef = doc(db, "post", postId);
  const postSnapshot = await getDoc(postDocRef);
  if (postSnapshot.exists()) {
    return postSnapshot.data();
  } else {
    console.log("No such document!");
  }
}

onMounted(async () => {
  post.value = await getPost();
  markdownContent.value = await fetchFile(post.value.content_url);
});
</script>
