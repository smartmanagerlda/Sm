function updateOnlineStatus () {
    document.getElementById('status').innerHTML = navigator.onLine ? 'Online' : 'Offline'
}
  
window.addEventListener('Online', updateOnlineStatus)
window.addEventListener('Offline', updateOnlineStatus)


setInterval(updateOnlineStatus, 1000);