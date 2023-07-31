import { Component } from 'react';

class Form extends Component {
  state = {
    name: '',
  };
  handlNameChange = e => {
    this.setState({ name: e.currentTarget.value });
  };

  handlSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.onSubmit(this.state);
    this.reset();
  };
  reset = () => this.setState({ name: '' });
  render() {
    return (
      <form action="" onSubmit={this.handlSubmit}>
        <label htmlFor="">
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handlNameChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
export default Form;
