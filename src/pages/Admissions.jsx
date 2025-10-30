import { Link } from "react-router-dom";

export default function Admissions() {
  return (
    <div className="container-wide py-12 md:py-16">
      <h2 className="section-title">Admissions</h2>
      <p className="mt-4 leading-relaxed">
        Applications open for AY 2025–26 from LKG to Class XI.
      </p>
      <ol className="mt-6 list-decimal pl-6 space-y-2">
        <li>Collect application form from school office (9:30 AM – 3:30 PM).</li>
        <li>Submit filled form with birth certificate, previous report card, and ID proofs.</li>
        <li>
          Interaction/Assessment (grade-appropriate) followed by admission confirmation.
        </li>
      </ol>

      {/* ✅ Use Link instead of <a> to prevent 404 on Vercel */}
      <Link to="/contact" className="btn-primary mt-8 inline-block">
        Contact Admissions
      </Link>
    </div>
  );
}
