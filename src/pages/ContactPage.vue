<template>
  <q-page>
    <div class="q-pa-xl">
      <div class="text-h2 q-mb-lg">Contact Me</div>
      <form @submit.prevent="sendEmail">
        <div class="q-mb-md">
          <label class="block text-h6 q-mb-sm">Name</label>
          <q-input outlined v-model="name" label="name" />
        </div>
        <div class="q-mb-md">
          <label class="block text-h6 q-mb-sm">Email</label>
          <q-input outlined v-model="email" label="email" />
        </div>
        <div class="q-mb-md">
          <label class="block text-h6 q-mb-sm">Message</label>
          <div class="" style="max-width: 100%">
            <q-input v-model="message" filled type="textarea" />
          </div>
        </div>
        <q-btn color="primary" label="Send Email" type="submit" />
      </form>
    </div>
  </q-page>
</template>

<script setup>
import emailjs from "emailjs-com";
import { ref } from "vue";

const name = ref("");
const email = ref("");
const message = ref("");

function sendEmail(e) {
  try {
    emailjs.send(
      "service_qi9erf3",
      "template_9fyqu09",
      {
        from_name: name.value,
        message: message.value,
        reply_to: email.value,
      },
      "OaoPvE-6y9EBOWCQI"
    );
  } catch (error) {
    console.log({ error });
  }
  // Reset form field
  name.value = "";
  email.value = "";
  message.value = "";
}
</script>
