import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  console.log(errors);

  const onSubnit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="w-1/2 mx-auto">
        <form onSubmit={handleSubmit(onSubnit)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              {...register("name", {
                required: {
                  value: true,
                  message: "Fill this input",
                },
                minLength: {
                  value: 4,
                  message: "name must be al least 4 charecter",
                },
                maxLength: {
                  value: 8,
                  message: "name must be max 8 character",
                },
              })}
              type="text"
              placeholder="name"
              className="input input-bordered"
            />
          </div>
          <div>
            {errors.name && (
              <small className="text-red-500">{errors.name.message}</small>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              {...register("password", {
                required: { value: true },
                pattern: {
                  value: /.*[0-9].*/,
                  message: "password must contain at least one number",
                },
                pattern:{
                  value: /.*[A-Z].*/,
                  message:'password must contain at least Uppercase character'
                }
              })}
              type="password"
              placeholder="password"
              className="input input-bordered"
            />
            {
              errors.password && <small className="text-red-500">{errors.password.message}</small>
            }
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
