(function () {
  'use strict';

  // PUBLIC_INTERFACE
  function initTakeThisJobsScreen() {
    /**
     * Initialize interactions for the Take this jobs screen:
     * - Show modal when the CTA "Take Job" is clicked
     * - Hide modal when Cancel is clicked
     * - Optionally handle acceptance with a simple confirmation
     */
    var cta = document.getElementById('cta-take-job');
    var overlay = document.getElementById('dim-overlay');
    var modal = document.getElementById('modal-approval');
    var btnCancel = document.getElementById('btn-cancel');
    var btnAccept = document.getElementById('btn-accept');

    if (!cta || !overlay || !modal) return;

    // Helpers to show/hide modal (without changing layout metrics)
    function showModal() {
      overlay.style.display = 'block';
      modal.style.display = 'block';
      overlay.setAttribute('aria-hidden', 'false');
    }

    function hideModal() {
      overlay.style.display = 'none';
      modal.style.display = 'none';
      overlay.setAttribute('aria-hidden', 'true');
    }

    // Initialize hidden state (consistent with static preview if needed)
    hideModal();

    cta.addEventListener('click', function () {
      showModal();
    });

    if (btnCancel) {
      btnCancel.addEventListener('click', function () {
        hideModal();
      });
    }

    if (btnAccept) {
      btnAccept.addEventListener('click', function () {
        // For static export, simply close modal; in app, integrate API call
        hideModal();
      });
    }
  }

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTakeThisJobsScreen);
  } else {
    initTakeThisJobsScreen();
  }
})();
