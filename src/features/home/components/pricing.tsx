import { FaCircleCheck } from "react-icons/fa6";
import { Button } from "../../../components/ui/button";
import { Badge } from "../../../components/ui/badge";

const Pricing = () => {
  return (
    <div className="bg-turnary py-12 relative" id="pricing">
      <div className="px-4 mx-auto container">
        <div className="w-full flex items-center justify-center flex-col space-y-2">
          <h1 className="text-center text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary/60 via-primary to-primary/80 inline-block text-transparent bg-clip-text">
            Choose your plan
          </h1>
          <p className="text-primary text-sm md:text-xl font-bold">
            Unlock endless possibilities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-16">
          <div className="border p-5 rounded-lg shadow-sm bg-card">
            <h1 className="text-2xl text-primary font-bold">Basic</h1>
            <div className="font-bold py-3 text-4xl text-primary">Free</div>
            <p className="mb-3">
              Ideal for individuals or small teams getting started with BL
              Sheet.
            </p>
            <div className="py-3">
              <Button
                className="w-full rounded-full ring-0"
                variant="secondary"
              >
                Get Started
              </Button>
            </div>

            <ul className="mt-4 space-y-2 text-gray-600">
              <li className="font-medium space-x-2 flex items-center text-primary ">
                <FaCircleCheck className="size-4" />{" "}
                <span>Create 1 Project</span>
              </li>
              <li className="font-medium space-x-2 flex items-center text-primary ">
                <FaCircleCheck className="size-4" />{" "}
                <span>Add up to 5 Members</span>
              </li>
            </ul>
          </div>

          <div className="border p-5 rounded-lg shadow-sm bg-primary">
            <div className="flex items-center space-x-3">
              <h1 className="text-2xl text-white font-bold">Premium </h1>
              <div>
                <Badge className="rounded-full px-3 !text-green-800 bg-green-300">
                  Most Popular
                </Badge>
              </div>
            </div>
            <div className="font-bold py-3 text-4xl text-white">
              $10/<span className="text-lg">month</span>
            </div>
            <p className="mb-3 text-white">
              Perfect for growing teams looking for advanced features and
              collaboration tools.
            </p>
            <div className="py-3">
              <Button className="w-full rounded-full ring-0 bg-white hover:bg-white/80 text-black dark:text-black">
                Get Started
              </Button>
            </div>

            <ul className="mt-4 space-y-2 text-gray-600">
              <li className="font-medium text-white space-x-2 flex items-center">
                <FaCircleCheck className="text-white size-4" />{" "}
                <span>Create 10 Projects</span>
              </li>
              <li className="font-medium text-white space-x-2 flex items-center">
                <FaCircleCheck className="text-white size-4" />{" "}
                <span>Add up to 50 Members</span>
              </li>
            </ul>
          </div>

          <div className="border p-5 rounded-lg shadow-sm bg-card">
            <h1 className="text-2xl text-primary font-bold">Enterprise</h1>
            <div className="font-bold py-3 text-4xl text-primary">
              <h1 className="text-transparent"> -</h1>
            </div>
            <p className="mb-3">
              Best for large organizations needing scalability, priority
              support, and tailored solutions.
            </p>
            <div className="py-3">
              <Button
                className="w-full rounded-full ring-0"
                variant="secondary"
              >
                Contact Sale
              </Button>
            </div>

            <ul className="mt-4 space-y-2 text-gray-600">
              <li className="font-medium space-x-2 flex items-center text-primary">
                <FaCircleCheck className="size-4" />{" "}
                <span>Create 25 Projects</span>
              </li>
              <li className="font-medium space-x-2 flex items-center text-primary ">
                <FaCircleCheck className="size-4" />{" "}
                <span>Add up to 150 Members</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
