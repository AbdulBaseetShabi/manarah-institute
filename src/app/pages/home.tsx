import PageLayout, { PageLayoutSpacing } from "../common/layout/page-layout";
import { RouteId } from "../common/types";

interface Value {
  titleArabic: string;
  titleEnglish: string;
  description: string;
}

const values: Value[] = [
  {
    titleArabic: "Taqwa",
    titleEnglish: "God-Consciousness",
    description:
      "Through fostering God-consciousness, we wish to cultivate a community where every action is performed with mindfulness of Allah (swt). This awareness shapes decisions, ensuring that each individual strives to live with integrity, honesty, and a deep sense of responsibility.",
  },
  {
    titleArabic: "Adab",
    titleEnglish: "Prophetic Conduct",
    description:
      "Our goal is to nurture a community that embodies the highest standards of respect, kindness, and humility, encouraging individuals to exemplify proper conduct in every interaction, drawing from the noble manners of our beloved Prophet (saw)",
  },
  {
    titleArabic: "Ihsaan",
    titleEnglish: "Excellence",
    description:
      "We envision a community where excellence is a natural pursuit, with each individual striving to give their utmost best in everything they do—whether in their worship, relationships, or service to others—motivated by a desire to leave a meaningful legacy and, ultimately, to please Allah (swt).",
  },
  {
    titleArabic: "Ikhlaas",
    titleEnglish: "Sincerity",
    description:
      "Our vision is for every individual to act with sincere intentions, hoping that all actions, whether seen or unseen, are done solely to please Allah (swt); A community that values and personifies authenticity and purity in every aspect of life.",
  },
  {
    titleArabic: "Khidmah",
    titleEnglish: "Selfless Service",
    description:
      "We seek to inspire a spirit of service within our community, where individuals put the needs of others before their own. By embracing selfless service, we aim to create an environment where acts of kindness and support are second nature.",
  },
  {
    titleArabic: "'Izzah",
    titleEnglish: "Honour & Dignity",
    description:
      "We are committed to fostering a culture of dignity and respect, wherein each member stands firm in their values with pride. Honour is not just a reflection of self-worth but a testament to living according to the principles of Islam with grace and courage.",
  },
];

const Home = () => {
  return (
    <PageLayout id={RouteId.home} fixed={true} fullWidth>
      <div
        className="min-w-100 h-2/5 hero"
        // style={{
        //   backgroundImage: "url(/background.jpg)",
        // }}
      >
        <div className="hero-overlay bg-opacity-50 rounded-lg"></div>
        <div className="hero-content text-white text-center">
          <div>
            <h1 className="mb-5 text-5xl font-bold">Manarah Institute</h1>
            <p className="mb-5 text-4xl italic">
              Illuminating the Path to Guidance Together.
            </p>
          </div>
        </div>
      </div>
      <div className={PageLayoutSpacing}>
        <div className="w-full mt-2">
          <h2 className="font-extrabold mb-2">Mission & Values</h2>
          <p>
            Manarah Institute is devoted to nurturing the community&apos;s
            relationship with Allah (swt) and strengthening its sense of unity
            through events and initiatives that facilitate spiritual growth,
            fostering a harmonious and connected society grounded in the
            principles of Islamic teachings.
          </p>
        </div>
        <div className="w-full flex flex-wrap mt-8 justify-around">
          {values.map(({ titleArabic, description }, index) => (
            <div
              key={index}
              className="w-1/3 rounded-md border p-4 content box-border"
            >
              <h3 className="mb-4 font-bold">{titleArabic}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Home;
