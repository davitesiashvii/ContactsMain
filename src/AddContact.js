import React, { Component } from 'react'
import * as db from './data'

class AddContact extends Component {
  state = {
    id: Date.now(),
    name: '',
    phone: '',
    email: '',
    nameError:'',
    phoneError:'',
    emailError:'',
  }

  validate = ()=>{
    let nameError='';
    let phoneError='';
    let emailError='';

    if(!this.state.name){
      nameError="name is empty";
    }

    if(!this.state.phone){
      phoneError="phone is empty";
    }

    if(!this.state.email.includes("@")){
      emailError="invalid email";
    }

    if(nameError || phoneError || emailError){
      this.setState({nameError,phoneError,emailError})
      return false;
    }

    return true;

  }

  hanldeChange = (event) => {
    const { name, value } = event.target

    this.setState(
      {
        [name]: value,
      },
      () => {}
    )
  }

  save = () => {
    const isValid=this.validate();
    if(isValid){
      db.addContact(this.state)
      this.props.handleAddContact(this.state)
      this.props.close()
    }


  }

  render() {
    return (
      <div className='container filter-form'>
        <h4>კონტაქტის დამატება</h4>
        <hr />
        <br />
        <form>
          <div className='form-group'>
            <label htmlFor='exampleInputEmail1'>დასახელება</label>
            <input
              type='text'
              className='form-control'
              id='exampleInputEmail1'
              aria-describedby='emailHelp'
              value={this.state.name}
              name='name'
              onChange={this.hanldeChange}
            />
          </div>
          <div style={{fontSize:18,color:"red"}}>
              {this.state.nameError}
          </div>
          <div className='form-group'>
            <label htmlFor='exampleInputPassword1'>ტელეფონი</label>
            <input
              type='text'
              className='form-control'
              id='exampleInputPassword1'
              value={this.state.phone}
              name='phone'
              onChange={this.hanldeChange}
            />
          </div>
          <div style={{fontSize:18,color:"red"}}>
              {this.state.phoneError}
          </div>
          <div className='form-group'>
            <label htmlFor='exampleInputPassword1'>ელ.ფოსტა</label>
            <input
              type='text'
              className='form-control'
              id='exampleInputPassword1'
              value={this.state.email}
              name='email'
              onChange={this.hanldeChange}
            />
          </div>
          <div style={{fontSize:18,color:"red"}}>
              {this.state.emailError}
          </div>
          <button
            type='button'
            className='btn btn-primary mr-1'
            onClick={this.save}
          >
            დამატება
          </button>
          <button
            type='button'
            className='btn btn-secondary'
            onClick={() => this.props.close()}
          >
            დახურვა
          </button>
        </form>
      </div>
    )
  }
}

export default AddContact
