import { getMembers } from "@/lib/apiMember";

export default async function TeamGrid() {
  const { members, error } = await getMembers();
  console.log(members.map((member) => console.log(member)));

  const liStyle = "bg-green-200 p-1";
  return (
    <div className="flex flex-col p-2">
      <h2 className="text-[24px] font-semibold italic text-stone-600">
        Present team Members:
      </h2>
      <ul className="grid grid-cols-[repeat(auto-fill,minmax(12rem,1fr))] gap-4 overflow-y-scroll">
        {members.map((member) => {
          return (
            <li className={liStyle} key={member.id}>
              <img src="bg.jpg" alt="Image of person" className="w-full h-40" />
              <h2 className="mt-2 font-semibold text-[18px]">{member.name}</h2>
              <p>{member.description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
