import React, { useState, useCallback } from 'react';
import { Button, Modal } from 'antd';
import { ProductGroupModal } from 'modals';
import { RuleTable } from './atomics';

function StockManagement() {
  const [isOpenModal, setModal] = useState(false);
  const toggleModal = useCallback(() => setModal(prevIsOpenModal => !prevIsOpenModal), []);

  return (
    <div className="stock-management">
      <div className="card-title">Stocks by product group</div>
      <div className="u-text-left u-mgt-10">
        <Button type="primary" onClick={toggleModal}>Add a new product group</Button>
      </div>

      <div className="stock-management__rules">
        <RuleTable />
      </div>

      <Modal
        onCancel={toggleModal}
        visible={isOpenModal}
        footer={null}
      >
        <ProductGroupModal type="create" />
      </Modal>
    </div>
  );
}

export default StockManagement;