import '../Styles/Landing-Page/Footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="">
        <p className="text-sm">
          © {new Date().getFullYear()} Your Company Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
}