import React from "react";
import "./Styles/footer.css";

const Footer = () => {
  // Can type css in this way
  // let footerStyle = {
  //   position: "relative",
  //   bottom: "0",
  //   width: "100%",
  //   marginTop: "50px",
  // };

  return (
    <footer
      id="footer"
      className="bg-dark text-light py-3" /**style={footerStyle}*/
    >
      <p className="text-center">Copyrigth &copy; MyTodosList</p>
    </footer>
  );
};

export default Footer;
