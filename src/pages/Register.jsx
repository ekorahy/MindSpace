import { Link, useNavigate } from "react-router-dom";
import { register } from "../data/remote/remote";
import { RegisterInput } from "../components/molecules/RegisterInput";
import { useContext, useState } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

export const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { language } = useContext(LanguageContext);

  async function onRegisterHandler(name, email, password, confirmPassword) {
    setLoading(true);
    if (password !== confirmPassword) {
      setLoading(false);
      alert("The password you entered in not same.");
    } else {
      const { error } = await register({ name, email, password });
      setLoading(false);
      if (!error) {
        navigate("/login");
      }
    }
  }

  return (
    <div className="flex items-center justify-center sm:my-20">
      <div className="h-max w-96 rounded-md bg-slate-50 p-8">
        <h2 className="mb-4 text-xl font-bold xl:text-2xl">Register Form</h2>
        <RegisterInput register={onRegisterHandler} loading={loading} />
        <p className="text-center font-light xl:text-xl">
          {language === "en" ? "Back to " : "Kembali ke "}
          <Link
            className="font-bold text-violet-400 hover:text-violet-500"
            to="/login"
          >
            {language === "en" ? "Log in" : "Masuk"}
          </Link>
        </p>
      </div>
    </div>
  );
};
