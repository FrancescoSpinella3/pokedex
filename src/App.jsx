import './App.css'
import DashboardLayout from './components/layout/DashboardLayout'
import Navbar from './components/layout/Navbar'
import SearchBar from './components/layout/SearchBar'

export default function App() {

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-zinc-800">
        <SearchBar />
        
        <DashboardLayout />
      </main>
    </>
  )
}
