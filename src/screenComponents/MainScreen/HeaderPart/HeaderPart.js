import {Button, Divider, Tooltip} from 'antd';
import {CaretDownOutlined, DownOutlined, MoreOutlined, RollbackOutlined, UpOutlined} from '@ant-design/icons';
import {useState} from 'react';

const HeaderPart =() => {
  const [position ] = useState('end');

  return (
    <div className={'flex p-4 justify-between'}>
      <div>
        <Tooltip title={'search'}>
          <Button icon={<RollbackOutlined />}>Search</Button>
        </Tooltip>

        <Divider type={'vertical'} style={{height: '30px', backgroundColor: '#d9d9d9'}} />
        <Button icon={<UpOutlined />}></Button>
        <Button icon={<DownOutlined />} className={'ml-2'}></Button>
      </div>

      <div>
        <Button type={'primary'} icon={<CaretDownOutlined />} iconPosition={position}>
                    Search
        </Button>

        <Divider type={'vertical'} style={{height: '30px', backgroundColor: '#d9d9d9'}} />

        <Button icon={<MoreOutlined />}></Button>
      </div>
    </div>
  );
};

export default HeaderPart;
