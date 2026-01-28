import { useEffect } from "react";

function MusicSelector({ form, setForm, errors }) {
  // auto clear musicId when option changes
  useEffect(() => {
    if (form.musicOption === "none") {
      setForm({ ...form, musicId: "" });
    }
  }, [form.musicOption]);

  return (
    <div style={{ marginTop: "20px" }}>
      <h4>Music Option</h4>

      {/* Option A: Existing Music */}
      <label>
        <input
          type="radio"
          name="musicOption"
          value="existing"
          checked={form.musicOption === "existing"}
          onChange={(e) =>
            setForm({ ...form, musicOption: e.target.value })
          }
        />
        Existing Music ID
      </label>

      {form.musicOption === "existing" && (
        <div>
          <input
            placeholder="Enter Music ID"
            value={form.musicId}
            onChange={(e) =>
              setForm({ ...form, musicId: e.target.value })
            }
          />
          {errors.musicId && (
            <p style={{ color: "red" }}>{errors.musicId}</p>
          )}
        </div>
      )}

      <br />

      {/* Option B: Upload Music (Mock) */}
      <label>
        <input
          type="radio"
          name="musicOption"
          value="upload"
          checked={form.musicOption === "upload"}
          onChange={(e) =>
            setForm({ ...form, musicOption: e.target.value })
          }
        />
        Upload / Custom Music
      </label>

      {form.musicOption === "upload" && (
        <div>
          <button
            type="button"
            onClick={() =>
              setForm({
                ...form,
                musicId: "mock_music_" + Date.now(),
              })
            }
          >
            Upload Music
          </button>
          {form.musicId && (
            <p>Generated Music ID: {form.musicId}</p>
          )}
        </div>
      )}

      <br />

      {/* Option C: No Music */}
      <label>
        <input
          type="radio"
          name="musicOption"
          value="none"
          checked={form.musicOption === "none"}
          onChange={(e) =>
            setForm({ ...form, musicOption: e.target.value })
          }
        />
        No Music
      </label>

      {errors.musicOption && (
        <p style={{ color: "red" }}>{errors.musicOption}</p>
      )}
    </div>
  );
}

export default MusicSelector;
