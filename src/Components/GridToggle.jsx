import useDarkModeToggle from "@/Store/DarkModeToggle";
import useViewToggleStore from "@/Store/GridAndList";

const GridToggle = () => {
    const { view, setGrid, setList } = useViewToggleStore();
    const isDark = useDarkModeToggle((state) => state.isDark());
    return (
    <div className="flex items-center gap-3 border !px-0.5 !py-0.5 rounded-lg bg-gray-300">
      <button
        onClick={setGrid}
        className={`cursor-pointer rounded-sm ${
          isDark
            ? "hover:text-white hover:bg-black !px-1 !py-[3px]"
            : "hover:text-white hover:bg-black !px-1 !py-1"
        } ${view === "grid" ? "bg-black text-white" : ""}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-layout-grid-icon lucide-layout-grid"
        >
          <rect width="7" height="7" x="3" y="3" rx="1" />
          <rect width="7" height="7" x="14" y="3" rx="1" />
          <rect width="7" height="7" x="14" y="14" rx="1" />
          <rect width="7" height="7" x="3" y="14" rx="1" />
        </svg>
      </button>
      <button
        onClick={setList}
        className={`cursor-pointer rounded-sm ${
          isDark
            ? "hover:text-white hover:bg-black !px-1 !py-1"
            : "hover:text-white hover:bg-black !px-1 !py-1"
        } ${view === "list" ? "bg-black text-white" : ""}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-layout-panel-top-icon lucide-layout-panel-top"
        >
          <rect width="18" height="7" x="3" y="3" rx="1" />
          <rect width="7" height="7" x="3" y="14" rx="1" />
          <rect width="7" height="7" x="14" y="14" rx="1" />
        </svg>
      </button>
    </div>
  );
};

export default GridToggle;
