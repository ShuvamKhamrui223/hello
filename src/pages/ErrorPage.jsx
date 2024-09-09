import { Link } from "react-router-dom";
import Button from "../components/common/Button";

const ErrorPage = () => {
  return (
    <section>
      <div className="container min-h-[80vh] flex flex-col gap-12 items-center justify-center">
        <h1 className="text-7xl text-center first-letter:uppercase">
          the page you're looking for isn't available
        </h1>
      <Link to={"/"}>
      <Button labelText="back to home"/>
      </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
