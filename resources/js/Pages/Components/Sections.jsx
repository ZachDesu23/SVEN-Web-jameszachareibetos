import React from "react";
import Button from "./Button";

export const HeroSection = React.forwardRef(({ bgColor,children}, ref) => (
  <section
    ref={ref}
    style={{
      height: '100vh',
      backgroundColor: bgColor,
      backgroundImage: `url('/images/beautiful-pet-portrait-dog.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
    className="d-flex flex-column justify-content-center align-items-start p-5"
  >
    {children}
    
  </section>
));

export const Section = React.forwardRef(({ bgColor, children, className = "" }, ref) => (
  <section
    ref={ref}
    style={{ height: "100vh", background: bgColor }}
    className={`d-flex justify-content-center ${className}`}
  >
    {children}
  </section>
));

