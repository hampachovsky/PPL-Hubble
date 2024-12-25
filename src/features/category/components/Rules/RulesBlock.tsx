import React from "react";

export const RulesBlock: React.FC = () => {
  return (
    <div className="overflow-hidden rounded-md border border-gray-700 bg-stone-700 p-4 text-white shadow-lg">
      <h3 className="mb-1 border-b border-dashed text-center text-lg font-semibold">
        Rules
      </h3>
      <ul className="list-decimal space-y-2 text-pretty pl-6">
        <li>Lorem ipsum dolor sit amet consectetur.</li>
        <li>Exercitationem, optio.</li>
        <li>Velit numquam quis aliquid?</li>
        <li>
          Quia, aliquid rem? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Maxime maiores quos aperiam tenetur, mollitia minus rerum dicta!
          Quod, amet provident.
        </li>
        <li>
          Accusantium, ducimus. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Reprehenderit, ipsum quos dicta inventore suscipit
          ullam quidem iste repellendus quod nulla!
        </li>
      </ul>
    </div>
  );
};
