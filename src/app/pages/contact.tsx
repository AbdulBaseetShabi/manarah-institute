"use client";

import Image from "next/image";
import Form, {
  ErrorMessage,
  Field,
  FormFooter,
  FormHeader,
  FormSection,
  MessageWrapper,
} from "@atlaskit/form";
import PageLayout from "../common/layout/page-layout";
import Title from "../common/title";
import { FooterLink, RouteId } from "../common/types";
import { Fragment, useState } from "react";
import TextField from "@atlaskit/textfield";
import Button from "../common/button";
import { Mail, Phone } from "lucide-react";
import { LeftSlider, RightSlider } from "../common/animation";
import { validate } from "email-validator";
import { AutoDismissFlag, FlagGroup } from "@atlaskit/flag";
import LINKS from "../common/links";

interface Social extends FooterLink {
  imgUrl: string;
  dimension: number;
}

const socials: Social[] = [
  {
    description: "Instagram",
    link: LINKS.instagram,
    imgUrl: "./instagram.svg",
    dimension: 20,
  }
];
type FlagType = "success" | "error";
const flagMessages: {
  [x in FlagType]: { title: string; description: string };
} = {
  success: {
    title: "Email Added to Mailing List",
    description:
      "Your email address {email} has successfully been added to the our mailing list",
  },
  error: {
    title: "Something went wrong",
    description:
      "Your email address {email} was not added to our mailing list. Please try again later.",
  },
};

const EmailSignUpCard = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [flags, setFlags] = useState<Array<{ id: number; type: FlagType }>>([]);
  const [email, setEmail] = useState<string>("");

  const addFlag = (type: FlagType) => {
    const newFlags = flags.slice();
    newFlags.splice(0, 0, {
      id: flags.length + 1,
      type,
    });

    setFlags(newFlags);
  };

  const handleDismiss = () => {
    setFlags(flags.slice(1));
  };

  return (
    <div className="rounded-md border p-8 md:p-16 content box-border grow shadow-md bg-white">
      <Form<{ email: string }>
        onSubmit={async (data) => {
          const email = data.email;
          if (!validate(email)) {
            return {
              email:
                "Please enter your email in a valid format, like: name@example.com",
            };
          }

          setEmail(email);
          setIsLoading(true);
          const response = await fetch(
            "https://api.sheetmonkey.io/form/n3Kv7Dc1rYCYwmixPYDqge",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            }
          );
          
          if (response.ok) {
            addFlag("success");
          } else {
            addFlag("error");
          }

          setIsLoading(false);
        }}
      >
        {({ formProps }) => (
          <form {...formProps}>
            <FormHeader title="Mailing List Signup">
              <p aria-hidden="true">
                Subscribe to our newsletter for updates on events and
                initiatives.
              </p>
            </FormHeader>
            <FormSection>
              <Field aria-required={true} name="email" label="Email" isRequired>
                {({ fieldProps, error }) => (
                  <Fragment>
                    <TextField
                      autoComplete="on"
                      {...fieldProps}
                      placeholder="Enter your email address"
                    />
                    <MessageWrapper>
                      {error && <ErrorMessage>{error}</ErrorMessage>}
                    </MessageWrapper>
                  </Fragment>
                )}
              </Field>
            </FormSection>
            <FormFooter>
              <Button type="submit" isLoading={isLoading} fullWidth>
                Subscribe
              </Button>
            </FormFooter>
          </form>
        )}
      </Form>
      <FlagGroup onDismissed={handleDismiss}>
        {flags.map(({ id, type }) => {
          return (
            <AutoDismissFlag
              appearance={type}
              id={id}
              key={id}
              title={<h2 className="font-bold">{flagMessages[type].title}</h2>}
              description={
                <p className="text-sm">
                  {flagMessages[type].description.replace("{email}", email)}
                </p>
              }
            />
          );
        })}
      </FlagGroup>
    </div>
  );
};

const SocialCard = ({ description, link, dimension, imgUrl }: Social) => {
  return (
    <div className="flex hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 backdrop-blur-sm">
      <a
        href={link}
        className="flex justify-center rounded-full p-2 border w-8 h-8 hover:bg-[#0000001a]"
      >
        <Image
          src={imgUrl}
          alt={description}
          width={dimension}
          height={dimension}
        />
      </a>
    </div>
  );
};

const ContactInformation = () => {
  return (
    <div className="h-full text-center lg:text-justify flex flex-col gap-6">
      <div>
        <h3 className="text-2xl font-bold mb-3">Contact Information</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3 justify-center lg:justify-normal">
            <Mail size={20} />
            <a href={`mailto:${LINKS.email}`}>{LINKS.email}</a>
          </div>
          <div className="flex items-center gap-3 justify-center lg:justify-normal">
            <Phone size={20} />
            <a href={`tel:${LINKS.phone}`}>{LINKS.phone}</a>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-3">Follow Us</h3>
        <div className="flex gap-4 justify-center lg:justify-normal">
          {socials.map((social, index) => (
            <SocialCard key={social.description} {...social} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <PageLayout id={RouteId.contact} spacing="none">
      <div>
        <Title title="Get in Touch" />
        <div className="grid lg:grid-cols-2 gap-12">
          <RightSlider>
            <EmailSignUpCard />
          </RightSlider>
          <LeftSlider>
            <ContactInformation />
          </LeftSlider>
        </div>
      </div>
    </PageLayout>
  );
};

export default Contact;
