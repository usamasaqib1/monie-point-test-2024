import CustomerService from "./customerService";
import MonitorKeyIndicators from "./monitorKeyIndicators";

const DataControlParent = () => {
  return (
    <div className="max-w-full mx-auto flex flex-col gap-20 mb-10">
      <h1 className="text-9xl">
        We give you full <span className="text-primary-200">control</span> over
        your data
      </h1>

      <div className="grid grid-cols-2 w-full gap-4">
        <CustomerService/>
        <MonitorKeyIndicators/>
      </div>
    </div>
  );
};
export default DataControlParent;
