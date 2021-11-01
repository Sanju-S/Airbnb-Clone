import Header from "./Header";

const NotFound = () => {
  return (
    <div>
      <Header />

      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">Uh, oh!</h1>
        <p className="text-2xl font-semibold">
          Not enough details were found, kindly try searching again.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
