import ChallengeSidebar from "./challenge";
import InterviewSidebar from "./interview";
import AigcSidebar from "./aigc";
import PicSidebar from "./pic";

export function getSidebar() {
  return {
    ...ChallengeSidebar,
    ...InterviewSidebar,
    ...AigcSidebar,
    ...PicSidebar,
  };
}
