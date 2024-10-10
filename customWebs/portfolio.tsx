import { Web } from "@/components";
import { customWebProps } from "@/types/webTypes";

const Portfolio = (props: customWebProps) => {
  return props.rendering && (
    <Web rendering={props.rendering} selected={props.selected} selectWeb={() => props.selectWeb()} closeWeb={() => props.closeWeb()}>
      <p>Portfolio</p>
    </Web>
  );
}

export default Portfolio;