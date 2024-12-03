import Link from "next/link";

export default function SignUp() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
            <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold text-center mb-6">Create an Account</h2>
                <form>
                    {/* Email */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Your Email"
                            className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                    </div>
                    {/* Password */}
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Your Password"
                            className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                    </div>
                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full px-4 py-2 bg-green-400 text-gray-900 rounded-md hover:bg-green-300"
                    >
                        Sign Up
                    </button>
                </form>
                <p className="text-center mt-4 text-sm">
                    Already have an account?{" "}
                    <Link href="/signin" className="text-green-400 hover:underline">
                        Sign In
                    </Link>
                </p>
            </div>
        </div>
    );
};
