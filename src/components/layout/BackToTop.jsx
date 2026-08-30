import { useEffect, useState } from "react";

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function updateVisibility() {
      setVisible(window.scrollY > 300);
    }
    window.addEventListener("scroll", updateVisibility, { passive: true });
    updateVisibility();
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  if (!visible) return null;

  return <button id="topBtn" type="button" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}><i className="fa-solid fa-arrow-up" /></button>;
}

export default BackToTop;
