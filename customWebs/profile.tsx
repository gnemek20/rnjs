import { Web } from "@/components";
import { customWebProps } from "@/types/webTypes";

const Profile = (props: customWebProps) => {
  return props.rendering && (
    <Web rendering={props.rendering} selected={props.selected} selectWeb={() => props.selectWeb()} closeWeb={() => props.closeWeb()}>
      <p>profile</p>
    </Web>
  );
}

export default Profile;