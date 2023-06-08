import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CallIcon from "@mui/icons-material/Call";
import SchoolIcon from "@mui/icons-material/School";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import MarkEmailUnreadOutlinedIcon from "@mui/icons-material/MarkEmailUnreadOutlined";
import AddModeratorIcon from "@mui/icons-material/AddModerator";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { Button, IconButton, Avatar } from "@mui/material";
export default function ProfilePage() {
  const navigate = useNavigate();
  const [initialLoading, setInitialLoading] = useState(false);
  const [data, setData] = useState();

  const [urlForProfile, setUrl] = useState<Blob>();

  const handleChangeInProfile = (event: any) => {
    setUrl(event.target.files[0]);
  };

  // const copyText = async (e: any, type: string) => {
  //   let itemToCopy = "";
  //   if (type === "phone") {
  //     itemToCopy = "+91 234567890";
  //   } else if (type === "email") {
  //     itemToCopy = "abc@gmail.com";
  //   }
  //   await navigator.clipboard.writeText(itemToCopy);
  // };

  const copyText = async (e: any, type: string) => {
    let itemToCopy = "";
    if (type === "phone") {
      itemToCopy = "+91 234567890";
    } else if (type === "email") {
      itemToCopy = "abc@gmail.com";
    }
    await navigator.clipboard.writeText(itemToCopy);
  };

  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div>
      {!initialLoading ? (
        <div className="rounded-lg mt-10 shadow-lg border bg-white mx-6 font-inter flex flex-col scroll-m-0">
          <div className="p-5 flex justify-start">
            <Button variant="outlined" color="secondary" onClick={handleBack}>
              Back
            </Button>
          </div>
          <div className="flex flex-row items-center justify-between w-full my-1">
            <div className="flex justify-center ">
              <Avatar
                style={{
                  marginLeft: "50px",
                  marginTop: "50px",
                }}
                // src={(urlForProfile!== '') && URL.createObjectURL(urlForProfile) }
                src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSfwGAluvdBkYjaFfxCMgTbu05yncARfEF13Jy94w4GKmUS0cfgXPiGKAkJTJJ8aeMgIfnqjigy6i-0CBM"
                sx={{ width: 90, height: 90 }}
              />
            </div>
            <div className="flex justify-end  mr-5">
              <IconButton
                color="success"
                aria-label="upload picture"
                component="label"
              >
                <input hidden type="file" onChange={handleChangeInProfile} />
                <PhotoCamera />
              </IconButton>
            </div>
          </div>
          <div className="p-1 md:p-12 text-left">
            <div
              className="block border-4 border-white rounded-full mx-auto -mt-16 h-24 w-24 bg-cover bg-center md:h-32 md:w-32 md:-mt-32"
              style={{
                backgroundImage: `url()`,
              }}
            />
            <h1 className="text-3xl font-bold text-gray-900">Priyankar Pal</h1>
            <div className="flex gap-2 mt-5">
              <GitHubIcon className="text-black" />
              <TwitterIcon className="text-blue-400" />
              <LinkedInIcon className="text-blue-800" />
            </div>
            <p className="text-md  text-gray-500 mt-9">
              <span style={{ display: "inline-block" }}>
                {" "}
                <MarkEmailUnreadOutlinedIcon
                  sx={{
                    color: "green",
                    backgroundColor: "white",
                  }}
                />
              </span>
              <span className="ml-2 mb-10">abc@gmail.com</span>
            </p>
            <p className="pt-2 text-md text-gray-900 mt-1 ">
              <span style={{ display: "inline-block" }}>
                {" "}
                <SchoolIcon
                  sx={{
                    color: "green",
                    backgroundColor: "white",
                  }}
                />
              </span>
              <span className="ml-5 mb-5" style={{ marginBottom: "10%" }}>
                Went to{" "}
                <span className="font-bold">Swami Vivekananda University</span>
              </span>
            </p>
            {/* School */}
            <p className="pt-2 text-md text-gray-900 mt-1 ">
              <span style={{ display: "inline-block" }}>
                {" "}
                <SchoolIcon
                  sx={{
                    color: "green",
                    backgroundColor: "white",
                  }}
                />
              </span>
              <span className="ml-5 mb-5" style={{ marginBottom: "10%" }}>
                Member of <span className="font-bold">XYZ community</span>
              </span>
            </p>
            <div className="pt-2 text-md text-gray-900 mt-1 ">
              <span style={{ display: "inline-block" }}>
                {" "}
                <SchoolIcon
                  sx={{
                    color: "green",
                    backgroundColor: "white",
                  }}
                />
              </span>
              <span className="ml-5 mb-5" style={{ marginBottom: "10%" }}>
                Building <span className="font-bold">ABC community</span>
              </span>
            </div>
            <p className="text-black mt-5 font-bold">organizations</p>
            <div className="flex gap-2 mt-4">
              <img
                src="https://media.istockphoto.com/id/1124838925/vector/programming-code-application-window.jpg?s=612x612&w=0&k=20&c=2J2JZP7cQltD03QkOMl6JYfzcmD-GN7bjrWVuieD7Jc="
                height={50}
                width={50}
                alt=""
                className="rounded-md"
              />
              <img
                src="https://media.istockphoto.com/id/1124838925/vector/programming-code-application-window.jpg?s=612x612&w=0&k=20&c=2J2JZP7cQltD03QkOMl6JYfzcmD-GN7bjrWVuieD7Jc="
                height={50}
                width={50}
                alt=""
                className="rounded-md"
              />
              <img
                src="https://media.istockphoto.com/id/1124838925/vector/programming-code-application-window.jpg?s=612x612&w=0&k=20&c=2J2JZP7cQltD03QkOMl6JYfzcmD-GN7bjrWVuieD7Jc="
                height={50}
                width={50}
                alt=""
                className="rounded-md"
              />
            </div>
          </div>
          <div className="mx-auto w-4/5 pt-3 border-b-2 border-grey-100 opacity-25" />
        </div>
      ) : (
        <>loading</>
      )}
    </div>
  );
}
