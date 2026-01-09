import React from "react";

const Shimmer = () => {
  const shimmerContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
    gap: "20px",
    marginTop: "20px",
  };

  const shimmerCardStyle = {
    width: "100%",
    height: "150px",
    background: "linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)",
    backgroundSize: "200% 100%",
    animation: "shimmer 1.5s infinite linear",
    borderRadius: "8px",
  };

  const shimmerKeyframes = `
    @keyframes shimmer {
      0% {
        background-position: -200% 0;
      }
      100% {
        background-position: 200% 0;
      }
    }
  `;

  return (
    <>
      <style>{shimmerKeyframes}</style> {/* Adding the keyframe animation */}
      <div style={shimmerContainerStyle}>
        <div style={shimmerCardStyle}></div>
        <div style={shimmerCardStyle}></div>
        <div style={shimmerCardStyle}></div>
      </div>
    </>
  );
};

export default Shimmer;
