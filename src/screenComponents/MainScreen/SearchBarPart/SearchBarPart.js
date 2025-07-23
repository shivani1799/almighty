import {Input} from 'antd';
import {SearchOutlined} from '@ant-design/icons';

const SearchBarPart = () => {
  return (
    <div className={'p-4 w-96'}>
      <Input
        placeholder={'Search Medicines Eg. Antihypertensives '}
        prefix={<SearchOutlined className={'text-gray-400'} />}
        className={'rounded-lg px-4 py-2'}
      />
    </div>
  );
};

export default SearchBarPart;
