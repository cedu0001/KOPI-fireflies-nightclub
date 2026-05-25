import SingleEventServer from "@/components/events/SignleEventServer";
import { Suspense } from "react";

export default async function SingleEventSite({
  params,
}) {

  return (
    <Suspense fallback="Loading event...">
    <SingleEventServer params={params} />
    </Suspense>
  );
}
 