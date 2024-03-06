import Head from "next/head";
import Link from "next/link";
import { Layout } from "@/components/layout";
import { CustomDatePicker } from "@/components/atoms/DatePicker/DatePicker";

export default function Home() {
  const endDateLimit = new Date();
  endDateLimit.setDate(endDateLimit.getDate() + 30);
  return (
    <>
      <Head>
        <title>CW React Date Picker</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="flex">
          <div className="w-3/5">
          <main className="container mx-auto px-4">
            <section>
                <h2 className="text-2xl font-semibold mb-4">Overview</h2>
                <p className="text-gray-700 mb-4">Welcome to our <code>&lt;CustomDatePicker/&gt;</code> component, an innovative solution crafted by Codewalnut using the <code>react-datepicker</code> library and styled elegantly with <code>Tailwind CSS 3</code>. This component is a direct outcome of the challenges we faced while integrating various date-picking functionalities into web projects. Its tailored to streamline the date selection process, especially for booking flows, and has been refined through insights and inputs from an expert developer.</p>
            </section>

            <section className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
                <p className="text-gray-700 mb-4"><code>&lt;CustomDatePicker/&gt;</code> is a versatile, independent, and reusable component designed to elevate the date-picking experience in your <code>Next.js</code> and <code>React.js</code> projects. This component is meticulously crafted with <code>TypeScript</code>, ensuring type safety and efficient integration.</p>
            </section>

            <section className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
                <ul className="list-disc ml-6 mb-4">
                    <li className="mb-2">Dynamic Properties: Tailor the component to your needs with dynamic props.</li>
                    <li className="mb-2">End Date Functionality: Utilize the <code>isEndDate</code> flag to activate the end date picker, catering to scenarios requiring both start and end date selections.</li>
                    <li className="mb-2">Date Validation: The component intelligently ensures that the <code>endDate</code> is always equal to or later than the <code>startDate</code>, maintaining logical date ranges.</li>
                    <li className="mb-2">Customizable Date Popper: Style your date popper to match your projects aesthetics by passing custom classes through the <code>additionalDatePickerClasses</code> prop.</li>
                    <li className="mb-2">Efficient Date Handling: Leverages <a href="https://date-fns.org/">date-fns</a> for all date formatting and operations, offering a lightweight alternative to bulkier libraries.</li>
                    <li className="mb-2">Styling Flexibility: The component supports <code>global.css</code> for those projects that require global CSS styles.</li>
                </ul>
            </section>

            <section className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">Inspiration</h2>
                <p className="text-gray-700 mb-4">Our journey began while working on a project where the need for an efficient and user-friendly date picker was paramount. The existing solutions were cumbersome, leading us to develop our own component. This endeavor was significantly enhanced by collaborating with an expert developer, whose experience brought valuable use cases and insights to the table.</p>
            </section>

            <section className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">Customization and Usage</h2>
                <p className="text-gray-700 mb-4">Developers are encouraged to explore and adapt this component to fit their specific needs. The code is designed to be flexible, allowing for easy modifications and enhancements.</p>
            </section>

            <section className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
                <p className="text-gray-700 mb-4">First, run the development server:</p>
                <pre className="bg-gray-200 p-4 rounded-md">
                  <code>npm run dev
                    # or
                    yarn dev
                    # or
                    pnpm dev
                    # or
                    bun dev
                  </code>
                </pre>
            </section>
          </main>
          </div>
          <div className="w-2/5 py-8 px-4 items-center flex flex-col">
          <CustomDatePicker 
          isEndDate 
          startDatePlaceHolder="Start Date"
          endDatePlaceHolder="End Date"
          calendarStartFromMondayDay
          endDateLimit={endDateLimit}
          markSundayAsRed
        />
        <Link href="/demo">
          <p className="mt-4 text-center text-xs px-2 py-2">Wanted to check on Demo? <span className="text-blue-500 font-semibold hover:underline">check out the configurable fields</span></p>
        </Link>
          </div>
        </div>
        
      </Layout>
    </>
  );
}
