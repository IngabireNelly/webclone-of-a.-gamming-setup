import React, { useState } from "react";

export default function AddProject() {
  const [inputValue, setInputValue] = useState("");
  const [features, setFeatures] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyPress = (e) => {
    if (e.key === "Enter") {
      if (inputValue.trim() !== "") {
        setFeatures([...features, inputValue.trim()]);
        setInputValue("");
      }
    }
  };

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isOngoing, setIsOngoing] = useState(false);

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleOngoingChange = (e) => {
    setIsOngoing(e.target.checked);
  };

  const [inputTech, setInputTech] = useState("");
  const [technologies, setTechnologies] = useState([]);

  const handleTechInputChange = (e) => {
    setInputTech(e.target.value);
  };

  const handleTechInputKeyPress = (e) => {
    if (e.key === "Enter") {
      if (inputTech.trim() !== "") {
        setTechnologies([...technologies, inputTech.trim()]);
        setInputTech("");
      }
    }
  };

  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const [imagePreview, setImagePreview] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div class="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <form>
        <div class="bg-white rounded-xl shadow">
        <div className="relative h-40 rounded-t-xl bg-[url('https://preline.co/assets/svg/examples/abstract-bg-1.svg')] bg-no-repeat bg-cover bg-center">
            <div className="absolute top-0 end-0 p-4">
                <label htmlFor="imageUpload" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
                    <svg
                        className="flex-shrink-0 w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="17 8 12 3 7 8" />
                        <line x1="12" x2="12" y1="3" y2="15" />
                    </svg>
                    Upload cover photo
                </label>
                <input
                    id="imageUpload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                />
            </div>
            {imagePreview && (
                <div className="absolute inset-0 flex justify-center items-center">
                    <img src={imagePreview} alt="Uploaded" className="h-40 w-full object-cover object-top"/>
                </div>
            )}
        </div>

          <div class="pt-0 p-4 sm:pt-0 sm:p-7">
            <div class="space-y-4 sm:space-y-6">
              <div class="space-y-2">
                <label
                  for="af-submit-app-project-name"
                  class="inline-block text-sm font-medium text-gray-800 mt-2.5"
                >
                  Project title
                </label>

                <input
                  id="af-submit-app-project-name"
                  type="text"
                  class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  placeholder="Enter project title"
                />
              </div>

              <div class="space-y-2">
                <label
                  for="af-submit-app-description"
                  class="inline-block text-sm font-medium text-gray-800 mt-2.5"
                >
                  Description
                </label>

                <textarea
                  id="af-submit-app-description"
                  class="py-2 px-3 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  rows="6"
                  placeholder="A detailed summary will better explain your project to the audience"
                ></textarea>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="af-submit-app-category"
                  className="inline-block text-sm font-medium text-gray-800 mt-2.5"
                >
                  Category
                </label>

                <select
                  id="af-submit-app-category"
                  onChange={handleCategoryChange}
                  value={selectedCategory}
                  className="py-2 px-3 pe-9 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                >
                  <option value="">Select project category</option>
                  <option value="Ecommerce">Ecommerce</option>
                  <option value="Finance">Finance</option>
                  <option value="Marketplace">Marketplace</option>
                  <option value="Social">Social</option>
                  <option value="Others">Others</option>
                </select>

                {selectedCategory === "Others" && (
                  <input
                    type="text"
                    placeholder="Enter other category"
                    className="py-2 px-3 pe-9 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 mt-2"
                  />
                )}
              </div>

              <div class="space-y-2">
                <label
                  for="af-submit-app-project-name"
                  class="inline-block text-sm font-medium text-gray-800 mt-2.5"
                >
                  Implemented features
                </label>
                <input
                  id="af-submit-app-project-feature"
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  onKeyPress={handleInputKeyPress}
                  class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  placeholder="Type feature name and press enter to add it then add the next"
                />
                <ul class="space-y-3 text-sm pt-2">
                  {features.map((feature, index) => (
                    <li key={index} class="flex space-x-3">
                      <svg
                        class="flex-shrink-0 h-4 w-4 mt-0.5 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span class="text-gray-800">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div class="space-y-2">
                <div class="flex space-x-4">
                  <div class="flex-1">
                    <label
                      for="start-date"
                      class="block text-sm font-medium text-gray-800 mt-2.5"
                    >
                      Start Date
                    </label>
                    <input
                      id="start-date"
                      type="date"
                      value={startDate}
                      onChange={handleStartDateChange}
                      class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    />
                  </div>

                  <div class="flex-1">
                    <label
                      for="end-date"
                      class="block text-sm font-medium text-gray-800 mt-2.5"
                    >
                      End Date
                    </label>
                    <input
                      id="end-date"
                      type="date"
                      value={endDate}
                      onChange={handleEndDateChange}
                      class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    />
                  </div>

                  <div class="flex-1">
                    <label
                      for="ongoing"
                      class="block text-sm font-medium text-gray-800 mt-2.5"
                    >
                      Status
                    </label>
                    <div class="flex items-center py-2 pe-11 w-full border-gray-200 shadow-sm rounded-lg text-sm">
                      <input
                        id="ongoing"
                        type="checkbox"
                        checked={isOngoing}
                        onChange={handleOngoingChange}
                        class="ml-3"
                      />
                      <label
                        for="ongoing"
                        class="block text-sm text-gray-800 mt-1 ml-2"
                      >
                        Ongoing
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div class="space-y-2">
                <label
                  for="af-submit-project-url"
                  class="inline-block text-sm font-medium text-gray-800 mt-2.5"
                >
                  Deployed link
                </label>

                <input
                  id="af-submit-project-url"
                  type="text"
                  class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  placeholder="https://example.so"
                />
              </div>

              <div class="space-y-2">
                <label
                  for="af-submit-project-url"
                  class="inline-block text-sm font-medium text-gray-800 mt-2.5"
                >
                  Project demo link
                </label>

                <input
                  id="af-submit-project-url"
                  type="text"
                  class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  placeholder="https://example.so"
                />
              </div>
              <div class="space-y-2">
                <label
                  for="af-submit-app-project-name"
                  class="inline-block text-sm font-medium text-gray-800 mt-2.5"
                >
                  Technologies used
                </label>
                <input
                  id="af-submit-app-project-feature"
                  type="text"
                  value={inputTech}
                  onChange={handleTechInputChange}
                  onKeyPress={handleTechInputKeyPress}
                  class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  placeholder="Type technology name like a framework and press enter to add it then add the next"
                />
                <ul class="space-y-3 text-sm pt-2">
                  {technologies.map((technology, index) => (
                    <li key={index} class="flex space-x-3">
                      <svg
                        class="flex-shrink-0 h-4 w-4 mt-0.5 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span class="text-gray-800">{technology}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div class="flex items-center pe-11 w-full rounded-lg text-sm">
                <input
                  id="ongoing"
                  type="checkbox"
                  checked={isOngoing}
                  onChange={handleOngoingChange}
                  class="ml-3"
                />
                <label
                  for="ongoing"
                  class="block text-sm text-gray-800 mt-1 ml-2"
                >
                  I agree that this is my original work and in case of a group
                  project I have my team mates' consent to sell it.
                </label>
              </div>
            </div>
            <div class="mt-8 flex justify-center gap-x-2">
              <button
                type="button"
                class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              >
                Submit your project
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
