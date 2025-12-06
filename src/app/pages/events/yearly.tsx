import PageLayout from "../../common/layout/page-layout";
import { MainEventCard } from "../../common/cards/event-card-past";
import { MAIN_EVENTS } from "../../common/constants";
import Title from "../../common/title";
import { RouteId } from "@/app/common/types";

export const AnnualEvents = () => {
  return (
    <PageLayout id={RouteId.annualEvents}>
      <div className="mt-16">
        <Title title="Annual Signature Events" />
        <div>
          {MAIN_EVENTS.map((data, index) => (
            <div key={index} className="mb-16">
              <MainEventCard {...data} index={index} />
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};
