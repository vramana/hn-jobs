export default function Page() {
  async function create(formData: FormData) {
    "use server";

    const rawFormData = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
    // ...
  }

  return (
    <div>
      <form className="flex flex-col" action={create}>
        <input className="m-3 rounded ring-1" type="text" placeholder="Email" />
        <input
          className="m-3 rounded ring-1 ring-gray-500"
          type="password"
          placeholder="Password"
        />
        <button className="m-3 self-start" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
