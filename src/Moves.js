import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
export default class Moves extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        M: '',
        N:'',
        formValid: false,
        formData: [],
       

};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.OnChange = this.OnChange.bind(this);
    this.renderTable = this.renderTable.bind(this);
    //this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  handleChange(event) {
    this.setState({M: event.target.value,});
  }
  OnChange(event){
      this.setState({N:event.target.value})
  }

 

  handleSubmit(event) {
   // alert('A name was submitted: ' , this.state.M ,this.state.N);
    event.preventDefault();
    if(this.state.M != "" && this.state.N != "" && this.state.M != null && this.state.N != null){
      let object = {}
      object.M = this.state.M;
      object.N = this.state.N;

      this.setState({
         formValid: true,
         formData: object
       },() => {
         console.log("form state",this.state.formData)
       })

  }
  }
  renderTable(){
    
}



  render() {
    return (
        <div className='container col-sm-4' style={{padding:'30px'}}>
      {/* <form onSubmit={this.handleSubmit} style={{padding:'30px'}}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange}  style={{margin:'20px'}}/>
        </label>
        <br/>

        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} style={{margin:'20px'}}/>
        </label>
     
        <br/>
                    <div class="align-right">
                        <button>Submit</button>
                        </div>
      </form> */}

<Form onSubmit={this.handleSubmit}>
  <FormGroup controlId="formBasicEmail"style={{width:"50%"}}>
    <Label>M</Label>
    <Input type="number" placeholder="Enter numder of rows or colums "  onChange={this.handleChange}   />
   
  </FormGroup>

  <FormGroup controlId="formBasicPassword" style={{width:"50%"}}>
    <Label>N</Label>
    <Input type="number" placeholder="Enter Number of steps to move"  onChange={this.OnChange} />
  </FormGroup>
 
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form> 
{this.state.formValid ? <Table formData = {this.state.formData} /> : ''} 
      </div>
    );
  }
}


 class Table extends React.Component {
  constructor(props){
      super(props);
      this.state ={
        rowNUm:0,
        colNum:0

      }
      this.onKeyPress = this.onKeyPress.bind(this)
  }
  componentWillMount = (e) => {
    document.addEventListener("keydown", this.onKeyPress.bind(this));
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeyPress.bind(this));
}      

  onKeyPress (e) {
    console.log("event key",e.keyCode)
    if(e.key === 'Enter'){
      console.log('enter press here! ')
    }
    console.log("rownum",this.state.rowNUm)
    if(e.keyCode == 37) {
      this.setState({colNum: this.state.colNum-1})
    }
    if(e.keyCode == 39) {
      this.setState({colNum: this.state.colNum+1})
    }
    if(e.keyCode == 38) {
      this.setState({rowNUm: this.state.rowNUm-1})
    }
    if(e.keyCode == 40) {
      this.setState({rowNUm: this.state.rowNUm+1})
    }
  }
    render(){
       const {formData} = this.props;
       let rows = []
       let columns = []
       console.log("row num loop123",this.state.rowNUm)
       if(formData){
        
        //console.log("columns data2",columns)
         for(let i=0; i<formData.M;i++){
          columns = []
           for(let j=0; j<formData.M;j++){
             console.log("row num loop",this.state.rowNUm)
             let color = (i==this.state.rowNUm && j==this.state.colNum) ? 'yellow' : ''
          columns.push(<td><div  onKeyDown={this.onKeyPress} style={{backgroundColor: color, width: 50, height: 50,}}></div></td>)
          } 
          console.log("columns data",columns)
          rows.push(<tr>{columns}</tr>)
          

        }
          console.log("row of the data",rows) 
        }
        return(
          <div id="Table">
            <table border='1'>
             
              {rows}
            </table>
            <div>
                     {/* <input type="text" id="one" onKeyDown={this.onKeyPresse} /> */}
                  </div>
          </div>
          
                   
      
        );
      }
     }
