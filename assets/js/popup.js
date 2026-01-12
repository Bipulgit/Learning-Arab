document.addEventListener('DOMContentLoaded', function(){
  const overlay = document.getElementById('site-popup-overlay');
  const closeBtn = document.getElementById('sitePopupClose');
  const dontShowCheckbox = document.getElementById('dontShowPopup');
  const popupForm = document.getElementById('popupForm');
  const popupEmail = document.getElementById('popupEmail');
  const popupMsg = document.getElementById('popupMsg');
  const STORAGE_KEY = 'smark_popup_closed_v1';

  function showPopup(){
    try{ if(localStorage.getItem(STORAGE_KEY) === 'true') return; }catch(e){}
    overlay.classList.add('show');
    overlay.setAttribute('aria-hidden','false');
    // focus first input for accessibility
    setTimeout(()=>{ popupEmail && popupEmail.focus(); }, 250);
  }

  function hidePopup(savePref){
    overlay.classList.remove('show');
    overlay.setAttribute('aria-hidden','true');
    if(savePref && dontShowCheckbox && dontShowCheckbox.checked){
      try{ localStorage.setItem(STORAGE_KEY,'true'); }catch(e){}
    }
  }

  // show after 5 seconds
  setTimeout(showPopup, 5000);

  // close button
  closeBtn && closeBtn.addEventListener('click', function(e){ hidePopup(true); });

  // click outside to close
  overlay && overlay.addEventListener('click', function(e){ if(e.target === overlay){ hidePopup(true);} });

  // Esc to close
  document.addEventListener('keydown', function(e){ if(e.key === 'Escape'){ hidePopup(true); } });

  // Form handling: simple email capture (mock)
  if(popupForm){
    popupForm.addEventListener('submit', function(evt){
      evt.preventDefault();
      const email = popupEmail && popupEmail.value && popupEmail.value.trim();
      if(!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)){
        popupMsg.textContent = 'Please enter a valid email address.';
        popupMsg.style.color = '#B91C1C';
        return;
      }

      // mock save: store email locally and show success
      try{ localStorage.setItem('smark_popup_email_v1', email); }catch(e){}
      popupMsg.textContent = 'Thanks — coupon sent to your inbox!';
      popupMsg.style.color = '#065f46';

      // if user checked don't show again, persist preference
      if(dontShowCheckbox && dontShowCheckbox.checked){
        try{ localStorage.setItem(STORAGE_KEY,'true'); }catch(e){}
      }

      // close after brief delay
      setTimeout(()=>{ hidePopup(false); }, 1400);
    });
  }
});
