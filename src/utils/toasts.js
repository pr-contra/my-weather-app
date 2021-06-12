export const sendToast = (func, message, type) =>
  func(message, {
    appearance: type,
    autoDismiss: true,
    autoDismissTimeout: 5000,
  });
