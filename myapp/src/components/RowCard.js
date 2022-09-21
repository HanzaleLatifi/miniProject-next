import React from "react";

function RowCard({ email, avatar, firstName, lastName }) {
  return (
    <div className="shadow-lg bg-white rounded-2xl flex flex-row py-6 items-center justify-evenly">
      <div >
        <p className=" font-semibold">{`${firstName} ${lastName}`}</p>
        <p>{email}</p>
      </div>

      <div className="w-24 h-24 rounded-full overflow-hidden border-8 border-t-red-800 border-r-red-800 border-b-yellow-500 border-l-yellow-500">
        <img src={avatar} className="h-full w-full" />
      </div>
    </div>
  );
}

export default RowCard;
