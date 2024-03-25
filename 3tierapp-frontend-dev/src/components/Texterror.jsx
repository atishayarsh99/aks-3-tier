
const Texterror = (prop) => {
  return (
    <>
      <div style={{ color: "red", fontSize: "0.9rem", marginTop: "0.5rem" }}>
        {prop.children}
      </div>
    </>
  );
};

export default Texterror;
