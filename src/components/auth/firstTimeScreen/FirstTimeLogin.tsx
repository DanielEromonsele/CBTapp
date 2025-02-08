import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../../../assets/Exams-bro.png";
import img2 from "../../../assets/Online test-bro.png";

document.title = "First Time | CBT";

const FirstTimeLogin = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    houseAddress: "",
    phone: "",
    educationBackground: "",
    examType: "",
    goal: "",
    studyRecommendations: "",
    examPeriod: "",
    studyHours: "",
  });

  useEffect(() => {
    const storedData = localStorage.getItem("cbtUserData");
    if (storedData) {
      navigate("/");
    }
  }, [navigate]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => {
    if (step < 4) {
      document.startViewTransition(() => setStep(step + 1));
    } else {
      localStorage.setItem("cbtUserData", JSON.stringify(formData));
      navigate("/");
    }
  };

  const handleBack = () => {
    if (step > 1) {
      document.startViewTransition(() => setStep(step - 1));
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-green-600">
      <div className="w-[80%] h-[80%] bg-white p-8 rounded-lg shadow-lg flex flex-col lg:flex-row items-center">
        {step !== 4 && (
          <div
            className="hidden lg:block w-[50%] min-h-[400px] bg-cover bg-center rounded-lg"
            style={{ backgroundImage: `url(${step % 2 === 0 ? img2 : img1})` }}
          ></div>
        )}
        <div className="w-full lg:w-[50%] p-6 flex flex-col justify-center">
          <h1 className="text-2xl font-bold text-green-800 mb-2">
            First Time Setup
          </h1>
          <p className="text-gray-600 mb-6">Step {step} of 4</p>

          {step === 1 && (
            <div>
              <label className="block mb-2 font-medium">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border p-2 rounded mb-4 focus:ring-green-400 focus:ring-2"
                required
              />
              <label className="block mb-2 font-medium">House Address</label>
              <input
                type="text"
                name="houseAddress"
                value={formData.houseAddress}
                onChange={handleChange}
                className="w-full border p-2 rounded mb-4 focus:ring-green-400 focus:ring-2"
                required
              />
              <label className="block mb-2 font-medium">Phone Number</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                required
              />
            </div>
          )}

          {step === 2 && (
            <div>
              <label className="block mb-2 font-medium">
                Education Background
              </label>
              <select
                name="educationBackground"
                value={formData.educationBackground}
                onChange={handleChange}
                className="w-full border p-2 rounded mb-4 focus:ring-green-400 focus:ring-2"
                required
              >
                <option value="">Select</option>
                <option value="High School">High School</option>
                <option value="Undergraduate">Undergraduate</option>
                <option value="Graduate">Graduate</option>
              </select>
              <label className="block mb-2 font-medium">Exam Type</label>
              <select
                name="examType"
                value={formData.examType}
                onChange={handleChange}
                className="w-full border p-2 rounded mb-4 focus:ring-green-400 focus:ring-2"
                required
              >
                <option value="">Select</option>
                <option value="JAMB">JAMB</option>
                <option value="WAEC">WAEC</option>
                <option value="NECO">NECO</option>
                <option value="Others">Others</option>
              </select>
            </div>
          )}

          {step === 3 && (
            <div>
              <label className="block mb-2 font-medium">Study Goal</label>
              <input
                type="text"
                name="goal"
                value={formData.goal}
                onChange={handleChange}
                className="w-full border p-2 rounded mb-4 focus:ring-green-400 focus:ring-2"
              />
              <label className="block mb-2 font-medium">
                Preferred Study Hours
              </label>
              <input
                type="number"
                name="studyHours"
                value={formData.studyHours}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
            </div>
          )}

          {step === 4 && (
            <div className="text-center">
              <h2 className="text-xl font-semibold mb-4">
                Review Your Information
              </h2>
              {Object.entries(formData).map(([key, value]) => (
                <p key={key} className="text-gray-700 mb-2 capitalize">
                  <span className="font-semibold">
                    {key.replace(/([A-Z])/g, " $1")}:{" "}
                  </span>{" "}
                  {value || "N/A"}
                </p>
              ))}
            </div>
          )}

          <div className="mt-6 flex justify-between">
            {step > 1 && (
              <button
                onClick={handleBack}
                className="px-4 py-2 bg-gray-500 text-white rounded"
              >
                Back
              </button>
            )}
            <button
              onClick={handleNext}
              className="px-4 py-2 bg-green-800 text-white rounded"
            >
              {step === 4 ? "Finish" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstTimeLogin;
