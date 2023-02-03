export const serializeForm = (elements) => {
    const formData = {};
    elements.forEach((input) => {
      if (input.type === 'submit') return;
      if (input.type !== 'checkbox') {
        formData[input.name] = input.value;
      }
      if (input.type === 'checkbox') {
        formData[input.name] = input.checked;
      }
    });
    return formData;
};