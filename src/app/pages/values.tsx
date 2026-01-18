import { ValueCard } from "../common/cards/value-card";
import PageLayout from "../common/layout/page-layout";
import Title from "../common/title";
import { RouteId, Value } from "../common/types";

const values: Value[] = [
  {
    icon: "heart.jpg",
    titleArabic: "Taqwa",
    titleEnglish: "God-Consciousness",
    description:
      "Through fostering God-consciousness, we wish to cultivate a community where every action is performed with mindfulness of Allah (swt). This awareness shapes decisions, ensuring that each individual strives to live with integrity, honesty, and a deep sense of responsibility.",
  },
  {
    icon: "tree.jpg",
    titleArabic: "Adab",
    titleEnglish: "Prophetic Conduct",
    description:
      "Our goal is to nurture a community that embodies the highest standards of respect, kindness, and humility, encouraging individuals to exemplify proper conduct in every interaction, drawing from the noble manners of our beloved Prophet (saw)",
  },
  {
    icon: "star.jpg",
    titleArabic: "Ihsaan",
    titleEnglish: "Excellence",
    description:
      "We envision a community where excellence is a natural pursuit, with each individual striving to give their utmost best in everything they do—whether in their worship, relationships, or service to others—motivated by a desire to leave a meaningful legacy and, ultimately, to please Allah (swt).",
  },
  {
    icon: "light.jpg",
    titleArabic: "Ikhlaas",
    titleEnglish: "Sincerity",
    description:
      "Our vision is for every individual to act with sincere intentions, hoping that all actions, whether seen or unseen, are done solely to please Allah (swt); A community that values and personifies authenticity and purity in every aspect of life.",
  },
  {
    icon: "hands.jpg",
    titleArabic: "Khidmah",
    titleEnglish: "Selfless Service",
    description:
      "We seek to inspire a spirit of service within our community, where individuals put the needs of others before their own. By embracing selfless service, we aim to create an environment where acts of kindness and support are second nature.",
  },
  {
    icon: "shield.jpg",
    titleArabic: "'Izzah",
    titleEnglish: "Honour & Dignity",
    description:
      "We are committed to fostering a culture of dignity and respect, wherein each member stands firm in their values with pride. Honour is not just a reflection of self-worth but a testament to living according to the principles of Islam with grace and courage.",
  },
];


const Values = () => {
  return (
    <PageLayout id={RouteId.values} fullPage={false} spacing="both" centerContent={false}>
      <div>
        <Title title="Our Core Values"/>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <ValueCard key={index} {...value}/>
            ))}
          </div>
      </div>
    </PageLayout>
  );
};

export default Values;
