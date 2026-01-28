function ErrorBanner({ message }) {
  return (
    <div style={{ background: "#ffe5e5", padding: "10px", marginBottom: "10px" }}>
      {message}
    </div>
  );
}

export default ErrorBanner;
