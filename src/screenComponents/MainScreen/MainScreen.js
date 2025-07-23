import {HeaderPart} from './HeaderPart';
import {ProfileCard} from './ProfileCard';
import {SearchBarPart} from './SearchBarPart';
import {DetailReport} from './DetailReport';

const MainScreen = () => {
  return(
    <div className={'p-10 w-full'}>
      <div className={'w-full border rounded-xl'}>
        <HeaderPart />
        <div className={'border-t border-gray-300 my-4'}></div>
        <ProfileCard />
        <SearchBarPart />
        <DetailReport />
      </div>
    </div>
  );
};

export default MainScreen;
