import HackTopicsCom from ".././community-page/hackathon-inputs/HackTopics";
import HackSpeakersCom from ".././community-page/hackathon-inputs/HackSpeakers";
import HackVenueCom from ".././community-page/hackathon-inputs/HackVenue";
import HackDescriptionCom from ".././community-page/hackathon-inputs/HackDescription";

export default function CreateHackathons() {
  return (
    <section className="my-5 min-h-[60rem]  text-black ">
      <p className="text-2xl font-bold mb-5">Create a Hackathon 🎉</p>
      {/*  for only cover image */}
      <div className="col-span-full w-[94%] mx-auto ">
        <label
          htmlFor="cover-photo"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Cover photo
        </label>
        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
          <div className="text-center">
            <svg
              className="mx-auto h-12 w-12 text-gray-300"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                clipRule="evenodd"
              />
            </svg>
            <div className="mt-4 flex text-sm leading-6 text-gray-600">
              <label
                htmlFor="file-upload"
                className="relative cursor-pointer rounded-md bg-white font-semibold text-primary focus-within:outline-none focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 hover:text-purple-500"
              >
                <span>Upload a file</span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  className="sr-only"
                  accept="image/*"
                />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs leading-5 text-gray-600">
              PNG, JPG up to 5MB
            </p>
          </div>
        </div>
      </div>
      <article className="h-full  p-10 m-9  grid grid-cols-2 border gap-10 ">
        <div className=" ">
          <HackDescriptionCom />
        </div>
      </article>
      <article className=" p-5 ml-9 border w-[95%]">
        <p className="font-bold text-left text-2xl">Hackathon Topics 📌</p>
        <HackTopicsCom />
      </article>
      <article className="p-5  ml-9 flex border mt-9 w-[95%]  justify-between ">
        <p className="font-bold text-left  text-2xl">Judges 🧑‍⚖️</p>
        <div className="mt-5">
          <HackSpeakersCom />
        </div>
      </article>
      <article className=" p-5 mt-9 w-[95%] ml-9 border">
        <p className="font-bold text-left text-2xl">Location 🗺️</p>
        <HackVenueCom />
      </article>
    </section>
  );
}