import { IconType } from "react-icons/lib";

export default function SocialMediaLink({ icon: Icon }: { icon: IconType }) {
  return (
    <div className="text-4xl text-black">
      <Icon />
    </div>
  );
}
