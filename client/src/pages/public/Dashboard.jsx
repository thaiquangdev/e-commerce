import icons from "../../utils/icons";

const { FaCheckCircle, FaRegArrowAltCircleDown, GiCancel, FaRegListAlt } =
  icons;

const Dashboard = () => {
  return (
    <div className="ml-[20px] my-[20px]">
      <div className="bg-gray-100 px-4 py-4">
        <h1 className="text-[20px] font-semibold leading-[24px]">Dashboard</h1>
        <div className="row row-sm my-[20px]">
          <div className="col-4 col-sm pb-3">
            <div className="flex items-center gap-2 border border-gray-500 p-4 rounded-md">
              <div>
                <FaRegListAlt color="#ed4c07" />
              </div>
              <div>
                <span>Total Order</span>
                <span>34</span>
              </div>
            </div>
          </div>
          <div className="col-4 col-sm pb-3">
            <div className="flex items-center gap-2 border border-gray-500 p-4 rounded-md">
              <div>
                <GiCancel color="#ff1e1e" />
              </div>
              <div>
                <span>Cancelled Orders</span>
                <span>3</span>
              </div>
            </div>
          </div>
          <div className="col-4 col-sm pb-3">
            <div className="flex items-center gap-2 border border-gray-500 p-4 rounded-md">
              <div>
                <FaRegArrowAltCircleDown />
              </div>
              <div>
                <span>Pending Orders</span>
                <span>12</span>
              </div>
            </div>
          </div>
          <div className="col-4 col-sm pb-3">
            <div className="flex items-center gap-2 border border-gray-500 p-4 rounded-md">
              <div>
                <FaCheckCircle />
              </div>
              <div>
                <span>Completed Orders</span>
                <span>19</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
