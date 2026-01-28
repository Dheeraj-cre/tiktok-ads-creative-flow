import { useState } from "react";
import { validateAdForm } from "../utils/validate";
import { createAd } from "../services/ads";
import ErrorBanner from "./ErrorBanner";
import { getErrorMessage } from "../utils/errorMessage";

function AdForm() {
  const [form, setForm] = useState({
    campaignName: "",
    objective: "",
    adText: "",
    cta: "",
  });

  const [errors, setErrors] = useState({});
  const [globalError, setGlobalError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateAdForm(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setGlobalError("");
    setLoading(true);

    try {
      const token = localStorage.getItem("tiktok_token");
      await createAd(token, form);
      alert("Ad created successfully ✅");
    } catch (err) {
      setGlobalError(getErrorMessage(err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {globalError && <ErrorBanner message={globalError} />}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Campaign Name</label><br />
          <input
            name="campaignName"
            value={form.campaignName}
            onChange={handleChange}
          />
          {errors.campaignName && <p>{errors.campaignName}</p>}
        </div>

        <div>
          <label>Objective</label><br />
          <select
            name="objective"
            value={form.objective}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="traffic">Traffic</option>
            <option value="conversions">Conversions</option>
          </select>
          {errors.objective && <p>{errors.objective}</p>}
        </div>

        <div>
          <label>Ad Text</label><br />
          <textarea
            name="adText"
            value={form.adText}
            onChange={handleChange}
          />
          {errors.adText && <p>{errors.adText}</p>}
        </div>

        <div>
          <label>CTA</label><br />
          <input
            name="cta"
            value={form.cta}
            onChange={handleChange}
          />
          {errors.cta && <p>{errors.cta}</p>}
        </div>

        <button disabled={loading}>
          {loading ? "Submitting..." : "Submit Ad"}
        </button>
      </form>
    </div>
  );
}

export default AdForm;
