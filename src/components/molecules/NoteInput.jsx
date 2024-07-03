import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

export const NoteInput = ({ addNote }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  function onSubmitHandler({ title, body }) {
    addNote(title, body);
  }

  return (
    <form className="grid grid-cols-1" onSubmit={handleSubmit(onSubmitHandler)}>
      <div className="mb-2">
        <label className="font-lg mb-1 block font-bold" htmlFor="title">
          Title
        </label>
        <input
          className="mb-1 w-full rounded-md border p-2 outline-none dark:bg-zinc-950"
          id="title"
          type="text"
          {...register("title", { required: true })}
          aria-invalid={errors.title ? "true" : "false"}
        />
        {errors.title?.type === "required" && (
          <p role="alert" className="text-red-500">
            *Title is required
          </p>
        )}
      </div>
      <div className="mb-4">
        <label className="font-lg mb-1 block font-bold" htmlFor="body">
          Body
        </label>
        <textarea
          className="mb-1 min-h-40 w-full rounded-md border p-2 outline-none dark:bg-zinc-950"
          id="body"
          type="text"
          {...register("body", { required: true })}
          aria-invalid={errors.body ? "true" : "false"}
        ></textarea>
        {errors.body?.type === "required" && (
          <p role="alert" className="text-red-500">
            *Body is required
          </p>
        )}
      </div>
      <button
        className="font-lg rounded-md bg-emerald-400 p-2 font-bold text-white hover:bg-emerald-500 dark:text-zinc-950"
        type="submit"
      >
        Add
      </button>
    </form>
  );
};

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};
