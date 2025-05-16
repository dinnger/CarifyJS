<template>
  <div class="layout">
    <Header />
    <div class="main-container">
      <Sidebar>
        <SidebarSection title="General Usage" :items="[
          { label: 'Overview', href: '#', active: false }
        ]" />
        <SidebarSection title="REST API" :items="[
          { label: 'Twilio\'s Rest APIs', href: '#', active: true },
          { label: 'What is a REST API, anyway?', href: '#' },
          { label: 'Working with Twilio\'s APIs', href: '#' },
          { label: 'Authenticate with HTTP', href: '#' },
          { label: 'Authenticate using the Twilio SDKs', href: '#' },
          { label: 'How Twilio\'s APIs use webhooks', href: '#' },
          { label: 'Explore the APIs', href: '#' },
          { label: 'Send an SMS with Twilio\'s API', href: '#' },
          { label: 'Explore Twilio\'s other APIs', href: '#' }
        ]" />
      </Sidebar>
      <div class="content-area">
        <Content>
          <div class="page-content">
            <slot />
          </div>
        </Content>
        <div class="code-sidebar">
          <CodePanel title="Send a simple SMS using the Programmable SMS API"
            :languages="['NODE.JS', 'PYTHON', 'C#', 'JAVA', 'GO', 'PHP', 'RUBY', 'TWILIO-CLI', 'CURL']">
            <template #default="{ activeTab }">
              <pre v-if="activeTab === 0" class="code-sample">
// Download the helper library from https://www.twilio.com/docs
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
    body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
    from: '+15017122661',
    to: '+15558675310'
  })
  .then(message => console.log(message.sid));</pre>
              <pre v-else class="code-sample">
// Código para otros lenguajes de programación
</pre>
            </template>
          </CodePanel>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Content from "../components/Content.vue";
import Link from "../components/Link.vue";
import Logo from "../components/Logo.vue";
import Sidebar from "../components/Sidebar.vue";
import Header from "../components/Header.vue";
import SidebarSection from "../components/SidebarSection.vue";
import CodePanel from "../components/CodePanel.vue";
</script>

<style>
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: #2d3748;
  background-color: #f7fafc;
}

* {
  box-sizing: border-box;
}

a {
  text-decoration: none;
}
</style>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-container {
  display: flex;
  flex-grow: 1;
}

.content-area {
  flex-grow: 1;
  display: flex;
}

.page-content {
  padding: 20px;
  padding-bottom: 50px;
  max-width: 800px;
}

.code-sidebar {
  width: 600px;
  padding: 20px;
  background-color: #f7fafc;
}

/* Page Transition Animation */
#page-content {
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
}

body.page-is-transitioning #page-content {
  opacity: 0;
}

.code-sample {
  margin: 0;
  white-space: pre-wrap;
  color: #a0aec0;
  font-family: 'Courier New', monospace;
}
</style>
