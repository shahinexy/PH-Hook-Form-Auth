import './App.css'
import { useForm } from "react-hook-form"

function App() {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm()

  console.log(errors);

  const onSubnit = data => {
    console.log(data);
  }

  return (
    <>
      <div className='w-1/2 mx-auto'>
      <form onSubmit={handleSubmit(onSubnit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input {...register('name', {required: {
            value: true,
            message:'Fill this input'
          }})} type="text" placeholder="name" className="input input-bordered"  />
        </div>
        <div>
          {
            errors.name && <small className='text-red-500'>{errors.name.message}</small>
          }
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered"  />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered"  />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      </div>
    </>
  )
}

export default App
