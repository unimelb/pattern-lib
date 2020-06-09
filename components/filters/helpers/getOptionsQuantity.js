const initialOptionsQuantity = 0;
const getOptionsQuantity = (options) => options.reduce(
  (quantity, option) => {
    if (option.options && option.options.length) {
      const nestedQuantity = getOptionsQuantity(option.options);

      return quantity + nestedQuantity;
    }

    return quantity + 1;
  },
  initialOptionsQuantity
);

export default getOptionsQuantity;
