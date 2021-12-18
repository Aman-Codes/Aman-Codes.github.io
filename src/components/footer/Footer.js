import React, {useContext} from "react";
import "./Footer.css";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <div className="footer-div">
      <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
        {emoji("Made with ❤️ by Aman Dwivedi")}
      </p>
      {/* <p className={isDark ? "dark-mode theme-text" : "theme-text"}>
        Theme by{" "}
        <a href="https://github.com/saadpasta/developerFolio">
          developerFolio
        </a>
      </p> */}
    </div>
  );
}
