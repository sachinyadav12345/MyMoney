
export default function InviteAndEarn() {
  return (
    <div className="min-h-screen bg-[#290b4b] text-white">
      {/* Header */}
      <div className="relative p-4">
        {/* <ArrowLeft className="w-6 h-6" /> */}
        <div className="text-center mt-4">
          <h1 className="text-2xl font-bold">INVITE & EARN UPTO</h1>
          <div className="text-4xl font-bold text-yellow-400">₹5,00,0000</div>
        </div>

        {/* Currency Notes Image */}
        <div className="mt-4 flex justify-center">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20(184)-RJBk10qeCJPJZHg07fTL2Ifz7oMS8M.png"
            alt="Indian Currency Notes"
            className="w-3/4 h-auto"
          />
        </div>
      </div>

      {/* Top Inviters Section */}
      <div className="bg-white/10 rounded-lg mx-4 p-4 mt-4">
        <h2 className="text-lg font-bold mb-4">TOP INVITERS</h2>
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center">
              {/* <User className="w-6 h-6 text-white" /> */}
            </div>
            <div className="mt-1 text-sm">₹40,000</div>
            <div className="text-xs text-gray-300">@sam123</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center">
              {/* <User className="w-8 h-8 text-white" /> */}
            </div>
            <div className="mt-1 text-sm">₹93,000</div>
            <div className="text-xs text-gray-300">@mike23</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center">
              {/* <User className="w-6 h-6 text-white" /> */}
            </div>
            <div className="mt-1 text-sm">₹88,000</div>
            <div className="text-xs text-gray-300">@sam123</div>
          </div>
        </div>

        {/* Current Earning */}
        <div className="flex items-center justify-center mt-4 bg-white/5 rounded-lg p-2">
          {/* <Gift className="w-5 h-5 text-yellow-400 mr-2" /> */}
          <span>Current Earning : ₹1400</span>
        </div>
      </div>

      {/* Referral Code Section */}
      <div className="mx-4 mt-4 flex gap-2">
        <div className="flex-1 bg-white/20 rounded-lg p-3">
          <div className="text-sm text-gray-300">REFERRAL CODE</div>
          <div className="font-bold">raj025d</div>
        </div>
        <button className="bg-purple-600 rounded-lg px-4 py-2 flex items-center gap-2">
          Get ₹50 Now
          <div className="flex -space-x-1">
            <div className="w-4 h-4 rounded-full bg-green-500"></div>
            <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
          </div>
        </button>
      </div>

      {/* How it Works Section */}
      <div className="mx-4 mt-6 bg-white/10 rounded-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="text-lg font-bold">INVITE & EARN</div>
          <button className="text-purple-400 flex items-center">
            How it Works?
            {/* <ArrowLeft className="w-4 h-4 rotate-180" /> */}
          </button>
        </div>
        <div className="flex justify-between relative">
          <div className="flex flex-col items-center z-10">
            <div className="w-12 h-12 rounded-full bg-red-400 flex items-center justify-center">
              {/* <User className="w-6 h-6" /> */}
            </div>
            <div className="text-xs mt-2 text-center">
              INVITE
              <br />
              FRIENDS
            </div>
          </div>
          <div className="flex flex-col items-center z-10">
            <div className="w-12 h-12 rounded-full bg-purple-400 flex items-center justify-center">
              {/* <User className="w-6 h-6" /> */}
            </div>
            <div className="text-xs mt-2 text-center">
              LET THEM
              <br />
              SIGN UP
            </div>
          </div>
          <div className="flex flex-col items-center z-10">
            <div className="w-12 h-12 rounded-full bg-blue-400 flex items-center justify-center">
              {/* <Gift className="w-6 h-6" /> */}
            </div>
            <div className="text-xs mt-2 text-center">
              GET
              <br />
              REWARDED
            </div>
          </div>
          {/* Connecting line */}
          <div className="absolute top-6 left-0 right-0 h-0.5 bg-white/20"></div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-purple-900/80 flex justify-between p-4">
        <button className="flex flex-col items-center">
          {/* <Home/> */}
          <span className="text-xs mt-1">Home</span>
        </button>
        <button className="flex flex-col items-center">
          {/* <Gift className="w-6 h-6" /> */}
          <span className="text-xs mt-1">Bonus</span>
        </button>
        <button className="flex flex-col items-center">
          {/* <Clock className="w-6 h-6" /> */}
          <span className="text-xs mt-1">Earn & Links</span>
        </button>
        <button className="flex flex-col items-center">
          {/* <User className="w-6 h-6" /> */}
          <span className="text-xs mt-1">Account</span>
        </button>
      </div>
    </div>
  )
}