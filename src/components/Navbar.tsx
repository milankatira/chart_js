interface Props {
  setchartType: "line" | "bar" | "pie" | "spline" | "heatmap" | any;
}
const Navbar = ({ setchartType }: Props) => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center sticky z-10 top-0">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-10 h-10 text-white bg-indigo-500 p-1 rounded-full"
            fill="currentColor"
          >
            <path d="M64 400C64 408.8 71.16 416 80 416H480C497.7 416 512 430.3 512 448C512 465.7 497.7 480 480 480H80C35.82 480 0 444.2 0 400V64C0 46.33 14.33 32 32 32C49.67 32 64 46.33 64 64V400zM342.6 278.6C330.1 291.1 309.9 291.1 297.4 278.6L240 221.3L150.6 310.6C138.1 323.1 117.9 323.1 105.4 310.6C92.88 298.1 92.88 277.9 105.4 265.4L217.4 153.4C229.9 140.9 250.1 140.9 262.6 153.4L320 210.7L425.4 105.4C437.9 92.88 458.1 92.88 470.6 105.4C483.1 117.9 483.1 138.1 470.6 150.6L342.6 278.6z" />
          </svg>
          <span className="ml-3 text-xl">HighChart</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <button
            className="mr-5 hover:text-gray-900"
            onClick={() => setchartType("line")}
          >
            Line chart
          </button>
          <button
            className="mr-5 hover:text-gray-900"
            onClick={() => setchartType("pie")}
          >
            Pie Chart
          </button>
          <button
            className="mr-5 hover:text-gray-900"
            onClick={() => setchartType("bar")}
          >
            Bar chart
          </button>
          <button
            className="mr-5 hover:text-gray-900"
            onClick={() => setchartType("spline")}
          >
            Spline chart
          </button>{" "}
          <button
            className="mr-5 hover:text-gray-900"
            onClick={() => setchartType("heatmap")}
          >
            Heatmap
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
