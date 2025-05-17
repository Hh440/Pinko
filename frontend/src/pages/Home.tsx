import { DashBoard } from "../components/Dashboard"
import { NavBar } from "../components/NavBar"

export const Home = () => {
  return (
    <div className="min-h-screen w-full bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <NavBar />
      <main className="pt-20"> {/* Adjust pt-20 if your NavBar is taller/shorter */}
        <DashBoard />
      </main>
    </div>
  );
};
