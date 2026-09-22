import { Tabs } from "./components/Tabs/Tabs";

function App() {
  return (
    <Tabs defaultValue="a">

      <Tabs.List>

        <Tabs.Trigger value="a">
          Tab A
        </Tabs.Trigger>

        <Tabs.Trigger value="b">
          Tab B
        </Tabs.Trigger>

      </Tabs.List>

      <Tabs.Panel value="a">
        <h2>Panel A</h2>
        <p>This is the content of Panel A.</p>
      </Tabs.Panel>

      <Tabs.Panel value="b">
        <h2>Panel B</h2>
        <p>This is the content of Panel B.</p>
      </Tabs.Panel>

    </Tabs>
  );
}

export default App;


// import { useState } from "react";
// import { Tabs } from "./components/Tabs/Tabs";

// function App() {
//   const [activeTab, setActiveTab] = useState("a");

//   return (
//     <div>
//       <button onClick={() => setActiveTab("b")}>
//         Open Tab B
//       </button>

//       <Tabs
//         value={activeTab}
//         onValueChange={setActiveTab}
//       >
//         <Tabs.List>

//           <Tabs.Trigger value="a">
//             Tab A
//           </Tabs.Trigger>

//           <Tabs.Trigger value="b">
//             Tab B
//           </Tabs.Trigger>

//         </Tabs.List>

//         <Tabs.Panel value="a">
//           <h2>Panel A</h2>
//           <p>This is Panel A.</p>
//         </Tabs.Panel>

//         <Tabs.Panel value="b">
//           <h2>Panel B</h2>
//           <p>This is Panel B.</p>
//         </Tabs.Panel>

//       </Tabs>
//     </div>
//   );
// }

// export default App;