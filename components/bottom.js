// export default function Bottom() {
//   return (
//     <div className="grid row-span-2">
//       <div className="bg-stone-400 flex justify-center items-center">
//         <p className="text-[20px] py-2">
//           Number of pending tasks: <span className="font-bold">X</span>
//         </p>
//       </div>
//     </div>
//   );
// }

import { createClient } from "@supabase/supabase-js";

export default async function Countries() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  const supabase = createClient(supabaseUrl, supabaseAnonKey);
  const { data: countries, error } = await supabase
    .from("countries")
    .select("*");

  if (error) {
    console.log("Error fetching countries:", error);
    return <p>Error loading data.</p>;
  }

  console.log(countries);
}
