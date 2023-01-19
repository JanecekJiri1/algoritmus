function FilterProduct(props) {
  function onFilterValueChanged(e) {
    props.filterValueSelected(e.target.value);
  }

  return (
    <div>
      <select name="allProducts" onChange={onFilterValueChanged}>
        <option value="all">Vše</option>
        <option value="fruits">Ovoce</option>
        <option value="vegetables">Zelenina</option>
      </select>
    </div>
  );
}

export default FilterProduct;
