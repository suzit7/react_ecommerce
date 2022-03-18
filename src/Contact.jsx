import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
  });

  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `Hello ${data.fullname}. Your Number is ${data.phone}. Your Email is ${data.email}.Thank you for your Message:${data.msg} `
    );
  };

  const inputEvent = (event) => {
    const { name, value } = event.target;
    setData((perValue) => {
      return {
        ...perValue,
        [name]: value,
      };
    });
  };

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div class="form-group">
                <label for="exampleInputEmail1">FullName</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  name="fullname"
                  value={data.fullname}
                  onChange={inputEvent}
                  placeholder="Enter your name"
                />
              </div>

              <div class="form-group">
                <label for="exampleInputPassword1">Phone Number</label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleInputPassword1"
                  name="phone"
                  value={data.phone}
                  onChange={inputEvent}
                  placeholder="mobile number"
                />
              </div>

              <div class="form-group">
                <label for="exampleInputPassword1">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputPassword1"
                  name="email"
                  value={data.email}
                  onChange={inputEvent}
                  placeholder="name@example.com"
                />
              </div>

              <div class="form-group">
                <label for="exampleInputPassword1">Message</label>
                <textarea
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                  rows="3"
                  name="msg"
                  value={data.msg}
                  onChange={inputEvent}
                />
              </div>

              <br />
              <div class="col-12">
                <button type="submit" class="btn btn-outline-primary">
                  Submit
                </button>
              </div>
            </form>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
