import { FC, useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { store } from "../store";
import { RootState } from "../store/reducers";
import AuthContext from "./AuthContext";
import { FormSchema } from "../types/RegisterProps";
import { UseActions } from "../hooks/useActions";
import { useTypesSelector } from "../hooks/useTypesSelector";
import color from "../ul/color";
import Buttons from "../ul/buttons";
import emailSVG from "../svg/emailSVG";
import passwordSVG from "../svg/passwordSVG";

const Login: FC = () => {    
  const FormSchemaLogin = FormSchema.pick({ email: true, password: true })

  type FormSchemaType = z.infer<typeof FormSchemaLogin>

  const { register, handleSubmit, formState: { errors } } = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchemaLogin),
  });

  const { toggleScreen, btnClose } = useContext(AuthContext);

  const { login, fetchUser } = UseActions();

  const { loading } = useTypesSelector((state: RootState) => state.login);

  let currentResult: boolean | undefined = undefined;
  const onSubmit = (data: FormSchemaType) => {
    login(data.email, data.password)
    store.subscribe(() => {
      if (currentResult !== store.getState().login.result) {
        currentResult = store.getState().login.result
        currentResult && fetchUser()
      }        
    });
    btnClose() 
  }  

  const [colorEmail, setColorEmail] = useState(color.value)
  const [colorPassword, setColorPassword] = useState(color.value)

  const handleEmailFocus = () => {
    setColorEmail(color.focus);
  };

  const handleEmailBlur = () => {
    errors.email ? setColorEmail(color.error) : setColorEmail(color.value)
  };

  const handlePasswordFocus = () => {
    setColorPassword(color.focus);
  };

  const handlePasswordBlur = () => {
      errors.password ? setColorPassword(color.error) : setColorPassword(color.value)
  };

  useEffect(() => {
    errors.email ? setColorEmail(color.error) : setColorEmail(color.value)
  }, [errors])

  return (
    <>
      <form className="flex flex-col gap-y-3 w-52 md:w-[340px]" onSubmit={handleSubmit(onSubmit)} method="POST">
      <div className={`flex flex-col relative h-14 ${colorEmail}`}>
        {emailSVG({ left: "left-4" })}
        <input 
          className={`flex rounded-lg outline-none p-4 pl-[52px] border ${colorEmail.replaceAll("fill", "border")} text-lg dark:bg-blackHoverCustom`}
          type="text" 
          {...register("email")} 
          name="email"
          placeholder="Email"
          onFocus={handleEmailFocus}
          onBlur={handleEmailBlur}
          />
      </div>
      <div className={`flex flex-col relative mb-6 h-14 ${colorPassword}`}>
        {passwordSVG({ left: "left-4" })}
        <input
          className={`flex rounded-lg outline-none p-4 pl-[52px] border ${colorPassword.replaceAll("fill", "border")} text-lg dark:bg-blackHoverCustom`}
          type="password"
          {...register("password")}
          name="password"
          placeholder="Password"
          onFocus={handlePasswordFocus}
          onBlur={handlePasswordBlur}
          />
        </div>
        <Buttons className="text-lg py-4 px-[75px] bg-[#6A5DC2] rounded-[28px] text-white hover-never:bg-[#D6D2F1] focus:bg-[#8577E1]" disabled={loading} type="submit" children="Войти" />
        <Buttons className="text-lg font-bold text-blackCustom dark:text-whiteCustom" type="button" children="Регистрация" onClick={() => toggleScreen("register")} />
      </form>
    </>
  );
}

export default Login