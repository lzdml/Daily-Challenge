import ChallengeSidebar from "./challenge";
import InterviewSidebar from "./interview";
import AigcSidebar from "./aigc";
import PicSidebar from "./pic";
import PySidebar from './py'
export function getSidebar() {
  return {
    ...ChallengeSidebar,
    ...InterviewSidebar,
    ...AigcSidebar,
    ...PicSidebar,
    ...PySidebar
  };
}
