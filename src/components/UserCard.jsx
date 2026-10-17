import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-6 border border-slate-200 hover:shadow-xl transition">
      {/* Header */}
      <div className="flex items-center justify-between border-b pb-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 capitalize">
            {user.name.firstname} {user.name.lastname}
          </h2>
          <p className="text-sm text-slate-500">@{user.username}</p>
        </div>

        <div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xl font-bold uppercase">
          {user.name.firstname[0]}
        </div>
      </div>

      {/* User Info */}
      <div className="mt-5 space-y-4">
        <div>
          <p className="text-sm text-slate-500">Email</p>
          <p className="font-medium text-slate-800">{user.email}</p>
        </div>

        <div>
          <p className="text-sm text-slate-500">Phone</p>
          <p className="font-medium text-slate-800">{user.phone}</p>
        </div>

        <div>
          <p className="text-sm text-slate-500">Password</p>
          <p className="font-medium text-slate-800">{user.password}</p>
        </div>

        <div>
          <p className="text-sm text-slate-500">Address</p>
          <p className="font-medium text-slate-800 capitalize">
            {user.address.number}, {user.address.street}
          </p>
          <p className="text-slate-600 capitalize">
            {user.address.city} - {user.address.zipcode}
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-500">Geo Location</p>
          <p className="text-slate-800">
            Lat: {user.address.geolocation.lat}
          </p>
          <p className="text-slate-800">
            Long: {user.address.geolocation.long}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;