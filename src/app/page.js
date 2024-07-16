import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import HeroSection from "@/components/hero-section"
import { CheckIcon } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Component() {
  return (
    <>
      <header className="bg-gray-900 text-white py-4 px-6 md:px-12 flex items-center justify-between sticky top-0">
        <div className="flex items-center space-x-4">
          {/* <img src="/zydus_logo.png" alt="" className="w-10 h-10" /> */}
          <span className="text-xl font-bold">Zydus Green Energy pvt ltd</span>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <Link className="hover:underline" href="#">
            Home
          </Link>

          <Link className="hover:underline" href="#services" s>
            Services
          </Link>
          <Link className="hover:underline" href="#fuels">
            Fuels
          </Link>
          <Link className="hover:underline" href="#about-us">
            About Us
          </Link>
          <Link className="hover:underline" href="#news">
            News
          </Link>

          <Link className="hover:underline" href="#contact">
            Contact
          </Link>
        </nav>
      </header>
      <main>

        <HeroSection />

        <section className="bg-gray-100 py-20 px-6 md:px-12" id="services">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Our Services</h2>
              <p>Zydus Green Energy offers a comprehensive range of renewable energy solutions to meet your needs.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
                <SunIcon className="h-12 w-12 text-green-500" />
                <h3 className="text-xl font-bold">Training</h3>
                <p>
                  We provide certified training in the field of renewable energy.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
                <WindIcon className="h-12 w-12 text-green-500" />
                <h3 className="text-xl font-bold">Licensing</h3>
                <p>
                  We provide licensing for renewable energy projects.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
                <BatteryIcon className="h-12 w-12 text-green-500" />
                <h3 className="text-xl font-bold">Financing</h3>
                <p>
                  Assisting with providing government schemes for renewable energy projects.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
                <BatteryIcon className="h-12 w-12 text-green-500" />
                <h3 className="text-xl font-bold">Project Implementation</h3>
                <p>
                  From Design, engineering, Plant Fabrication to regular services and maintenance we provide all services.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-900 text-white py-20 px-6 md:px-12" id="fuels">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Renewable Fuels</h2>
              <p>Zydus Green Energy offers a range of renewable fuel solutions to power a sustainable future.</p>
            </div>
            <Tabs className="w-full" defaultValue="cbg">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="cbg">CBG</TabsTrigger>
                <TabsTrigger value="biodiesel">Bio Diesel</TabsTrigger>
                <TabsTrigger value="ethanol">Ethanol</TabsTrigger>
              </TabsList>
              <TabsContent value="cbg">
                <div className="grid gap-6">
                  <div className="rounded-lg shadow-md p-6 space-y-4">
                    <h3 className="text-xl font-bold">Compressed Biogas (CBG)</h3>
                    <p>
                      Compressed Biogas (CBG) is a renewable fuel produced from organic waste materials such as
                      agricultural residues, animal waste, and municipal solid waste. It is a clean and sustainable
                      alternative to traditional fossil fuels, offering several advantages:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-4">
                        <CheckIcon className="h-6 w-6 text-green-500 mt-1" />
                        <p>Reduced greenhouse gas emissions compared to conventional fuels</p>
                      </li>
                      <li className="flex items-start space-x-4">
                        <CheckIcon className="h-6 w-6 text-green-500 mt-1" />
                        <p>Supports the circular economy by repurposing waste materials</p>
                      </li>
                      <li className="flex items-start space-x-4">
                        <CheckIcon className="h-6 w-6 text-green-500 mt-1" />
                        <p>
                          Provides a reliable and sustainable energy source for transportation and other applications
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="biodiesel">
                <div className="grid gap-6">
                  <div className=" rounded-lg shadow-md p-6 space-y-4">
                    <h3 className="text-xl font-bold">Biodiesel</h3>
                    <p>
                      Biodiesel is a renewable, biodegradable, and environmentally friendly fuel made from vegetable
                      oils, animal fats, or recycled cooking oils. It offers several advantages over traditional diesel:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-4">
                        <CheckIcon className="h-6 w-6 text-green-500 mt-1" />
                        <p>Reduced greenhouse gas emissions and air pollutants</p>
                      </li>
                      <li className="flex items-start space-x-4">
                        <CheckIcon className="h-6 w-6 text-green-500 mt-1" />
                        <p>Biodegradable and non-toxic, making it safer for the environment</p>
                      </li>
                      <li className="flex items-start space-x-4">
                        <CheckIcon className="h-6 w-6 text-green-500 mt-1" />
                        <p>Can be used in existing diesel engines with little or no modification</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="ethanol">
                <div className="grid gap-6">
                  <div className=" rounded-lg shadow-md p-6 space-y-4">
                    <h3 className="text-xl font-bold">Ethanol</h3>
                    <p />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>


        <section className="bg-gray-100 py-20 px-6 md:px-12" id="about-us">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">About Us</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <CheckIcon className="h-6 w-6 text-green-500 mt-1" />
                  <p>
                    Zydus Green Energy is a leading provider of renewable energy solutions, committed to driving the
                    transition to a greener, more sustainable future.
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckIcon className="h-6 w-6 text-green-500 mt-1" />
                  <p>
                    Our team of experienced professionals has the expertise to design, install, and maintain the most
                    efficient renewable energy systems.
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckIcon className="h-6 w-6 text-green-500 mt-1" />
                  <p>
                    We stay at the forefront of renewable energy technology, constantly exploring new and innovative
                    solutions to meet our customers needs.
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckIcon className="h-6 w-6 text-green-500 mt-1" />
                  <p>
                    Zydus Green Energy is committed to promoting sustainable practices and reducing our environmental
                    impact, helping our customers do the same.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex jus items-center">
              <img
                alt="About Zydus Green Energy"
                className="rounded-lg"
                height="400"
                src="/img1.png"
                style={{
                  aspectRatio: "700/700",
                  objectFit: "cover",
                }}
                width="600"
              />
            </div>
          </div>
        </section>

        <section className="bg-gray-900 text-white py-20 px-6 md:px-12" id="news">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Latest News</h2>
              <p>Stay up-to-date with the latest news and insights from the renewable energy industry.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-800 rounded-lg shadow-md p-6 space-y-4">
                <img
                  alt="News Article 1"
                  className="rounded-lg"
                  height="200"
                  src="https://www.gktoday.in/wp-content/uploads/2018/10/SATAT-initiative.jpg.webp"
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                  width="300"
                />
                <h3 className="text-xl font-bold">SATAT initiative launched by Former Petroleum Minister promoting Compressed Bio-Gas</h3>
                <p>
                  An innovative step to encourage the adoption of Compressed Bio-Gas (CBG) as an eco-friendly transportation fuel, was introduced by the then Honble Union Minister of Petroleum and Natural Gas & Skill Development and Entrepreneurship on October 1, 2018.
                </p>
                <Link className="text-green-500 hover:underline" href="https://www.hindustanpetroleum.com/pages/satat" target="_blank">
                  Read More
                </Link>
              </div>
              <div className="bg-gray-800 rounded-lg shadow-md p-6 space-y-4">
                <img
                  alt="News Article 2"
                  className="rounded-lg"
                  height="200"
                  src="https://static.theprint.in/wp-content/uploads/2024/05/ANI-20240529133515.jpg?compress=true&quality=80&w=800&dpr=1.5"
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                  width="300"
                />
                <h3 className="text-xl font-bold">Govt aims to eliminate diesel, petrol vehicles in India by 2034: Gadkari</h3>
                <p>
                  Mandi (Himachal Pradesh) [India], May 29 (ANI): Union Minister Nitin Gadkari said on Wednesday that the government has set a target of eliminating diesel and petrol vehicles within 10 years. I want to eliminate diesel and petrol vehicles from this country within 10 years Gadkari said while addressing a gathering here.
                </p>
                <Link className="text-green-500 hover:underline" target="_blank" href="https://theprint.in/economy/govt-aims-to-eliminate-diesel-petrol-vehicles-in-india-by-2034-gadkari/2107115/">
                  Read More
                </Link>
              </div>
              <div className="bg-gray-800 rounded-lg shadow-md p-6 space-y-4">
                <img
                  alt="News Article 3"
                  className="rounded-lg"
                  height="200"
                  src="https://etimg.etb2bimg.com/photo/107835910.cms"
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                  width="300"
                />
                <h3 className="text-xl font-bold">Govt to roll out fiscal incentives for CGD-CBG integration to boost domestic gas production</h3>
                <p>
                  New Delhi: The government is set to introduce fiscal incentives for City Gas Distribution (CGD) entities to integrate Compressed Bio-Gas (CBG) into their operations, in a bid to boost domestic gas production and reduce dependence on imports.
                </p>
                <Link className="text-green-500 hover:underline" href="https://energy.economictimes.indiatimes.com/news/oil-and-gas/govt-to-roll-out-fiscal-incentives-for-cgd-cbg-integration-to-boost-domestic-gas-supply/107835914" target="_blank">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="bg-gray-100 py-20 px-6 md:px-12" id="about">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Why Choose Zydus Green Energy?</h2>
              <p>Discover why Zydus Green Energy is the trusted choice for your renewable energy needs.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
                <FocusIcon className="h-12 w-12 text-green-500" />
                <h3 className="text-xl font-bold">Expertise</h3>
                <p>
                  Our team of experienced professionals has the knowledge and expertise to design, install, and maintain
                  the most efficient renewable energy systems.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
                <InfinityIcon className="h-12 w-12 text-green-500" />
                <h3 className="text-xl font-bold">Innovation</h3>
                <p>
                  We stay at the forefront of renewable energy technology, constantly exploring new and innovative
                  solutions to meet your energy needs.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
                <RecycleIcon className="h-12 w-12 text-green-500" />
                <h3 className="text-xl font-bold">Sustainability</h3>
                <p>
                  Zydus Green Energy is committed to promoting sustainable practices and reducing our environmental
                  impact, helping you do the same.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
                <ShoppingCartIcon className="h-12 w-12 text-green-500" />
                <h3 className="text-xl font-bold">Customer Service</h3>
                <p>
                  We pride ourselves on our exceptional customer service, providing personalized support and guidance
                  throughout your renewable energy journey.
                </p>
              </div>
            </div>
          </div>
        </section> */}
        <section className="bg-gray-800 text-white py-20 px-6 md:px-12" id="contact">
            <div className="space-y-6 flex justify-evenly items-center ">
              <h2 className="text-3xl font-bold">Contact Information:</h2>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <LocateIcon className="h-6 w-6" />
                  <p>32, Pocket 11 Rohini Sector- 24, New Delhi-110085 India</p>
                </div>
                <div className="flex items-center space-x-2">
                  <PhoneIcon className="h-6 w-6" />
                  <p>+91 9355351600 , 11-4370-2883</p>
                </div>
                <div className="flex items-center space-x-2">
                  <MailIcon className="h-6 w-6" />
                  <p>info@zydusenergy.com</p>
                </div>
              </div>
            </div>
        </section>
      </main>
      <footer className="bg-gray-900 text-white py-6 px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <LeafyGreenIcon className="h-6 w-6" />
          <span>© 2024 Zydus Green Energy pvt ltd</span>
        </div>
      </footer>
    </>
  )
}

function BatteryIcon(props) {
  return (
    <svg
      {...props}
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
      <rect width="16" height="10" x="2" y="7" rx="2" ry="2" />
      <line x1="22" x2="22" y1="11" y2="13" />
    </svg>
  )
}


function LeafyGreenIcon(props) {
  return (
    <svg
      {...props}
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
      <path d="M2 22c1.25-.987 2.27-1.975 3.9-2.2a5.56 5.56 0 0 1 3.8 1.5 4 4 0 0 0 6.187-2.353 3.5 3.5 0 0 0 3.69-5.116A3.5 3.5 0 0 0 20.95 8 3.5 3.5 0 1 0 16 3.05a3.5 3.5 0 0 0-5.831 1.373 3.5 3.5 0 0 0-5.116 3.69 4 4 0 0 0-2.348 6.155C3.499 15.42 4.409 16.712 4.2 18.1 3.926 19.743 3.014 20.732 2 22" />
      <path d="M2 22 17 7" />
    </svg>
  )
}


function LocateIcon(props) {
  return (
    <svg
      {...props}
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
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  )
}


function MailIcon(props) {
  return (
    <svg
      {...props}
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}


function PhoneIcon(props) {
  return (
    <svg
      {...props}
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}


function SunIcon(props) {
  return (
    <svg
      {...props}
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
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  )
}


function WindIcon(props) {
  return (
    <svg
      {...props}
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
      <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
      <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
      <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
    </svg>
  )
}