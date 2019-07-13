import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon, Tabs, Input, Select } from 'antd';
const { TabPane } = Tabs;
const { TextArea } = Input;
const { Option } = Select;

function SectionHeader({ title, extraIcon }) {
  return (
    <div className="section_header">
      <h2 className="section_header__title">{title}</h2>
      {
        extraIcon ? extraIcon : ''
      }
    </div>
  );
}

function CustomerInformation() {
  return (
    <div className="customer-detail__content">
      <div className="customer-detail__content__information">
        <SectionHeader
          title="General Customer Information"
          extraIcon={<Link to="/customers/new-customer"><Button type="link" icon="edit" /></Link>}
        />
        <div className="customer-detail__content__table">
          <table>
            <tbody>
              <tr><td><b>Basic</b></td></tr>
              <tr>
                <td>Customer number</td>
                <td>723</td>
              </tr>
              <tr>
                <td>customer Type</td>
                <td>Customer</td>
              </tr>
              <tr><td><b>Company Information</b></td></tr>
              <tr>
                <td>Name of the company</td>
                <td>Kuulosirpakka Oy</td>
              </tr>
              <tr>
                <td>Business id</td>
              </tr>
              <tr><td><b>Company Information</b></td></tr>
              <tr>
                <td>Name of the company</td>
                <td>Kuulosirpakka Oy</td>
              </tr>
              <tr>
                <td>Business id</td>
              </tr>
              <tr><td><b>Other information</b></td></tr>
              <tr>
                <td>Additional Information</td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <TextArea rows={4} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="customer-detail__content__information">
        <SectionHeader title="Addresses" />
        <div>
          <div>
            <Select defaultValue="add-new" style={{ width: 150 }}>
              <Option value="add-new">Add new...</Option>
              <Option value="mailing">mailing address</Option>
              <Option value="billing">billing address</Option>
              <Option value="delivery">delivery address</Option>
            </Select>
          </div>
          <br />
          <div className="customer-detail__content__table">
            <table>
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>Sirkku-Marja Väätäinen</td>
                </tr>
                <tr>
                  <td>Telephone number</td>
                  <td>0404552555</td>
                </tr>
                <tr>
                  <td>E-mail</td>
                  <td>sirkku-marja@kuulosirpakka.fi</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <br />
        <SectionHeader
          title="Contact persons"
          extraIcon={<Button type="link" icon="user-add" />}
        />
        <div className="customer-detail__content__table">
          <table>
            <tbody>
              <tr>
                <td>Name</td>
                <td>Sirkku-Marja Väätäinen</td>
              </tr>
              <tr>
                <td>Telephone number</td>
                <td>0404552555</td>
              </tr>
              <tr>
                <td>E-mail</td>
                <td>sirkku-marja@kuulosirpakka.fi</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function CustomerNotes() {
  return (
    <div className="customer-notes">
      <SectionHeader
        title="Comments"
        extraIcon={<Button type="link"><Icon type="plus" /> Add New Comment</Button>}
      />
      <div>
        <p>Feb 16, 2013 1.02.15 Lauri Aho</p>
        <div>
          {`
          From: Lauri Aho [mailto: lauri.aho@neemia.fi]

          Posted: Feb 16, 2013 1:00 AM

          To: 'Sirkku-Marja Väätäinen'

          Subject: VS: II Feedback

          Hi Sirkku-Marja,

          The serial number can be found on the stockpile. That is, the last column 'Tracks' in the product list opens a screen with the possibility to add new serial numbers. For the time being, the latest status information is displayed for the song, but it will be possible to enter more information about the storage, such as a text-only note, if a failure is detected in a paragraph.

          The products also come with the desire to keep track of the stock at the item level - the batteries are unlikely to be fed into the stock.

          I picked the vats, all now have 24 percent. I myself have been thinking the same thing, that the VAT rate might be desirable to tell the product level, only a special case. The assumption might well be at the product group level.

          That's the point I didn't quite understand: When you click on "Add a new product to a group ...", an insertion form opens. At the bottom of it is the button "Add". I guess it works?

          You mentioned on the phone that our monthly price seems high. We thought to take 10 euros off the price and offer a monthly fee of 79,90e / month. Does this feel more reasonable? Not much price would dare to drop, because not many hours a month at that price will work.

          I can send a timetable for the remaining modifications, but it will take some time to write it. I am now getting ready for a week on holiday and I could not make it before my vacation schedule. Please wait there for the next week that I'm back to work at the desk.

          Regards,

          Lauri
          `}
        </div>
      </div>
    </div>
  );
}

function CustomerOrder() {
  return (
    <div className="customer-order">
      <div>
        <SectionHeader
          title="Subscriptions"
        />
        <div className="customer-detail__content__table">
          <table>
            <tbody>
              <tr>
                <td>In total</td>
                <td>0</td>
              </tr>
              <tr>
                <td><Button>Show orders</Button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <SectionHeader
          title="Bills"
        />
        <div className="customer-detail__content__table">
          <table>
            <tbody>
              <tr>
                <td>transparent</td>
                <td>0</td>
              </tr>
              <tr>
                <td>past due</td>
                <td>0</td>
              </tr>
              <tr>
                <td><Button>Show invoices</Button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default function CustomerDetail() {
  const onChangeTab = (key) => {
  };

  return (
    <div className="customer-detail">
      <div className="customer-detail__heading">
        <div className="customer-detail__heading--fullname"><h2>Kuulosirpakka Oy</h2></div>
        <div><Button><Icon type="delete" /> Remove the customer</Button></div>
      </div>
      <div className="customer-detail__wrapper">
        <Tabs onChange={onChangeTab} type="card">
          <TabPane tab="Customer information" key="information">
            <CustomerInformation />
          </TabPane>
          <TabPane tab="Customer notes" key="notes">
            <CustomerNotes />
          </TabPane>
          <TabPane tab="Order history" key="order">
            <CustomerOrder />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}