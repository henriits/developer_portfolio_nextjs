import LoginForm from "@/components/auth/LoginForm";

const page = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="w-full max-w-md  p-8 rounded-xl shadow-md shadow-[#13DF14]">
                <h1 className="text-2xl font-semibold mb-6 text-center">
                    Admin Login
                </h1>
                <LoginForm />
            </div>
        </div>
    );
};
export default page;
