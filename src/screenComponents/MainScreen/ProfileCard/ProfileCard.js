import {Avatar, Card, Table, Tag} from 'antd';
import {PhoneOutlined} from '@ant-design/icons';
import {IoIosMale} from 'react-icons/io';
import {LiaBirthdayCakeSolid} from 'react-icons/lia';
import {BiInjection, BiLink} from 'react-icons/bi';
import {FaSmoking, FaWineGlassAlt} from 'react-icons/fa';

const ProfileTable = () => {
  return (
    <div className={'p-4'}>
      <div className={'w-full border rounded-xl shadow-sm'}>
        <table className={'w-full text-sm text-gray-700'}>
          <tbody>
            <tr className={'border-b'}>
              <td className={'p-3 flex items-center gap-3'}>
                <Avatar
                  shape={'square'}
                  size={'large'}
                  style={{backgroundColor: '#e6f4ff', color: '#1677ff'}}>
                  CS
                </Avatar>
                <div>
                  <h1 className={'font-semibold text-gray-800'}>Chinmay Sule</h1>
                  <p className={'text-gray-500 text-xs'}>100087-000015-2</p>
                </div>
              </td>

              <td className={'border-l w-40'}>
                <div className={'flex justify-center items-center gap-1'}>
                  <PhoneOutlined />
                  <span>+91-9096396014</span>
                </div>
              </td>

              <td className={'border-l w-40'}>
                <div className={'flex flex-row justify-center items-center gap-4'}>
                  <div className={'flex items-center gap-1'}>
                    <IoIosMale />
                    <span>Male</span>
                  </div>

                  <div className={'flex items-center gap-1'}>
                    <LiaBirthdayCakeSolid />
                    <span>38Y</span>
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <td className={'p-3'}>
                <div className={'flex flex-wrap gap-2'}>
                  <Tag bordered={false} color={'blue'} className={'flex items-center gap-1 px-3 py-1 rounded-full'}>
                    <BiInjection /> Sulfa Drug Allergy
                  </Tag>

                  <Tag bordered={false} color={'blue'} className={'flex items-center gap-1 px-3 py-1 rounded-full'}>
                    <BiInjection /> Statin Muscle Pain
                  </Tag>

                  <Tag bordered={false} color={'orange'} className={'flex items-center gap-1 px-3 py-1 rounded-full'}>
                    <BiLink /> Peanut Allergy
                  </Tag>

                  <Tag bordered={false} color={'orange'} className={'flex items-center gap-1 px-3 py-1 rounded-full'}>
                    <BiInjection /> Penicillin Allergy
                  </Tag>

                  <Tag bordered={false} color={'red'} className={'flex items-center gap-1 px-3 py-1 rounded-full'}>
                    <FaSmoking /> Smoker
                  </Tag>

                  <Tag bordered={false} color={'red'} className={'flex items-center gap-1 px-3 py-1 rounded-full'}>
                    <FaWineGlassAlt /> Alcohol Use
                  </Tag>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProfileTable;
