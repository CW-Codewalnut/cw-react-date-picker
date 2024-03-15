import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Layout } from "@/components/layout";
import { CodewalnutCustomDatePicker } from "@/components/atoms/CodewalnutCustomDatePicker/CodewalnutCustomDatePicker";

export default function Home() {
  const endDateLimit = new Date();
  endDateLimit.setDate(endDateLimit.getDate() + 30);
  return (
    <>
      <Head>
        <title>CW NextJs open source date-picker </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="md:py-8 md:px-4 mb-4 items-center flex flex-col border-b-2">
          <CodewalnutCustomDatePicker
            isEndDate
            startDatePlaceHolder="Start Date"
            endDatePlaceHolder="End Date"
            calendarStartFromMondayDay
            endDateLimit={endDateLimit}
            markSundayAsRed
          />
          <Link href="/field-customization">
            <p className="mt-4 text-center text-md px-2 py-2">
              See the tool in action?
              <span className="text-blue-500 font-semibold hover:underline">
                Try the tool
              </span>
            </p>
          </Link>
        </div>
        <div className="w-full md:w-3/5 mx-auto">
          <div className="mx-auto px-4">
            <section>
              <h1 className="md:text-4xl text-2xl text-center md:text-start font-bold text-gray-800 mb-4">
                NextJs open source date-picker
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold mb-4">
                Overview
              </h2>
              <p className="text-gray-700 mb-4">
                Welcome to our <code>&lt;CustomDatePicker/&gt;</code> component,
                an innovative solution crafted by Codewalnut using the{" "}
                <code>react-datepicker</code> library and styled elegantly with{" "}
                <code>Tailwind CSS 3</code>. This component is a direct outcome
                of the challenges we faced while integrating various
                date-picking functionalities into web projects. Its tailored to
                streamline the date selection process, especially for booking
                flows, and has been refined through insights and inputs from an
                expert developer.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
              <p className="text-gray-700 mb-4">
                <code>&lt;CustomDatePicker/&gt;</code> is a versatile,
                independent, and reusable component designed to elevate the
                date-picking experience in your <code>Next.js</code> and{" "}
                <code>React.js</code> projects. This component is meticulously
                crafted with <code>TypeScript</code>, ensuring type safety and
                efficient integration.
              </p>
            </section>
            <section className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
              <ul className="list-disc ml-6 mb-4">
                <li className="mb-2">
                  <b>Dynamic Properties</b>: Tailor the component to your needs
                  with dynamic props.
                </li>
                <li className="mb-2">
                  <b>End Date Functionality</b>: Utilize the{" "}
                  <code>isEndDate</code> flag to activate the end date picker,
                  catering to scenarios requiring both start and end date
                  selections.
                </li>
                <li className="mb-2">
                  <b>Date Validation</b>: The component intelligently ensures
                  that the <code>endDate</code> is always equal to or later than
                  the <code>startDate</code>, maintaining logical date ranges.
                </li>
                <li className="mb-2">
                  <b>Customizable Date Popper</b>: Style your date popper to
                  match your projects aesthetics by passing custom classes
                  through the <code>additionalDatePickerClasses</code> prop.
                </li>
                <li className="mb-2">
                  <b>Efficient Date Handling</b>: Leverages{" "}
                  <a href="https://date-fns.org/">date-fns</a> for all date
                  formatting and operations, offering a lightweight alternative
                  to bulkier libraries.
                </li>
                <li className="mb-2">
                  <b>Styling Flexibility</b>: The component supports{" "}
                  <code>global.css</code> for those projects that require global
                  CSS styles.
                </li>
                <li className="mb-2">
                  <b>Code Consistency </b>: Utilizes ESLint and Prettier to
                  enforce code style consistency, ensuring clean and readable
                  code across the project.
                </li>
                <li className="mb-2">
                  <b>Unit Testing </b>: Includes unit tests to ensure the
                  reliability and functionality of the component, providing
                  confidence in its behavior.
                </li>
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">Inspiration</h2>
              <p className="text-gray-700 mb-4">
                Our journey began while working on a project where the need for
                an efficient and user-friendly date picker was paramount. The
                existing solutions were cumbersome, leading us to develop our
                own component. This endeavor was significantly enhanced by
                collaborating with an expert developer, whose experience brought
                valuable use cases and insights to the table.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">
                Customization and Usage
              </h2>
              <p className="text-gray-700 mb-4">
                Developers are encouraged to explore and adapt this component to
                fit their specific needs. The code is designed to be flexible,
                allowing for easy modifications and enhancements.
              </p>
            </section>
            <section className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">
                Download and Setup
              </h2>
              <p className="mb-4">
                To download the project and set it up locally, you can clone the
                repository from GitHub:
              </p>
              <pre className="bg-gray-100 text-wrap p-2 rounded-md mb-4">
                git clone
                https://github.com/CW-Codewalnut/cw-react-date-picker.git
              </pre>
              <button
                type="button"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                onClick={() => {
                  window.location.href =
                    "https://github.com/CW-Codewalnut/cw-react-date-picker.git";
                }}
              >
                Go to GitHub
              </button>
            </section>
            <section className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">
                Setting Up and Running a Next.js Project
              </h2>
              <ol className="list-decimal md:ml-6 mb-4">
                <li className="mb-2">
                  Clone the repository using the command:
                  <pre className="flex text-wrap bg-gray-100 p-2 rounded-md">
                    git clone
                    https://github.com/CW-Codewalnut/cw-react-date-picker.git
                  </pre>
                </li>
                <li className="mb-2">
                  Navigate to the project directory:
                  <br />
                  <pre className="inline-block bg-gray-100 p-2 rounded-md">
                    cd cw-react-date-picker
                  </pre>
                </li>
                <li className="mb-2">
                  Install dependencies:
                  <br />
                  <pre className="inline-block bg-gray-100 p-2 rounded-md">
                    npm install
                  </pre>
                  <br />
                  This will install all the necessary packages and dependencies
                  defined in the `package.json` file.
                </li>
                <li className="mb-2">
                  Run the development server:
                  <br />
                  <pre className="inline-block bg-gray-100 p-2 rounded-md">
                    npm run dev
                  </pre>
                  <br />
                  This command will start the application development server,
                  and you should see output indicating that the server is
                  running. By default, the server will run on{" "}
                  <b>`http://localhost:3000`</b>.
                </li>
              </ol>
            </section>
            <section className="mt-8 mb-10">
              <h2 className="text-2xl font-semibold mb-4">Contributors</h2>
              <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-start space-x-6 pb-4">
                <div className="md:m-4">
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/sarath-kumar-g-dev/"
                    rel="noreferrer"
                  >
                    <Image
                      width={300}
                      height={300}
                      quality={100}
                      src="/img/sarath_profile_image.png"
                      alt="Sarath-profile-image"
                      className="rounded-3xl w-24 md:w-72 h-22 md:h-64 rounded-tr-md rounded-bl-md object-cover"
                    />
                    <div className="flex items-center md:p-3 md:space-x-4 space-x-2">
                      <div>
                        <Image
                          width={300}
                          height={300}
                          src="/svg/linked-icon-gray.svg"
                          alt="linkedin-icon"
                          className="w-5 h-5 md:w-9 md:h-9 object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="md:text-xl text-lg font-bold">
                          Sarath G
                        </h3>
                        <p className="md:text-sm text-[10px] font-medium text-gray-500">
                          Software Engineer
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="md:m-4">
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/sachin-gupta-tech"
                    rel="noreferrer"
                  >
                    <Image
                      width={300}
                      height={300}
                      quality={100}
                      src="/img/sachin_profile_image.png"
                      alt="Sachin-profile-image"
                      className="rounded-3xl w-24 md:w-72 h-22 md:h-64 rounded-tr-md rounded-bl-md object-cover"
                    />
                    <div className="flex items-center md:p-3 space-x-4">
                      <div>
                        <Image
                          width={300}
                          height={300}
                          src="/svg/linked-icon-gray.svg"
                          alt="linkedin-icon"
                          className="w-5 h-5 md:w-9 md:h-9 object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="md:text-xl text-lg font-bold">
                          Sachin G
                        </h3>
                        <p className="md:text-sm text-[10px] font-medium text-gray-500">
                          Software Engineer
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </Layout>
    </>
  );
}
