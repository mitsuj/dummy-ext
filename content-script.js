const loginDialog = document.querySelector(
  '[bundlename="desktop_rpl_nsfw_blocking_modal"]'
);
loginDialog.remove();
const viewInApp = document.querySelector("xpromo-nsfw-blocking-container");
shadow = viewInApp.shadowRoot;
shadow.removeChild(shadow.children[1]);