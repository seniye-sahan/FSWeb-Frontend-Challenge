import ModeSwitch from "./components/ModeSwitch";

export default function App() {
  return (
    <div className="min-h-screen w-full bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-6xl mx-auto px-6 pt-6 flex justify-end">
        <ModeSwitch />
      </div>
    </div>
  );
}