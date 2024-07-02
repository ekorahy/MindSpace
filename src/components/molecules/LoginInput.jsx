import { useContext } from "react";
import { useInput } from "../../custom_hooks/useInput";
import PropTypes from "prop-types";
import { LanguageContext } from "../../contexts/LanguageContext";

export const LoginInput = ({ login, loading }) => {
  const [email, onEmailChangeHandler] = useInput("");
  const [password, onPasswordChangeHandler] = useInput("");
  const { language } = useContext(LanguageContext);

  function onSubmitHandler(event) {
    event.preventDefault();
    login(email, password);
  }

  return (
    <form className="grid grid-cols-1 xl:text-xl" onSubmit={onSubmitHandler}>
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
      <button
        className="bg-4 mb-4 rounded-md bg-violet-400 p-2 text-white hover:bg-violet-500"
        type="submit"
      >
        {`${
          loading
            ? language === "en"
              ? "Loading..."
              : "Memuat..."
            : language === "en"
              ? "Log in"
              : "Masuk"
        }`}
      </button>
    </form>
  );
};

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};
