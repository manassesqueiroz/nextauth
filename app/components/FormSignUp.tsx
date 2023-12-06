'use client'
import { useFormState } from "react-dom";
import { SignUp } from "../lib/actions/SignUp";

export function FormSignUp() {
  const initialState = { message: '', errors: {} };
  const [state , dispatch] = useFormState(SignUp, initialState);
  return (
    <form action={dispatch} aria-describedby="form-error">
      <div className="mb-6">
        <label className="block mb-2 font-extrabold" >Email</label>
        <input className="inline-block  w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white text-black shadow border-2 border-indigo-900 rounded"
          name="email"
          type="email"
          placeholder="email"
          aria-describedby="email-error"
        />
        <div id="email-error" aria-live="polite" aria-atomic="true">
          {state.errors &&
            state.errors.email?.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
        </div>
      </div>
      <div className="mb-6">
        <label className="block mb-2 font-extrabold" >Password</label>
        <input className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white  text-black shadow border-2 border-indigo-900 rounded"
          name="password"
          type="password"
          placeholder="**********"
          aria-describedby="password-error"
        />
        <div id="password-error" aria-live="polite" aria-atomic="true">
          {state.errors &&
            state.errors.password?.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
        </div>
      </div>
      <button className="inline-block w-full py-4 px-6 mb-6 text-center text-lg leading-6 text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200">Sign Up</button>
      <div id="form-error" aria-live="polite" aria-atomic="true">
          {state.errors &&
              <p className="mt-2 text-sm text-red-500" >
                {state.message}
              </p>
            }
        </div>
    </form>
  )
}