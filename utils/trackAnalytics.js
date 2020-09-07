export default (category, action, value) => {
  if (window && window.utag && window.utag_data) {
    window.utag.link({
      ga_EventCategory: category,
      ga_EventAction: action,
      ga_EventLabel: value,
    });
  }
};
