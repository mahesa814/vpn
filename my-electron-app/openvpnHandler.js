import
const openvpn = require('node-openvpn');

let vpnInstance;

function connectVPN() {
  const vpnConfig = {
    host: '127.0.0.1',
    port: 1194,
    config: {
      file: 'openvpn.ovpn',
    },
  };

  vpnInstance = openvpn.connect(vpnConfig, (err) => {
    if (err) {
      console.error('Failed to connect to VPN:', err);
      ipcRenderer.send('vpn-status', { connected: false });
    } else {
      console.log('Connected to VPN');
      ipcRenderer.send('vpn-status', { connected: true });
    }
  });

  vpnInstance.on('error', (err) => {
    console.error('VPN error:', err);
    ipcRenderer.send('vpn-status', { connected: false });
  });

  vpnInstance.on('disconnect', () => {
    console.log('Disconnected from VPN');
    ipcRenderer.send('vpn-status', { connected: false });
  });
}

function disconnectVPN() {
  if (vpnInstance) {
    vpnInstance.disconnect();
  }
}

// Handle messages from main process
ipcRenderer.on('connect-vpn', () => {
  connectVPN();
});

ipcRenderer.on('disconnect-vpn', () => {
  disconnectVPN();
});
