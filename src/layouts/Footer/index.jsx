import Button from "../../components/common/Button";
import ArrowRight from "../../assets/icons/Arrow_right.svg";
import metaIcon from "../../assets/icons/meta.svg";
import facebookIcon from "../../assets/icons/facebook.svg";
import instagramIcon from "../../assets/icons/instagram.svg";
import { footerContent } from "../../constants/common";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="min-h-[40vh] flex flex-col items-center px-8 py-10 md:px-[3%] lg:px-[7%]">
      <div className="container w-full flex flex-col gap-24 items-center">
        <div className="row_1 w-full grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="col ">
            <h4 className="text-2xl first-letter:uppercase mb-4">
              {footerContent?.heading}
            </h4>
            <Button labelText="download" icon={ArrowRight} />
          </div>

          <div className="col ">
            <h3 className="text-2xl text-linkColor_primary capitalize mb-4">
              {footerContent?.services?.label}
            </h3>
            <ul className="flex flex-col gap-4">
              {footerContent?.services?.items?.map((item) => (
                <li className="" key={item.itemId}>
                  <Link className="text-2xl text-linkColor_secondary capitalize">
                    {item.itemLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col">
            <h3 className="text-2xl text-zinc-600 capitalize mb-4">
              {footerContent?.about?.label}
            </h3>

            <ul className="flex flex-col gap-4">
              {footerContent?.about?.items?.map((item) => (
                <li key={item.itemId}>
                  <Link className="text-2xl text-zinc-400 capitalize">
                    {item.itemLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col">
            <h3 className="text-2xl text-linkColor_primary capitalize mb-2">
              {footerContent?.help?.label}
            </h3>
            <ul className="flex flex-col gap-4">
              {footerContent?.help?.items?.map((item) => (
                <li key={item.itemId}>
                  <p className="text-2xl text-linkColor_secondary capitalize">
                    {item.itemLabel}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="row_2 w-full border-t-2 pt-8 flex items-center justify-between flex-col-reverse gap-y-6 sm:flex-row">
          <div className="col flex gap-2">
            <Link className="text-2xl text-linkColor_secodary capitalize">
              terms & conditions
            </Link>
            <Link className="text-2xl text-linkColor_secodary capitalize">
              privacy policies
            </Link>
          </div>
          <div className="col flex gap-6">
            <img
              src={metaIcon}
              className="size-12 cursor-pointer opacity-80 hover:opacity-100 "
              alt="meta"
            />
            <img
              src={facebookIcon}
              className="size-12 cursor-pointer"
              alt="facebook"
            />
            <img
              src={instagramIcon}
              className="size-12 cursor-pointer invert"
              alt="instagram"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
