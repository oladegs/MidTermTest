import React from "react";
import { useForm } from "react-hook-form";
import "./signUp.css";

function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const onSubmit = (data) => {
    if (data.password === data.confirmPassword) {
      alert(
        `FirstName: ${data.firstName}, LastName: ${data.lastName}, UserName: ${data.userName}, Email: ${data.email}, Password: ${data.password}, ConfirmPassword: ${data.confirmPassword}`
      );
      console.log(data);
    } else {
      alert("Passwords do not match, type carefully :(");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="hook">
      <div className="form-box">
        <label className="label-heading">
          <b>Sign Up User</b>
        </label>

        <label className="hook__text">FirstName</label>
        <input
          type="text"
          className="hook__input"
          {...register("firstName", {
            required: true,
          })}
        />
        {errors.firstName && (
          <p className="hook__error">First Name is required</p>
        )}

        <label className="hook__text">LastName</label>
        <input
          type="text"
          className="hook__input"
          {...register("lastName", {
            required: true,
          })}
        />
        {errors.lastName && (
          <p className="hook__error">Last Name is required</p>
        )}

        <label className="hook__text">UserName</label>
        <input
          type="text"
          className="hook__input"
          {...register("userName", {
            required: true,
          })}
        />
        {errors.userName && (
          <p className="hook__error">User Name is required</p>
        )}

        <label className="hook__text">Email</label>
        <input
          type="email"
          className="hook__input"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && (
          <p className="hook__error">Email is required and must be valid</p>
        )}

        <label className="hook__text">Password</label>
        <input
          type="password"
          className="hook__input"
          {...register("password", { required: true })}
        />
        {errors.password && <p className="hook__error">Password is required</p>}

        <label className="hook__text">Confirm Password</label>
        <input
          type="password"
          className="hook__input"
          {...register("confirmPassword", { required: true })}
        />
        {errors.confirmPassword && (
          <p className="hook__error">{errors.confirmPassword.message}</p>
        )}

        <button className="hook__button" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}

export default SignUpForm;
