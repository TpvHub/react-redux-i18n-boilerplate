import React from 'react';
import { SectionHeader } from 'components/common';
import { Select, Input, Button } from 'antd';

const { Option } = Select;
const { TextArea } = Input;

export default function NewCustomer() {
  return (
    <div className="new-customer">
      <h2>New customer</h2>
      <SectionHeader title="Basic" />
      <div className="new-customer__form new-customer__form--double">
        <div className="new-customer__form--left">
          <div><b>Particulars</b></div>
          <table>
            <tbody>
              <tr><td className="td-label">Name</td><td><Input /></td></tr>
              <tr><td className="td-label">Email address</td><td><Input /></td></tr>
              <tr><td className="td-label">Telephone number</td><td><Input /></td></tr>
            </tbody>
          </table>
        </div>
        <div className="new-customer__form--right">
          <div><b>Particulars</b></div>
          <span>(Please fill in only if it is a business customer)</span>
          <table>
            <tbody>
              <tr><td className="td-label">Name of the company</td><td><Input /></td></tr>
              <tr><td className="td-label">Business id</td><td><Input /></td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <br />

      <SectionHeader title="Information about billing" />
      <div>
        <div className="new-customer__form new-customer__form--double">
          <div className="new-customer__form--left">
            <table>
              <tbody>
                <tr>
                  <td className="td-label">Terms</td>
                  <td>
                    <Select defaultValue="lucy" style={{ width: '100%' }}>
                      <Option value="jack">Jack</Option>
                      <Option value="lucy">Lucy</Option>
                      <Option value="Yiminghe">yiminghe</Option>
                    </Select>
                  </td>
                </tr>
                <tr><td className="td-label">Discount percentage</td><td><Input type="number" style={{ width: '50%' }} /></td></tr>
                <tr><td className="td-label">invoice address</td><td><Input /></td></tr>
                <tr><td className="td-label">Service provider ID</td><td><Input /></td></tr>
              </tbody>
            </table>
          </div>
          <div className="new-customer__form--right">
            <div><b>Billing address</b></div>
            <table>
              <tbody>
                <tr><td className="td-label">Name of the recipient</td><td><Input /></td></tr>
                <tr><td className="td-label">Complete your name</td><td><Input /></td></tr>
                <tr><td className="td-label">Complete your name</td><td><Input /></td></tr>
                <tr><td className="td-label">Delivery address	</td><td><Input /></td></tr>
                <tr><td className="td-label">ZIP code</td><td><Input /></td></tr>
                <tr><td className="td-label">Post office</td><td><Input /></td></tr>
                <tr><td className="td-label">Country</td><td><Input /></td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <br />

      <SectionHeader title="Other information" />
      <div>
        <div className="new-customer__form new-customer__form--double">
          <div className="new-customer__form--left">
            <table>
              <tbody>
                <tr>
                  <td className="td-label">Additional Information</td>
                  <td><TextArea rows={6} /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="new-customer__form__submit">
        <Button>Save</Button>
        <Button>Cancel</Button>
      </div>

    </div>
  );
}