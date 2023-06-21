import "../assets/Footer.css";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="flex-container">
          <div id="footer">
            <p>Made by MFN © . All rights reserved {new Date().getFullYear()}.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
