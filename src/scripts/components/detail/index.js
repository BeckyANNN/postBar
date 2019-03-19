import React, { Component } from "react";

import {Link} from "react-router";
import { Pagination,Input,Affix,Button } from 'antd';
export default class Detail extends Component{
    render(){
        return(
            <div style={{height:1000}}>
                <Affix onClick={()=>{console.log(1111111)}}>
                    <Button>affix</Button>
                </Affix>
            </div>
        )
    }
}