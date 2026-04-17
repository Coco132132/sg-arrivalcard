import { Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout";
import NotFoundPage from "@/pages/NotFoundPage/NotFoundPage";
import HomePage from "@/pages/home/home-page";
import OfficialFreePage from "@/pages/official-free/official-free-page";
import ThreeDayRulePage from "@/pages/three-day-rule/three-day-rule-page";
import WhoNeedsPage from "@/pages/who-needs/who-needs-page";
import GroupSubmissionPage from "@/pages/group-submission/group-submission-page";
import CommonMistakesPage from "@/pages/common-mistakes/common-mistakes-page";
import SgacDateCheckerPage from "@/pages/sgac-date-checker/sgac-date-checker-page";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="official-free" element={<OfficialFreePage />} />
        <Route path="3-day-rule" element={<ThreeDayRulePage />} />
        <Route path="who-needs" element={<WhoNeedsPage />} />
        <Route path="group-submission" element={<GroupSubmissionPage />} />
        <Route path="common-mistakes" element={<CommonMistakesPage />} />
        <Route path="date-checker" element={<SgacDateCheckerPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
