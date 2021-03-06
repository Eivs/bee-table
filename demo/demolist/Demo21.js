/**
*
* @title 根据列进行过滤
* @description 点击表格右侧按钮，进行表格列的数据过滤。
*
*/


import React, { Component } from 'react';
import Table from '../../src';
import filterColumn from '../../src/lib/filterColumn';
import sum from '../../src/lib/sum';
import Icon from "bee-icon";
import Checkbox from 'bee-checkbox';
import Popover from 'bee-popover';

const columns21 = [
  {
    title: "名字",
    dataIndex: "a",
    key: "a",
    // width: 100
  },
  {
    title: "性别",
    dataIndex: "b",
    key: "b",
    // width: 100
  },
  {
    title: "年龄",
    dataIndex: "c",
    key: "c",
    // width: 200,
    // sumCol: true,
    sorter: (a, b) => a.c - b.c
  },
  {
    title: "武功级别",
    dataIndex: "d",
    key: "d"
  },
  {
    title: "操作",
    dataIndex: "e",
    key: "e",
    render(text, record, index){
      return (
        <div  title={text} >
            <a href="#"
                tooltip={text}
                onClick={() => {
                  alert('这是第'+index+'列，内容为:'+text);
                }}
                // style={{
                //     position: 'absolute',
                //     top: 5,
                //     left: 0
                // }}
              >
                一些操作
              </a>
        </div>
      );
    }
  }
];

const data21 = [
  { a: "杨过", b: "男", c: 30,d:'内行',e: "操作", key: "2" },
  { a: "令狐冲", b: "男", c: 41,d:'大侠',e: "操作", key: "1" },
  { a: "郭靖", b: "男", c: 25,d:'大侠',e: "操作", key: "3" }
];

const FilterColumnTable = filterColumn(Table, Popover, Icon);

const defaultProps21 = {
  prefixCls: "bee-table"
};

class Demo21 extends Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    
    return <FilterColumnTable columns={columns21} data={data21} />;
  }
}
Demo21.defaultProps = defaultProps21;


export default Demo21;