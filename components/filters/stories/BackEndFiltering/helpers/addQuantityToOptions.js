const addQuantityToOptions = (options, quantity) => options.map((option) => {
  const { name, label } = option;

  const initialQuantity = 0;
  const currentOptionQuantityConfig = quantity[name] || initialQuantity;

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
