import { FormSignUp } from "../components/FormSignUp"

export default function Form() {
  return (
    <section className="py-26 ">
      <div className="container px-4 mx-auto">
        <div className="max-w-lg mx-auto py-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-2">Sign Up</h2>
          </div>
          <FormSignUp />
        </div>
      </div>
    </section>
  )
}