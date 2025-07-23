import {DownOutlined, ExclamationCircleOutlined, PlusOutlined, UpOutlined} from '@ant-design/icons';
import {Button, Collapse, Input, Popover, Table, Tag} from 'antd';
import {useState} from 'react';

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const DetailReport = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const onSelectChange = newSelectedRowKeys => {
    console.log('Selected Row Keys:', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const columns = [
    {
      title: 'Medication Name',
      dataIndex: 'medicine',
      key: 'medicine',
    },
    {
      title: 'Frequency',
      dataIndex: 'dosage',
      key: 'dosage',
    },
    {
      title: 'Dose',
      dataIndex: 'frequency',
      key: 'frequency',
    },
    {
      title: 'Duration',
      dataIndex: 'frequency',
      key: 'frequency',
    },
    {
      title: 'Remarks',
      dataIndex: 'frequency',
      key: 'frequency',
    },
  ];

  const data = [
    {
      key: '1',
      medicine: 'Paracetamol',
      dosage: '500mg',
      frequency: '1-1 tab/day',
    },
    {
      key: '2',
      medicine: 'Amoxicillin',
      dosage: '250mg',
      frequency: '3 times a day',
    },
    {
      key: '3',
      medicine: 'Cough Syrup',
      dosage: '10ml',
      frequency: '7 Days',
    },
    {
      key: '4',
      medicine: 'Paracetamol',
      dosage: '500mg',
      frequency: '1-1 tab/day',
    },
    {
      key: '5',
      medicine: 'Paracetamol',
      dosage: '500mg',
      frequency: '1-1 tab/day',
    },
  ];

  const onChange = key => {
    console.log(key);
  };

  const genExtra = number => (
    <span>{number}</span>
  );
  const items = [
    {
      key: '1',
      label: 'Vitals',
      children: <div>{text}</div>,
      extra: genExtra(5),
    },
    {
      key: '2',
      label: 'Diagnosis',
      children: <div>{text}</div>,
      extra: genExtra(2),
    },
    {
      key: '3',
      label: 'Investigation',
      children: <div>{text}</div>,
      extra: genExtra(3),
    },
    // {
    //   key: '4',
    //   label: 'Prescription',
    //   children: (
    //     <div className={'p-2'}>
    //       <Table
    //         rowSelection={rowSelection}
    //         columns={columns}
    //         dataSource={data}
    //         pagination={false}
    //         bordered
    //         size={'small'}
    //       />
    //     </div>
    //   ),
    //   extra: genExtra(4),
    // },
    {
      key: '4',
      label: 'Prescription',
      children: (
        <div className={'p-2'}>
          <Table
            rowSelection={{
              onChange: (selectedRowKeys, selectedRows) => {
                console.log('Selected Row Keys:', selectedRowKeys);
              },
            }}
            columns={[
              {
                title: 'Medication Name',
                dataIndex: 'medicine',
                key: 'medicine',
                render: (text, record) => (
                  <div className={`flex items-center gap-2 ${record.alert ? 'bg-red-50 p-2 rounded' : ''}`}>
                    <div>
                      <div className={'font-medium'}>{text}</div>
                      <div className={'text-xs text-gray-400'}>{record.type}</div>
                    </div>

                    {record.alert && (
                      <Popover
                        title={<span className={'text-red-500 font-semibold'}>Allergy Alert</span>}
                        content={(
                          <div className={'max-w-xs'}>
                            <p className={'text-sm text-gray-700 mb-2'}>
                                        The patient is allergic to Penicillin-based medications, including <b>{record.medicine}</b>.
                                        Prescribing this may cause a severe allergic reaction.
                            </p>
                            <div className={'flex gap-2'}>
                              <Button size={'small'} onClick={() => console.log('Override clicked')}>
                                          Override Warning
                              </Button>
                              <Button size={'small'} type={'primary'} onClick={() => console.log('View Alternatives')}>
                                          View Alternatives
                              </Button>
                            </div>
                          </div>
                        )}
                        trigger={'click'}
                      >
                        <Button size={'small'} danger icon={<ExclamationCircleOutlined />}>
                                  Allergy Alert
                        </Button>
                      </Popover>
                    )}

                    {/*<ArrowUpRightOutlined className={'text-gray-400'} />*/}
                  </div>
                ),
              },
              {
                title: 'Frequency',
                dataIndex: 'frequency',
                key: 'frequency',
                render: freq => (
                  <Tag color={'blue'} className={'rounded-md px-2 py-1 text-xs'}>{freq}</Tag>
                ),
              },
              {
                title: 'Dose',
                dataIndex: 'dose',
                key: 'dose',
              },
              {
                title: 'Duration',
                dataIndex: 'duration',
                key: 'duration',
              },
              {
                title: 'Remarks',
                dataIndex: 'remarks',
                key: 'remarks',
                ellipsis: true,
              },
            ]}
            dataSource={[
              {
                key: '1',
                medicine: 'Digoxin',
                type: 'Tablet',
                frequency: 'BD',
                dose: '1-1 tab/day',
                duration: '7 days',
                remarks: 'Patient shows signs of fatigue and dyspnea',
                alert: false,
              },
              {
                key: '2',
                medicine: 'Furosemide',
                type: 'Intravenous',
                frequency: 'OD',
                dose: '5 ml/day',
                duration: '4 days',
                remarks: 'Confirmed post HbA1c test, further monito..',
                alert: false,
              },
              {
                key: '3',
                medicine: 'Antihypertensives',
                type: 'Intravenous',
                frequency: 'OD',
                dose: '5 ml/day',
                duration: '5 days',
                remarks: 'Confirmed post HbA1c test, further monito..',
                alert: false,
              },
              {
                key: '4',
                medicine: 'Amoxicillin',
                type: 'Intravenous',
                frequency: 'OD',
                dose: '1-1 tab/day',
                duration: '5 days',
                remarks: 'Confirmed post HbA1c test, further monito..',
                alert: true,
              },
            ]}
            pagination={false}
            size={'small'}
            bordered
          />

          <div className={'flex items-center mt-3 gap-2'}>
            <Input
              placeholder={'Type vital name and press enter...'}
              onPressEnter={e => console.log('New medicine:', e.target.value)}
              className={'flex-1'}
            />
            <Button danger onClick={() => console.log('Delete clicked')}>Delete</Button>
            <Button type={'primary'} onClick={() => console.log('Save clicked')}>Save</Button>
          </div>

          <Button
            type={'link'}
            icon={<PlusOutlined />}
            onClick={() => console.log('New Row clicked')}
            className={'mt-2 text-blue-500'}
          >
              New Row
          </Button>
        </div>
      ),
    },
    {
      key: '5',
      label: 'Complaints & History of Present Illness',
      children: <div>{text}</div>,
      extra: genExtra(2),
    },
    {
      key: '6',
      label: 'History',
      children: <div>{text}</div>,
      extra: genExtra(4),
    },
    {
      key: '7',
      label: 'Clinical Forms',
      children: <div>{text}</div>,
      extra: genExtra(2),
    },
    {
      key: '8',
      label: 'Service',
      children: <div>{text}</div>,
      extra: genExtra(4),
    },
  ];
  return (
    <div className={'p-4'}>
      <Collapse
        defaultActiveKey={['4']}
        onChange={onChange}
        items={items}
        expandIcon={({isActive}) => (
          <div className={'flex items-center gap-2'}>
            {isActive ? <UpOutlined /> : <DownOutlined />}
            <div className={'h-5 border-l border-gray-300'}></div>
          </div>
        )}
      />
      <br />
    </div>
  );
};

export default DetailReport;
