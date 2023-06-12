import HackTopicsCom from "../../component/Hackathon/HackTopics";
import HackSpeakersCom from "../../component/Hackathon/HackSpeakers";
import HackVenueCom from "../../component/Hackathon/HackVenue";
import HackDescriptionCom from "../../component/Hackathon/HackDescription";
import HackOrgCom from "../../component/Hackathon/HackOrganizer";

export default function HackathonDetailsPage() {
  return (
    <section className="my-5 min-h-[60rem] text-black">
      {/*  for only cover image */}
      <article className="h-full  p-10 m-9 grid grid-cols-2 border gap-10 ">
        <div className="w-full">
          <p className="font-bold text-left text-2xl">
            Open Community Hackathon 👨‍💻
          </p>
          <HackDescriptionCom />
        </div>
        <div className="w-full md:block">
          <p className="font-bold text-left text-2xl">Organised by 👯 </p>
          <HackOrgCom />
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
        <p className="font-bold text-left  text-2xl">Location 🗺️</p>
        <HackVenueCom />
      </article>
    </section>
  );
}