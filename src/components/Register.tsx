import { FC, useContext, useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form"
import { RootState } from "../store/reducers";
import AuthContext from "./AuthContext";
import { UseActions } from "../hooks/useActions";
import { useTypesSelector } from "../hooks/useTypesSelector";
import { FormSchemaType, FormSchema } from "../types/RegisterProps";
import Buttons from "../ul/buttons";
import color from "../ul/color";
import emailSVG from "../svg/emailSVG";
import ProfileSVG from "../svg/profileSVG";
import passwordSVG from "../svg/passwordSVG";

const Register: FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormSchemaType>({
      resolver: zodResolver(FormSchema),
    });

    const { toggleScreen } = useContext(AuthContext);

    const { registeration } = UseActions();

    const { loading, isSuccess } = useTypesSelector((state: RootState) => state.registeration);

    const [colorEmail = color.value, setColorEmail] = useState(color.value)
    const [colorUsername = color.value, setColorUsername] = useState(color.value)
    const [colorLastName = color.value, setColorLastName] = useState(color.value)
    const [colorPassword = color.value, setColorPassword] = useState(color.value)
    const [colorConfirmPassword = color.value, setColorConfirmPassword] = useState(color.value)

    const onSubmit = (data: FormSchemaType) => {
      if (data.password === data.confirmPassword) {
          registeration(data.email, data.username, data.surname, data.password)
          isSuccess ? toggleScreen("complete") : console.log("error");
      } else {
          setColorPassword(color.error);
          setColorConfirmPassword(color.error);
      }
  };
    
    const handleEmailFocus = () => {
      setColorEmail(color.focus);
    };

    const handleEmailBlur = () => {
        errors.email ? setColorEmail(color.error) : setColorEmail(color.value)
    };

    const handleUsernameFocus = () => {
        setColorUsername(color.focus);
    };

    const handleUsernameBlur = () => {
        errors.username ? setColorUsername(color.error) : setColorUsername(color.value)
    };

    const handleLastNameFocus = () => {
        setColorLastName(color.focus);
    };

    const handleLastNameBlur = () => {
        errors.surname ? setColorLastName(color.error) : setColorLastName(color.value)
    };

    const handlePasswordFocus = () => {
        setColorPassword(color.focus);
    };

    const handlePasswordBlur = () => {
        errors.password ? setColorPassword(color.error) : setColorPassword(color.value)
    };

    const handleConfirmPasswordFocus = () => {
        setColorConfirmPassword(color.focus);
    };

    const handleConfirmPasswordBlur = () => {
        errors.confirmPassword ? setColorConfirmPassword(color.error) : setColorConfirmPassword(color.value)
    };

    useEffect(() => {
        errors.email && setColorEmail(color.error);
        errors.username && setColorUsername(color.error);
        errors.surname && setColorLastName(color.error);
        errors.password && setColorPassword(color.error);
        errors.confirmPassword && setColorConfirmPassword(color.error);
    }, [errors])

    return (
        <>
          <form className="flex flex-col gap-y-3 w-52 md:w-[340px]" onSubmit={handleSubmit(onSubmit)} method="POST">
            <h2 className="text-2xl font-bold mb-3 self-center text-blackCustom dark:text-whiteCustom">Регистрация</h2>
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
            <div className={`flex flex-col relative h-14 ${colorUsername}`}>
              {ProfileSVG({ left: "left-4" })}
              <input 
                className={`flex rounded-lg outline-none p-4 pl-[52px] border ${colorUsername.replaceAll("fill", "border")} text-lg dark:bg-blackHoverCustom`}
                type="text" 
                {...register("username")} 
                name="username" 
                placeholder="Username"
                onFocus={handleUsernameFocus}
                onBlur={handleUsernameBlur} 
                />
            </div>
            <div className={`flex flex-col relative h-14 ${colorLastName}`}>
              {ProfileSVG({ left: "left-4" })}
              <input
                className={`flex rounded-lg outline-none p-4 pl-[52px] border ${colorLastName.replaceAll("fill", "border")} text-lg dark:bg-blackHoverCustom`}
                type="text"
                {...register("surname")}
                name="surname"
                placeholder="surname"
                onFocus={handleLastNameFocus}
                onBlur={handleLastNameBlur}
              />
            </div>
            <div className={`flex flex-col relative h-14 ${colorPassword}`}>
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
            <div className={`flex flex-col relative mb-6 h-14 ${colorConfirmPassword}`}>
              {passwordSVG({ left: "left-4" })}
              <input
                className={`flex rounded-lg outline-none p-4 pl-[52px] border ${colorConfirmPassword.replaceAll("fill", "border")} text-lg dark:bg-blackHoverCustom`}
                type="password"
                {...register("confirmPassword")}
                name="confirmPassword"
                placeholder="Confirm Password"
                onFocus={handleConfirmPasswordFocus}
                onBlur={handleConfirmPasswordBlur}
              />
            </div>
            <Buttons className="text-lg py-4  bg-[#6A5DC2] rounded-[28px] text-white mb-6 hover-never:bg-[#D6D2F1] focus:bg-[#8577E1]" disabled={loading} type="submit" children="Создать аккаунт" />
            <Buttons className="text-lg font-bold text-blackCustom dark:text-whiteCustom" type="button" children="У меня есть пароль" onClick={() => toggleScreen("login")} />
          </form>
        </>
    )
}

export default Register