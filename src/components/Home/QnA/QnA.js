import React from "react";
import "./module.QnA.css";

const Qna = () => {
  return (
    <div className="bg-white mt-24  py-5 lg:py-20 rounded-2xl  ">
      <div>
        <p className="text-indigo-500 font-bold text-3xl mb-8 text-center">
          {" "}
          QnA Section{" "}
          <span className="text-lg"> Click the "plus" icon below</span>{" "}
        </p>
        <div className="border-b-4 border-indigo-600 w-5/6 mb-14  mx-auto mb-54 "></div>
        <div className="w-full md:w-4/5 mx-auto p-8">
          <div className="tab w-full overflow-hidden border-t">
            <input
              className="absolute opacity-0 "
              id="tab-multi-one"
              type="checkbox"
              name="tabs"
            />
            <label
              className="font-bold text-2xl text-indigo-500  block p-5 leading-normal cursor-pointer"
              htmlFor="tab-multi-one"
            >
              1.How React Works?
            </label>
            <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
              <p className="p-5 text-xl font-semibold">
                {" "}
                ReactJS divides the UI into isolated reusable pieces of code
                known as components. React components work similarly to
                JavaScript functions as they accept arbitrary inputs called
                properties or props. It's possible to have as many components as
                necessary without cluttering your code.Returned React elements
                determine how the UI will look at the client end. A React app
                usually has a single root DOM node. Rendering an element into
                the DOM will change the user interface of the page. Whenever a
                React component returns an element, the Virtual DOM will update
                the real DOM to match. For instance, the following code displays
                “Hello World” on the page by rendering the element into a DOM
                node called root.{" "}
              </p>
            </div>
          </div>
          <div className="tab w-full overflow-hidden border-t">
            <input
              className="absolute opacity-0"
              id="tab-multi-two"
              type="checkbox"
              name="tabs"
            />
            <label
              className="  text-indigo-500  text-2xl font-bold block p-5 leading-normal cursor-pointer"
              htmlFor="tab-multi-two"
            >
              2.Write the Differences Between Props and State in React.
            </label>
            <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
              <p className="p-5 text-xl font-semibold">
                The state is a set of variables that determine the current
                condition of the component. The state of a component is
                internal, i.e., defined inside the component and changeable only
                within the component. Any change in state renders the component
                again. Props is short for properties. It is the set of
                attributes that are passed from a parent component to a child
                component. These can be data variables or functions. Props are
                primarily used to communicate between parent and child
                components. Moreover, props cannot be altered inside the child
                component.{" "}
              </p>
            </div>
          </div>
          <div className="tab w-full overflow-hidden border-t">
            <input
              className="absolute opacity-0"
              id="tab-multi-three"
              type="checkbox"
              name="tabs"
            />
            <label
              className="  text-2xl text-indigo-500 font-bold block p-5 leading-normal cursor-pointer"
              htmlFor="tab-multi-three"
            >
              3.What does useEffect do other than loading data?{" "}
            </label>
            <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
              <p className="p-5 text-xl font-semibold">
                By using this Hook, you tell React that your component needs to
                do something after render. React will remember the function you
                passed (we’ll refer to it as our “effect”), and call it later
                after performing the DOM updates. In this effect, we set the
                document title, but we could also perform data fetching or call
                some other imperative API. Placing useEffect inside the
                component lets us access the count state variable (or any props)
                right from the effect. We don’t need a special API to read it —
                it’s already in the function scope. Hooks embrace JavaScript
                closures and avoid introducing React-specific APIs where
                JavaScript already provides a solution.
              </p>
              <br />
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qna;
