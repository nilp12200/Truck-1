////////////////////////////////////////final full working code ///////////////////////////////////////////////////
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import CancelButton from './CancelButton';

// const API_URL = import.meta.env.VITE_API_URL;

// export default function UserMaster() {
//   const [formData, setFormData] = useState({
//     username: '',
//     password: '',
//     contactNumber: '',
//     moduleRights: [],
//     allowedPlants: [],
//   });

//   const [plantList, setPlantList] = useState([]);

//   useEffect(() => {
//     fetchPlants();
//   }, []);

//   const fetchPlants = async () => {
//     try {
//       const res = await axios.get(`${API_URL}/api/plants`);
//       setPlantList(res.data);
//     } catch (err) {
//       console.error('❌ Error fetching plants:', err);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;

//     if (type === 'checkbox' && name === 'moduleRights') {
//       setFormData((prev) => ({
//         ...prev,
//         moduleRights: checked
//           ? [...prev.moduleRights, value]
//           : prev.moduleRights.filter((right) => right !== value),
//       }));
//     } else if (type === 'checkbox' && name === 'allowedPlants') {
//       setFormData((prev) => ({
//         ...prev,
//         allowedPlants: checked
//           ? [...prev.allowedPlants, value]
//           : prev.allowedPlants.filter((plant) => plant !== value),
//       }));
//     } else {
//       setFormData((prev) => ({ ...prev, [name]: value }));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post(`${API_URL}/api/users`, formData); // ✅ FIXED here
//       alert('✅ User created successfully!');
//       setFormData({
//         username: '',
//         password: '',
//         contactNumber: '',
//         moduleRights: [],
//         allowedPlants: [],
//       });
//     } catch (err) {
//       console.error('❌ Error creating user:', err);
//       alert('Failed to create user.');
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-white px-4">
//       <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-xl">
//          <CancelButton/>
//         <h2 className="text-3xl font-bold text-center mb-6 text-blue-700 flex items-center justify-center gap-2">
//           <span className="text-4xl">👤</span> User Master
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-5">
//           <div>
//             <label className="block mb-1 font-semibold">Username</label>
//             <input
//               type="text"
//               name="username"
//               value={formData.username}
//               onChange={handleChange}
//               required
//               className="w-full border border-blue-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
//             />
//           </div>

//           <div>
//             <label className="block mb-1 font-semibold">Password</label>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//               className="w-full border border-blue-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
//             />
//           </div>

//           <div>
//             <label className="block mb-1 font-semibold">Contact Number</label>
//             <input
//               type="text"
//               name="contactNumber"
//               value={formData.contactNumber}
//               onChange={handleChange}
//               className="w-full border border-blue-300 rounded px-3 py-2 focus:outline-none focus:ring"
//             />
//           </div>

//           <div>
//             <label className="block mb-1 font-semibold">Module Rights</label>
//             <div className="flex flex-wrap gap-3">
//               {['Admin', 'GateKeeper', 'Report', 'Dispatch', 'Loader'].map((right) => (
//                 <label key={right} className="flex items-center gap-2 text-sm">
//                   <input
//                     type="checkbox"
//                     name="moduleRights"
//                     value={right}
//                     checked={formData.moduleRights.includes(right)}
//                     onChange={handleChange}
//                     className="accent-blue-600"
//                   />
//                   {right}
//                 </label>
//               ))}
//             </div>
//           </div>

//           <div>
//             <label className="block mb-1 font-semibold">Allowed Plants</label>
//             <div className="grid grid-cols-2 gap-3 max-h-40 overflow-y-auto border p-3 rounded bg-blue-50">
//               {plantList.map((plant) => {
//                 const plantId = String(plant.plantId || plant.plantid);
//                 return (
//                   <label key={plantId} className="flex items-center gap-2 text-sm">
//                     <input
//                       type="checkbox"
//                       name="allowedPlants"
//                       value={plantId}
//                       checked={formData.allowedPlants.includes(plantId)}
//                       onChange={handleChange}
//                       className="accent-green-600"
//                     />
//                     {plant.plantName || plant.plantname}
//                   </label>
//                 );
//               })}
//             </div>
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-200"
//           >
//             Create User
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }///////////////////////final code //////////////////////////////////////////////////////




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import CancelButton from './CancelButton';

// const API_URL = import.meta.env.VITE_API_URL;

// export default function UserMaster() {
//   const [formData, setFormData] = useState({
//     username: '',
//     password: '',
//     contactNumber: '',
//     moduleRights: [],
//     allowedPlants: [],
//   });

//   const [plantList, setPlantList] = useState([]);

//   useEffect(() => {
//     fetchPlants();
//   }, []);

//   const fetchPlants = async () => {
//     try {
//       const res = await axios.get(`${API_URL}/api/plants`);
//       setPlantList(res.data);
//     } catch (err) {
//       console.error('❌ Error fetching plants:', err);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;

//     if (type === 'checkbox' && name === 'moduleRights') {
//       setFormData((prev) => ({
//         ...prev,
//         moduleRights: checked
//           ? [...prev.moduleRights, value]
//           : prev.moduleRights.filter((right) => right !== value),
//       }));
//     } else if (type === 'checkbox' && name === 'allowedPlants') {
//       setFormData((prev) => ({
//         ...prev,
//         allowedPlants: checked
//           ? [...prev.allowedPlants, value]
//           : prev.allowedPlants.filter((plant) => plant !== value),
//       }));
//     } else {
//       setFormData((prev) => ({ ...prev, [name]: value }));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post(`${API_URL}/api/users`, formData);
//       alert('✅ User created successfully!');
//       setFormData({
//         username: '',
//         password: '',
//         contactNumber: '',
//         moduleRights: [],
//         allowedPlants: [],
//       });
//     } catch (err) {
//       console.error('❌ Error creating user:', err);
//       alert('Failed to create user.');
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-blue-50 p-4">
//       <div className="relative bg-white p-8 rounded-3xl shadow-2xl w-full max-w-2xl border border-indigo-200">
//         <CancelButton />
//         <h2 className="text-4xl font-bold text-center mb-8 text-indigo-700 flex items-center justify-center gap-2">
//           <span className="text-5xl">👤</span> User Master
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div className="flex flex-col gap-1">
//             <label className="font-semibold text-slate-700">Username</label>
//             <input
//               type="text"
//               name="username"
//               value={formData.username}
//               onChange={handleChange}
//               required
//               className="w-full border border-indigo-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
//               placeholder="Enter Username"
//             />
//           </div>

//           <div className="flex flex-col gap-1">
//             <label className="font-semibold text-slate-700">Password</label>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//               className="w-full border border-indigo-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
//               placeholder="Enter Password"
//             />
//           </div>

//           <div className="flex flex-col gap-1">
//             <label className="font-semibold text-slate-700">Contact Number</label>
//             <input
//               type="text"
//               name="contactNumber"
//               value={formData.contactNumber}
//               onChange={handleChange}
//               className="w-full border border-indigo-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
//               placeholder="Enter Contact Number"
//             />
//           </div>

//           <div>
//             <label className="font-semibold text-slate-700 block mb-2">Module Rights</label>
//             <div className="flex flex-wrap gap-3">
//               {['Admin', 'GateKeeper', 'Report', 'Dispatch', 'Loader'].map((right) => (
//                 <label key={right} className="flex items-center gap-2 text-sm bg-indigo-50 px-3 py-1 rounded-full shadow">
//                   <input
//                     type="checkbox"
//                     name="moduleRights"
//                     value={right}
//                     checked={formData.moduleRights.includes(right)}
//                     onChange={handleChange}
//                     className="accent-indigo-600"
//                   />
//                   {right}
//                 </label>
//               ))}
//             </div>
//           </div>

//           <div>
//             <label className="font-semibold text-slate-700 block mb-2">Allowed Plants</label>
//             <div className="grid grid-cols-2 gap-3 max-h-48 overflow-y-auto border border-indigo-200 p-3 rounded-xl bg-indigo-50">
//               {plantList.map((plant) => {
//                 const plantId = String(plant.plantId || plant.plantid);
//                 return (
//                   <label key={plantId} className="flex items-center gap-2 text-sm">
//                     <input
//                       type="checkbox"
//                       name="allowedPlants"
//                       value={plantId}
//                       checked={formData.allowedPlants.includes(plantId)}
//                       onChange={handleChange}
//                       className="accent-green-600"
//                     />
//                     {plant.plantName || plant.plantname}
//                   </label>
//                 );
//               })}
//             </div>
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl shadow-lg transition-transform transform hover:scale-105"
//           >
//             Create User
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }////////////////////////////////final working code ///////////////////


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CancelButton from './CancelButton';

const API_URL = import.meta.env.VITE_API_URL;

export default function UserMaster() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    contactNumber: '',
    moduleRights: [],
    allowedPlants: [],
  });

  const [plantList, setPlantList] = useState([]);

  useEffect(() => {
    fetchPlants();
  }, []);

  const fetchPlants = async () => {
    try {
      const res = await axios.get(`${API_URL}/api/plants`);
      setPlantList(res.data);
    } catch (err) {
      console.error('❌ Error fetching plants:', err);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox' && name === 'moduleRights') {
      setFormData((prev) => ({
        ...prev,
        moduleRights: checked
          ? [...prev.moduleRights, value]
          : prev.moduleRights.filter((right) => right !== value),
      }));
    } else if (type === 'checkbox' && name === 'allowedPlants') {
      setFormData((prev) => ({
        ...prev,
        allowedPlants: checked
          ? [...prev.allowedPlants, value]
          : prev.allowedPlants.filter((plant) => plant !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSelectAllPlants = () => {
    const allPlantIds = plantList.map((plant) => String(plant.plantId || plant.plantid));
    const isAllSelected = allPlantIds.every((id) => formData.allowedPlants.includes(id));

    setFormData((prev) => ({
      ...prev,
      allowedPlants: isAllSelected ? [] : allPlantIds,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_URL}/api/users`, formData);
      alert('✅ User created successfully!');
      setFormData({
        username: '',
        password: '',
        contactNumber: '',
        moduleRights: [],
        allowedPlants: [],
      });
    } catch (err) {
      console.error('❌ Error creating user:', err);
      alert('Failed to create user.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-blue-50 p-4">
      <div className="relative bg-white p-8 rounded-3xl shadow-2xl w-full max-w-2xl border border-indigo-200">
        <CancelButton />
        <h2 className="text-4xl font-bold text-center mb-8 text-indigo-700 flex items-center justify-center gap-2">
          <span className="text-5xl">👤</span> User Master
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-slate-700">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="w-full border border-indigo-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter Username"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-semibold text-slate-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full border border-indigo-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter Password"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-semibold text-slate-700">Contact Number</label>
            <input
              type="text"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              className="w-full border border-indigo-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter Contact Number"
            />
          </div>

          <div>
            <label className="font-semibold text-slate-700 block mb-2">Module Rights</label>
            <div className="flex flex-wrap gap-3">
              {['Admin', 'GateKeeper', 'Report', 'Dispatch', 'Loader','UserRegister','UserMaster'].map((right) => (
                <label key={right} className="flex items-center gap-2 text-sm bg-indigo-50 px-3 py-1 rounded-full shadow">
                  <input
                    type="checkbox"
                    name="moduleRights"
                    value={right}
                    checked={formData.moduleRights.includes(right)}
                    onChange={handleChange}
                    className="accent-indigo-600"
                  />
                  {right}
                </label>
              ))}
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="font-semibold text-slate-700">Allowed Plants</label>
              <button
                type="button"
                onClick={handleSelectAllPlants}
                className="text-indigo-600 text-sm font-medium hover:underline"
              >
                {formData.allowedPlants.length === plantList.length ? 'Deselect All' : 'Select All'}
              </button>
            </div>
            <div className="grid grid-cols-2 gap-3 max-h-48 overflow-y-auto border border-indigo-200 p-3 rounded-xl bg-indigo-50">
              {plantList.map((plant) => {
                const plantId = String(plant.plantId || plant.plantid);
                return (
                  <label key={plantId} className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      name="allowedPlants"
                      value={plantId}
                      checked={formData.allowedPlants.includes(plantId)}
                      onChange={handleChange}
                      className="accent-green-600"
                    />
                    {plant.plantName || plant.plantname}
                  </label>
                );
              })}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl shadow-lg transition-transform transform hover:scale-105"
          >
            Create User
          </button>
        </form>
      </div>
    </div>
  );
}

