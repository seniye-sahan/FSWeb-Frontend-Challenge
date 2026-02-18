import Header from "./components/Header";


export default function App() {
  return (
    <div className="min-h-screen w-full bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-6xl mx-auto px-10 pt-6 flex justify-end">
        <Header/>
      </div>
    </div>
  );
}