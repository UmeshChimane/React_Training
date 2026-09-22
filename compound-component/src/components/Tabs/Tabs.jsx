import {
  createContext,
  useContext,
  useId,
  useRef,
  useState,
} from "react";

import "./Tabs.css";
    
const TabsContext = createContext(null);

// -----------------------------
// Main Tabs Component
// -----------------------------
function Tabs({
  children,
  defaultValue,
  value,
  onValueChange,
}) {
  const id = useId();

  // Used for uncontrolled mode
  const [internalValue, setInternalValue] = useState(defaultValue);

  // Controlled or uncontrolled
  const activeValue =
    value !== undefined ? value : internalValue;

  const setActiveValue = (newValue) => {
    // Uncontrolled mode
    if (value === undefined) {
      setInternalValue(newValue);
    }

    // Controlled mode
    onValueChange?.(newValue);
  };

  const contextValue = {
    activeValue,
    setActiveValue,
    tabsId: id,
  };

  return (
    <TabsContext.Provider value={contextValue}>
      <div className="tabs">{children}</div>
    </TabsContext.Provider>
  );
}

// -----------------------------
// Custom Hook
// -----------------------------
function useTabs() {
  const context = useContext(TabsContext);

  if (!context) {
    throw new Error(
      "Tabs components must be used inside <Tabs>"
    );
  }

  return context;
}

// -----------------------------
// Tabs List
// -----------------------------
function TabsList({ children }) {
  return (
    <div
      className="tabs-list"
      role="tablist"
      aria-label="Tabs"
    >
      {children}
    </div>
  );
}

// -----------------------------
// Tabs Trigger
// -----------------------------
function TabsTrigger({ value, children }) {
  const {
    activeValue,
    setActiveValue,
    tabsId,
  } = useTabs();

  const isActive = activeValue === value;

  const safeValue = String(value).replace(
    /[^a-zA-Z0-9_-]/g,
    "-"
  );

  const triggerId = `${tabsId}-trigger-${safeValue}`;
  const panelId = `${tabsId}-panel-${safeValue}`;

  const handleKeyDown = (event) => {
    const tabList = event.currentTarget.parentElement;

    const tabs = Array.from(
      tabList.querySelectorAll('[role="tab"]')
    );

    const currentIndex = tabs.indexOf(event.currentTarget);

    let nextIndex;

    switch (event.key) {
      case "ArrowRight":
        event.preventDefault();

        nextIndex =
          (currentIndex + 1) % tabs.length;

        break;

      case "ArrowLeft":
        event.preventDefault();

        nextIndex =
          (currentIndex - 1 + tabs.length) %
          tabs.length;

        break;

      case "Home":
        event.preventDefault();

        nextIndex = 0;

        break;

      case "End":
        event.preventDefault();

        nextIndex = tabs.length - 1;

        break;

      default:
        return;
    }

    const nextTab = tabs[nextIndex];

    nextTab.focus();

    // Get the value from the tab
    const nextValue = nextTab.dataset.value;

    setActiveValue(nextValue);
  };

  return (
    <button
      id={triggerId}
      type="button"
      role="tab"
      data-value={value}
      aria-selected={isActive}
      aria-controls={panelId}
      tabIndex={isActive ? 0 : -1}
      className={`tabs-trigger ${
        isActive ? "active" : ""
      }`}
      onClick={() => setActiveValue(value)}
      onKeyDown={handleKeyDown}
    >
      {children}
    </button>
  );
}

// -----------------------------
// Tabs Panel
// -----------------------------
function TabsPanel({ value, children }) {
  const {
    activeValue,
    tabsId,
  } = useTabs();

  const isActive = activeValue === value;

  const safeValue = String(value).replace(
    /[^a-zA-Z0-9_-]/g,
    "-"
  );

  const triggerId = `${tabsId}-trigger-${safeValue}`;
  const panelId = `${tabsId}-panel-${safeValue}`;

  return (
    <div
      id={panelId}
      role="tabpanel"
      aria-labelledby={triggerId}
      hidden={!isActive}
      tabIndex={0}
      className="tabs-panel"
    >
      {children}
    </div>
  );
}

// -----------------------------
// Compound Component API
// -----------------------------

Tabs.List = TabsList;
Tabs.Trigger = TabsTrigger;
Tabs.Panel = TabsPanel;

export { Tabs };