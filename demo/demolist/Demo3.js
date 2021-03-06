/**
 *
 * @title 表头分组
 * @description columns[n] 可以内嵌 children，以渲染分组表头。
 *
 */

import Button from "bee-button";
import React, { Component } from "react";
import Table from "../../src";

const { ColumnGroup, Column } = Table;

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    width: 100,
    fixed: "left"
  },
  {
    title: "Other",
    children: [
      {
        title: "Age",
        dataIndex: "age",
        key: "age",
        width: 200
      },
      {
        title: "Address",
        children: [
          {
            title: "Street",
            dataIndex: "street",
            key: "street",
            width: 200
          },
          {
            title: "Block",
            children: [
              {
                title: "Building",
                dataIndex: "building",
                key: "building",
                width: 100
              },
              {
                title: "Door No.",
                dataIndex: "number",
                key: "number",
                width: 100
              }
            ]
          }
        ]
      }
    ]
  },
  {
    title: "Company",
    children: [
      {
        title: "Company Address",
        dataIndex: "companyAddress",
        key: "companyAddress"
      },
      {
        title: "Company Name",
        dataIndex: "companyName",
        key: "companyName"
      }
    ]
  },
  {
    title: "Gender",
    dataIndex: "gender",
    key: "gender",
    width: 60,
    fixed: "right"
  }
];

const data = [];
for (let i = 0; i < 20; i++) {
  data.push({
    key: i,
    name: "John Brown",
    age: i + 1,
    street: "Lake Park",
    building: "C",
    number: 2035,
    companyAddress: "Lake Street 42",
    companyName: "SoftLake Co",
    gender: "M"
  });
}

class Demo3 extends Component {
  render() {
    return (
      <Table
        columns={columns}
        data={data}
        bordered
        scroll={{ x: "130%", y: 240 }}
      />
    );
  }
}

export default Demo3;
