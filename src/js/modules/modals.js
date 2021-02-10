const modals = () => {
  function bindModal(triggerSelector, modalSelector, closeSelector) {
    const trigger = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      close = document.querySelectorAll(closeSelector);

    trigger.forEach((item) => {
      item.addEventListener("click", (evt) => {
        if (evt.target) {
          evt.preventDefault();
        }
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
      });
    });
    close.forEach((item) => {
      item.addEventListener("click", () => {
        modal.style.display = "none";
        document.body.style.overflow = "";
      });
    });
    modal.addEventListener("click", (evt) => {
      if (evt.target !== evt.currentTarget) {
        return;
      }
      modal.style.display = "none";
      document.body.style.overflow = "";
    });
  }
  function showModalByTime(selector, time) {
    setTimeout(function () {
      document.querySelector(selector).style.display = "block";
      document.body.style.overflow = "hidden";
    }, time);
  }

  bindModal(
    ".popup_engineer_btn",
    ".popup_engineer",
    ".popup_engineer .popup_close"
  );
  bindModal(".phone_link", ".popup", ".popup .popup_close");
  bindModal(
    ".glazing_price_btn",
    ".popup_calc",
    ".popup_calc_button, .popup_calc_close"
  );
  bindModal(
    ".popup_calc_button",
    ".popup_calc_profile",
    ".popup_calc_profile_close, .popup_calc_profile_button"
  );
  bindModal(
    ".popup_calc_profile_button",
    ".popup_calc_end",
    ".popup_calc_end_close"
  );
  //   showModalByTime(".popup", 60000);
};

export default modals;
