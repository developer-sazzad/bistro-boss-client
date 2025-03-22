import { FaFacebook } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div className="mt-3 mb-5">
            <h3>Or Login with</h3>
            <div className="space-x-3 mt-2 text-2xl">
                <button>
                    <FaFacebook />
                </button>
                <button>
                    <FaFacebook />
                </button>
                <button>
                    <FaFacebook />
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;