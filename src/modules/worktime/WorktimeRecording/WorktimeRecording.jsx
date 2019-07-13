import React from 'react';
import { Descriptions, Button, Icon, TimePicker } from 'antd';

export default function WorktimeRecording() {
  return (
    <div className="worktime-recording">
      <div className="card-title">Timecard</div>
      <div className="worktime-recording__description">
        <Descriptions bordered>
          <Descriptions.Item span={3} label="Employee">Tomi Salmi</Descriptions.Item>
          <Descriptions.Item span={3} label="Signed in today">2019-07-05 16:09:36 - 2019-07-05 16:14:41</Descriptions.Item>
          <Descriptions.Item span={3} label="Total hours worked today">0:05</Descriptions.Item>
          <Descriptions.Item span={3} label="Total working hours this week">32:47</Descriptions.Item>
          <Descriptions.Item span={3} label="Last week total number of hours worked">0:00</Descriptions.Item>
          <Descriptions.Item span={3} label="Total work hours this month">0:00</Descriptions.Item>
          <Descriptions.Item span={3} label="Total working hours last month">0:00</Descriptions.Item>
        </Descriptions>
      </div>

      <div className="worktime-recording__time-unrecord">
        <Descriptions bordered>
          <Descriptions.Item span={3} label="Unrecorded working hours (Tomi)">2019-07-04 06:21:04</Descriptions.Item>
        </Descriptions>
      </div>

      <div className="worktime-recording__start">
        <Button type="primary">
          <Icon type="user" />
          <span>Start working time</span>
        </Button>

        <div className="worktime-recording__add-checkout">
          <TimePicker format="HH:mm" />
          <Button className="worktime-recording__save-checkout" type="primary">Save</Button>
        </div>
      </div>
    </div>
  );
}