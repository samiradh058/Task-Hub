"use client";

import { getMembers } from "@/lib/apiMember";
import { useState, useEffect } from "react";

export default function MemberSelect() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    async function fetchMembers() {
      const { members } = await getMembers();
      setMembers(members);
      console.log(members);
    }
    fetchMembers();
  }, []);

  return (
    <select
      name="to"
      id="to"
      defaultValue=""
      className="grid col-span-7 rounded-sm px-2 border border-stone-200 focus:border-stone-500 focus:outline-none"
    >
      <option value="" disabled>
        Select a member
      </option>
      {members.map((member) => (
        <option key={member.id} value={member.name}>
          {member.name}
        </option>
      ))}
    </select>
  );
}
