import React, { useState } from "react";
import styled from "styled-components";
import AutoComplete from "../AutoComplete/AutoComplete";

function FormComponent(props) {
  const [state, setState] = useState(false);
  const [divisionname, setDivisionname] = useState("");
  const [subdivision, setSubDivision] = useState("");
  const [sectionname, setSectionname] = useState("");
  const [townname, setTownname] = useState("");
  const [dtname, setDTname] = useState("");
  const [feedername, setFeedername] = useState("");
  const [ssname, setSSname] = useState("");
  const [color, setColor] = useState("");
  const [search, SetSearch] = useState("");
  const [secondstate, SetSecondState] = useState(false);
  const [correct, SetCorrect] = useState("");
  const [circlename, setCirclename] = useState("");

  function handleChange(event) {
    const SelectedValue = event.target.value;
    if (SelectedValue === "") {
      SetCorrect("");
      console.log(correct);
    } else if (SelectedValue === "Communication") {
      SetCorrect("Communication");
      console.log(correct);
    } else if (SelectedValue === "Manfacturer") {
      SetCorrect("Manfacturer");
      console.log(correct);
    }
  }
  return (
    <main>
      <header>
        <h4>METER</h4>
        <div className="float">
          <span className="redspan" onClick={() => setColor("red")}>
            <i className="red"></i>
          </span>
          <span className="redspan" onClick={() => setColor("#3fc1c0")}>
            <i className="blue"></i>
          </span>
          <span className="redspan" onClick={() => setColor("orange")}>
            <i className="orange"></i>
          </span>
          <span className="redspan" onClick={() => setColor("violet")}>
            <i className="violet"></i>
          </span>
        </div>
      </header>
      <form>
        <div className="div1">
          <Button color={color}>Add Meter</Button>

          <Input2
            type="text"
            name="search"
            className="input2"
            value={search}
            onChange={(e) => SetSearch(e.target.value)}
          />
          <Label8 value={search}>Search Filter</Label8>
        </div>
        <div className="metersearch">
          <h3>Meter Search</h3>
        </div>
        <br />
        <div className="displayflex">
          <Network color={color}>
            <h3 style={{ textAlign: "left" }}>Network Hierarchy/Address</h3>
            <div className="network">
              <Input3
                type="text"
                name="circlename"
                className="circlename"
                value={circlename}
                onChange={(e) => setCirclename(e.target.value)}
              />
              <Label16 value={circlename} className="label16">
                Circle Name
              </Label16>
              <Input3
                type="text"
                name="divisionname"
                value={divisionname}
                className="divisionname"
                onChange={(e) => setDivisionname(e.target.value)}
              />
              <Label9 value={divisionname} className="label9">
                Division Name
              </Label9>
              <Input3
                type="text"
                name="subdivisionname"
                className="subdivisionname"
                value={subdivision}
                onChange={(e) => setSubDivision(e.target.value)}
              />
              <Label10 value={subdivision} className="label10">
                SubDivision Name
              </Label10>

              <Input3
                type="text"
                name="sectionname"
                className="sectionname"
                value={sectionname}
                onChange={(e) => setSectionname(e.target.value)}
              />
              <Label11 value={sectionname} className="label11">
                Section Name
              </Label11>

              <Input3
                type="text"
                name="townname"
                className="townname"
                value={townname}
                onChange={(e) => setTownname(e.target.value)}
              />
              <Label12 className="label12" value={townname}>
                Town Name
              </Label12>
              <Input3
                type="text"
                name="ssname"
                className="ssname"
                value={ssname}
                onChange={(e) => setSSname(e.target.value)}
              />
              <Label13 value={ssname} className="label13">
                SS Name
              </Label13>
              <Input3
                type="text"
                name="feedername"
                className="feedername"
                value={feedername}
                onChange={(e) => setFeedername(e.target.value)}
              />
              <Label14 value={feedername} className="label14">
                Feeder Name
              </Label14>
              <Input3
                type="text"
                name="DTname"
                className="dtname"
                value={dtname}
                onChange={(e) => setDTname(e.target.value)}
              />
              <Label15 value={dtname} className="label15">
                DT Name
              </Label15>
            </div>
          </Network>

          <table className="table">
            <Select color={color} onChange={handleChange}>
              <option value="">Please select anyone</option>
              <option value="Manfacturer">Manufacturer</option>
              <option value="Communication">Communication</option>
            </Select>
            {correct === "Manfacturer" ? (
              <div className={state ? "contentBx active" : "contentBx"}>
                <H3
                  className="label1"
                  color={color}
                  onClick={() => setState(state ? false : true)}
                >
                  Meter Manufacturer
                </H3>
                <Content color={color} className="content">
                  <tr>
                    <td>
                      <Input
                        type="text"
                        size="8"
                        value={props.data.Manufacturername}
                        onChange={props.handlechange}
                        name="Manufacturername"
                      />
                      <Label1 value={props.data.Manufacturername}>
                        Manufacturer Name:
                      </Label1>
                    </td>

                    <td>
                      <Input
                        type="text"
                        size="8"
                        className="input"
                        value={props.data.Metertype}
                        onChange={props.handlechange}
                        name="Metertype"
                      />
                      <Label2 value={props.data.Metertype}>Meter Type:</Label2>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <Input
                        type="text"
                        size="8"
                        className="input"
                        value={props.data.YearofManufacture}
                        onChange={props.handlechange}
                        name="YearofManufacture"
                      />
                      <Label3 value={props.data.YearofManufacture}>
                        Year of Manufacturer:
                      </Label3>
                    </td>

                    <td>
                      <Input
                        type="text"
                        size="8"
                        className="input"
                        value={props.data.Metercategory}
                        onChange={props.handlechange}
                        name="Metercategory"
                      />
                      <Label4 value={props.data.Metercategory}>
                        Meter Category:
                      </Label4>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <Input
                        size="8"
                        type="text"
                        className="input"
                        value={props.data.Filmwareversion}
                        onChange={props.handlechange}
                        name="Filmwareversion"
                      />
                      <Label5 value={props.data.Filmwareversion}>
                        Filmware Version:
                      </Label5>
                    </td>
                  </tr>
                </Content>
              </div>
            ) : (
              false
            )}
            {correct === "Communication" ? (
              <div className={secondstate ? "contentBx active" : "contentBx"}>
                <H3
                  color={color}
                  className="label1"
                  onClick={() => SetSecondState(secondstate ? false : true)}
                >
                  Communication Status
                </H3>
                <Content color={color} className="content">
                  <tr>
                    <td>
                      <Input
                        size="12"
                        type="text"
                        value={props.data.Communicated}
                        onChange={props.handlechange}
                        name="Communicated"
                      />
                      <Label1 value={props.data.Communicated}>
                        Communication:
                      </Label1>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Input
                        type="text"
                        size="8"
                        value={props.data.Fromdate}
                        onChange={props.handlechange}
                        name="Fromdate"
                      />
                      <Label3 value={props.data.Fromdate}>Fromdata:</Label3>
                    </td>

                    <td>
                      <Input
                        type="text"
                        size="8"
                        value={props.data.Todate}
                        onChange={props.handlechange}
                        name="Todate"
                      />
                      <Label7 value={props.data.Todate}>To Date:</Label7>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Input
                        type="text"
                        size="8"
                        value={props.data.Metergroup}
                        onChange={props.handlechange}
                        name="Metergroup"
                      />
                      <Label5 value={props.data.Metergroup}>Metergroup:</Label5>
                    </td>

                    <td>
                      <Input
                        type="text"
                        size="8"
                        value={props.data.Meterserialnumber}
                        onChange={props.handlechange}
                        name="Meterserialnumber"
                      />
                      <Label6 value={props.data.Meterserialnumber}>
                        Meter Serial Number
                      </Label6>
                    </td>
                  </tr>
                </Content>
              </div>
            ) : (
              false
            )}
          </table>
        </div>
        <div>
          <Button color={color} onClick={() => alert("Searching!!")}>
            Search
          </Button>
          <Button color={color} onClick={() => alert("Form is Submitted!!")}>
            Save Filter
          </Button>
        </div>
      </form>
    </main>
  );
}

export default FormComponent;

const Label16 = styled.label`
  position: absolute;
  transition: 0.5s;
  color: ${(props) => (props.value ? "#0AF" : "#999")};
  transform: ${(props) => (props.value ? "translate(-10%,-80%)" : null)};
`;

const Label9 = styled.label`
  position: absolute;
  left: 300px;
  transition: 0.5s;
  color: ${(props) => (props.value ? "#0AF" : "#999")};
  transform: ${(props) => (props.value ? "translate(-10%,-80%)" : null)};
`;
const Label10 = styled.label`
  position: absolute;
  top: 300px;
  transition: 0.5s;
  color: ${(props) => (props.value ? "#0AF" : "#999")};
  transform: ${(props) => (props.value ? "translate(-10%,-80%)" : null)};
`;
const Label11 = styled.label`
  position: absolute;
  top: 300px;
  left: 300px;
  transition: 0.5s;
  color: ${(props) => (props.value ? "#0AF" : "#999")};
  transform: ${(props) => (props.value ? "translate(-10%,-80%)" : null)};
`;
const Label12 = styled.label`
  position: absolute;
  bottom: 250px;
  transition: 0.5s;
  color: ${(props) => (props.value ? "#0AF" : "#999")};
  transform: ${(props) => (props.value ? "translate(-10%,-80%)" : null)};
`;

const Label13 = styled.label`
  position: absolute;
  bottom: 250px;
  left: 300px;
  transition: 0.5s;
  color: ${(props) => (props.value ? "#0AF" : "#999")};
  transform: ${(props) => (props.value ? "translate(-10%,-80%)" : null)};
`;

const Label14 = styled.label`
  position: absolute;
  bottom: 180px;
  transition: 0.5s;
  color: ${(props) => (props.value ? "#0AF" : "#999")};
  transform: ${(props) => (props.value ? "translate(-10%,-80%)" : null)};
`;
const Label15 = styled.label`
  position: absolute;
  bottom: 180px;
  left: 300px;
  transition: 0.5s;
  color: ${(props) => (props.value ? "#0AF" : "#999")};
  transform: ${(props) => (props.value ? "translate(-10%,-80%)" : null)};
`;

const Input = styled.input`
  padding: 2px;
  margin: 10px 80px 30px 0;
  width: 250px;
  background: transparent;
  height: 25px;
  outline: none;
  border: none;
  border-bottom: ${(props) =>
    props.value ? "1px solid #0AF" : "1px solid #000"};
  &:focus ~ label {
    transform: translate(-10%, -80%);
    font-size: 15px;
    font-weight: 500px;
    color: #0af;
  }
`;
const Input3 = styled.input`
  width: 240px;
  margin-right: 10px;
  border-bottom: ${(props) =>
    props.value ? "1px solid #0AF" : "1px solid #000"};
`;

const Label1 = styled.label`
  position: absolute;
  top: 15px;
  left: 15px;
  transition: 0.5s;
  color: ${(props) => (props.value ? "#0AF" : "#999")};
  transform: ${(props) => (props.value ? "translate(-10%,-80%)" : null)};
`;

const Label2 = styled.label`
  position: absolute;
  top: 15px;
  right: 270px;
  transition: 0.5s;
  color: ${(props) => (props.value ? "#0AF" : "#999")};
  transform: ${(props) => (props.value ? "translate(-10%,-80%)" : null)};
`;
const Label3 = styled.label`
  position: absolute;
  top: 80px;
  left: 15px;
  transition: 0.5s;
  color: ${(props) => (props.value ? "#0AF" : "#999")};
  transform: ${(props) => (props.value ? "translate(-10%,-80%)" : null)};
`;
const Label4 = styled.label`
  position: absolute;
  top: 80px;
  right: 240px;
  transition: 0.5s;
  color: ${(props) => (props.value ? "#0AF" : "#999")};
  transform: ${(props) => (props.value ? "translate(-10%,-80%)" : null)};
`;
const Label5 = styled.label`
  position: absolute;
  bottom: 15px;
  left: 15px;
  transition: 0.5s;
  color: ${(props) => (props.value ? "#0AF" : "#999")};
  transform: ${(props) => (props.value ? "translate(-10%,-80%)" : null)};
`;
const Label7 = styled.label`
  position: absolute;
  right: 290px;
  top: 80px;
  transition: 0.5s;
  color: ${(props) => (props.value ? "#0AF" : "#999")};
  transform: ${(props) => (props.value ? "translate(-10%,-80%)" : null)};
`;

const Button = styled.button`
  float: right;
  margin: 20px 40px 0 0;
  width: 120px;
  outline: none;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 600;
  color: white;
  background: ${(props) => (props.color === "" ? "#0Af" : props.color)};
  height: 50px;
  box-shadow: 0 1px 5px #000;
  &:hover {
    opacity: 60%;
  }
`;

const Select = styled.select`
  -webkit-appearance: none;
  border-radius: 8px;
  border: 1px solid ${(props) => (props.color === "" ? "#0af" : props.color)};
  outline: none;
  color: #000;
  font-weight: 600;
  padding: 0 40px;
  width: 350px;
  height: 50px;
  font-size: 25px;
  &:hover {
    background: ${(props) => (props.color === "" ? "#0af" : props.color)};
    color: #fff;
  }
`;
const H3 = styled.h3`
  position: relative;
  padding: 10px;
  background: ${(props) => (props.color === "" ? "#0af" : props.color)};
  color: #fff;
  cursor: pointer;
  &:hover {
    background: #fff;
    border: 1px solid ${(props) => (props.color === "" ? "#0af" : props.color)};
    color: #000;
    border-radius: 8px;
  }
`;
const Label8 = styled.label`
  position: absolute;
  top: 110px;
  right: 360px;
  transition: 0.5s;
  color: ${(props) => (props.value ? "#0AF" : "#999")};
  transform: ${(props) => (props.value ? "translate(-10%,-80%)" : null)};
`;
const Content = styled.div`
  &::-webkit-scrollbar-thumb {
    background: ${(props) => (props.color === "" ? "#0af" : props.color)};
    border-radius: 5px;
  }
`;
const Input2 = styled.input`
  float: right;
  margin: 70px 50px 0 0;
  width: 250px;
  border-bottom: ${(props) =>
    props.value ? "1px solid #0AF" : "1px solid #000"};
  &:focus ~ label {
    transform: translate(-10%, -80%);
    font-size: 15px;
    font-weight: 500px;
    color: #0af;
  }
`;
const Label6 = styled.label`
  position: absolute;
  bottom: 15px;
  right: 210px;
  transition: 0.5s;
  color: ${(props) => (props.value ? "#0AF" : "#999")};
  transform: ${(props) => (props.value ? "translate(-10%,-80%)" : null)};
`;

const Network = styled.div`
  width: 500px;
  height: 260px;
  background: ${(props) => (props.color === "" ? "#ced4da" : props.color)};
  padding: 25px;
  margin: 0 25px;
  border-radius: 8px;
  font-family: Arial, Helvetica, sans-serif;
`;
