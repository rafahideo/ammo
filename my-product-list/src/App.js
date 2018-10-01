import React, { Component } from 'react';

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount(){
    fetch('https://shielded-reef-43317.herokuapp.com/products')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json
        })
      });
  }

  search(){
    var keyword = this.refs.keyword.value;
    fetch('https://shielded-reef-43317.herokuapp.com/products/' + keyword)
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json
        })
      });
  }

  render() {
    var { isLoaded, items} = this.state;
    if(!isLoaded){
      return <div>Loading...</div>
    }
    return (
      <div className="App">
        <h3>
          Lista de Produtos
        </h3>
        <h4>
          Quantidade: {this.state.items.length}
        </h4>
        Nome do Produto: <input type="text" ref="keyword"/>
        <input type="button" value="search" onClick={this.search.bind(this)}/>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Tipo</th>
              <th>Tamanho</th>
              <th>Preço antigo</th>
              <th>Preço novo</th>
            </tr>
          </thead>
          <tbody>
          {items.map(function(p, index){
            return (
              <tr>
                <td>{p.name}</td>
                <td>{p.type}</td>
                <td>{p.size}</td>
                <td>{p.oldPrice}</td>
                <td>{p.price}</td>
              </tr>
            );
          })};
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
