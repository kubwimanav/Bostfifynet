import React, { useState } from "react";
import "../youtStyles/uploadStyle.css";
import uploadBanner from "../img/uploadBlue.jpeg";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { FaCloudUploadAlt } from "react-icons/fa";
import axios from "axios";
import { Notify } from "notiflix/build/notiflix-notify-aio";

import PaymentForm from "./PaymentForm";
import { Report } from "notiflix";

// import DashCards from './DashCards'import axios from "axios";

function UploadVideo() {
  const [isPaymentModalOpen, setPaymentModalOpen] = useState(false);
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);

  const handlePaymentModalOpen = () => {
    setPaymentModalOpen(true);
  };

  const handlePaymentModalClose = () => {
    setPaymentModalOpen(false);
  };

  const form = useForm();
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = async (data) => {
    // if (!isPaymentSuccessful) {
    //   setPaymentModalOpen(true);
    //   return null;
    // }
    const accessToken = localStorage.getItem("token");

    try {
      // Send a POST request to the server endpoint
      const response = await axios.post(
        "https://boostifytube-network-api.onrender.com/api/v1/video/upload",
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      // Handle the response
      if (response.status === 200) {
        Report.success(
          "Video Uploaded Succefully",
          " now you can pay for views service  <br/><br/>",
          "Okay"
        );

        // Optionally reset the form or perform other actions
      } else {
        const errorData = response.data; // Assuming your API returns error information

        Notify.failure(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error:", error);
      Notify.failure("An error occurred while uploading the video");
    }
  };

  return (
    <div className="uploadVideo-section">
      {/* <PaymentForm
        isOpen={isPaymentModalOpen}
        onClose={handlePaymentModalClose}
      />
      <PaymentForm
        isOpen={isPaymentModalOpen}
        onClose={handlePaymentModalClose}
      /> */}
      <span
        style={{
          // marginBottom: "-10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // borderBottom: "1px solid #ccc",
        }}
      >
        <h2
          style={{
            color: "#191943",
            display: "flex",
            justifyContent: "center",
            margin: "1rem",
          }}
        >
          Upload Your Video Link
        </h2>
        <FaCloudUploadAlt style={{ width: "50px", height: "100px" }} />
      </span>
      <form
        className="uploadVideo-form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <div className="uploadDital">
          <div className="upload-Right">
            <label>
              Video Title:
              <input
                type="text"
                name="title"
                placeholder="Uplod Video Name... "
                {...register("title", {
                  required: {
                    value: true,
                    message: "Titile is very Required",
                  },
                })}
              />
              <p style={{ color: "red" }}>{errors.title?.message}</p>
            </label>

            <label>
              Upload Video Link:
              <input
                type="text"
                placeholder="Youtube video link..."
                {...register("linkOfVideo", {
                  pattern: {
                    value: /^(ftp|http|https):\/\/[^ "]+$/,
                    message: " Invalid youtube Link",
                  },
                })}
              />
              <p style={{ color: "red" }}>{errors.linkOfVideo?.message}</p>
            </label>
          </div>
          <div className="upload-Left">
            <div className="checkbox">
              <p style={{ color: "black" }}>
                {" "}
                Request Number of views:<h4></h4>
              </p>
              <label style={{ color: "black" }}>
                <span>
                  <input type="radio" value="25000" {...register("views")} />
                  <h4>1K: </h4> <p>25000fr</p>
                </span>
                <span>
                  <input type="radio" value="250000" {...register("views")} />
                  <h4>10K: </h4> <p>250,000fr</p>
                </span>
                <span>
                  <input type="radio" value="300000" {...register("views")} />
                  <h4>100K: </h4> <p>300,000fr</p>
                </span>
              </label>
            </div>

            <div className="checkbox">
              <p style={{ color: "black" }}> Video Category:</p>
              <label style={{ color: "black" }}>
                <span>
                  <input type="radio" value="music" {...register("category")} />
                  <p>Music</p>
                </span>
                <span>
                  <input type="radio" value="movie" {...register("category")} />{" "}
                  <p>Movie</p>
                </span>
                <span>
                  <input type="radio" value="All" {...register("category")} />{" "}
                  <p>Other </p>
                </span>
              </label>
            </div>
          </div>
        </div>

        <div
          className="form-button"
          style={{
            // border: "1px solid red",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="form-buttom-upload"
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "2rem",
            }}
          >
            <button
              type="submit"
              className="uploadbutton"
              // onClick={handlePaymentModalOpen}
            >
              Upload Video
            </button>
            <button type="reset" className="uploadbutton">
              Clear
            </button>
          </div>
        </div>
      </form>
      {/* <DevTool control={control} /> */}
    </div>
  );
}

export default UploadVideo;

//  dddddddddddddddddddddddddddd
// const [input, setInput] = useState({
//   videoTitle: "",
//   videoDescription: "",
//   uploadVideoLink: "",
//   videoLength: "",
//   videoComment: "",
//   requestCheckSub: "",
//   requestCheckLike: "",
//   requestCheckViews: "",
// });
//  const handleChange = (e)=>{
//   setInput({ ...input, [e.target.name]: e.target.value });
// }
//  const [videoTitle, setVideoTitle] = useState("");
//  const [videoDescription, setVideoDescription] = useState("");
//  const [uploadVideoLink, setUploadVideoLink] = useState("");
//  const [videoComment, setvideoComment] = useState("");
//  const [requestCheck, setRequestCheck] = useState("");
//  const [videoLength, setVideoLength] = useState("");

//  console.log(videoTitle + uploadVideoLink);

// Function to handle form submission

//  const handleSubmit = async (event) => {
//   event.preventDefault();

//   // Prepare data to send to the server
//   const formData = {
//     videoTitle,
//     videoDescription,
//     uploadVideoLink,
//     videoComment,
//     requestCheck,
//     videoLength,
//   };
//  const handleChange = (e) => {
//    setInput({ ...formData, [e.target.name]: e.target.value });
//  };
// console.log(formData);
// try {
// Send a POST request to the server endpoint
//     const response = await axios.post(
//       "https://boostifytube-network-api.onrender.com/ /api/v1/video/upload",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       }
//     );

//     // Handle the response
//     if (response.ok) {
//       alert("Video uploaded successfully");
//       // Optionally reset the form or perform other actions
//     } else {
//       const errorData = await response.json();
//       alert(`Error: ${errorData.message}`);
//     }
//   } catch (error) {
//     console.error("Error:", error);
//     alert("An error occurred while uploading the video");
//   }
// };
//   const handleSubmit = async (e) => {
//   e.preventDefault();
//   console.log(input);
//   try {
//     const res = await axios.post(
//       "https://boostifytube-network-api.onrender.com/api/v1/video/upload",
//       input
//     );
//     console.log(res.data);
//     // localStorage.setItem("isLogin", res.data);
//     alert("Video Uploaded successfull");

//   } catch (error) {
//     console.log(error);
//     alert(error);
//   }
// };
//   try {
//     // Send a POST request to the server endpoint
//     const response = await axios.post(
//       "https://boostifytube-network-api.onrender.com/ /api/v1/video/upload",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       }
//     );

//     // Handle the response
//     if (response.ok) {
//       alert("Video uploaded successfully");
//       // Optionally reset the form or perform other actions
//     } else {
//       const errorData = await response.json();
//       alert(`Error: ${errorData.message}`);
//     }
//   } catch (error) {
//     console.error("Error:", error);
//     alert("An error occurred while uploading the video");
//   }
// };
