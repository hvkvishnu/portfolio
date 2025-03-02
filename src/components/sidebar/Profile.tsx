import { FaGoogle, FaLinkedin } from "react-icons/fa";
const Profile = () => {
  return (
    <div>
      {/* Profile Picture */}
      <img
        className="w-40 h-40 p-1 rounded-full inset-ring-4 inset-ring-purple-600"
        src="src/assets/profile.jpeg"
        alt="Rounded avatar"
      />

      {/* Name */}
      <p className="mt-4 text-xl font-semibold text-center">Vishnu Kumar</p>

      {/* Social Icons */}
      <div className="mt-4 flex justify-center gap-4">
        <div className="h-8 w-8 bg-gray-500/50 rounded-full hover:bg-purple-600 transition">
          <a
            href="https://www.linkedin.com/in/vishnukumarh20/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-slate-50 mt-2 "
          >
            <FaLinkedin className="h-4 w-4" />
          </a>
        </div>
        <div className="h-8 w-8 bg-gray-500/50 rounded-full hover:bg-purple-600 transition">
          <a
            href="mailto:hvkvishnukumar11@gmail.com"
            className="flex items-center justify-center gap-2 text-slate-50 mt-2"
          >
            <FaGoogle className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
