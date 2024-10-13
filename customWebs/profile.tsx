import { Web } from '@/components';
import { customWebProps } from '@/types/webTypes';
import styles from '@/styles/profile/profile.module.css';

const Profile = (props: customWebProps) => {
  return props.rendering && (
    <Web name={props.name} rendering={props.rendering} selected={props.selected} selectWeb={() => props.selectWeb()} closeWeb={() => props.closeWeb()}>
      <p>profile</p>
    </Web>
  );
}

export default Profile;