'use client'
import Link from "next/link"
import { useFormState } from "react-dom";
import { SignIn } from "../lib/actions/Signin";

export function FormLogin() {
  const [errorMessage, dispatch] = useFormState(SignIn ,undefined);
  return (
    <section className="py-26 ">
      <div className="container px-4 mx-auto">
        <div className="max-w-lg mx-auto py-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-2">Sign in</h2>
          </div>
          <form action={dispatch}>
            <div className="mb-6">
              <label className="block mb-2 font-extrabold" >Email</label>
              <input className="inline-block  w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white text-black shadow border-2 border-indigo-900 rounded" name="email" type="email" placeholder="email" />
            </div>
            <div className="mb-6">
              <label className="block mb-2 font-extrabold" >Password</label>
              <input className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white  text-black shadow border-2 border-indigo-900 rounded" name="password" type="password" placeholder="**********" />
            </div>
            <div className="flex flex-wrap -mx-4 mb-6 items-center justify-between">
              <div className="w-full lg:w-auto px-4 mb-4 lg:mb-0">
                <label >
                  <input type="checkbox" />
                  <span className="ml-1 font-extrabold">Remember me</span>
                </label>
              </div>
              <div className="w-full lg:w-auto px-4"><a className="inline-block font-extrabold hover:underline" href="#">Forgot your password?</a></div>
            </div>
            <button className="inline-block w-full py-4 px-6 mb-6 text-center text-lg leading-6 text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200">Sign in</button>
            <p className="text-center font-extrabold">Don&rsquo;t have an account? <Link className="text-red-500 hover:underline" href={'/signup'}>Sign up</Link></p>
            <div
              className="flex h-8 items-end space-x-1"
              aria-live="polite"
              aria-atomic="true"
            >
              {errorMessage && (
                <>
                  <p className="text-sm text-red-500">{errorMessage}</p>
                </>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}