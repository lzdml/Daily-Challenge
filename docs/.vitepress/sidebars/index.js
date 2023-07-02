import ChallengeSidebar from "./challenge";
import InterviewSidebar from "./interview";

export function getSidebar() {
  return { ...ChallengeSidebar, ...InterviewSidebar };
}
