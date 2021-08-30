import React from "react";
import '../style/services.css'
import axios from 'axios';
class Services extends React.Component {
  constructor(){
    super();
    this.state={
        Technician: [], 
    }
  }
  componentDidMount(){
    axios({
      method: 'GET',
      url: 'https://hiremeapi.herokuapp.com/category',
      headers: { 'Content-Type': 'application/json' }
  }).then(res => this.setState({ Technician: res.data.Category }))
      .catch(err => console.log(err))
  }
  handleClick = (ids) => {
    const id =  ids
    this.props.history.push(`/filter?category_id=${id}`);
}
  render() {
    const {Technician } = this.state;
    return (
      <div>
        <h1>Our Services</h1>
        {Technician.map((item)=>(
          <div class="card" onClick={() => this.handleClick(item.category_id)} >
  <img src={item.img} class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">{item.name}</h5>
    <p class="card-text">{item.desc}</p>
    
  </div>
</div>
        ))}
      
      </div>
    );
  }
}

export default Services;
