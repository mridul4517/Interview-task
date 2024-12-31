import "./App.css";
import icon from "./assets/Frame.svg";
import icon1 from "./assets/icon1.svg";
import icon2 from "./assets/icon2.svg";
import icon3 from "./assets/icon3.svg";
import icon4 from "./assets/icon4.svg";
import icon5 from "./assets/Polygon19.svg";
import icon6 from "./assets/icon5.svg";
import icon7 from "./assets/icon6.svg";
import icon8 from "./assets/icon7.svg";
import icon9 from "./assets/icon8.svg";
import icon10 from "./assets/icon9.svg";
import icon11 from "./assets/icon10.svg";
import icon12 from "./assets/icon11.svg";
import icon13 from "./assets/icon12.svg";
import { useEffect, useState } from "react";
import RadialBarChart from "./components/RadialChart";
import DonutChart from "./components/DonutChart";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Clothing Sales");
  const [search, setSearch] = useState("");

  const toggleDropdown = () => setIsOpen(!isOpen);

  const options = [
    "SUPPLIER_references",
    "NATION_references",
    "ORDERS_references",
    "data_lake",
  ];

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(search.toLowerCase())
  );

  const handleOptionClick = (option) => {
    setSelected(option); // Update the selected value
    setIsOpen(false); // Close the dropdown
    setSearch(""); // Clear the search input
  };

  // ----------------------------SearchBar box----------->

  const [searchTerm, setSearchTerm] = useState("");

  // State to hold the debounced value
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  // State to trigger the search when the button is clicked
  const [triggerSearch, setTriggerSearch] = useState(false);

  // Debounce delay in milliseconds (500ms in this example)
  const debounceDelay = 500;

  // Effect to update the debounced value after a delay
  useEffect(() => {
    if (!triggerSearch) return; // Don't debounce unless the search is triggered

    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
      setTriggerSearch(false); // Reset the trigger once search is completed
    }, debounceDelay);

    // Cleanup function to clear the timeout when the component unmounts or when searchTerm changes
    return () => {
      clearTimeout(timer);
    };
  }, [searchTerm, triggerSearch, debounceDelay]);

  // Handle change in the search input
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Trigger search when the button is clicked
  const handleSearchClick = () => {
    setTriggerSearch(true);
  };

  // Simulate a fetch function that triggers when the debounced search term changes
  useEffect(() => {
    if (debouncedSearchTerm) {
      console.log("Fetching results for: ", debouncedSearchTerm);
      // You can replace this with your API request or any other logic
    }
  }, [debouncedSearchTerm]); // Only run when debouncedSearchTerm changes

  // ----------------------------------graphs---------------------------->

  return (
    <>
      <div
        style={{
          backgroundColor: "#f5f4f4",
          height: "100vh",
          display: "flex",
          flexDirection: "row",
          // justifyContent:'space-around'
        }}
      >
        <div
          style={{
            width: "90px",
            backgroundColor: "#FFFFFF",
            margin: "15px 11px 15px 15px",
            borderRadius: "22px",
            border: "1px solid #e7e7e7",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  margin: "10px 0px",
                  borderBottom: "1px solid #e6e6e7",
                  paddingBottom: "10px",
                }}
              >
                <a href="#">
                  <img src={icon} alt="" srcSet="" />
                </a>
              </div>
              <div
                style={{
                  margin: "10px 0px",
                  border: "1px solid #EBEBEB",
                  backgroundColor: "#F9F9F9",
                  borderRadius: "11px",
                  padding: "8px",
                  marginTop: "14px",
                }}
              >
                <a href="#">
                  <img src={icon1} alt="" srcSet="" />
                </a>
              </div>
              <div
                style={{
                  margin: "10px 0px",
                  border: "1px solid #EBEBEB",
                  backgroundColor: "#F9F9F9",
                  borderRadius: "11px",
                  padding: "8px",
                }}
              >
                <a href="#">
                  <img src={icon2} alt="" srcSet="" />
                </a>
              </div>
              <div
                style={{
                  margin: "10px 0px",
                  border: "1px solid #EBEBEB",
                  backgroundColor: "#F9F9F9",
                  borderRadius: "11px",
                  padding: "8px",
                }}
              >
                <a href="#">
                  <img src={icon3} alt="" srcSet="" />
                </a>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                borderTop: "1px solid #e6e6e7",
              }}
            >
              <div
                className="poppins-bold"
                style={{
                  margin: "10px 0px",
                  border: "1px solid #EBEBEB",
                  backgroundColor: "#b9c2f5",
                  borderRadius: "11px",
                  padding: "8px",
                  width: "40px",
                  textAlign: "center",
                }}
              >
                <a
                  href="#"
                  style={{
                    fontWeight: "bold",
                    textDecoration: "none",
                    color: "#000000",
                  }}
                >
                  S
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "788px",
            backgroundColor: "#FFFFFF",
            margin: "15px 11px 15px 0px",
            borderRadius: "22px",
            border: "1px solid #e7e7e7",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxShadow: "0px 4px 15px 0px #0000000F",
          }}
        >
          <PerfectScrollbar>
            <div className="mainbox1">
              <div className="mainboxinner1">
                <div className="poppins" style={{ fontSize: "28px" }}>
                  Databot
                </div>
                <div>
                  <img src={icon4} alt="icon" />
                </div>
              </div>
              <div className="mainboxinner2">
                <div>Connected Data:</div>
                <div className="dropdown">
                  <button className="dropdown-toggle" onClick={toggleDropdown}>
                    <span
                      style={{
                        fontFamily: "'Poppins', serif",
                        fontWeight: "600",
                        fontStyle: "normal",
                        color: "#2043DF",
                      }}
                    >
                      {selected}
                    </span>
                    <div>
                      <img
                        src={icon5}
                        alt="Dropdown Icon"
                        className="dropdown-icon"
                      />
                    </div>
                  </button>
                  {isOpen && (
                    <div className="dropdown-menu">
                      {/* Search bar input for filtering options */}
                      <input
                        type="text"
                        className="dropdown-search"
                        placeholder="Search..."
                        value={search} // Controlled input value
                        onChange={(e) => setSearch(e.target.value)} // Update search state on change
                      />

                      {/* Options list */}
                      <ul className="dropdown-options">
                        {filteredOptions.length > 0 ? (
                          filteredOptions.map((option, index) => (
                            <li
                              key={index}
                              className="dropdown-item"
                              onClick={() => handleOptionClick(option)} // Select option on click
                            >
                              {option}
                            </li>
                          ))
                        ) : (
                          // Message if no results are found
                          <li className="dropdown-no-results">
                            No results found
                          </li>
                        )}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="mainbox2">
              <div style={{ display: "flex" }}>
                <div
                  className="poppins-bold"
                  style={{
                    fontSize: "30px",
                    color: "#2043DF",
                    marginRight: "3px",
                  }}
                >
                  AI Conversational
                </div>
                <div
                  className="poppins-bold"
                  style={{ fontSize: "30px", color: "#000000" }}
                >
                  Data Analyst
                </div>
                <div></div>
              </div>
              <div className="textContent">
                Your personal AI data assistant. Seamlessly integrate your
                database for rapid, informed decision-making. Get instant
                analysis and answers, optimizing growth metrics daily. Ask
                anything, get analyst-grade responses.
              </div>
              <div className="cardssection">
                <div className="card">
                  <div className="cardcontent">
                    Give me the summary of the data Source.
                  </div>
                  <div>
                    <img src={icon6} alt="icon" />
                  </div>
                </div>
                <div className="card">
                  <div className="cardcontent">
                    User duration engagement change vs last week?
                  </div>
                  <div>
                    <img src={icon6} alt="icon" />
                  </div>
                </div>
                <div className="card">
                  <div className="cardcontent">
                    Provide an overview of this week's IAP Revenue performance.
                  </div>
                  <div>
                    <img src={icon6} alt="icon" />
                  </div>
                </div>
                <div className="card">
                  <div className="cardcontent">
                    What are the factors of drop in our Sales Revenue this week?
                  </div>
                  <div>
                    <img src={icon6} alt="icon" />
                  </div>
                </div>
              </div>
            </div>
            <div className="summarybox">
              <div className="summaryhead">Summary</div>
              <div className="summarydef">
                Supplier references refer to information provided by a supplier
                that can be used to verify their capabilities and experience.
                This information is typically used during the procurement
                process to evaluate potential vendors. Here are some samples of
                supplier references:
              </div>
              <div className="basic">Basic Reference:</div>
              <div className="refbasics">
                <li>Supplier Name: Acme Corporation</li>
                <li>Contact Name: John Smith, Sales Manager</li>
                <li>Phone Number: (555) 555-5555</li>
                <li>Email Address: [email address removed]</li>
                <li>
                  Relationship: Supplied office furniture for our headquarters
                  in 2023.
                </li>
              </div>
              <div className="basic">Detailed Reference:</div>
              <div className="refbasics">
                <li>Supplier Name: Global Tech Solutions</li>
                <li>Contact Name: Jane Doe, Account Manager</li>
                <li>Phone Number: (555) 555-1234</li>
                <li>Email Address: [email address removed]</li>
              </div>
            </div>
            <div className="searchbarbox" style={{ position: "relative" }}>
              <div className="searchbar">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  placeholder="Ask your AI for data summary......."
                  style={{
                    padding: "10px 40px 10px 10px", // Add space for the button inside the input
                    fontSize: "16px",
                    width: "100%",
                  }}
                />
                <button
                  onClick={handleSearchClick}
                  style={{
                    position: "absolute",
                    right: "50px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    padding: "8px",
                    fontSize: "16px",
                    border: "1px solid #ccc",
                    borderRadius: "45px",
                    backgroundColor: "#000000",
                    color: "white",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "141px",
                  }}
                >
                  <img src={icon7} alt="icon" style={{ marginRight: "4px" }} />
                  <div>Search</div>
                </button>
              </div>
            </div>
          </PerfectScrollbar>
        </div>
        <div
          style={{
            width: "770px",
            backgroundColor: "#FFFFFF",
            margin: "15px 11px 15px 0px",
            borderRadius: "22px",
            border: "1px solid #e7e7e7",
            display: "flex",
            flexDirection: "column",
            padding: "20px",
          }}
        >
          <PerfectScrollbar>
            <div className="datavisualhead">Data Visual</div>
            <div className="overviewsection">
              <div className="overviewhead">Data Overview</div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  height: "150px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    justifyContent: "space-between",
                  }}
                >
                  <div className="rowssec" style={{ marginBottom: "12px" }}>
                    <div className="rowicon">
                      <img src={icon8} alt="icon8" />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <div
                        style={{
                          fontSize: "12px",
                          fontFamily: "'Poppins', serif",
                        }}
                      >
                        Total Number of rows
                      </div>
                      <div
                        style={{
                          fontSize: "14px",
                          fontFamily: "'Poppins', serif",
                          fontWeight: "bold",
                        }}
                      >
                        34.1M
                      </div>
                    </div>
                  </div>
                  <div className="rowssec">
                    <div className="rowicon">
                      <img src={icon9} alt="icon9" />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <div
                        style={{
                          fontSize: "12px",
                          fontFamily: "'Poppins', serif",
                        }}
                      >
                        Total No of Columns
                      </div>
                      <div
                        style={{
                          fontSize: "14px",
                          fontFamily: "'Poppins', serif",
                          fontWeight: "bold",
                        }}
                      >
                        2
                      </div>
                    </div>
                  </div>
                </div>
                <div className="metadata">
                  <div className="metadatahead">Metadata</div>
                  <div className="metalist">
                    <div className="metaheads">
                      <li>Name</li>
                      <li>Created at</li>
                      <li>Relates to</li>
                      <li>Connection</li>
                    </div>
                    <div className="metawork">
                      <li>Samples</li>
                      <li>20 Jul 2022</li>
                      <li>dim_books</li>
                      <li>Postgresql</li>
                    </div>
                  </div>
                </div>
              </div>
              <div className="report">
                <div className="metadatahead">SLA</div>
                <div className="metalist">
                  <div className="metaheads">
                    <img src={icon10} alt="" />
                  </div>
                  <div className="metawork">5/5</div>
                </div>
                <div className="testhead">
                  <div className="metadatahead">Test report</div>
                  <div
                    style={{
                      fontFamily: "'Poppins', serif",
                      fontWeight: "400",
                      fontSize: "12px",
                      color: "#2A64C5",
                    }}
                  >
                    See all
                  </div>
                </div>
                <div className="testlist">
                  <div className="metaheads">100% Score</div>
                  <div className="metawork">5 Test</div>
                </div>
                <div>
                  <img src={icon11} alt="" />
                </div>
              </div>
            </div>
            <div className="dataquality">
              <div className="overviewhead">Data Quality</div>
              <div className="qualityscore">
                <div className="chartsection" style={{ marginRight: "15px" }}>
                  <div className="qualityscorehead">Data Quality Score</div>
                  <div style={{ width: "200px" }}>
                    <RadialBarChart />
                  </div>
                </div>
                <div
                  className="chartsection"
                  style={{ justifyContent: "space-between" }}
                >
                  <div className="qualityscorehead">Rules against target</div>
                  <div style={{ width: "220px" }}>
                    <img src={icon12} alt="icon12" width="230px" />
                  </div>
                  <div className="marks">
                    <div className="marks" style={{ marginRight: "10px" }}>
                      <div>
                        <img src={icon13} alt="icon13" />
                      </div>
                      <div className="marksstatus">Good</div>
                    </div>
                    <div className="marks" style={{ marginRight: "10px" }}>
                      <div>
                        <img src={icon13} alt="icon13" />
                      </div>
                      <div className="marksstatus">Acceptable</div>
                    </div>
                    <div className="marks">
                      <div>
                        <img src={icon13} alt="icon13" />
                      </div>
                      <div className="marksstatus">Not Acceptable</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="chartcards">
                <div className="chartsection">
                  <div className="qualityscorehead">Table Health</div>
                  <div>
                    <DonutChart />
                  </div>
                </div>
                <div className="chartsection">
                  <div className="qualityscorehead">Test Results Breakdown</div>
                  <div>
                    <DonutChart />
                  </div>
                </div>
                <div className="chartsection">
                  <div className="qualityscorehead">Monitored Tables</div>
                  <div>
                    <DonutChart />
                  </div>
                </div>
              </div>
            </div>
          </PerfectScrollbar>
        </div>
      </div>
    </>
  );
}

export default App;
