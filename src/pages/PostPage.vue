<template>
  <q-page>
    <div class="q-pa-xl">
      <div class="text-h2 text-bold text-grey-9 q-mb-md">{{ post.title }}</div>
      <div class="text-h4 text-grey-8">{{ post.description }}</div>
      <vue-markdown
        :source="markdownContent"
        :options="md.options"
        :plugins="plugins"
      />
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
import { ref as storageRef, getDownloadURL } from "firebase/storage";

// Initialize Markdown
const md = markdownit({
  html: true,
  linkify: true,
  typographer: true,
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return (
          '<pre class="code-block"><code class="hljs">' +
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

async function getMarkdownFile(filePath) {
  const fileRef = storageRef(storage, filePath);
  const fileURL = await getDownloadURL(fileRef);
  return fileURL;
}

async function fetchMarkdownFile(filePath) {
  const fileURL = await getMarkdownFile(filePath);
  const response = await fetch(fileURL);
  const text = await response.text();
  return text;
}

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
  markdownContent.value = await fetchMarkdownFile(post.value.content_url);
  console.log(post.value);
});
</script>
