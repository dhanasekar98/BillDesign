import React from 'react'
import axios from 'axios'
import FormComponent from "../FormComponent/FormComponent"

class FormContainer extends React.Component{
  constructor(){
    super()
    this.state={
      Savedfilter:"",
      Circlename:"",
      Divisionname:"",
      Subdivision:"",
      Section:"",
      Townname:"",
      SSname:"",
      Feedername:"",
      Dtname:"",
      Manufacturername:"",
      Metertype:"",
      YearofManufacture:"",
      Metercategory:"",
      Filmwareversion:"",
      Communicated:"",
      Fromdate:"",
      Todate:"",
      Metergroup:"",
      Meterserialnumber:"",
      Circle: [],
      Division:[],
      Subdiv:[] ,
      Sec:[],
      Town:[],
      ss:[],
      Feeder:[]
    }
    this.handlechange=this.handlechange.bind(this)
  }
  componentDidMount() {
    axios.get(`/getAllCircleName`)
    .then(x => {
      console.log(x);
      this.setState({Circle: x.data});
    });
    this.fetchdiv()
    this.fetchSubdiv()
    this.fetchSection()
    this.fetchTown()
    this.fetchSs()
    this.fetchFeeder()
  }
  fetchdiv(){
    axios.get(`/getAllDivisionName`)
    .then(x => {
      console.log(x);
      this.setState({Division: x.data});
    });
  }
  fetchSubdiv(){
    axios.get(`/getAllSubDivisionName`)
    .then(x => {
      console.log(x);
      this.setState({Subdiv: x.data});
    });
  }
  fetchSection(){
    axios.get(`/getAllSectionName`)
    .then(x => {
      console.log(x);
      this.setState({Sec: x.data});
    });
  }
  fetchTown(){
    axios.get(`/getTownDetails`)
    .then(x => {
      console.log(x);
      this.setState({Town: x.data});
    });
  }
  fetchSs(){
    axios.get(`/getSubStationdetails`)
    .then(x => {
      console.log(x);
      this.setState({ss: x.data});
    });
  }
  fetchFeeder(){
    axios.get(`/getFeederdetails`)
    .then(x => {
      console.log(x);
      this.setState({Feeder: x.data});
    });
  }
  fCirclename=()=>{
    return this.state.Circle.map(s=>s.circleName.split('\n'))
  }
  fDivname=()=>{
    return this.state.Division.map(s=>s.divisionName.split('\n'))
  }
  fSubDivname=()=>{
    return this.state.Subdiv.map(s=>s.subdivisionName.split('\n'))
  }
  fSecname=()=>{
    return this.state.Sec.map(s=>s.sectionName.split('\n'))
  }
  fTownname=()=>{
    return this.state.Town.map(s=>s.townName.split('\n'))
  }
  fSS=()=>{
    return this.state.ss.map(s=>s.subStationShortName)
  }
  fFeedername=()=>{
    return this.state.Feeder.map(s=>s.feederName.split('\n'))
  }

  handlechange(event){
    const {name,value}=event.target
    this.setState({[name]:value})
  }
  render(){
    return(
      <FormComponent 
      handlechange={this.handlechange}
      data={this.state}
      Circle_name={this.fCirclename()}
      Division_name={this.fDivname()}
      Sub_divname={this.fSubDivname()}
      Section_name={this.fSecname()}
      Town_name={this.fTownname()} 
      ss_name={this.fSS()}
      Feeder_name={this.fFeedername()}/>
    )
  }
}


export default FormContainer