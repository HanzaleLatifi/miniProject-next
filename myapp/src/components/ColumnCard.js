import React from "react";

function ColumnCard({email , avatar , firstName , lastName}) {
  return (
    <div className="shadow-lg bg-white rounded-2xl flex flex-col items-center justify-center py-6">
      <div className="w-28 h-28 rounded-full overflow-hidden mb-6  border-8 border-t-red-800 border-r-red-800 border-b-yellow-500 border-l-yellow-500">
        <img src={avatar} className="h-full w-full"/>
      </div>
      <p className="mb-2 font-semibold">{`${firstName} ${lastName}`}</p>
      <p>{email}</p>
    </div>
  );
}

export default ColumnCard;
