// /* eslint-disable react/prop-types */
// import { Box, TextField } from "@mui/material";
// import { useState } from "react";
// import { useForm } from "react-hook-form";
// const BannerModal = ({ closeModal }) => {
//   const [activeContainer, setActiveContainer] = useState(1);

//   // const {
//   //   register,
//   //   handleSubmit,
//   //   formState: { errors },
//   // } = useForm();

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     watch,
//   } = useForm();

//   const handleNext = () => {
//     // Check for validation errors before proceeding
//     if (!errors.name && !errors.email && !errors.address && !errors.phone && !errors.quantity && !errors.city) {
//       setActiveContainer(activeContainer + 1);
//     }
//   };
//   const onSubmit = (data) => {
//     console.log(data);
//     closeModal();
//   };

//   return (
//     <div className="modal_container">
//       <div
//         style={{ border: "5px", borderBlockColor: "red" }}
//         className="modal_content"
//       >
//         <p style={{ color: "gray", border: "5px", borderBlockColor: "red" }}>
//           {activeContainer === 1 && <div>Step 1 of 3 </div>}
//           {activeContainer === 2 && <div>Step 2 of 3 </div>}
//           {activeContainer === 3 && <div>Step 3 of 3 </div>}
//         </p>

//         <form onSubmit={handleSubmit(onSubmit)}>
//           {activeContainer === 1 && (
//             <div
//               style={{
//                 display: "flex",
//                 gap: "8px",
//                 marginTop: "13px",
//                 marginBottom: "20px",
//               }}
//             >
//               <Box sx={{ width: "100%" }}>
//                 <TextField
//                   size="small"
//                   sx={{ width: "100%" }}
//                   {...register("name", { required: "Type is required" })}
//                   id="outlined-name-input"
//                   label="Name"
//                   type="text"
//                   error={!!errors.name} // Set error prop for visual feedback
//                   helperText={errors.name?.message} // Display error message
//                 />
//                 {errors.name && (
//                   <span style={{ color: "red" }}>Name is required</span>
//                 )}
//               </Box>

//               <Box sx={{ width: "100%" }}>
//                 <TextField
//                   size="small"
//                   sx={{ width: "100%" }}
//                   {...register("email", { required: "Type is required" })}
//                   id="outlined-name-input"
//                   label="Email"
//                   type="email"
//                   error={!!errors.email} // Set error prop for visual feedback
//                   helperText={errors.email?.message} // Display error message
//                 />
//                 {errors.name && (
//                   <span style={{ color: "red" }}>Email is required</span>
//                 )}
//               </Box>
//             </div>
//           )}

//           {activeContainer === 2 && (
//             <div
//               style={{
//                 display: "flex",
//                 gap: "8px",
//                 marginTop: "13px",
//                 marginBottom: "20px",
//               }}
//             >
//               <Box sx={{ width: "100%" }}>
//                 <TextField
//                   size="small"
//                   sx={{ width: "100%" }}
//                   {...register("address", { required: "Type is required" })}
//                   id="outlined-address-input"
//                   label="Address"
//                   type="text"
//                 />
//                 {errors.name && (
//                   <span style={{ color: "red" }}>Address is required</span>
//                 )}
//               </Box>

//               <Box sx={{ width: "100%" }}>
//                 <TextField
//                   size="small"
//                   sx={{ width: "100%" }}
//                   {...register("phone", { required: "Type is required" })}
//                   id="outlined-name-input"
//                   label="Phone"
//                   type="number"
//                 />
//                 {errors.name && (
//                   <span style={{ color: "red" }}>Phone Number is required</span>
//                 )}
//               </Box>
//             </div>
//           )}

//           {activeContainer === 3 && (
//             <div
//               style={{
//                 display: "flex",
//                 gap: "8px",
//                 marginTop: "13px",
//                 marginBottom: "20px",
//               }}
//             >
//               <Box sx={{ width: "100%" }}>
//                 <TextField
//                   size="small"
//                   sx={{ width: "100%" }}
//                   {...register("quantity", { required: "Type is required" })}
//                   id="outlined-quantity-input"
//                   label="Quantity"
//                   type="text"
//                 />
//                 {errors.name && (
//                   <span style={{ color: "red" }}>Quantity is required</span>
//                 )}
//               </Box>

//               <Box sx={{ width: "100%" }}>
//                 <TextField
//                   size="small"
//                   sx={{ width: "100%" }}
//                   {...register("city", { required: "Type is required" })}
//                   id="outlined-city-input"
//                   label="City"
//                   type="text"
//                 />
//                 {errors.name && (
//                   <span style={{ color: "red" }}>City Number is required</span>
//                 )}
//               </Box>
//             </div>
//           )}
//         </form>

//         {/* close next button */}
//         <div className="btn_close_next">
//           {activeContainer === 1 && (
//             <button
//               type="button"
//               style={{ color: "red" }}
//               className="btn"
//               onClick={closeModal}
//             >
//               Cancel
//             </button>
//           )}

//           {activeContainer !== 1 && (
//             <button
//               style={{ color: "blue" }}
//               onClick={() => setActiveContainer(activeContainer - 1)}
//               className="btn"
//             >
//               Back
//             </button>
//           )}

//           {activeContainer !== 3 && (
//             <button

//               style={{ color: "green" }}
//               onClick={()=>handleNext()}
//               // onClick={() => setActiveContainer(activeContainer + 1)}
//               className="btn"
//             >
//               Next
//             </button>
//           )}
//           {activeContainer === 3 && (
//             <button
//             onClick={handleSubmit(onSubmit)}
//               style={{ color: "yellowgreen" }}
//               className="btn"
//             >
//               Submit
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BannerModal;




/* eslint-disable react/prop-types */
import { Box, TextField } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";

const BannerModal = ({ closeModal }) => {
  const [activeContainer, setActiveContainer] = useState(1);

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
     closeModal();
  };

  const handleNext = async () => {
    const result = await trigger(["name", "email", "address", "phone", "quantity", "city"].filter((field, index) => index < activeContainer * 2));
    if (result) {
      setActiveContainer(activeContainer + 1);
    }
  };

  return (
    <div className="modal_container">
      <div style={{ border: "5px", borderBlockColor: "red" }} className="modal_content">
        <p style={{ color: "gray", border: "5px", borderBlockColor: "red" }}>
          {activeContainer === 1 && <div>Step 1 of 3 </div>}
          {activeContainer === 2 && <div>Step 2 of 3 </div>}
          {activeContainer === 3 && <div>Step 3 of 3 </div>}
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          {activeContainer === 1 && (
            <div style={{ display: "flex", gap: "20px", marginTop: "13px", marginBottom: "40px" }}>
              <Box sx={{ width: "100%" }}>
                <TextField
                  size="small"
                  sx={{
                    width: "100%",
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "black", 
                      },
                      "& .MuiInputBase-input": {
                        color: "black", 
                      },
                    },
                    "& .MuiInputLabel-root": {
                      color: "black", 
                      "&.Mui-focused": {
                        color: "black",
                      },
                    },
                  }}
                  {...register("name", { required: "Name is required" })}
                  id="outlined-name-input"
                  label="Name"
                  type="text"
                />
                {errors.name && <span style={{ color: "red" }}>{errors.name.message}</span>}
              </Box>

              <Box sx={{ width: "100%" }}>
                <TextField
                  size="small"
                  sx={{
                    width: "100%",
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "black", 
                      },
                      "& .MuiInputBase-input": {
                        color: "black", 
                      },
                    },
                    "& .MuiInputLabel-root": {
                      color: "black", 
                      "&.Mui-focused": {
                        color: "black",
                      },
                    },
                  }}
                  {...register("email", { required: "Email is required" })}
                  id="outlined-email-input"
                  label="Email"
                  type="email"
                />
                {errors.email && <span style={{ color: "red" }}>{errors.email.message}</span>}
              </Box>
            </div>
          )}

          {activeContainer === 2 && (
            <div style={{ display: "flex", gap: "8px", marginTop: "13px", marginBottom: "20px" }}>
              <Box sx={{ width: "100%" }}>
                <TextField
                  size="small"
                  sx={{
                    width: "100%",
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "black", 
                      },
                      "& .MuiInputBase-input": {
                        color: "black", 
                      },
                    },
                    "& .MuiInputLabel-root": {
                      color: "black", 
                      "&.Mui-focused": {
                        color: "black",
                      },
                    },
                  }}
                  {...register("address", { required: "Address is required" })}
                  id="outlined-address-input"
                  label="Address"
                  type="text"
                />
                {errors.address && <span style={{ color: "red" }}>{errors.address.message}</span>}
              </Box>

              <Box sx={{ width: "100%" }}>
                <TextField
                  size="small"
                  sx={{
                    width: "100%",
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "black", 
                      },
                      "& .MuiInputBase-input": {
                        color: "black", 
                      },
                    },
                    "& .MuiInputLabel-root": {
                      color: "black", 
                      "&.Mui-focused": {
                        color: "black",
                      },
                    },
                  }}
                  {...register("phone", { required: "Phone Number is required" })}
                  id="outlined-phone-input"
                  label="Phone"
                  type="number"
                />
                {errors.phone && <span style={{ color: "red" }}>{errors.phone.message}</span>}
              </Box>
            </div>
          )}

          {activeContainer === 3 && (
            <div style={{ display: "flex", gap: "8px", marginTop: "13px", marginBottom: "20px" }}>
              <Box sx={{ width: "100%" }}>








<TextField
  size="small"
  sx={{
    width: "100%",
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "black", 
      },
      "& .MuiInputBase-input": {
        color: "black", 
      },
    },
    "& .MuiInputLabel-root": {
      color: "black", 
      "&.Mui-focused": {
        color: "black", 
      },
    },
  }}
  {...register("quantity", { required: "Quantity is required" })}
  id="outlined-quantity-input"
  label="Quantity"
  type="text"
/>







                {errors.quantity && <span style={{ color: "red" }}>{errors.quantity.message}</span>}
              </Box>

              <Box sx={{ width: "100%" }}>
                <TextField
                  size="small"
                  sx={{
                    width: "100%",
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "black", 
                      },
                      "& .MuiInputBase-input": {
                        color: "black", 
                      },
                    },
                    "& .MuiInputLabel-root": {
                      color: "black", 
                      "&.Mui-focused": {
                        color: "black",
                      },
                    },
                  }}
                  {...register("city", { required: "City is required" })}
                  id="outlined-city-input"
                  label="City"
                  type="text"
                />
                {errors.city && <span style={{ color: "red" }}>{errors.city.message}</span>}
              </Box>
            </div>
          )}
        </form>

        <div className="btn_close_next">
          {activeContainer === 1 && (
            <button  style={{ color: "gray",marginRight: '10px' }} className="btn_modal" onClick={closeModal}>
              Cancel
            </button>
          )}

          {activeContainer !== 1 && (
            <button onClick={() => setActiveContainer(activeContainer - 1)} style={{marginRight: '10px'}} className="btn_modal">
              Back
            </button>
          )}

          {activeContainer !== 3 && (
            <button onClick={handleNext} className="btn_modal">
              Next
            </button>
          )}
          {activeContainer === 3 && (
            <button onClick={handleSubmit(onSubmit)} className="btn_modal">
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BannerModal;
