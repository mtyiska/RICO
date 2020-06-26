import React from "react";

export default function PasswordInput() {
  return (
    <div className="form-group col-sm-6">
      <label htmlFor="exampleInputPassword1">Password</label>
      <input
        type="password"
        className="form-control"
        id="exampleInputPassword1"
        placeholder="Password"
      />
    </div>
  );
}
