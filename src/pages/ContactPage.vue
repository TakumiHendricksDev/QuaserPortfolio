<template>
  <q-page>
    <div class="q-pa-xl">
      <div class="text-h2-responsive q-mb-lg text-bold text-grey-9">Contact Me</div>
      <form @submit.prevent="sendEmail">
        <div class="q-mb-md">
          <label class="block text-h6-responsive q-mb-sm text-grey-9">Name</label>
          <q-input filled v-model="name" label="name" />
        </div>
        <div class="q-mb-md">
          <label class="block text-h6-responsive q-mb-sm text-grey-9">Email</label>
          <q-input filled v-model="email" label="email" />
        </div>
        <div class="q-mb-md">
          <label class="block text-h6-responsive q-mb-sm text-grey-9">Message</label>
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
      process.env.VUE_APP_EMAIL_SERVICE_ID,
      process.env.VUE_APP_EMAIL_TEMPLATE_ID,
      {
        from_name: name.value,
        message: message.value,
        reply_to: email.value,
      },
      process.env.VUE_APP_EMAIL_USER_ID
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
