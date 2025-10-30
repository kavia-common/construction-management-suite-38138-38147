(function () {
  'use strict';

  // PUBLIC_INTERFACE
  function initJobsDetailOpenScreen() {
    /** Initialize interactions:
     * - Show modal when "Take Job" CTA clicked
     * - Hide modal on Cancel
     * - Accept just closes modal in static export
     */
    var cta = document.getElementById('cta-take-job');
    var overlay = document.getElementById('dim-overlay');
    var modal = document.getElementById('modal-approval');
    var btnCancel = document.getElementById('btn-cancel');
    var btnAccept = document.getElementById('btn-accept');

    if (!cta || !overlay || !modal) return;

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

    // hidden by default
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
        hideModal();
      });
    }
  }

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initJobsDetailOpenScreen);
  } else {
    initJobsDetailOpenScreen();
  }
})();
