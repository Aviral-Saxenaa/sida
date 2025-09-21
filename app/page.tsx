"use client"

import Link from "next/link"
import React, { useState } from "react"

// Custom Icon Components
const PhoneIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
  </svg>
)

const UserIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
  </svg>
)

const HammerIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
  </svg>
)

const BriefcaseIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h2zm4-1a1 1 0 00-1 1v1h2V6a1 1 0 00-1-1z" clipRule="evenodd" />
  </svg>
)

const SettingsIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
  </svg>
)

const MenuIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
)

const ArrowRightIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
)

const ChevronLeftIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
)

const ChevronRightIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
)

const ChevronDownIcon = ({ className = "" }: { className?: string }) => (
  <svg className={`w-5 h-5 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
)

// Button Component
const Button = ({ children, className = "", variant = "default", onClick, ...props }: any) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
  
  const variants: { [key: string]: string } = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground px-4 py-2"
  }
  
  return (
    <button 
      className={`${baseStyles} ${variants[variant] || variants.default} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

// Accordion Component
const Accordion = ({ children }: { children: React.ReactNode }) => {
  return <div className="space-y-2">{children}</div>
}

const AccordionItem = ({ children, value }: { children: React.ReactNode, value: string }) => {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <div className="border rounded-lg">
      {React.Children.map(children, (child: any) =>
        React.cloneElement(child, { isOpen, setIsOpen })
      )}
    </div>
  )
}

const AccordionTrigger = ({ children, isOpen, setIsOpen }: any) => {
  return (
    <button
      className="flex justify-between items-center w-full p-4 text-left hover:bg-gray-50 font-medium"
      onClick={() => setIsOpen(!isOpen)}
    >
      {children}
      <ChevronDownIcon className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
    </button>
  )
}

const AccordionContent = ({ children, isOpen }: any) => {
  if (!isOpen) return null
  
  return (
    <div className="px-4 pb-4 text-sm text-gray-600">
      {children}
    </div>
  )
}

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex flex-row justify-between items-center px-6 lg:px-12 py-4">
        <div className="flex flex-row items-center gap-8">
          <div className="text-2xl font-bold text-[#0A0B5C]">
            Medence Legal
          </div>
          <ul className="hidden lg:flex flex-row gap-4 text-[#0A0B5C]">
            <li className="px-2 py-2 border-b-2 hover:border-[#0A0B5C] border-[#0A0B5C] transition-all">
              <Link href="/">Home</Link>
            </li>
            <li className="px-2 py-2 border-b-2 hover:border-[#0A0B5C] border-transparent transition-all">
              <Link href="#faqs">FAQs</Link>
            </li>
          </ul>
        </div>
        <div className="lg:hidden">
          <Button variant="ghost" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <MenuIcon />
          </Button>
        </div>
        <Button className="hidden lg:flex px-4 py-2 text-[#0A0B5C] hover:text-blue-800 transition-all bg-transparent border-none shadow-none" variant="ghost">
          Book A Call
          <ArrowRightIcon />
        </Button>
      </nav>

      {/* Hero Section */}
      <main className="overflow-x-hidden py-16 px-4 md:py-24 md:px-12 min-h-screen flex items-center">
        <div className="mx-auto flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 lg:space-x-12 w-full">
          <div className="hero-text flex-1">
            <div className="w-full">
              <h1 className="text-2xl md:text-4xl font-bold mb-6 leading-tight text-[#0A0B5C]">
                Medence Legal
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed font-medium">
                Your Personal Lawyer. On Your Side, Always.
              </p>
              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed font-medium">
                Just like insurance, you pay a simple fee upfront - and when trouble comes, we handle the legal fight for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="px-8 py-4 text-lg font-bold text-[#0A0B5C] bg-yellow-200 rounded-full shadow-lg hover:bg-yellow-300 transition-all">
                  Check Plans
                </Button>
                <Button className="border-2 border-[#0A0B5C] flex items-center justify-center gap-3 px-8 py-4 text-lg text-[#0A0B5C] font-bold rounded-full hover:bg-[#0A0B5C] hover:text-white transition-all" variant="outline">
                  Book a Call
                  <ArrowRightIcon />
                </Button>
              </div>
            </div>
          </div>
          <div className="hero-image flex-1 flex justify-end">
            <img 
              src="/lawyer.webp" 
              alt="Professional Lawyer" 
              className="w-[450px] h-[600px] object-cover object-top rounded-tl-[100px]"
            />
          </div>
        </div>
      </main>

      {/* About Section */}
      <section className="about-section overflow-x-hidden py-16 px-4 md:py-24 md:px-12 bg-gray-50">
        <div className="mx-auto flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 lg:space-x-12">
          <div className="about-text flex-1">
            <div className="w-full">
              <div className="flex items-center mb-16 relative">
                <div className="w-16 h-16 rounded-full bg-blue-500 absolute top-0 left-0 shadow-lg"></div>
                <div className="w-16 h-16 rounded-full bg-green-500 absolute top-0 left-12 shadow-lg"></div>
                <div className="w-16 h-16 rounded-full bg-yellow-500 absolute top-0 left-24 shadow-lg"></div>
              </div>
              <h2 className="text-2xl md:text-4xl font-bold mb-6 leading-tight text-[#0A0B5C]">
                Welcome to Medence Legal.
              </h2>
              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed font-medium">
                Just like insurance, you pay a simple fee upfront - and when trouble comes, we handle the legal fight for you.
              </p>
              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed font-medium">
                No chasing lawyers. No high legal bills. Just peace of mind for tenants, consumers, and everyday legal needs.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
                It's like having a personal lawyer in your corner to tackle the world for you.
              </p>
            </div>
          </div>
          <div className="about-image flex-1 flex justify-end">
            <div className="rounded-3xl overflow-hidden shadow-2xl w-full max-w-[600px] lg:w-full h-[500px]">
              <img 
                src="/legal.webp" 
                alt="Legal Services" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <div className="py-20 bg-white">
        <div className="mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-12 text-[#080414]">How It Works</h2>
          <div className="relative grid grid-cols-1 md:grid-cols-5 gap-12">
            {[
              {
                icon: <PhoneIcon />,
                title: "1. Call Our Executive",
                description: "Connect with our team to discuss your legal needs and clear all the questions you have right away."
              },
              {
                icon: <UserIcon />,
                title: "2. Discovery",
                description: "Choose the right plan from our options - custom tailored to match your unique budget & legal needs"
              },
              {
                icon: <HammerIcon />,
                title: "3. Personal Lawyer",
                description: "Congratulations! You now have a dedicated personal lawyer for all your legal matters and needs."
              },
              {
                icon: <BriefcaseIcon />,
                title: "4. Legal Assistance",
                description: "Call or meet your lawyer anytime for advice or complete legal defence - always by your side."
              },
              {
                icon: <SettingsIcon />,
                title: "5. Customer Support",
                description: "Our robust support team is at your disposal, if you need to change lawyers or resolve grievances."
              }
            ].map((step, index) => (
              <div key={index} className="relative flex flex-col items-center">
                <div className="w-20 h-20 flex items-center justify-center rounded-full mb-6 bg-[#080414] text-white shadow-lg transform transition-all hover:scale-110">
                  {step.icon}
                </div>
                <h3 className="font-bold text-xl mb-4 text-[#080414]">{step.title}</h3>
                <p className="text-gray-600 text-center text-base leading-relaxed">{step.description}</p>
                {index < 4 && (
                  <div className="absolute hidden md:block w-px h-16 border-dotted border-gray-600" 
                       style={{top: "6rem", left: "50%", transform: "translateX(-50%)"}}></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="my-8 mx-4 md:my-12 md:mx-12 bg-gray-900 rounded-3xl">
        <div className="py-8 px-6 md:px-24 text-center md:text-left">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center text-white whitespace-nowrap">
            Why choose us?
          </h2>
        </div>
        <div className="hidden sm:flex relative -mt-8 min-h-[480px] justify-center items-center animate-cards overflow-hidden">
          {/* Card 1 - Affordable Legal Solutions (slides from left) */}
          <div className="h-[380px] flex flex-col gap-4 w-80 p-8 bg-[#90cce1] rounded-2xl card-1 mr-6">
            <h3 className="text-xl sm:text-3xl font-medium">Affordable Legal Solutions</h3>
            <p className="text-sm sm:text-base">Access premium legal services without stretching your budget.</p>
            <hr className="border-t border-gray-500" />
            <ul className="list-disc list-inside text-xs sm:text-sm">
              <li>Flexible plans to suit various financial needs.</li>
              <li>Transparent pricing with no hidden charges.</li>
              <li>Quality legal support at an unbeatable value.</li>
            </ul>
          </div>
          
          {/* Card 2 - Expert and Personalized Support (always visible in center) */}
          <div className="h-[380px] flex flex-col gap-4 w-80 p-8 bg-[#aad8e6] rounded-2xl card-2 mx-6 z-10">
            <h3 className="text-xl sm:text-3xl font-medium">Expert and Personalized Support</h3>
            <p className="text-sm sm:text-base">Unmatched service from seasoned legal professionals tailored to your needs.</p>
            <hr className="border-t border-gray-500" />
            <ul className="list-disc list-inside text-xs sm:text-sm">
              <li>Diverse but expert lawyers.</li>
              <li>Best lawyer-client fit combination.</li>
              <li>Comprehensive solutions as per requirements.</li>
            </ul>
          </div>
          
          {/* Card 3 - Always Here for Your Problems (slides from right) */}
          <div className="h-[380px] flex flex-col gap-4 w-80 p-8 bg-[#ebf7f5] rounded-2xl card-3 ml-6">
            <h3 className="text-xl sm:text-3xl font-medium">Always Here for Your Problems</h3>
            <p className="text-sm sm:text-base">Count on Medence for round-the-clock assistance and guidance.</p>
            <hr className="border-t border-gray-500" />
            <ul className="list-disc list-inside text-xs sm:text-sm">
              <li>24/7 customer support for all your queries.</li>
              <li>Timely updates and proactive communication.</li>
              <li>Accessible from wherever and whenever.</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col sm:hidden -mt-8">
          <div className="flex flex-col gap-4 sm:w-96 p-8 m-4 rounded-2xl card" style={{backgroundColor: "#90cce1"}}>
            <h3 className="text-xl sm:text-3xl font-medium">Affordable Legal Solutions</h3>
            <p className="text-sm sm:text-base">Access premium legal services without stretching your budget.</p>
            <hr className="border-t border-gray-500" />
            <ul className="list-disc list-inside text-xs sm:text-sm">
              <li>Flexible plans to suit various financial needs</li>
              <li>Transparent pricing with no hidden charges</li>
              <li>Quality legal support at unbeatable value</li>
            </ul>
          </div>
          
          <div className="flex flex-col gap-4 sm:w-96 p-8 m-4 rounded-2xl card" style={{backgroundColor: "#aad8e6"}}>
            <h3 className="text-xl sm:text-3xl font-medium">Expert and Personalized Support</h3>
            <p className="text-sm sm:text-base">Unmatched service from seasoned legal professionals.</p>
            <hr className="border-t border-gray-500" />
            <ul className="list-disc list-inside text-xs sm:text-sm">
              <li>Diverse but expert lawyers</li>
              <li>Best lawyer-client fit combination</li>
              <li>Comprehensive solutions as per requirements</li>
            </ul>
          </div>
          
          <div className="flex flex-col gap-4 sm:w-96 p-8 m-4 rounded-2xl card" style={{backgroundColor: "#ebf7f5"}}>
            <h3 className="text-xl sm:text-3xl font-medium">Always Here for You</h3>
            <p className="text-sm sm:text-base">Count on Medence for round-the-clock assistance.</p>
            <hr className="border-t border-gray-500" />
            <ul className="list-disc list-inside text-xs sm:text-sm">
              <li>24/7 customer support for all queries</li>
              <li>Timely updates and proactive communication</li>
              <li>Accessible from wherever and whenever</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <section className="py-8 px-4 md:py-12 md:px-12">
        <div className="mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#0A0B5C] mb-8 min-h-[3rem] flex items-center justify-center">
            How we compare
          </h2>
          <div className="grid grid-cols-3 border rounded-lg overflow-hidden">
            <div></div>
            <div className="px-1 md:px-2 bg-green-50">
              <div className="text-base md:text-xl bg-green-50 text-[#0A0B5C] font-semibold py-3 px-2 md:px-4 text-center rounded-md flex justify-center items-center">
                <span className="text-2xl">🏛️</span>
                <span className="hidden sm:inline-block ml-2">MedenceLegal</span>
              </div>
            </div>
            <div className="pl-1 md:pl-2">
              <div className="text-xs sm:text-sm md:text-xl bg-red-100 text-red-800 font-medium py-3 px-1 sm:px-2 md:px-4 text-center rounded-md flex justify-center items-center h-full">
                <span className="leading-tight text-center">Other <span className="block sm:inline">"Typical"</span> Lawyers</span>
              </div>
            </div>

            {[
              ["Price Tag", "Starting at ₹199", "Expensive"],
              ["Price Clarity", "Standard Pricing", "Uncertain & Hidden Pricing"],
              ["Quality", "Avg. 19 Years of Experience", "Unsure of Quality"],
              ["Ease", "Auto Case Updates", "Hassles & Runarounds"],
              ["Flexibility", "Lawyer Replacement Option", "No Flexibility"]
            ].map(([feature, medence, others], index) => (
              <React.Fragment key={index}>
                <div className="border-y border-gray-200 pr-1 md:pr-2">
                  <div className="py-4 px-2 md:px-4 text-gray-900 bg-white font-medium text-xs sm:text-base md:text-xl">
                    {feature}
                  </div>
                </div>
                <div className="px-1 md:px-2 border-y border-gray-200 bg-green-50">
                  <div className="py-4 px-2 md:px-4 text-center bg-green-50 font-medium text-xs sm:text-base md:text-xl">
                    {medence}
                  </div>
                </div>
                <div className="pl-1 md:pl-2 border-y border-gray-200">
                  <div className="py-4 px-1 sm:px-2 md:px-4 text-center bg-red-50 h-full font-medium text-xs sm:text-sm md:text-xl">
                    {others}
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 flex flex-col min-h-[600px] bg-gray-50">
        <div className="flex justify-between items-center px-4 sm:px-12">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">HEAR IT FROM OUR USERS</h2>
            <p className="text-lg sm:text-xl sm:max-w-lg font-medium text-gray-600">
              Discover the valuable feedback and testimonials from our satisfied clients about their experiences with us.
            </p>
          </div>
          <div className="hidden sm:flex space-x-4">
            <Button variant="outline" className="p-2" aria-label="Scroll Left">
              <ChevronLeftIcon />
            </Button>
            <Button variant="outline" className="p-2" aria-label="Scroll Right">
              <ChevronRightIcon />
            </Button>
          </div>
        </div>
        <div className="flex gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory px-4 sm:px-12 py-8">
          {/* Testimonial cards */}
          {[
            {
              name: "Priya Sharma",
              role: "Small Business Owner",
              content: "Medence Legal saved me thousands in legal fees when dealing with a tenant dispute. Their transparent pricing and expert lawyers made the whole process stress-free.",
              rating: 5,
              avatar: "PS"
            },
            {
              name: "Rajesh Kumar",
              role: "Software Engineer",
              content: "As a first-time home buyer, I needed legal guidance. The team at Medence Legal was incredibly helpful and made sure I understood every document.",
              rating: 5,
              avatar: "RK"
            },
            {
              name: "Anita Patel",
              role: "Freelance Consultant",
              content: "Having a personal lawyer through Medence Legal gives me peace of mind. Whenever I have contract questions, they're just a call away.",
              rating: 5,
              avatar: "AP"
            },
            {
              name: "Vikram Singh",
              role: "Restaurant Owner",
              content: "The lawyer replacement option is fantastic. When my first lawyer wasn't the right fit, they quickly matched me with someone perfect for my needs.",
              rating: 5,
              avatar: "VS"
            }
          ].map((testimonial, index) => (
            <div key={index} className="flex-none w-80 bg-white rounded-lg shadow-lg p-6 snap-start">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Metrics */}
      <section className="py-20 px-4 md:py-28 md:px-12 bg-white flex flex-col items-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center text-[#0A0B5C]">TRUSTED BY OUR USERS</h2>
        <p className="mb-12 text-gray-600 text-lg md:text-xl text-center font-medium max-w-2xl">
          Medence Legal is backed by results, not just words
        </p>
        <div className="flex flex-col md:flex-row justify-around space-y-12 md:space-y-0 md:space-x-16 bg-gradient-to-r from-blue-50 to-yellow-50 shadow-2xl border rounded-3xl p-12 md:p-20 w-full max-w-6xl">
          <div className="text-center">
            <p className="text-2xl md:text-5xl font-bold text-[#0A0B5C] mb-2">27.45+</p>
            <p className="text-gray-700 text-base md:text-lg font-semibold">
              crore worth of assets under <br /> litigation handled
            </p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-5xl font-bold text-[#0A0B5C] mb-2">₹73,000</p>
            <p className="text-gray-700 text-base md:text-lg font-semibold">Average Money Saved per User</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-5xl font-bold text-[#0A0B5C] mb-2">4.83</p>
            <p className="text-gray-700 text-base md:text-lg font-semibold">Average Rating</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faqs" className="py-20 px-4 md:py-24 md:px-12 flex flex-col md:flex-row gap-12 bg-gray-50">
        <div className="md:w-1/3">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 text-[#0A0B5C]">Frequently Asked Questions</h2>
          <p className="mb-8 text-base md:text-lg font-medium text-gray-700">
            Still have any questions? Contact our Team via{" "}
            <Link href="mailto:support@medencelegal.in" className="text-blue-600 underline font-semibold">
              support@medencelegal.in
            </Link>
          </p>
          <Button variant="outline" className="w-full md:w-auto px-8 py-4 text-lg font-bold border-2 border-[#0A0B5C] text-[#0A0B5C] hover:bg-[#0A0B5C] hover:text-white transition-all">
            See All FAQ's
          </Button>
        </div>
        <div className="md:w-2/3 space-y-6 border-2 border-gray-200 p-8 md:p-12 rounded-2xl bg-white shadow-xl">
          <Accordion>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Are you an insurance company?
              </AccordionTrigger>
              <AccordionContent>
                No, we are not an insurance company. We are a legal services platform that provides affordable access to qualified lawyers for various legal needs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                How does the pricing work?
              </AccordionTrigger>
              <AccordionContent>
                We offer transparent, affordable pricing starting at ₹199. You pay upfront for our legal protection services, and we handle legal matters as they arise.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                What type of legal issues do you handle?
              </AccordionTrigger>
              <AccordionContent>
                We handle a wide range of legal matters including tenant issues, consumer disputes, contract matters, and everyday legal needs for individuals and families.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 md:py-16 md:px-12 bg-gray-900">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <p className="text-gray-300 text-center md:text-left text-base">
            Designed & Developed by{" "}
            <Link href="http://sidahq.com/" className="text-yellow-400 hover:text-yellow-300 font-semibold transition">
              SIDA Technologies
            </Link>
          </p>
          <div className="flex justify-center md:justify-start space-x-8">
            <Link href="https://www.linkedin.com/company/medence-legal" className="text-gray-300 hover:text-blue-400 transition text-lg font-medium" target="_blank">
              LinkedIn
            </Link>
            <Link href="#" className="text-gray-300 hover:text-blue-400 transition text-lg font-medium" target="_blank">
              Twitter
            </Link>
            <Link href="https://instagram.com/medencelegal" className="text-gray-300 hover:text-pink-400 transition text-lg font-medium" target="_blank">
              Instagram
            </Link>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <Link
        href="https://wa.me/918901664959"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-5 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center"
        target="_blank"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488"/>
        </svg>
      </Link>
    </div>
  )
}