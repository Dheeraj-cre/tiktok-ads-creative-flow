import { useState } from "react";
import { validateAdForm } from "../utils/validate";
import { createAd } from "../services/ads";
import { validateMusicId } from "../services/music";
import ErrorBanner from "./ErrorBanner";
import { getErrorMessage } from "../utils/errorMessage";
import MusicSelector from "./MusicSelector";

function AdForm() {
  const [form, setForm] = useState({
    campaignName: "",
    objective: "",
    adText: "",
    cta: "",
    musicOption: "",
    musicId: "",
  });

  const [errors, setErrors] = useState({});
  const [globalError, setGlobalError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Step 1: form validation
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

      // Step 2: music validation (if applicable)
      if (form.musicOption !== "none") {
        await validateMusicId(form.musicId);
      }

      // Step 3: submit ad
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
        <table
          border="1"
          cellPadding="10"
          style={{ borderCollapse: "collapse", width: "100%" }}
        >
          <tbody>
            {/* Campaign Name */}
            <tr>
              <td>Campaign Name</td>
              <td>
                <input
                  name="campaignName"
                  value={form.campaignName}
                  onChange={handleChange}
                />
                {errors.campaignName && (
                  <div style={{ color: "red" }}>{errors.campaignName}</div>
                )}
              </td>
            </tr>

            {/* Objective */}
            <tr>
              <td>Objective</td>
              <td>
                <select
                  name="objective"
                  value={form.objective}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option value="traffic">Traffic</option>
                  <option value="conversions">Conversions</option>
                </select>
                {errors.objective && (
                  <div style={{ color: "red" }}>{errors.objective}</div>
                )}
              </td>
            </tr>

            {/* Ad Text */}
            <tr>
              <td>Ad Text</td>
              <td>
                <textarea
                  name="adText"
                  value={form.adText}
                  onChange={handleChange}
                />
                {errors.adText && (
                  <div style={{ color: "red" }}>{errors.adText}</div>
                )}
              </td>
            </tr>

            {/* CTA */}
            <tr>
              <td>CTA</td>
              <td>
                <input
                  name="cta"
                  value={form.cta}
                  onChange={handleChange}
                />
                {errors.cta && (
                  <div style={{ color: "red" }}>{errors.cta}</div>
                )}
              </td>
            </tr>

            {/* Music Selector */}
            <tr>
              <td>Music</td>
              <td>
                <MusicSelector
                  form={form}
                  setForm={setForm}
                  errors={errors}
                />
              </td>
            </tr>

            {/* Submit Button */}
            <tr>
              <td colSpan="2" align="center">
                <button disabled={loading}>
                  {loading ? "Submitting..." : "Submit Ad"}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default AdForm;
