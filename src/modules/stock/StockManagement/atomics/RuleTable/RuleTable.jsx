import React, { useState, useCallback } from 'react';
import { Button, Table, Modal } from 'antd';
const { Column } = Table;
import { ProductGroupModal, ProductModal } from 'modals';

const data = Array(3).fill().map((_, i) => ({
  key: i,
  name: 'A-bus Oy Matti Melamies--' + i,
  in_store: 'deliveries',
  selling_price: '2016-06-08 15:21',
  vat: '-',
}));

function RuleTable() {
  const [isOpenModalProductGroup, setModalProductGroup] = useState(false);
  const toggleModalProductGroup = useCallback(() => setModalProductGroup(prevIsOpenModal => !prevIsOpenModal), []);

  const [isOpenModalProduct, setModalProduct] = useState(false);
  const toggleModalProduct = useCallback(() => setModalProduct(prevIsOpenModal => !prevIsOpenModal), []);

  return (
    <div className="rule-table">
      <div className="stock-management__table-title">
        <strong className="stock-management__title">RULE Ready Packages</strong>
        <Button className="u-mgl-10" onClick={toggleModalProductGroup}>Customize your product group</Button>
        <Button className="u-mgl-10" onClick={toggleModalProduct}>Add a new product to the RULE package</Button>
      </div>

      <div className="stock-management__table">
        <Table bordered dataSource={data}>
          <Column title="Name" dataIndex="name" key="name" sorter={(a, b) => (a.name > b.name) - (a.name < b.name)} />
          <Column title="In store" dataIndex="in_store" key="in_store" sorter={(a, b) => (a.in_store > b.in_store) - (a.in_store < b.in_store)} />
          <Column title="Selling price" dataIndex="selling_price" key="selling_price" sorter={(a, b) => (a.selling_price > b.selling_price) - (a.selling_price < b.selling_price)} />
          <Column title="VAT" dataIndex="vat" key="vat" sorter={(a, b) => (a.vat > b.vat) - (a.vat < b.vat)} />
          <Column
            title="Information"
            key="information"
            render={() => (
              <span>
                <a href="javascript:;">Edit</a>
              </span>
            )}
          />
        </Table>
      </div>

      <Modal
        onCancel={toggleModalProductGroup}
        visible={isOpenModalProductGroup}
        footer={null}
      >
        <ProductGroupModal type="create" />
      </Modal>

      <Modal
        style={{ top: 20 }}
        width={650}
        onCancel={toggleModalProduct}
        visible={isOpenModalProduct}
        footer={null}
      >
        <ProductModal type="create" />
      </Modal>
    </div>
  );
}

export default RuleTable;