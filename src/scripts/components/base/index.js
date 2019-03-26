import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';
import axios from "axios";
import 'core-js/es6/promise';
import { Select, message, Modal } from 'antd';
import {Link,history} from "react-router";
const Option = Select.Option;

export default class Base extends Component {
  constructor(props){
    super(props);
    this.makeCancelable = (promise) => {
			let hasCanceled_ = false;
			const wrappedPromise = new Promise((resolve, reject) => {
				promise.then((val) =>
					hasCanceled_ ? reject({ isCanceled: true }) : resolve(val)
				);
				promise.catch((error) =>
					hasCanceled_ ? reject({ isCanceled: true }) : reject(error)
				);
			});
			return {
				promise: wrappedPromise,
				cancel() {
					hasCanceled_ = true;
				},
			};
		};
  }
    validateToken=(code)=>{
		if (code == 3001 || code == 1015) {
      // window.location = 'login.html';
      history.pushState('/');
			sessionStorage.clear();
		}
	}
	 //将时间戳转换为时间
	 changeTime=(date)=>{
        let timestamp4 = new Date(date);//直接用 new Date(时间戳) 格式转化获得当前时间
        let time = timestamp4.toLocaleDateString().replace(/\//g, "-") + " " + timestamp4.toTimeString().substr(0, 8);
        return time;
    }
    fetchPost=(url, obj, cb)=>{
		let p = fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"token": `${sessionStorage.token}`,
			},
			body: JSON.stringify(obj)
		}).then(res => {
			return res.json();
		}).then(json => {
			this.validateToken(json.code);
			cb(json);
		}).catch(err => console.log(err));
		return this.makeCancelable(p);
	}

	fetchGet=(url, cb)=>{
		let p = fetch(url, {
			method: "GET",
			headers: {
				"token": `${sessionStorage.token}`,
			}
		}).then(res => {
			return res.json();
		}).then(json => {
			this.validateToken(json.code);
			cb(json);
		}).catch(err => console.log(err));
		return this.makeCancelable(p);
	}
	
	render() {
	}
}