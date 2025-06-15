import { Logo } from "@/components/assets/logo";
import { Card } from "@/components/card";

export default function Home() {
  return (
    <div className="py-24 md:py-48 max-w-[calc(768px+4rem)] mx-auto px-8">
      <Logo className="rounded-2xl size-16" />

      <Wrapper title="Packages">
        <DisplayColumn>
          <Card title="@zuude-ui/cropper" href="https://cropper.zuudeui.com" />
          <Card
            title="@zuude-ui/ios-mockups"
            href="https://ios-mockups.zuudeui.com"
          />
        </DisplayColumn>
      </Wrapper>

      <Wrapper title="UI Website">
        <DisplayColumn>
          <Card
            title="Zuude UI"
            href="https://www.zuudeui.com/"
            description="A collection of UI components for your next project."
            colors={[
              [135, 43, 254], // #872bfe
              [57, 150, 255], // #3996ff
            ]}
          />
        </DisplayColumn>
      </Wrapper>

      <p className="text-sm opacity-80">
        Developing by{" "}
        <a
          href="https://x.com/alisamadi__"
          target="_blank"
          className="underline font-semibold"
        >
          Ali Samadi
        </a>{" "}
        -{" "}
        <a
          href="https://github.com/zuudeui"
          target="_blank"
          className="underline font-semibold"
        >
          GitHub Organization
        </a>
      </p>
    </div>
  );
}

function Wrapper({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <div className="my-16">
      <h2 className="text-neutral-600">{title}</h2>
      {children}
    </div>
  );
}

function DisplayColumn({ children }: { children: React.ReactNode }) {
  return <div className="grid md:grid-cols-2 gap-4 mt-4">{children}</div>;
}
