import { useForm } from "react-hook-form";
import "../styles/FromStyle.scss";
import { DevTool } from "@hookform/devtools";

export const Input_form = () => {
  type FormlValue = {
    username: string;
    email: string;
    messageImpt: string;
  };

  const form = useForm<FormlValue>();
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data: FormlValue) => {
    console.log("form submitted", data);
  };
  return (
    <div className="inputPart">
      <h1>Welcom To Contact Us Page</h1>
      <form onSubmit={handleSubmit(onSubmit)} action="" noValidate>
        <label className="username" htmlFor="">
          UserName
        </label>
        <input
          className="impt"
          type="text"
          placeholder="Enter Your Name"
          {...register("username", {
            required: {
                value:true,
                message:"Please Enter Your Name"
            },
          })}
        />
        <p className="error">{errors.username?.message}</p>

        <label className="email" htmlFor="">
          Email
        </label>
        <input
          className="impt"
          type="Email"
          placeholder="Enter Your Email"
          {...register("email", {
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address",
            },
          })}
        />
        <p className="error">{errors.email?.message}</p>
        <label className="message" htmlFor="">
          Message
        </label>
        <textarea
          className="messageImpt"
          placeholder="Here some Message"
          {...register("messageImpt", {
            required: {
                value: true,
                message: "Please Enter Your Message"
            },
          })}
        />
        <p className="error">{errors.messageImpt?.message}</p>

        <button>Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  );
};
