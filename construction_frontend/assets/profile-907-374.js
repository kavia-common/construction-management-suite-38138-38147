(function () {
  'use strict';

  // PUBLIC_INTERFACE
  function initProfileScreen() {
    /** Initialize simple interactions for the Profile screen:
     * - Provide a basic static feedback when "Sign Out" is clicked.
     * In a real app this would call an auth/logout endpoint.
     */
    var btn = document.getElementById('btn-signout');
    if (!btn) return;

    btn.addEventListener('click', function () {
      // Static feedback for standalone asset
      try {
        btn.classList.add('clicked');
        setTimeout(function () {
          btn.classList.remove('clicked');
          // eslint-disable-next-line no-alert
          alert('Signed out (demo)');
        }, 150);
      } catch (e) {
        // no-op
      }
    });
  }

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initProfileScreen);
  } else {
    initProfileScreen();
  }
})();
