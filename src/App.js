function App() {
  return (

    <div className="font-roboto min-h-screen flex flex-col">
      <header className="bg-white shadow-md">
        <nav className="max-w-6xl mx-auto p-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            <div className="ml-4 hidden md:flex space-x-4">
              <a href="#home" className="text-gray-700">Home</a>
              <a href="#contact" className="text-gray-700">Contact</a>
              <a href="#about" className="text-gray-700">About</a>
            </div>
          </div>
          <button className="bg-green-500 text-white px-4 py-2 rounded">Login</button>
        </nav>
      </header>

      <main className="flex-grow bg-gray-200 flex justify-center items-center">
        <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-gray-700">Email</label>
              <input type="email" id="email" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded"
                     placeholder="email@example.com"/>
            </div>
            <div>
              <label htmlFor="password" className="block text-gray-700">Password</label>
              <input type="password" id="password"
                     className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded"/>
            </div>
            <div className="flex justify-between">
              <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded">Cancel</button>
              <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Login</button>
            </div>
          </form>
        </div>
      </main>

      <footer className="bg-gray-800 text-white text-center p-4">
        © Copyright 2024
      </footer>
    </div>

  );
}

export default App;
