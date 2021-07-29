import React from 'react'

class ProductCategoryRow extends React.Component {
  render() {
    const category = this.props.category;
    return (
      <tr>
        <th colSpan="2">
          {category}
        </th>
      </tr>
    );
  }
}

class ProductRow extends React.Component {
  render() {
    const product = this.props.product;
    const name = product.stocked ?
      product.name :
      <span style={{color: 'red'}}>
        {product.name}
      </span>;

    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
}

class ProductTable extends React.Component {
  render() {
    const filterText = this.props.filterText; //STEP 4
    const inStockOnly = this.props.inStockOnly; //STEP 4

    const rows = [];
    let lastCategory = null;

    this.props.products.forEach((product) => {
      if (product.name.indexOf(filterText) === -1) { //STEP 4
        return; //only show filtered items
      }
      if (inStockOnly && !product.stocked) { //STEP 4
        return; //if stock checked only show the stocked items
      }
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category} />
        );
      }
      rows.push(
        <ProductRow
          product={product}
          key={product.name}
        />
      );
      lastCategory = product.category;
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }
  
  handleFilterTextChange(e) { //STEP 5
    this.props.onFilterTextChange(e.target.value);
  }
  
  handleInStockChange(e) { // STEP 5
    this.props.onInStockChange(e.target.checked);
  }
  
  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.filterText} //STEP 4
          onChange={this.handleFilterTextChange} //STEP 5
        />
        <p>
          <input
            type="checkbox"
            checked={this.props.inStockOnly} //STEP 4
            onChange={this.handleInStockChange} //STEP 5
          />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
}

export default class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { //STEP 4
      filterText: '',
      inStockOnly: false
    };
    
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this); //STEP 5
    this.handleInStockChange = this.handleInStockChange.bind(this); //STEP 5

  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }
  
  handleInStockChange(inStockOnly) {
    this.setState({
      inStockOnly: inStockOnly
    })
  }

  render() {
    return (
      <div>
        <SearchBar 
          filterText={this.state.filterText} //STEP 4
          inStockOnly={this.state.inStockOnly} //STEP 4
          onFilterTextChange={this.handleFilterTextChange} //STEP 5
          onInStockChange={this.handleInStockChange} //STEP 5
        />
        <ProductTable
          products={this.props.products} 
          filterText={this.state.filterText} //STEP 4
          inStockOnly={this.state.inStockOnly} //STEP 4
        /> 
      </div> 
    );
  }
}

/*
ReactDOM.render(
  <FilterableProductTable products={PRODUCTS} />,
  document.getElementById('container')
);
*/
