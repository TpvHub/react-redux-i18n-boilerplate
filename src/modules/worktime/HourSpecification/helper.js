export const renderDate = (text, record) => {
  const obj = {
    children: text,
    props: {},
  };

  if (record.isTotal) { obj.props.colSpan = 3; }
  if (record.isTotal) { obj.children = record.label; }
  if (record.isAllHoursTotal) { obj.children = record.dateLabel; }

  return obj;
};

export const renderLoginTime = (text, record) => {
  const obj = {
    children: text,
    props: {},
  };

  if (record.isTotal) { obj.props.colSpan = 0; }
  if (record.isAllHoursTotal) { obj.children = record.all_hours_total; }

  return obj;
};

export const renderCheckoutTime = (text, record) => {
  const obj = {
    children: text,
    props: {},
  };

  if (record.isTotal) { obj.props.colSpan = 0; }
  if (record.isAllHoursTotal) { obj.children = record.checkoutTimeLabel; }

  return obj;
};

export const renderHours = (text, record) => {
  const obj = {
    children: text,
    props: {},
  };

  if (record.isAllHoursTotal || record.isTotal) { obj.props.colSpan = 2; }
  if (record.isTotal) { obj.children = record.total; }
  if (record.isAllHoursTotal) { obj.children = record.total_working_days; }

  return obj;
};

export const renderDefinition = (text, record) => {
  const obj = {
    children: text,
    props: {},
  };

  if (record.isTotal) { obj.props.colSpan = 0; }

  return obj;
};