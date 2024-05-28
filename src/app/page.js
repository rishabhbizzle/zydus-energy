import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Component() {
  return (
    <>
      <header className="bg-gray-900 text-white py-4 px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img src="/zydus_logo.png" alt="" className="w-10 h-10" />
          <span className="text-xl font-bold">Zydus Green Energy PVT LTD</span>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <Link className="hover:underline" href="#">
            Home
          </Link>
          <Link className="hover:underline" href="#">
            Services
          </Link>
          <Link className="hover:underline" href="#">
            Latest News
          </Link>
          <Link className="hover:underline" href="#">
            Why Us?
          </Link>
          <Link className="hover:underline" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main>
        <section className="bg-gray-900 text-white py-20 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
          <div className="max-w-xl space-y-4">
            <h1 className="text-4xl font-bold">Powering a Sustainable Future</h1>
            <p>
              Zydus Green Energy PVT LTD is a leading provider of renewable energy solutions, committed to driving the
              transition to a greener, more sustainable world.
            </p>
            <div className="flex space-x-4">
              <Button variant="primary">Learn More</Button>
              <Button variant="secondary">Contact Us</Button>
            </div>
          </div>
          <img
            alt="Zydus Green Energy"
            className="mt-8 md:mt-0 max-w-[600px] w-full"
            height="400"
            src="https://i0.wp.com/indianinfrastructure.com/wp-content/uploads/2022/11/II-24.jpg?fit=1855%2C1042&ssl=1"
            style={{
              aspectRatio: "600/400",
              objectFit: "cover",
            }}
            width="600"
          />
        </section>
        <section className="bg-gray-100 py-20 px-6 md:px-12" id="services">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Our Services</h2>
              <p>Zydus Green Energy offers a comprehensive range of renewable energy solutions to meet your needs.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
                <SunIcon className="h-12 w-12 text-green-500" />
                <h3 className="text-xl font-bold">Solar Energy</h3>
                <p>
                  Our solar energy solutions harness the power of the sun to provide clean, renewable electricity for
                  your home or business.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
                <WindIcon className="h-12 w-12 text-green-500" />
                <h3 className="text-xl font-bold">Wind Energy</h3>
                <p>
                  Tap into the power of the wind with our efficient wind turbine systems, delivering sustainable energy
                  for your needs.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
                <BatteryIcon className="h-12 w-12 text-green-500" />
                <h3 className="text-xl font-bold">Energy Storage</h3>
                <p>
                  Complement your renewable energy system with our advanced energy storage solutions, ensuring reliable
                  power when you need it.
                </p>
              </div>
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
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                  width="300"
                />
                <h3 className="text-xl font-bold">Renewable Energy Trends to Watch in 2023</h3>
                <p>Explore the latest advancements and innovations shaping the renewable energy landscape.</p>
                <Link className="text-green-500 hover:underline" href="#">
                  Read More
                </Link>
              </div>
              <div className="bg-gray-800 rounded-lg shadow-md p-6 space-y-4">
                <img
                  alt="News Article 2"
                  className="rounded-lg"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                  width="300"
                />
                <h3 className="text-xl font-bold">The Future of Solar Energy: Innovations and Breakthroughs</h3>
                <p>Discover the cutting-edge technologies and advancements transforming the solar energy industry.</p>
                <Link className="text-green-500 hover:underline" href="#">
                  Read More
                </Link>
              </div>
              <div className="bg-gray-800 rounded-lg shadow-md p-6 space-y-4">
                <img
                  alt="News Article 3"
                  className="rounded-lg"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                  width="300"
                />
                <h3 className="text-xl font-bold">The Environmental Impact of Renewable Energy</h3>
                <p>Explore the positive environmental benefits of transitioning to renewable energy sources.</p>
                <Link className="text-green-500 hover:underline" href="#">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gray-100 py-20 px-6 md:px-12" id="about">
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
        </section>
        <section className="bg-gray-900 text-white py-20 px-6 md:px-12" id="contact">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Get in Touch</h2>
              <p>Have a question or ready to start your renewable energy project? Contact us today!</p>
              <form className="space-y-4">
                <Input
                  className="w-full bg-gray-800 border-gray-700 focus:border-green-500 focus:ring-green-500"
                  placeholder="Name"
                  type="text"
                />
                <Input
                  className="w-full bg-gray-800 border-gray-700 focus:border-green-500 focus:ring-green-500"
                  placeholder="Email"
                  type="email"
                />
                <Textarea
                  className="w-full bg-gray-800 border-gray-700 focus:border-green-500 focus:ring-green-500"
                  placeholder="Message"
                />
                <Button type="submit" variant="primary">
                  Submit
                </Button>
              </form>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Contact Information</h2>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <LocateIcon className="h-6 w-6" />
                  <p>123 Green Energy Avenue, Ahmedabad, Gujarat 380015, India</p>
                </div>
                <div className="flex items-center space-x-2">
                  <PhoneIcon className="h-6 w-6" />
                  <p>+91 (123) 456-7890</p>
                </div>
                <div className="flex items-center space-x-2">
                  <MailIcon className="h-6 w-6" />
                  <p>info@zydusgreenenergy.com</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 text-white py-6 px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <LeafyGreenIcon className="h-6 w-6" />
          <span>© 2024 Zydus Green Energy PVT LTD</span>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <Link className="hover:underline" href="#">
            Privacy Policy
          </Link>
          <Link className="hover:underline" href="#">
            Terms of Service
          </Link>
        </nav>
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


function FocusIcon(props) {
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
      <circle cx="12" cy="12" r="3" />
      <path d="M3 7V5a2 2 0 0 1 2-2h2" />
      <path d="M17 3h2a2 2 0 0 1 2 2v2" />
      <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
      <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
    </svg>
  )
}


function InfinityIcon(props) {
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
      <path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z" />
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


function RecycleIcon(props) {
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
      <path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5" />
      <path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12" />
      <path d="m14 16-3 3 3 3" />
      <path d="M8.293 13.596 7.196 9.5 3.1 10.598" />
      <path d="m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843" />
      <path d="m13.378 9.633 4.096 1.098 1.097-4.096" />
    </svg>
  )
}


function ShoppingCartIcon(props) {
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
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
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