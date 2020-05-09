const addQuantityToOptions = (options, quantity) => options.map((option) => {
  const { name, label } = option;

  const currentOptionQuantityConfig = quantity[name] || 0;

  const currentOptionQuantity = typeof currentOptionQuantityConfig === 'number'
    ? currentOptionQuantityConfig
    : currentOptionQuantityConfig.quantity;

  const newLabel = `${label.replace(/ \([0-9]+\)$/g, '')} (${currentOptionQuantity})`;

  if (option.options && option.options.length) {
    return {
      ...option,
      label: newLabel,
      options: addQuantityToOptions(
        option.options,
        currentOptionQuantityConfig
      ),
    };
  }
  return {
    ...option,
    label: newLabel,
  };
});

export default addQuantityToOptions;
