export default function HackDescriptionCom() {
  return (
    <div className="mt-6  border-gray-100 text-left  ">
      <dl className=" divide-gray-100 ">
        <p className="flex items-center justify-center mb-10 font-bold text-2xl">
          All details about the hackathon
        </p>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 ">
          <dt className="text-sm font-bold leading-6 text-gray-900 ">
            Hackathon name
          </dt>
          <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
            <input
              type="text"
              placeholder="HackTheCode"
              className="border p-2  outline-none rounded-md "
            />
          </dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-bold  leading-6 text-gray-900">
            Hackathon Mode
          </dt>
          <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
            <input
              type="text"
              className="border outline-none p-2 rounded-md "
              placeholder="online/offline"
            />
          </dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-bold  leading-6 text-gray-900">
            Email address
          </dt>
          <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
            <input
              type="email"
              placeholder="example@gmail.com"
              className="border p-2 outline-none rounded-md "
            />
          </dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-bold leading-6 text-gray-900">
            Cash Pizes
          </dt>
          <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
            <input
              type="text"
              placeholder="$1000"
              className="border p-2  outline-none rounded-md "
            />
          </dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-bold leading-6 text-gray-900">
            Start Date
          </dt>
          <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
            <input
              type="date"
              className="border p-2 outline-none rounded-md "
            />
          </dd>
          <dt className="text-sm font-bold leading-6 text-gray-900">
            End Date
          </dt>
          <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
            <input
              type="date"
              className="border p-2 outline-none rounded-md "
            />
          </dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-bold leading-6 text-gray-900">
            Registration Fee
          </dt>
          <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
            <input
              type="text"
              placeholder="Free/Paid"
              className="border p-2  outline-none rounded-md "
            />
          </dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-bold leading-6 text-gray-900">
            About the Hackathon
          </dt>
          <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
            <textarea
              placeholder="Share details about the  Hackathon"
              className="border p-2 w-[15rem]  outline-none resize-none rounded-md "
            />
          </dd>
        </div>
      </dl>
    </div>
  );
}
