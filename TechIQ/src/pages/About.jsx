import React from "react";

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-green-600">TechIQ</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Empowering Ethiopian youth with digital literacy through engaging quiz-based learning
          </p>
        </div>

        {/* Hero Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Transforming Tech Education in Ethiopia
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                TechIQ is an interactive quiz application designed to enhance digital literacy and tech awareness among Ethiopian youth. We provide engaging quizzes on topics like computer fundamentals, digital safety, tech trends, and local tech leaders.
              </p>
              <p className="text-lg text-gray-700">
                Our mission is to make self-paced learning fun, accessible, and relevant to the unique context of Ethiopia's growing tech ecosystem.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl p-2 w-64 h-64 flex items-center justify-center shadow-lg">
                <div className="bg-white rounded-xl w-full h-full flex items-center justify-center p-4">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-green-600 mb-2">IQ</div>
                    <div className="text-gray-800 font-semibold">Tech Knowledge</div>
                    <div className="text-gray-600 mt-2">Ethiopia</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            How <span className="text-green-600">TechIQ</span> Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Select a Category</h3>
              <p className="text-gray-700">
                Choose from various tech topics relevant to Ethiopia's digital landscape
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Take the Quiz</h3>
              <p className="text-gray-700">
                Answer multiple-choice questions at your own pace, with timed or untimed options
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Learn & Improve</h3>
              <p className="text-gray-700">
                Get instant feedback, track your progress, and see your knowledge grow
              </p>
            </div>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="bg-gray-900 rounded-2xl p-8 mb-16 text-white">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our <span className="text-green-400">Technology</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-gray-800 rounded-xl p-4 text-center">
              <div className="text-blue-400 text-3xl mb-2">⚛️</div>
              <h3 className="font-semibold">React</h3>
              <p className="text-sm text-gray-400 mt-1">Frontend Framework</p>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-4 text-center">
              <div className="text-yellow-400 text-3xl mb-2">💅</div>
              <h3 className="font-semibold">Styled</h3>
              <p className="text-sm text-gray-400 mt-1">Tailwind CSS</p>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-4 text-center">
              <div className="text-green-400 text-3xl mb-2">📊</div>
              <h3 className="font-semibold">Open Trivia DB</h3>
              <p className="text-sm text-gray-400 mt-1">Question API</p>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-4 text-center">
              <div className="text-red-400 text-3xl mb-2">🏆</div>
              <h3 className="font-semibold">Leaderboard</h3>
              <p className="text-sm text-gray-400 mt-1">Local Storage</p>
            </div>
          </div>
        </div>

        {/* Future Plans Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Future <span className="text-green-600">Roadmap</span>
          </h2>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <span className="text-green-600 font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">User Accounts</h3>
                  <p className="text-gray-700">Save your progress and achievements across devices</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <span className="text-blue-600 font-bold">🌐</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Multi-language Support</h3>
                  <p className="text-gray-700">Learn in Amharic, Oromo, and other local languages</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-purple-100 p-3 rounded-full mr-4">
                  <span className="text-purple-600 font-bold">📈</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Analytics Dashboard</h3>
                  <p className="text-gray-700">Track your learning progress with detailed insights</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-yellow-100 p-3 rounded-full mr-4">
                  <span className="text-yellow-600 font-bold">🏆</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Global Leaderboard</h3>
                  <p className="text-gray-700">Compete with friends and other learners across Ethiopia</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Boost Your <span className="text-green-600">TechIQ</span>?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Join thousands of Ethiopian youth already improving their digital literacy skills with our engaging quiz platform.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;