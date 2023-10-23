import {
  ButtonBack,
  ButtonForward,
  Controllers,
  StyledAiOutlineLeft,
  StyledAiOutlineRight,
} from './StyledStatysticHead';
import StatisticDatePicker from './StatisticDatePicker';

const StatisticHead = ({
  changePrevDate,
  changeNextDate,
  staticticDate,
  setStaticticDate,
}) => {
  return (
    <Controllers>
      <StatisticDatePicker
        setStaticticDate={setStaticticDate}
        staticticDate={staticticDate}
      />

      <div>
        <ButtonBack onClick={() => changePrevDate()}>
          <StyledAiOutlineLeft />
        </ButtonBack>
        <ButtonForward onClick={() => changeNextDate()}>
          <StyledAiOutlineRight />
        </ButtonForward>
      </div>
    </Controllers>
  );
};

export default StatisticHead;
