export function validateAdForm(form) {
  const errors = {};

  if (!form.campaignName || form.campaignName.length < 3) {
    errors.campaignName = "Campaign name must be at least 3 characters";
  }

  if (!form.objective) {
    errors.objective = "Objective is required";
  }

  if (!form.adText) {
    errors.adText = "Ad text is required";
  } else if (form.adText.length > 100) {
    errors.adText = "Ad text must be under 100 characters";
  }

  if (!form.cta) {
    errors.cta = "CTA is required";
  }

  return errors;
}
