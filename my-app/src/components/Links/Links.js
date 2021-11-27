import React,{Component} from "react"

class Links extends Component{

render(){

return(
    
<a className="Links" href={this.props.href}>{this.props.text}</a>

)

}

}

export default Links