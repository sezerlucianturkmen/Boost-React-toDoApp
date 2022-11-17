import React from "react";
import Panel from "./component/Panel";
import Tab from "./component/Tab";

function NewPage() {
  return (
    <div>
      <Tab activeTab={0}>
        <Panel title="Ana Sayfa">1.Panel</Panel>
        <Panel title="Hizmetler">2.Panel</Panel>
        <Panel title="Hakkımda">3.Panel</Panel>
      </Tab>
    </div>
  );
}

export default NewPage;
