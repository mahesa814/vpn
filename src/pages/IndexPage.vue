<template>
  <div>
    <h1>OpenVPN Component</h1>
<!--    <button @click="connectToOpenVPN">Connect</button>-->
<!--    <button @click="disconnectFromOpenVPN">Disconnect</button>-->
  </div>
</template>

<script>
// Import the node-openvpn package
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import OpenVPN from 'node-openvpn';

// import Telnet from 'telnet-client';
export default {
  methods: {
    connectToOpenVPN() {
      // const vpn = new OpenVPN();

      // vpn.on('connected', () => {
      //   console.log('Connected to OpenVPN');
      //   // Additional logic when connected
      // });
      //
      // vpn.on('disconnected', () => {
      //   console.log('Disconnected from OpenVPN');
      //   // Additional logic when disconnected
      // });

      // Connect to OpenVPN server
      // vpn.connect('openvpn.ovpn');
    },

    disconnectFromOpenVPN() {
      // Disconnect from OpenVPN server
      // const vpn = new OpenVPN();
      // vpn.disconnect();
    },
  },
};
</script>
