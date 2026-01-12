document.addEventListener('DOMContentLoaded', function(){
  const overlay = document.getElementById('site-popup-overlay');
  const closeBtn = document.getElementById('sitePopupClose');
  const dontShowCheckbox = document.getElementById('dontShowPopup');
  const STORAGE_KEY = 'smark_popup_closed_v1';

  function showPopup(){
    if(localStorage.getItem(STORAGE_KEY) === 'true') return;
    overlay.classList.add('show');
    overlay.setAttribute('aria-hidden','false');
  }

  function hidePopup(savePref){
    overlay.classList.remove('show');
    overlay.setAttribute('aria-hidden','true');
    if(savePref && dontShowCheckbox && dontShowCheckbox.checked){
      localStorage.setItem(STORAGE_KEY,'true');
    }
  }

  // show after 5 seconds
  setTimeout(showPopup, 5000);

  // close button
  closeBtn && closeBtn.addEventListener('click', function(e){
    hidePopup(true);
  });

  // click outside to close
  overlay && overlay.addEventListener('click', function(e){
    if(e.target === overlay){ hidePopup(true); }
  });

  // Esc to close
  document.addEventListener('keydown', function(e){ if(e.key === 'Escape'){ hidePopup(true); } });
});
