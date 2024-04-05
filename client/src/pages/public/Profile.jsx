import Input from "../../components/Input";

const Profile = () => {
  return (
    <div>
      <div className="my-[30px] shadow-md rounded-md py-[20px] px-[30px]">
        <h1 className="text-[20px] leading-[28px] font-medium text-red">
          Edit Your Profile
        </h1>
        <form action="" className="mt-[15px]">
          <div className="row row-sm">
            <div className="flex flex-col col-6 col-sm">
              <label
                htmlFor="firstname"
                className="text-[14px] leading-[24px] font-normal"
              >
                First Name
              </label>
              <Input
                place="Md"
                name="firstname"
                type="text"
                classN="py-2 pl-2 bg-[#F5F5F5] rounded-md placeholder:text-[14px]placeholder:leading-[24px]"
              />
            </div>
            <div className="flex flex-col col-6 col-sm">
              <label
                htmlFor="lastname"
                className="text-[14px] leading-[24px] font-normal"
              >
                First Name
              </label>
              <Input
                place="Rimel"
                name="lastname"
                type="text"
                classN="py-2 pl-2 bg-[#F5F5F5] rounded-md placeholder:text-[14px]placeholder:leading-[24px]"
              />
            </div>
          </div>
          <div className="row row-sm mt-[15px]">
            <div className="flex flex-col col-6 col-sm">
              <label
                htmlFor="email"
                className="text-[14px] leading-[24px] font-normal"
              >
                Email
              </label>
              <Input
                place="Rimelll@gmail.com"
                name="email"
                type="email"
                classN="py-2 pl-2 bg-[#F5F5F5] rounded-md placeholder:text-[14px]placeholder:leading-[24px]"
              />
            </div>
            <div className="flex flex-col col-6 col-sm ">
              <label
                htmlFor="address"
                className="text-[14px] leading-[24px] font-normal"
              >
                Address
              </label>
              <Input
                place="Kingston, 5236, United State"
                name="address"
                classN="py-2 pl-2 bg-[#F5F5F5] rounded-md placeholder:text-[14px]placeholder:leading-[24px]"
              />
            </div>
          </div>
          <div className="flex flex-col mt-[15px]">
            <label
              htmlFor="currentpassword"
              className="text-[14px] leading-[24px] font-normal"
            >
              Password Changes
            </label>
            <Input
              place="Current Password"
              name="currentpassword"
              type="password"
              classN="mt-[10px] py-2 pl-2 bg-[#F5F5F5] rounded-md placeholder:text-[14px]placeholder:leading-[24px]"
            />
            <Input
              place="New Password"
              name="newpassword"
              type="password"
              classN="mt-[10px] py-2 pl-2 bg-[#F5F5F5] rounded-md placeholder:text-[14px]placeholder:leading-[24px]"
            />
            <Input
              place="Comfirm New Password"
              name="confirmpassword"
              type="password"
              classN="mt-[10px] py-2 pl-2 bg-[#F5F5F5] rounded-md placeholder:text-[14px]placeholder:leading-[24px]"
            />
          </div>
          <div className="flex justify-end my-[20px]">
            <button
              type="submit"
              className="py-2 px-3 bg-red text-white rounded-sm"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Profile;
