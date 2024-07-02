import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

export const RegisterInput = ({ signUp }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();

  const password = watch("password");

  function onSubmitHandler({ name, email, password, confirmPassword }) {
    signUp(name, email, password, confirmPassword);
  }

  return (
    <form className="grid grid-cols-1" onSubmit={handleSubmit(onSubmitHandler)}>
      <div className="mb-2">
        <label className="mb-1 block text-lg font-bold" htmlFor="name">
          Name
        </label>
        <input
          className="mb-1 w-full rounded-md border p-2 outline-none"
          id="name"
          type="text"
          {...register("name", { required: true })}
          aria-invalid={errors.name ? "true" : "false"}
        />
        {errors.name?.type === "required" && (
          <p role="alert" className="text-red-500">
            *Name is required
          </p>
        )}
      </div>
      <div className="mb-2">
        <label className="mb-1 block text-lg font-bold" htmlFor="email">
          Email
        </label>
        <input
          className="mb-1 w-full rounded-md border p-2 outline-none"
          id="email"
          type="email"
          {...register("email", { required: true })}
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email?.type === "required" && (
          <p role="alert" className="text-red-500">
            *Email is required
          </p>
        )}
      </div>
      <div className="mb-4">
        <label className="mb-1 block text-lg font-bold" htmlFor="password">
          Password
        </label>
        <input
          className="mb-1 w-full rounded-md border p-2 outline-none"
          type="password"
          id="password"
          {...register("password", { required: true })}
          aria-invalid={errors.password ? "true" : "false"}
        />
        {errors.password?.type === "required" && (
          <p role="alert" className="text-red-500">
            *Password is required
          </p>
        )}
      </div>
      <div className="mb-4">
        <label
          className="mb-1 block text-lg font-bold"
          htmlFor="confirmPassword"
        >
          Confirm Password
        </label>
        <input
          className="mb-1 w-full rounded-md border p-2 outline-none"
          type="password"
          id="confirmPassword"
          {...register("confirmPassword", {
            required: true,
            validate: (value) => value === password || "Passwords do not match"
          })}
          aria-invalid={errors.confirmPassword ? "true" : "false"}
        />
        {errors.confirmPassword?.type === "required" && (
          <p role="alert" className="text-red-500">
            *Confirm Password is required
          </p>
        )}
        {errors.confirmPassword?.type === "validate" && (
          <p role="alert" className="text-red-500">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>
      <button
        className="rounded-md bg-emerald-400 p-2 text-lg font-bold text-white hover:bg-emerald-500"
        type="submit"
      >
        Register
      </button>
    </form>
  );
};

RegisterInput.propTypes = {
  signUp: PropTypes.func.isRequired,
};
