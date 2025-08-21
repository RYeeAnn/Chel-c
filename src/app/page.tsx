import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="relative z-10 px-6 py-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <span className="text-2xl font-bold text-white">ChelC</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">How it Works</a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
            <Link href="/contact" className="bg-white text-slate-900 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Get Started
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="relative mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Your Appointments
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Book Themselves
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              ChelC doesn't just answer calls—it automatically books appointments directly into your calendar. No more manual entry, no more missed bookings.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link href="/demo" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105">
              See It In Action
            </Link>
            <Link href="/contact" className="border-2 border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all">
              Schedule Demo
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">0</div>
              <div className="text-gray-400">Manual Bookings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">100%</div>
              <div className="text-gray-400">Calendar Sync</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-400">Auto-Booking</div>
            </div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section id="features" className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              From Call to Calendar in Seconds
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              While other AI receptionists just take messages, ChelC completes the entire booking process automatically
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Understands & Extracts</h3>
              <p className="text-gray-300 leading-relaxed">
                Listens to customer requests and automatically extracts service type, preferred dates, and contact information.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Finds Available Slots</h3>
              <p className="text-gray-300 leading-relaxed">
                Instantly scans your calendar for open appointments and suggests the best available times to customers.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Books Automatically</h3>
              <p className="text-gray-300 leading-relaxed">
                Confirms the appointment and adds it directly to your calendar—no copy-pasting or manual entry required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Case Section */}
      <section id="how-it-works" className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The Difference: Complete Automation
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Other AI receptionists leave you with messages to process. ChelC leaves you with confirmed appointments in your calendar.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Before ChelC: The Manual Process</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Customer calls → You answer → Write down details → Check calendar → Call back → Confirm → Manually enter in calendar → Send confirmation
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span className="text-gray-300">Multiple phone calls back and forth</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span className="text-gray-300">Manual calendar entry takes time</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span className="text-gray-300">Risk of double-booking or errors</span>
                </div>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="text-center">
                <h4 className="text-2xl font-bold text-white mb-6">With ChelC: One Call, Done</h4>
                <div className="space-y-4 text-left">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-xs text-white">1</div>
                    <span className="text-gray-300">Customer calls for appointment</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-xs text-white">2</div>
                    <span className="text-gray-300">ChelC understands and finds availability</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-xs text-white">3</div>
                    <span className="text-gray-300">Books directly into your calendar</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-xs text-white">4</div>
                    <span className="text-gray-300">Sends confirmation to customer</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-green-500/20 rounded-lg border border-green-500/30">
                  <p className="text-green-400 font-semibold">Result: Appointment is already in your calendar!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Stop Manually Booking Appointments
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let ChelC handle the entire booking process while you focus on your customers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/demo" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105">
              See Auto-Booking Demo
            </Link>
            <Link href="/contact" className="border-2 border-white/20 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all">
              Get Started Today
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">C</span>
            </div>
            <span className="text-xl font-bold text-white">ChelC</span>
          </div>
          <p className="text-gray-400 mb-6">
            The only AI receptionist that automatically books appointments into your calendar
          </p>
          <div className="flex justify-center space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Support</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
