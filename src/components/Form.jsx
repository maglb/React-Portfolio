import { useState } from "react";
// import './style.css';

function Form() {
  return (
    <form className="row justify-content-md-center">
      <div className="form-group col-9">
        <label for="exampleInputEmail1">Name</label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter your name"
          required
        />
      </div>
      <div className="form-group col-9">
        <label for="exampleInputPassword1">Email</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Enter your email"
          required
        />
      </div>
      <div className="form-group col-9">
        <label for="exampleFormControlTextarea1">Message</label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder="Write your message"
          required
        ></textarea>
      </div>
      <button type="submit" className="btn submit col-9">
        Submit
      </button>
    </form>
  );
}

export default Form;
