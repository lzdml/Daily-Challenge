import ChallengeSidebar from "./challenge";
import InterviewSidebar from "./interview";
import AigcSidebar from "./aigc";

export function getSidebar() {
  return { ...ChallengeSidebar, ...InterviewSidebar, ...AigcSidebar };
}
