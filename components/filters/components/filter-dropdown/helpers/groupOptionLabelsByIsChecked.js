const groupOptionLabelsByIsChecked = (options) => options.reduce((groupedLabels, option) => {
  if (option.options && option.options.length) {
    const nestedGroupedLabels = groupOptionLabelsByIsChecked(option.options);

    return {
      selected: groupedLabels.selected.concat(nestedGroupedLabels.selected),
      notSelected: groupedLabels.notSelected.concat(nestedGroupedLabels.notSelected),
    };
  }

  const collectionToBePushed = option.isChecked ? 'selected' : 'notSelected';
  groupedLabels[collectionToBePushed].push(option.label);

  return groupedLabels;
}, {
  selected: [],
  notSelected: [],
});

export default groupOptionLabelsByIsChecked;
