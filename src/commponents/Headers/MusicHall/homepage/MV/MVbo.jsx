import React, { Component } from 'react';
import {MVboxs} from "../../../../../api/audio";
class MVbo extends Component {
    componentDidMount(){
        console.log(this.props.match.params.id)
        let id = this.props.match.params.id
        MVboxs(id).then(res=>{
            console.log(res)
        })
    }
  render() {
    return (
      <div className="MVbo">
                  接口暂时有问题
      </div>
    );
  }
}

export default MVbo;
