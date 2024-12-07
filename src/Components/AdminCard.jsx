import React from "react";

function AdminCard() {
  return (
    <article className="mt-5 mb-16 flex gap-3.5 items-center">
      {/* img container */}
      <div className="w-[65px] overflow-hidden rounded-2xl">
        <img
          src="https://lakhankumar.netlify.app/assets/lakhan3-o_RzrHOS.png"
          alt="not found"
        />
      </div>

      {/* admin info */}
      <div>
        <h2 className="font-bold text-indigo-900">Lakhan Kumar</h2>
        <p className="text-sm text-indigo-900/80">admin</p>
      </div>
    </article>
  );
}

export default AdminCard;
