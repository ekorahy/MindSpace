import { useForm } from "react-hook-form";
import PropTypes from "prop-types";

export const LoginInput = ({ login }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  function onSubmitHandler({ email, password }) {
    login(email, password);
  }

  return (
    <form className="grid grid-cols-1" onSubmit={handleSubmit(onSubmitHandler)}>
      <div className="mb-2">
        <label className="font-lg mb-1 block font-bold" htmlFor="email">
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
        <label className="font-lg mb-1 block font-bold" htmlFor="password">
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
      <button
        className="font-lg rounded-md bg-emerald-400 p-2 font-bold text-white hover:bg-emerald-500"
        type="submit"
      >
        Login
      </button>
    </form>
  );
};

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};
