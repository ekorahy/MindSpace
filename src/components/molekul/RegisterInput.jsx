import { useContext } from "react";
import { useInput } from "../../custom_hooks/useInput";
import PropTypes from "prop-types";
import { LanguageContext } from "../../contexts/LanguageContext";

export const RegisterInput = ({ register, loading }) => {
  const [name, onNameChangeHandler] = useInput("");
  const [email, onEmailChangeHandler] = useInput("");
  const [password, onPasswordChangeHandler] = useInput("");
  const [confirmPassword, onConfirmPasswordChangeHandler] = useInput("");
  const { language } = useContext(LanguageContext);

  function onSubmitHandler(event) {
    event.preventDefault();

    register(name, email, password, confirmPassword);
  }

  return (
    <form className="grid grid-cols-1 xl:text-xl" onSubmit={onSubmitHandler}>
      <input
        className="mb-2 rounded-md border p-2"
        type="text"
        placeholder={language === "en" ? "Name" : "Nama"}
        value={name}
        onChange={onNameChangeHandler}
        required
      />
      <input
        className="mb-2 rounded-md border p-2"
        type="email"
        placeholder="Email"
        value={email}
        onChange={onEmailChangeHandler}
        required
      />
      <input
        className="mb-2 rounded-md border p-2"
        type="password"
        placeholder={language === "en" ? "Password" : "Kata Sandi"}
        value={password}
        onChange={onPasswordChangeHandler}
        required
      />
      <input
        className="mb-2 rounded-md border p-2"
        type="password"
        placeholder={
          language === "en" ? "Confirm Password" : "Konfirmasi Kata Sandi"
        }
        value={confirmPassword}
        onChange={onConfirmPasswordChangeHandler}
        required
      />
      <button
        className="mb-4 rounded-md bg-violet-400 p-2 text-white hover:bg-violet-500"
        type="submit"
      >
        {`${
          loading
            ? language === "en"
              ? "Loading..."
              : "Memuat..."
            : language === "en"
              ? "Register"
              : "Daftar"
        }`}
      </button>
    </form>
  );
};

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};
