import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const { pathname } = location;
  let currentLink = "";
  const crumbs = pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb, index, array) => {
      currentLink += `/${crumb}`;
      const isLastCrumb = index === array.length - 1;
      const separator = isLastCrumb ? "" : " /";
      return (
        <div key={crumb}>
          <Link to={currentLink} className="text-[14px] leading-[24px]">
            {crumb}
          </Link>
          {separator}
        </div>
      );
    });

  return (
    <div className="flex gap-1 items-center">
      {crumbs.length > 0 && <Link className="text-[14px]">Home /</Link>}
      {crumbs}
    </div>
  );
};

export default Breadcrumb;
